import type { AnyMessageContent, WAMediaUpload, WAMessage, WASocket } from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import type { AppEnv } from "../../config/env";
import type { CommandRegistry } from "../registry/CommandRegistry";
import type { BotRepositories } from "../types/repositories";
import type { BotServices } from "../types/services";
import type { ParsedIncomingMessage, InteractiveButtonOptions, InteractiveListOptions } from "../types/context";
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

function listFallback(options: InteractiveListOptions, prefix: string): string {
  const rows = options.sections.flatMap((section) => [
    `\n${section.title}`,
    ...section.rows.map((row) => `• ${row.title}${row.description ? ` — ${row.description}` : ""}`)
  ]);
  return [options.title, options.description, ...rows, `\nUse ${prefix}menu para voltar.`].join("\n");
}

function buttonsFallback(options: InteractiveButtonOptions): string {
  const buttons = options.buttons.map((button, index) => `${index + 1}. ${button.text}`).join("\n");
  return [options.text, options.footer ?? "", buttons].filter(Boolean).join("\n\n");
}

export function createCommandContext(input: CreateCommandContextInput) {
  const targetJid = input.rawMessage.key.remoteJid ?? input.parsedMessage.from;
  const quoted = { quoted: input.rawMessage };

  const sendInteractive = async (content: unknown, fallback: string): Promise<void> => {
    try {
      await input.socket.sendMessage(targetJid, content as AnyMessageContent, quoted);
    } catch (error) {
      input.logger.warn({ error }, "Mensagem interativa indisponível; usando fallback textual.");
      await input.socket.sendMessage(targetJid, { text: fallback }, quoted);
    }
  };

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
    async reply(text: string) {
      await input.socket.sendMessage(targetJid, { text }, quoted);
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
      await input.socket.sendMessage(targetJid, { text }, quoted);
    },
    async sendImage(image: Buffer | string, caption?: string) {
      await input.socket.sendMessage(
        targetJid,
        {
          image: toMediaUpload(image),
          ...(caption ? { caption } : {})
        },
        quoted
      );
    },
    async sendAudio(audio: Buffer | string, ptt = false) {
      await input.socket.sendMessage(
        targetJid,
        { audio: toMediaUpload(audio), ptt, mimetype: "audio/mpeg" },
        quoted
      );
    },
    async sendVideo(video: Buffer | string, caption?: string) {
      await input.socket.sendMessage(
        targetJid,
        {
          video: toMediaUpload(video),
          ...(caption ? { caption } : {})
        },
        quoted
      );
    },
    async sendSticker(sticker: Buffer) {
      await input.socket.sendMessage(targetJid, { sticker }, quoted);
    },
    async sendButtons(options: InteractiveButtonOptions) {
      const content = {
        ...(options.image ? { image: toMediaUpload(options.image), caption: options.text } : { text: options.text }),
        ...(options.footer ? { footer: options.footer } : {}),
        buttons: options.buttons.map((button) => ({
          buttonId: button.id,
          buttonText: { displayText: button.text },
          type: 1
        })),
        headerType: options.image ? 4 : 1,
        viewOnce: true
      };
      await sendInteractive(content, buttonsFallback(options));
    },
    async sendList(options: InteractiveListOptions) {
      const content = {
        title: options.title,
        description: options.description,
        ...(options.footer ? { footerText: options.footer } : {}),
        buttonText: options.buttonText,
        sections: options.sections.map((section) => ({
          title: section.title,
          rows: section.rows.map((row) => ({
            rowId: row.id,
            title: row.title,
            ...(row.description ? { description: row.description } : {})
          }))
        }))
      };
      await sendInteractive(content, listFallback(options, input.env.defaultPrefix));
    },
    async downloadMedia() {
      const source = input.parsedMessage.quotedMessage ?? input.rawMessage;
      return input.services.media.downloadMessage(source);
    }
  };
}
