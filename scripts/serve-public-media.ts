import { createReadStream } from "node:fs";
import { promises as fs } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { env } from "../src/config/env";

const root = resolve(env.publicMediaDir);
const mimeTypes: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".mp3": "audio/mpeg"
};

function safePath(urlPath: string): string | null {
  const decoded = decodeURIComponent(urlPath.replace(/^\/+/, ""));
  if (!decoded || decoded.includes("..") || decoded.includes("\\")) {
    return null;
  }
  return join(root, decoded);
}

async function main(): Promise<void> {
  await fs.mkdir(root, { recursive: true });
  const server = createServer(async (request, response) => {
    try {
      const path = safePath(new URL(request.url ?? "/", "http://localhost").pathname);
      if (!path) {
        response.writeHead(400).end("Caminho inválido");
        return;
      }
      const stat = await fs.stat(path);
      if (!stat.isFile()) {
        response.writeHead(404).end("Arquivo não encontrado");
        return;
      }
      response.writeHead(200, {
        "Content-Type": mimeTypes[extname(path).toLowerCase()] ?? "application/octet-stream",
        "Content-Length": stat.size,
        "Cache-Control": "public, max-age=31536000, immutable"
      });
      createReadStream(path).pipe(response);
    } catch {
      response.writeHead(404).end("Arquivo não encontrado");
    }
  });

  server.listen(env.publicMediaPort, "0.0.0.0", () => {
    console.log(`Mídia local servida em http://0.0.0.0:${env.publicMediaPort}/`);
    console.log(`Diretório: ${root}`);
    console.log("Para retornar links públicos no bot, configure PUBLIC_MEDIA_BASE_URL com o endereço exposto pelo seu domínio/túnel.");
  });
}

void main();
