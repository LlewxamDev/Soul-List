import makeWASocket, {
  DisconnectReason,
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  Browsers
} from "@whiskeysockets/baileys";
import pino from "pino";
import qrcodeTerminal from "qrcode-terminal";
import QRCode from "qrcode";
import { rmSync, existsSync } from "node:fs";
import { exec } from "node:child_process";

async function runQrTest() {
  console.log("=======================================================");
  console.log("       TESTE DE CONEXÃO VIA QR CODE (DIAGNÓSTICO)      ");
  console.log("=======================================================\n");

  const sessionPath = "./data/qr_diag_session";
  if (existsSync(sessionPath)) {
    rmSync(sessionPath, { recursive: true, force: true });
  }

  const logger = pino({ level: "silent" });
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const { version } = await fetchLatestBaileysVersion();

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

  let qrCount = 0;
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      qrCount++;
      console.log(`\n[QR CODE #${qrCount} GERADO]`);
      // 1. Salvar imagem PNG
      const qrImagePath = "./data/qrcode.png";
      await QRCode.toFile(qrImagePath, qr, { width: 400 });
      console.log(`✓ Imagem salva em: ${qrImagePath}`);

      // 2. Tentar abrir a imagem no Windows automaticamente
      if (qrCount === 1) {
        exec(`start "" "${qrImagePath}"`);
        console.log("✓ Janela de visualização da imagem aberta no Windows!");
      }

      // 3. Imprimir também no terminal ASCII
      console.log("\n=================== ESCANEIE O QR CODE ABAIXO ===================");
      qrcodeTerminal.generate(qr, { small: true });
      console.log("=================================================================\n");
    }

    if (connection === "open") {
      console.log("\n=======================================================");
      console.log("🎉 SUCESSO! WHATSAPP CONECTOU PERFEITAMENTE PELO QR CODE!");
      console.log("=======================================================\n");
    }

    if (connection === "close") {
      const error = lastDisconnect?.error as any;
      const statusCode = error?.output?.statusCode;
      console.log(`Conexão fechada. Status: ${statusCode}`);
    }
  });
}

runQrTest().catch((e) => console.error("Erro no teste:", e));
