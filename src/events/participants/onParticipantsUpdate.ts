import type { BaileysEventMap } from "@whiskeysockets/baileys";
import type { Logger } from "pino";

export function onParticipantsUpdate(logger: Logger, update: BaileysEventMap["group-participants.update"]): void {
  logger.info({ action: update.action, group: update.id, participants: update.participants }, "Participantes alterados.");
}
