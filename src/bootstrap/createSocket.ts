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
    // O socket é iniciado no próximo tick pelo Baileys. Aguardar esse ciclo
    // evita chamar requestPairingCode antes de o transporte estar disponível.
    await new Promise<void>((resolve) => {
      let settled = false;
      const finish = (): void => {
        if (settled) return;
        settled = true;
        socket.ev.off("connection.update", onUpdate);
        clearTimeout(timeout);
        resolve();
      };
      const onUpdate = (update: { connection?: string }): void => {
        if (update.connection === "connecting" || update.connection === "open") {
          finish();
        }
      };
      const timeout = setTimeout(finish, 1_000);
      socket.ev.on("connection.update", onUpdate);
    });

    const code = await socket.requestPairingCode(env.pairingNumber);
    logger.info({ pairingCode: code }, "Pairing code gerado.");
  }

  return { socket, saveCreds };
}
