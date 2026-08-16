import type { CommandContext } from "../types/context";
import type { WAMessage } from "@whiskeysockets/baileys";

export type MessageMediaKind = "image" | "video" | "audio" | "sticker" | null;

export function messageContains(message: WAMessage | undefined, marker: string): boolean {
  return JSON.stringify(message?.message ?? {}).includes(marker);
}

export function detectMediaKind(context: CommandContext): MessageMediaKind {
  const sources = [context.rawMessage, context.quotedMessage];
  for (const source of sources) {
    if (messageContains(source, "imageMessage")) {
      return "image";
    }
    if (messageContains(source, "videoMessage")) {
      return "video";
    }
    if (messageContains(source, "audioMessage")) {
      return "audio";
    }
    if (messageContains(source, "stickerMessage")) {
      return "sticker";
    }
  }
  return null;
}
