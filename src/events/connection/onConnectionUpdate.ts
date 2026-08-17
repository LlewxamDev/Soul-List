import { DisconnectReason, type BaileysEventMap } from "@whiskeysockets/baileys";
import qrcode from "qrcode-terminal";
import qrImage from "qrcode";
import { mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import type { Logger } from "pino";

export function onConnectionUpdate(
  logger: Logger,
  update: BaileysEventMap["connection.update"],
  restart: () => Promise<void>
): void {
  const { connection, qr, lastDisconnect } = update;

  if (qr) {
    logger.info("QR code disponível para pareamento.");
    console.log("\nEscaneie este QR pelo WhatsApp em Dispositivos conectados > Conectar dispositivo:\n");
    qrcode.generate(qr, { small: true });
    const qrDirectory = resolve(process.env.QR_OUTPUT_DIR ?? "./data/qr");
    const qrPath = join(qrDirectory, "whatsapp-qr.png");
    void mkdir(qrDirectory, { recursive: true })
      .then(() => qrImage.toFile(qrPath, qr, { width: 768, margin: 2 }))
      .then(() => logger.info({ qrPath }, "Imagem temporária do QR salva para pareamento."))
      .catch((error: unknown) => logger.warn({ error }, "Não foi possível salvar a imagem temporária do QR."));
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
