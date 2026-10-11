import { DisconnectReason, type BaileysEventMap } from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import qrcodeTerminal from "qrcode-terminal";
import QRCode from "qrcode";
import { exec } from "node:child_process";

let hasOpenedImage = false;

export function onConnectionUpdate(
  logger: Logger,
  update: BaileysEventMap["connection.update"],
  restart: () => Promise<void>
): void {
  const { connection, qr, lastDisconnect } = update;

  if (qr) {
    logger.info("QR code recebido do WhatsApp.");
    console.log("\n=================== ESCANEIE O QR CODE ABAIXO ===================");
    qrcodeTerminal.generate(qr, { small: true });
    console.log("=================================================================\n");

    const imgPath = "./data/qrcode.png";
    void QRCode.toFile(imgPath, qr, { width: 450 }).then(() => {
      if (!hasOpenedImage) {
        hasOpenedImage = true;
        exec(`start "" "${imgPath}"`);
      }
    }).catch(() => {});
  }

  if (connection === "open") {
    console.log("\n✅ SOUL-LIST CONECTADO COM SUCESSO AO WHATSAPP!\n");
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
