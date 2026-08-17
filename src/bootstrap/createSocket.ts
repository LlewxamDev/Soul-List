import makeWASocket, {
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  type BaileysEventMap
} from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import type { AppEnv } from "../config/env";

async function waitForPairingReady(socket: ReturnType<typeof makeWASocket>): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const finish = (error?: Error): void => {
      if (settled) return;
      settled = true;
      socket.ev.off("connection.update", onUpdate);
      clearTimeout(timeout);
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    };
    const onUpdate = (update: BaileysEventMap["connection.update"]): void => {
      if (update.qr || update.connection === "open") {
        finish();
      } else if (update.connection === "close") {
        finish(new Error("WhatsApp fechou a conexão antes do pairing code."));
      }
    };
    const timeout = setTimeout(() => finish(), 15_000);
    socket.ev.on("connection.update", onUpdate);
  });
}

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
    await waitForPairingReady(socket);
    const pairingNumber = env.pairingNumber.replace(/\D/g, "");
    const code = await socket.requestPairingCode(pairingNumber);
    logger.info({ pairingCode: code }, "Pairing code gerado.");
  }

  return { socket, saveCreds };
}
