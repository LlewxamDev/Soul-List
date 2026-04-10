import type { WAMediaUpload, WAMessage, WASocket } from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import type { AppEnv } from "../../config/env";
import type { CommandRegistry } from "../registry/CommandRegistry";
import type { BotRepositories } from "../types/repositories";
import type { BotServices } from "../types/services";
import type { ParsedIncomingMessage } from "../types/context";
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

export function createCommandContext(input: CreateCommandContextInput) {
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
    async reply(text: string) {
      await input.socket.sendMessage(targetJid, { text }, { quoted: input.rawMessage });
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
      await input.socket.sendMessage(targetJid, { text }, { quoted: input.rawMessage });
    },
    async sendImage(image: Buffer | string, caption?: string) {
      await input.socket.sendMessage(
        targetJid,
        {
          image: toMediaUpload(image),
          ...(caption ? { caption } : {})
        },
        { quoted: input.rawMessage }
      );
    },
    async sendAudio(audio: Buffer | string, ptt = false) {
      await input.socket.sendMessage(
        targetJid,
        { audio: toMediaUpload(audio), ptt, mimetype: "audio/mpeg" },
        { quoted: input.rawMessage }
      );
    },
    async sendVideo(video: Buffer | string, caption?: string) {
      await input.socket.sendMessage(
        targetJid,
        {
          video: toMediaUpload(video),
          ...(caption ? { caption } : {})
        },
        { quoted: input.rawMessage }
      );
    },
    async sendSticker(sticker: Buffer) {
      await input.socket.sendMessage(targetJid, { sticker }, { quoted: input.rawMessage });
    },
    async downloadMedia() {
      const source = input.parsedMessage.quotedMessage ?? input.rawMessage;
      return input.services.media.downloadMessage(source);
    }
  };
}
