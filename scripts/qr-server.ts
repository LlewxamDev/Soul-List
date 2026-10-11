import http from "node:http";
import { exec } from "node:child_process";
import QRCode from "qrcode";
import makeWASocket, {
  DisconnectReason,
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  Browsers
} from "@whiskeysockets/baileys";
import pino from "pino";
import { rmSync, existsSync } from "node:fs";

let currentQrBuffer: Buffer | null = null;
let isConnected = false;

// 1. Servidor HTTP local para exibir o QR Code em alta definição
const server = http.createServer((req, res) => {
  if (req.url === "/qr.png") {
    if (currentQrBuffer) {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(currentQrBuffer);
    } else {
      res.writeHead(404);
      res.end("QR ainda não gerado.");
    }
    return;
  }

  // Página principal com auto-refresh a cada 4 segundos
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (isConnected) {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Soul-List Conectado</title></head>
      <body style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;background:#0f172a;color:#fff;">
        <h1 style="color:#22c55e;">🎉 Conexão Estabelecida com Sucesso!</h1>
        <p>O Soul-List está autenticado e pronto no WhatsApp.</p>
      </body>
      </html>
    `);
    return;
  }

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Conectar Soul-List WhatsApp</title>
      <meta http-equiv="refresh" content="4">
      <style>
        body { display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; margin:0; background:#0b141a; color:#e9edef; font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, sans-serif; }
        .card { background:#111b21; border-radius:16px; padding:32px; box-shadow:0 8px 24px rgba(0,0,0,0.5); text-align:center; max-width:440px; }
        h1 { font-size:22px; margin-bottom:8px; color:#00a884; }
        p { font-size:14px; color:#8696a0; margin-bottom:24px; }
        .qr-box { background:#fff; padding:16px; border-radius:12px; display:inline-block; }
        img { display:block; width:280px; height:280px; }
        .steps { text-align:left; font-size:13px; color:#aebac1; margin-top:20px; line-height:1.6; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Conectar Soul-List ao WhatsApp</h1>
        <p>Aponte a câmera do WhatsApp para o QR Code abaixo</p>
        <div class="qr-box">
          ${currentQrBuffer ? `<img src="/qr.png?t=${Date.now()}" alt="QR Code WhatsApp" />` : `<span>Gerando QR Code...</span>`}
        </div>
        <div class="steps">
          1. Abra o WhatsApp no seu celular<br>
          2. Toque em <b>Mais opções</b> (⋮) ou <b>Configurações</b><br>
          3. Toque em <b>Aparelhos conectados</b> > <b>Conectar um aparelho</b><br>
          4. Aponte o celular para esta tela
        </div>
      </div>
    </body>
    </html>
  `);
});

const PORT = 3456;
server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🌐 PAINEL VISUAL DE CONEXÃO: http://localhost:${PORT}`);
  console.log(`======================================================\n`);
  exec(`start http://localhost:${PORT}`);
});

// 2. Inicialização do Socket do Baileys
async function startSocket() {
  const sessionPath = "./sessions";
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

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      currentQrBuffer = await QRCode.toBuffer(qr, { width: 320, margin: 1 });
      console.log("✓ Novo QR Code gerado e atualizado no navegador!");
    }

    if (connection === "open") {
      isConnected = true;
      console.log("\n=======================================================");
      console.log("🎉 SOUL-LIST CONECTADO COM SUCESSO AO WHATSAPP!");
      console.log("=======================================================\n");
    }

    if (connection === "close") {
      const statusCode = (lastDisconnect?.error as any)?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
      console.log(`Conexão fechada (${statusCode}). Reconectando: ${shouldReconnect}`);
      if (shouldReconnect) {
        setTimeout(startSocket, 2000);
      }
    }
  });
}

void startSocket();
