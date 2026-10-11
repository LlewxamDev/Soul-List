import { createHash, randomBytes } from "node:crypto";
import {
  decryptPollVote,
  getKeyAuthor,
  jidNormalizedUser,
  type WAMessage,
  type WASocket
} from "@whiskeysockets/baileys";
import type { AppRuntime } from "../../core/runtime/AppRuntime";
import { handleMessage } from "../../events/messages/onMessageUpsert";

export interface PollOptionAction {
  label: string;
  commandText: string;
}

export interface ActivePollData {
  pollId: string;
  pollEncKey: Uint8Array;
  options: PollOptionAction[];
  targetJid: string;
  sender: string;
  createdAt: number;
}

export class InteractivePollService {
  private static instance: InteractivePollService;
  private readonly activePolls = new Map<string, ActivePollData>();
  private readonly processedVoteKeys = new Set<string>();

  public static getInstance(): InteractivePollService {
    if (!InteractivePollService.instance) {
      InteractivePollService.instance = new InteractivePollService();
    }
    return InteractivePollService.instance;
  }

  private isVoteAlreadyProcessed(key: string): boolean {
    if (this.processedVoteKeys.has(key)) {
      return true;
    }
    this.processedVoteKeys.add(key);
    if (this.processedVoteKeys.size > 5000) {
      const first = this.processedVoteKeys.values().next().value;
      if (first) {
        this.processedVoteKeys.delete(first);
      }
    }
    return false;
  }

  public generateSecret(): Buffer {
    return randomBytes(32);
  }

  public recordPoll(data: ActivePollData): void {
    this.activePolls.set(data.pollId, data);
    // Limpa polls com mais de 30 minutos
    const now = Date.now();
    for (const [id, poll] of this.activePolls.entries()) {
      if (now - poll.createdAt > 1800000) {
        this.activePolls.delete(id);
      }
    }
  }

  public async handlePollUpdate(
    socket: WASocket,
    runtime: AppRuntime,
    message: WAMessage
  ): Promise<boolean> {
    const pollUpdate = message.message?.pollUpdateMessage;
    if (!pollUpdate?.pollCreationMessageKey?.id || !pollUpdate.vote) {
      return false;
    }

    const pollId = pollUpdate.pollCreationMessageKey.id;
    const pollData = this.activePolls.get(pollId);
    if (!pollData) {
      return false;
    }

    // Se a enquete tiver mais de 30 minutos, expira
    if (Date.now() - pollData.createdAt > 1800000) {
      this.activePolls.delete(pollId);
      return false;
    }

    const voteMsgId = message.key.id;
    if (voteMsgId && this.isVoteAlreadyProcessed(voteMsgId)) {
      return false;
    }

    try {
      const meId = jidNormalizedUser(socket.user?.id ?? "");
      const pollCreatorJid = getKeyAuthor(pollUpdate.pollCreationMessageKey, meId);
      const voterJid = getKeyAuthor(message.key, meId);

      const decrypted = decryptPollVote(pollUpdate.vote, {
        pollEncKey: pollData.pollEncKey,
        pollCreatorJid,
        pollMsgId: pollId,
        voterJid
      });

      const selectedOptionHashes = decrypted.selectedOptions ?? [];
      if (selectedOptionHashes.length === 0) {
        return false;
      }

      // Procura a opção correspondente comparando o SHA256 do texto de cada opção
      let selectedAction: PollOptionAction | undefined;
      for (const opt of pollData.options) {
        const optHash = createHash("sha256").update(Buffer.from(opt.label)).digest();
        for (const selectedHash of selectedOptionHashes) {
          if (Buffer.from(selectedHash).equals(optHash)) {
            selectedAction = opt;
            break;
          }
        }
        if (selectedAction) break;
      }

      if (!selectedAction) {
        return false;
      }

      // Deduplica por acao votada pelo usuario nesta enquete especifica (evita eco entre upsert e update)
      const actionDebounceKey = `ACTION_${pollId}_${voterJid}_${selectedAction.commandText}`;
      if (this.isVoteAlreadyProcessed(actionDebounceKey)) {
        return false;
      }

      await this.dispatchVoteAction(socket, runtime, pollData, voterJid, selectedAction);
      return true;
    } catch (err) {
      runtime.logger.warn({ err, pollId }, "Falha ao descriptografar voto da enquete interativa.");
      return false;
    }
  }

