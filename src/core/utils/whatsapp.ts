import type { GroupMetadata, WAMessage } from "@whiskeysockets/baileys";

export function formatPhone(jid: string): string {
  return jid.split("@")[0] ?? jid;
}

export function extractTargetJid(message: WAMessage): string | null {
  const mentioned = message.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
  if (mentioned) {
    return mentioned;
  }

  const quotedParticipant = message.message?.extendedTextMessage?.contextInfo?.participant;
  if (quotedParticipant) {
    return quotedParticipant;
  }

  return null;
}

export function listAdmins(metadata: GroupMetadata): string[] {
  return metadata.participants.filter((participant) => participant.admin !== null).map((participant) => participant.id);
}
