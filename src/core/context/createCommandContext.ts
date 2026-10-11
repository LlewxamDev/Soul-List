import {
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto,
  type WAMediaUpload,
  type WAMessage,
  type WASocket
} from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import type { AppEnv } from "../../config/env";
import type { CommandRegistry } from "../registry/CommandRegistry";
import type { BotRepositories } from "../types/repositories";
import type { BotServices } from "../types/services";
import { InteractivePollService } from "../../services/interactive/InteractivePollService";
import type {
  CommandContext,
  InteractiveButtonsPayload,
  ParsedIncomingMessage,
  ProgressController
} from "../types/context";
import type { RegisteredCommand } from "../types/command";

interface CreateCommandContextInput {
  env: AppEnv;
  socket: WASocket;
  rawMessage: WAMessage;
  parsedMessage: ParsedIncomingMessage;
  logger: Logger;
  services: BotServices;
  repositories: BotRepositories;
  registry: CommandRegistry;
  command: RegisteredCommand;
  isAdmin: boolean;
  isOwner: boolean;
  isPremium: boolean;
}

function toMediaUpload(input: Buffer | string): WAMediaUpload {
  return typeof input === "string" ? { url: input } : input;
}

export function createCommandContext(input: CreateCommandContextInput): CommandContext {
  const targetJid = input.rawMessage.key.remoteJid ?? input.parsedMessage.from;

  return {
    ...input.parsedMessage,
    env: input.env,
    socket: input.socket,
    rawMessage: input.rawMessage,
    logger: input.logger,
    services: input.services,
    repositories: input.repositories,
    registry: input.registry,
    command: input.command,
    isAdmin: input.isAdmin,
    isOwner: input.isOwner,
    isPremium: input.isPremium,

    async reply(text: string, options?: { mentions?: string[] }) {
      const content = options?.mentions ? { text, mentions: options.mentions } : { text };
      return input.socket.sendMessage(targetJid, content, { quoted: input.rawMessage });
    },

    async replyWithMentions(text: string, mentions: string[]) {
      return input.socket.sendMessage(
        targetJid,
        { text, mentions },
        { quoted: input.rawMessage }
      );
    },

    async react(emoji: string) {
      if (!input.rawMessage.key.id) {
        return;
      }
      await input.socket.sendMessage(targetJid, {
        react: {
          text: emoji,
          key: input.rawMessage.key
        }
      });
    },

    async sendText(text: string) {
      return input.socket.sendMessage(targetJid, { text }, { quoted: input.rawMessage });
    },

    async editText(key: WAMessage["key"], newText: string) {
      return input.socket.sendMessage(targetJid, { text: newText, edit: key });
    },

    async sendProgress(initialText: string): Promise<ProgressController | undefined> {
      const sent = await input.socket.sendMessage(
        targetJid,
        { text: initialText },
        { quoted: input.rawMessage }
      );
      if (!sent?.key) {
        return undefined;
      }

      return {
        key: sent.key,
        async update(text: string) {
          await input.socket.sendMessage(targetJid, { text, edit: sent.key });
        }
      };
    },

    async sendInteractiveButtons(payload: InteractiveButtonsPayload) {
      const nativeButtons: Array<Record<string, unknown>> = [];

      if (payload.buttons && payload.buttons.length > 0) {
        for (const btn of payload.buttons) {
          if (btn.type === "quick_reply") {
            nativeButtons.push({
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: btn.displayText,
                id: btn.idOrUrl
              })
            });
          } else if (btn.type === "url") {
            nativeButtons.push({
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: btn.displayText,
                url: btn.idOrUrl,
                merchant_url: btn.idOrUrl
              })
            });
          } else if (btn.type === "call") {
            nativeButtons.push({
              name: "cta_call",
              buttonParamsJson: JSON.stringify({
                display_text: btn.displayText,
                phone_number: btn.idOrUrl
              })
            });
          }
        }
      }

      if (payload.sections && payload.sections.length > 0) {
        nativeButtons.push({
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            title: payload.menuTitle ?? "📑 ABRIR LISTA DE COMANDOS",
            sections: payload.sections.map((sec) => ({
              title: sec.title,
              rows: sec.rows.map((row) => ({
                title: row.title,
                description: row.description ?? "",
                id: row.id
              }))
            }))
          })
        });
      }

      try {
        let mediaHeader: Record<string, unknown> = {};
        if (payload.imageUrl) {
          try {
            let imageBuffer: Buffer;
            if (typeof payload.imageUrl === "string" && /^https?:\/\//i.test(payload.imageUrl)) {
              const res = await fetch(payload.imageUrl);
              imageBuffer = Buffer.from(await res.arrayBuffer());
            } else {
              imageBuffer = typeof payload.imageUrl === "string" ? Buffer.from(payload.imageUrl) : payload.imageUrl;
            }

            const media = await prepareWAMessageMedia(
              { image: imageBuffer },
              { upload: input.socket.waUploadToServer }
            );
            mediaHeader = { ...media, hasMediaAttachment: true };
          } catch {
            mediaHeader = { hasMediaAttachment: false };
          }
        }

        const interactiveMessage = proto.Message.InteractiveMessage.create({
          header: proto.Message.InteractiveMessage.Header.create({
            title: payload.title ?? "",
            subtitle: "",
            ...mediaHeader
          }),
          body: proto.Message.InteractiveMessage.Body.create({
            text: payload.body ?? ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: payload.footer ?? `${input.env.botName} • Toque no botão para abrir a lista`
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: nativeButtons,
            messageParamsJson: ""
          })
        });

        const fullMsg = generateWAMessageFromContent(
          targetJid,
          {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage
              }
            }
          },
          { userJid: input.socket.user?.id ?? "", quoted: input.rawMessage }
        );

        const sent = await input.socket.relayMessage(
          targetJid,
          fullMsg.message!,
          {
            ...(fullMsg.key.id ? { messageId: fullMsg.key.id } : {}),
            additionalNodes: [
              {
                tag: "biz",
                attrs: {},
                content: [
                  {
                    tag: "interactive",
                    attrs: {
                      type: "native_flow",
                      v: "1"
                    },
                    content: [
                      {
                        tag: "native_flow",
                        attrs: {
                          name: "mixed",
                          v: "9"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        );

        return (typeof sent === "string" ? fullMsg : (sent || fullMsg)) as WAMessage;
      } catch (err) {
        input.logger.warn({ err }, "Falha ao enviar botões interativos nativos. Aplicando fallback de texto.");
        const fallbackLines = [
          payload.title ? `*${payload.title}*\n` : "",
          payload.body,
          payload.footer ? `\n_${payload.footer}_` : ""
        ];
        return input.socket.sendMessage(
          targetJid,
          { text: fallbackLines.filter(Boolean).join("\n") },
          { quoted: input.rawMessage }
        );
      }
    },

    async sendImage(image: Buffer | string, caption?: string) {
      return input.socket.sendMessage(
        targetJid,
        {
          image: toMediaUpload(image),
          ...(caption ? { caption } : {})
        },
        { quoted: input.rawMessage }
      );
    },

    async sendAudio(audio: Buffer | string, ptt = false) {
      return input.socket.sendMessage(
        targetJid,
        { audio: toMediaUpload(audio), ptt, mimetype: "audio/mpeg" },
        { quoted: input.rawMessage }
      );
    },

    async sendVideo(video: Buffer | string, caption?: string) {
      return input.socket.sendMessage(
        targetJid,
        {
          video: toMediaUpload(video),
          mimetype: "video/mp4",
          ...(caption ? { caption } : {})
        },
        { quoted: input.rawMessage }
      );
    },

    async sendSticker(sticker: Buffer) {
      return input.socket.sendMessage(targetJid, { sticker }, { quoted: input.rawMessage });
    },

    async downloadMedia() {
      const source = input.parsedMessage.quotedMessage ?? input.rawMessage;
      return input.services.media.downloadMessage(source);
    }
  };
}
