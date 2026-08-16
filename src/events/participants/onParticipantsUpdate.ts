import type { BaileysEventMap, WASocket } from "@whiskeysockets/baileys";
import type { AppRuntime } from "../../core/runtime/AppRuntime";

function phone(jid: string): string {
  return jid.split("@")[0] ?? jid;
}

export async function onParticipantsUpdate(
  socket: WASocket,
  runtime: AppRuntime,
  update: BaileysEventMap["group-participants.update"]
): Promise<void> {
  const groupId = update.id;
  const participants = update.participants;
  runtime.logger.info({ action: update.action, group: groupId, participants }, "Participantes alterados.");

  if (update.action !== "add" && update.action !== "remove") {
    return;
  }

  const welcomeEnabled = await runtime.repositories.features.isEnabled("welcome", groupId);
  const textWelcomeEnabled = await runtime.repositories.features.isEnabled("welcome-text", groupId);
  const antiFakeEnabled = update.action === "add"
    && await runtime.repositories.features.isEnabled("anti-fake", groupId);

  if (antiFakeEnabled) {
    const fakeParticipants = participants.filter((jid) => !phone(jid).startsWith("55"));
    if (fakeParticipants.length > 0) {
      try {
        await socket.groupParticipantsUpdate(groupId, fakeParticipants, "remove");
      } catch (error) {
        runtime.logger.warn({ error, groupId, fakeParticipants }, "Não foi possível remover participantes anti-fake.");
      }
    }
  }

  if (!welcomeEnabled && !textWelcomeEnabled) {
    return;
  }

  let subject = "o grupo";
  try {
    subject = (await socket.groupMetadata(groupId)).subject;
  } catch (error) {
    runtime.logger.debug({ error, groupId }, "Não foi possível obter o nome do grupo.");
  }

  const names = participants.map((jid) => `@${phone(jid)}`).join(", ");
  const mentions = [...participants];
  const text = update.action === "add"
    ? `Sejam bem-vindos ${names} ao grupo *${subject}*!`
    : `Até mais ${names}. A saída do grupo *${subject}* foi registrada.`;
  await socket.sendMessage(groupId, { text, mentions });
}
