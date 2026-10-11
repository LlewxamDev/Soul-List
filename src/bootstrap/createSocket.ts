import makeWASocket, {
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  Browsers
} from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import type { AppEnv } from "../config/env";
import { writeFileSync } from "node:fs";

export async function createSocket(env: AppEnv, logger: Logger) {
  const { state, saveCreds } = await useMultiFileAuthState(env.sessionDir);
  const { version } = await fetchLatestBaileysVersion();

  const socket = makeWASocket({
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger)
    },
    version,
    logger,
    printQRInTerminal: false,
    browser: Browsers.ubuntu("Chrome"),
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: false
  });

  if (env.pairingNumber && !socket.authState.creds.registered) {
    const cleanedNumber = env.pairingNumber.replace(/\D/g, "");
    setTimeout(async () => {
      try {
        const rawCode = await socket.requestPairingCode(cleanedNumber);
        const formattedCode = rawCode?.match(/.{1,4}/g)?.join("-") || rawCode;
        console.log("\n=======================================================");
        console.log(`🔑 CÓDIGO DE PAREAMENTO WHATSAPP: [ ${formattedCode} ]`);
        console.log("=======================================================\n");
        try {
          writeFileSync("./data/pairing_code.txt", formattedCode, "utf-8");
        } catch {}
        logger.info({ pairingCode: formattedCode }, "Pairing code gerado com sucesso.");
      } catch (err) {
        logger.error({ err }, "Erro ao gerar Pairing Code.");
      }
    }, 3000);
  }

  return { socket, saveCreds };
}
