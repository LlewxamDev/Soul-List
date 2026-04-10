import makeWASocket, { fetchLatestBaileysVersion, useMultiFileAuthState } from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import type { AppEnv } from "../config/env";

export async function createSocket(env: AppEnv, logger: Logger) {
  const { state, saveCreds } = await useMultiFileAuthState(env.sessionDir);
  const { version } = await fetchLatestBaileysVersion();

  const socket = makeWASocket({
    auth: state,
    version,
    logger,
    printQRInTerminal: !env.pairingNumber,
    markOnlineOnConnect: false,
    syncFullHistory: false
  });

  if (env.pairingNumber && !socket.authState.creds.registered) {
    const code = await socket.requestPairingCode(env.pairingNumber);
    logger.info({ pairingCode: code }, "Pairing code gerado.");
  }

  return { socket, saveCreds };
}
