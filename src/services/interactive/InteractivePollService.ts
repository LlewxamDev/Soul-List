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

  public static getInstance(): InteractivePollService {
    if (!InteractivePollService.instance) {
      InteractivePollService.instance = new InteractivePollService();
    }
    return InteractivePollService.instance;
  }

  public generateSecret(): Buffer {
    return randomBytes(32);
  }

  public recordPoll(data: ActivePollData): void {
    this.activePolls.set(data.pollId, data);
    // Limpa polls antigas após 1 hora
    if (this.activePolls.size > 200) {
      const now = Date.now();
      for (const [id, poll] of this.activePolls.entries()) {
        if (now - poll.createdAt > 3600000) {
          this.activePolls.delete(id);
        }
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

      for (const update of pollUpdates) {
        if (!update.vote) continue;
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
