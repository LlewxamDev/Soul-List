import makeWASocket, {
  DisconnectReason,
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  Browsers
} from "@whiskeysockets/baileys";
import pino from "pino";
import { rmSync, existsSync } from "node:fs";

async function runDiagnostic() {
  console.log("=======================================================");
  console.log("    DIAGNÓSTICO ISOLADO DE PAREAMENTO DO WHATSAPP      ");
  console.log("=======================================================\n");

  const sessionPath = "./data/diag_session";
  if (existsSync(sessionPath)) {
    console.log("Limpando sessão temporária de diagnóstico antiga...");
    rmSync(sessionPath, { recursive: true, force: true });
  }

  const logger = pino({ level: "info" });
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const { version, isLatest } = await fetchLatestBaileysVersion();

  console.log(`Versão do Baileys WA Web: ${version.join(".")} (Mais recente: ${isLatest})`);
  console.log(`Browser Assinatura: [Mac OS, Desktop, 14.4.1]`);

  const sock = makeWASocket({
    version,
    logger,
    printQRInTerminal: false,
    browser: Browsers.macOS("Desktop"),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger)
    },
    markOnlineOnConnect: true,
    syncFullHistory: false
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;
    console.log(`[UPDATE] Status da Conexão: ${connection ?? "sem_mudanca"} | QR Presente: ${Boolean(qr)}`);

    if (qr) {
      console.log("-> Recebeu payload de QR code do servidor WA.");
    }

    if (connection === "open") {
      console.log("\n=======================================================");
      console.log("🎉 CONEXÃO ESTABELECIDA COM SUCESSO! WHATSAPP AUTENTICADO!");
      console.log("=======================================================\n");
    }

    if (connection === "close") {
      const error = lastDisconnect?.error as any;
      const statusCode = error?.output?.statusCode;
      const errorMessage = error?.message;
      console.log(`\n❌ [DESCONEXÃO DETECTADA] Código HTTP/WS: ${statusCode} | Mensagem: ${errorMessage}`);
      console.log("Detalhes do erro:", JSON.stringify(error?.output ?? error ?? {}, null, 2));

      if (statusCode === DisconnectReason.loggedOut || statusCode === 401) {
        console.log("-> Motivo 401: WhatsApp rejeitou o token ou aparelho foi desconectado pelo celular.");
      } else if (statusCode === 408 || statusCode === 428) {
        console.log("-> Motivo 408/428: Timeout da requisição antes da confirmação.");
      }
    }
  });

  const phoneNumber = "5511962078251";
  console.log(`\nSolicitando Pairing Code para o número: ${phoneNumber}...`);

  setTimeout(async () => {
    try {
      const code = await sock.requestPairingCode(phoneNumber);
      const formatted = code?.match(/.{1,4}/g)?.join("-") || code;
      console.log("\n=======================================================");
      console.log(`🔑 CÓDIGO DE PAREAMENTO GERADO: [ ${formatted} ]`);
      console.log("=======================================================");
      console.log(`-> Insira AGORA no celular antes que ocorra timeout (60s)!`);
      console.log(`-> Aguardando handshake do celular...\n`);
    } catch (err: any) {
      console.error("❌ Erro ao chamar requestPairingCode:", err.message);
    }
  }, 2500);
}

runDiagnostic().catch((e) => console.error("Falha fatal:", e));