  public async handlePollUpdatesFromUpdates(
    socket: WASocket,
    runtime: AppRuntime,
    updates: Array<{ key: { id?: string | null; remoteJid?: string | null }; update: Record<string, any> }>
  ): Promise<void> {
    for (const item of updates) {
      const pollUpdates = item.update?.pollUpdates;
      if (!Array.isArray(pollUpdates) || pollUpdates.length === 0) {
        continue;
      }

      const pollId = item.key?.id;
      if (!pollId) continue;

      const pollData = this.activePolls.get(pollId);
      if (!pollData) continue;

      // Se a enquete tiver mais de 30 minutos, expira
      if (Date.now() - pollData.createdAt > 1800000) {
        this.activePolls.delete(pollId);
        continue;
      }

      for (const update of pollUpdates) {
        if (!update.vote) continue;

        const updateKeyId = update.pollUpdateMessageKey?.id;
        if (updateKeyId && this.isVoteAlreadyProcessed(updateKeyId)) {
          continue;
        }

        try {
          const meId = jidNormalizedUser(socket.user?.id ?? "");
          const pollCreatorJid = getKeyAuthor(item.key, meId);
          const voterJid = getKeyAuthor(update.pollUpdateMessageKey ?? item.key, meId);

          const decrypted = decryptPollVote(update.vote, {
            pollEncKey: pollData.pollEncKey,
            pollCreatorJid,
            pollMsgId: pollId,
            voterJid
          });

          const selectedOptionHashes = decrypted.selectedOptions ?? [];
          if (selectedOptionHashes.length === 0) continue;

          let selectedAction: PollOptionAction | undefined;
          for (const opt of pollData.options) {
            const optHash = createHash("sha256").update(Buffer.from(opt.label)).digest();
            for (const selectedHash of selectedOptionHashes) {
              if (Buffer.from(selectedHash).equals(optHash)) {
                selectedAction = opt;
                break;
              }
            }
            if (selectedAction) break;
          }

          if (selectedAction) {
            const actionDebounceKey = `ACTION_${pollId}_${voterJid}_${selectedAction.commandText}`;
            if (this.isVoteAlreadyProcessed(actionDebounceKey)) {
              continue;
            }
            await this.dispatchVoteAction(socket, runtime, pollData, voterJid, selectedAction);
          }
        } catch (err) {
          runtime.logger.warn({ err, pollId }, "Falha ao processar pollUpdate de messages.update.");
        }
      }
    }
  }

  private async dispatchVoteAction(
    socket: WASocket,
    runtime: AppRuntime,
    pollData: ActivePollData,
    voterJid: string,
    action: PollOptionAction
  ): Promise<void> {
    runtime.logger.info(
      { pollId: pollData.pollId, voter: voterJid, action: action.commandText },
      "Executando ação do botão interativo/enquete selecionada."
    );

    const isGroup = pollData.targetJid.endsWith("@g.us");
    const virtualMessage: WAMessage = {
      key: {
        remoteJid: pollData.targetJid,
        fromMe: false,
        id: `POLL_ACTION_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        ...(isGroup ? { participant: voterJid } : {})
      },
      message: {
        conversation: action.commandText
      },
      messageTimestamp: Math.floor(Date.now() / 1000)
    };

    // Despacha o comando diretamente pelo pipeline oficial
    await handleMessage(socket, runtime, virtualMessage);
  }
}
