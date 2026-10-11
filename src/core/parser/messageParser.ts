import { getContentType, type WAMessage } from "@whiskeysockets/baileys";
import type { AppEnv } from "../../config/env";
import type { MediaSummary, ParsedIncomingMessage } from "../types/context";

function extractText(message: WAMessage["message"] | undefined): string {
  if (!message) {
    return "";
  }

  // Desempacota containers aninhados (viewOnce, ephemeral, etc)
  let current: any = message;
  while (current) {
    if (current.ephemeralMessage?.message) {
      current = current.ephemeralMessage.message;
    } else if (current.viewOnceMessage?.message) {
      current = current.viewOnceMessage.message;
    } else if (current.viewOnceMessageV2?.message) {
      current = current.viewOnceMessageV2.message;
    } else if (current.viewOnceMessageV2Extension?.message) {
      current = current.viewOnceMessageV2Extension.message;
    } else if (current.documentWithCaptionMessage?.message) {
      current = current.documentWithCaptionMessage.message;
    } else {
      break;
    }
  }

  if (typeof current.conversation === "string" && current.conversation) {
    return current.conversation;
  }
  if (current.extendedTextMessage?.text) {
    return current.extendedTextMessage.text;
  }
  if (current.imageMessage?.caption) {
    return current.imageMessage.caption;
  }
  if (current.videoMessage?.caption) {
    return current.videoMessage.caption;
  }
  if (current.buttonsResponseMessage?.selectedButtonId) {
    return current.buttonsResponseMessage.selectedButtonId;
  }
  if (current.buttonsResponseMessage?.selectedDisplayText) {
    return current.buttonsResponseMessage.selectedDisplayText;
  }
  if (current.listResponseMessage?.singleSelectReply?.selectedRowId) {
    return current.listResponseMessage.singleSelectReply.selectedRowId;
  }
  if (current.listResponseMessage?.title) {
    return current.listResponseMessage.title;
  }
  if (current.templateButtonReplyMessage?.selectedId) {
    return current.templateButtonReplyMessage.selectedId;
  }
  if (current.templateButtonReplyMessage?.selectedDisplayText) {
    return current.templateButtonReplyMessage.selectedDisplayText;
  }
  if (current.interactiveResponseMessage) {
    const rawParams = current.interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (rawParams) {
      try {
        const parsed = typeof rawParams === "string" ? JSON.parse(rawParams) : rawParams;
        const res = parsed?.id ?? parsed?.title ?? parsed?.selectedId ?? "";
        if (res) return String(res);
      } catch {}
    }
    if (current.interactiveResponseMessage.body?.text) {
      return current.interactiveResponseMessage.body.text;
    }
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

  const contextInfo = message.message?.extendedTextMessage?.contextInfo;
  const mentions = contextInfo?.mentionedJid ?? [];
  const quotedSender = contextInfo?.participant ?? quotedMessage?.key.participant;

  return {
    text,
    normalizedText: text.toLowerCase(),
    prefix,
    commandName: prefix ? commandName.toLowerCase() : null,
    args,
    argString: args.join(" "),
    from: message.key.remoteJid ?? "",
    sender: message.key.fromMe
      ? (message.key.participant || (env.botOwnerNumber ? `${env.botOwnerNumber}@s.whatsapp.net` : (message.key.remoteJid ?? "")))
      : (message.key.participant ?? message.key.remoteJid ?? ""),
    pushName: message.pushName ?? "Usuário",
    isGroup: Boolean(message.key.remoteJid?.endsWith("@g.us")),
    ...(quotedMessage ? { quotedMessage } : {}),
    ...(quotedSender ? { quotedSender } : {}),
    mentions,
    media: detectMedia(message.message)
  };
}
