import { getContentType, type WAMessage } from "@whiskeysockets/baileys";
import type { AppEnv } from "../../config/env";
import type { MediaSummary, ParsedIncomingMessage } from "../types/context";

function extractText(message: WAMessage["message"] | undefined): string {
  if (!message) {
    return "";
  }

  if ("conversation" in message && typeof message.conversation === "string") {
    return message.conversation;
  }
  if ("extendedTextMessage" in message) {
    return message.extendedTextMessage?.text ?? "";
  }
  if ("imageMessage" in message) {
    return message.imageMessage?.caption ?? "";
  }
  if ("videoMessage" in message) {
    return message.videoMessage?.caption ?? "";
  }
  if ("buttonsResponseMessage" in message) {
    return message.buttonsResponseMessage?.selectedButtonId ?? "";
  }
  if ("listResponseMessage" in message) {
    return message.listResponseMessage?.singleSelectReply?.selectedRowId ?? "";
  }
  if ("templateButtonReplyMessage" in message) {
    return message.templateButtonReplyMessage?.selectedId ?? "";
  }
  if ("messageContextInfo" in message) {
    return "";
  }

  const contentType = getContentType(message);
  if (contentType && "ephemeralMessage" in message) {
    return extractText(message.ephemeralMessage?.message);
  }
  if (contentType && "viewOnceMessage" in message) {
    return extractText(message.viewOnceMessage?.message);
  }
  return "";
}

function detectMedia(message: WAMessage["message"] | undefined): MediaSummary {
  const serialized = JSON.stringify(message ?? {});
  return {
    hasImage: serialized.includes("imageMessage"),
    hasVideo: serialized.includes("videoMessage"),
    hasAudio: serialized.includes("audioMessage"),
    hasSticker: serialized.includes("stickerMessage")
  };
}

export function parseIncomingMessage(message: WAMessage, env: AppEnv): ParsedIncomingMessage {
  const text = extractText(message.message).trim();
  const prefix = env.prefixes.find((candidate) => text.startsWith(candidate)) ?? null;
  const withoutPrefix = prefix ? text.slice(prefix.length).trim() : "";
  const [commandName = "", ...args] = withoutPrefix.length > 0 ? withoutPrefix.split(/\s+/) : [];

  const quotedMessage = message.message?.extendedTextMessage?.contextInfo?.quotedMessage
    ? {
        key: {
          remoteJid: message.key.remoteJid ?? null,
          fromMe: false,
          id: message.message.extendedTextMessage.contextInfo.stanzaId ?? "",
          ...(message.message.extendedTextMessage.contextInfo.participant
            ? { participant: message.message.extendedTextMessage.contextInfo.participant }
            : {})
        },
        message: message.message.extendedTextMessage.contextInfo.quotedMessage
      }
    : undefined;

  return {
    text,
    normalizedText: text.toLowerCase(),
    prefix,
    commandName: prefix ? commandName.toLowerCase() : null,
    args,
    argString: args.join(" "),
    from: message.key.remoteJid ?? "",
    sender: message.key.participant ?? message.key.remoteJid ?? "",
    pushName: message.pushName ?? "Usuário",
    isGroup: Boolean(message.key.remoteJid?.endsWith("@g.us")),
    ...(quotedMessage ? { quotedMessage } : {}),
    media: detectMedia(message.message)
  };
}
