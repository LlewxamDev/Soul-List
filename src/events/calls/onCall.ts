import type { BaileysEventMap } from "@whiskeysockets/baileys";
import type { Logger } from "pino";

export function onCall(logger: Logger, calls: BaileysEventMap["call"]): void {
  logger.warn({ calls }, "Evento de chamada recebido.");
}
