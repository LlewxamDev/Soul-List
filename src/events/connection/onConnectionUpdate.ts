import { DisconnectReason, type BaileysEventMap } from "@whiskeysockets/baileys";
import type { Logger } from "pino";

export function onConnectionUpdate(
  logger: Logger,
  update: BaileysEventMap["connection.update"],
  restart: () => Promise<void>
): void {
  const { connection, qr, lastDisconnect } = update;

  if (qr) {
    logger.info("QR code disponível para pareamento.");
  }

  if (connection === "open") {
    logger.info("Soul-List conectado ao WhatsApp.");
    return;
  }

  if (connection === "close") {
    const statusCode = (lastDisconnect?.error as { output?: { statusCode?: number } } | undefined)?.output?.statusCode;
    const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
    logger.warn({ statusCode, shouldReconnect }, "Conexão encerrada.");
    if (shouldReconnect) {
      void restart();
    }
  }
}
