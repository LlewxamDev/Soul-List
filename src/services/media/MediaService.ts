import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { downloadMediaMessage, type WAMessage } from "@whiskeysockets/baileys";
import pino from "pino";
import type { AppEnv } from "../../config/env";

const silentLogger = pino({ level: "silent" });

export interface RemoteDownload {
  data: Buffer;
  fileName: string;
  mimeType: string;
}

function isPrivateIp(address: string): boolean {
  const normalized = address.toLowerCase();
  if (isIP(normalized) === 4) {
    const octets = normalized.split(".").map(Number);
    const first = octets[0] ?? -1;
    const second = octets[1] ?? -1;
    return first === 10
      || (first === 172 && second >= 16 && second <= 31)
      || (first === 192 && second === 168)
      || (first === 127)
      || (first === 169 && second === 254)
      || first === 0;
  }
  if (isIP(normalized) === 6) {
    return normalized === "::1"
      || normalized.startsWith("fc")
      || normalized.startsWith("fd")
      || normalized.startsWith("fe8")
      || normalized.startsWith("fe9")
      || normalized.startsWith("fea")
      || normalized.startsWith("feb");
  }
  return true;
}

async function assertPublicUrl(value: URL): Promise<void> {
  if (value.protocol !== "https:" && value.protocol !== "http:") {
    throw new Error("Somente URLs HTTP/HTTPS são aceitas.");
  }
  const host = value.hostname.toLowerCase();
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) {
    throw new Error("O host informado não é público.");
  }
  if (isIP(host)) {
    if (isPrivateIp(host)) {
      throw new Error("Endereços privados ou locais não são aceitos.");
    }
    return;
  }
  const addresses = await lookup(host, { all: true });
  if (addresses.length === 0 || addresses.some((entry) => isPrivateIp(entry.address))) {
    throw new Error("O host informado resolve para um endereço privado ou não resolvível.");
  }
}

function safeFileName(value: string): string {
  const sanitized = value.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 100);
  return sanitized || "arquivo.bin";
}

function extractFileName(response: Response, url: URL): string {
  const disposition = response.headers.get("content-disposition") ?? "";
  const quoted = disposition.match(/filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i);
  const fromHeader = quoted?.[1] ?? quoted?.[2];
  if (fromHeader) {
    try {
      return safeFileName(decodeURIComponent(fromHeader));
    } catch {
      return safeFileName(fromHeader);
    }
  }
  const lastSegment = url.pathname.split("/").filter(Boolean).pop();
  return safeFileName(lastSegment ?? "arquivo.bin");
}

function findUrl(value: unknown): string | null {
  if (typeof value === "string" && /^https?:\/\//i.test(value)) {
    return value;
  }
  if (!value || typeof value !== "object") {
    return null;
  }
  for (const candidate of Object.values(value)) {
    const found = findUrl(candidate);
    if (found) {
      return found;
    }
  }
  return null;
}

export class MediaService {
  public constructor(private readonly env: AppEnv) {}

  public buildScreenshotUrl(targetUrl: string): string {
    return `${this.env.thumbnailServiceBase}/${targetUrl}`;
  }

  public async downloadMessage(message: WAMessage): Promise<Buffer | null> {
    try {
      return (await downloadMediaMessage(
        message,
        "buffer",
        {},
        {
          logger: silentLogger,
          reuploadRequest: async () => {
            throw new Error("Reupload não suportado neste contexto.");
          }
        }
      )) as Buffer;
    } catch {
      return null;
    }
  }

  public async downloadRemote(rawUrl: string): Promise<RemoteDownload> {
    let url = new URL(rawUrl);
    for (let redirect = 0; redirect <= 3; redirect += 1) {
      await assertPublicUrl(url);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), this.env.remoteDownloadTimeoutSeconds * 1000);
      try {
        const response = await fetch(url, { redirect: "manual", signal: controller.signal });
        if (response.status >= 300 && response.status < 400) {
          const location = response.headers.get("location");
          if (!location || redirect === 3) {
            throw new Error("Redirecionamento remoto excedeu o limite seguro.");
          }
          url = new URL(location, url);
          continue;
        }
        if (!response.ok) {
          throw new Error(`O servidor remoto respondeu HTTP ${response.status}.`);
        }

        const contentLength = Number(response.headers.get("content-length") ?? "0");
        if (contentLength > this.env.maxRemoteDownloadBytes) {
          throw new Error("O arquivo remoto excede o limite de tamanho configurado.");
        }
        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("O servidor remoto não forneceu um corpo legível.");
        }
        const chunks: Buffer[] = [];
        let total = 0;
        while (true) {
          const next = await reader.read();
          if (next.done) {
            break;
          }
          const chunk = Buffer.from(next.value);
          total += chunk.length;
          if (total > this.env.maxRemoteDownloadBytes) {
            await reader.cancel();
            throw new Error("O arquivo remoto excede o limite de tamanho configurado.");
          }
          chunks.push(chunk);
        }
        return {
          data: Buffer.concat(chunks),
          fileName: extractFileName(response, url),
          mimeType: response.headers.get("content-type")?.split(";")[0]?.trim() || "application/octet-stream"
        };
      } finally {
        clearTimeout(timer);
      }
    }
    throw new Error("Download remoto não concluído.");
  }

  public async uploadPublic(data: Buffer, fileName: string, mimeType: string): Promise<string> {
    if (!this.env.imageUploadUrl) {
      throw new Error("IMAGE_UPLOAD_URL não configurada para upload público.");
    }
    const form = new FormData();
    form.append("file", new Blob([data], { type: mimeType }), safeFileName(fileName));
    const headers = this.env.imageUploadToken
      ? { Authorization: `Bearer ${this.env.imageUploadToken}` }
      : {};
    const response = await fetch(this.env.imageUploadUrl, {
      method: "POST",
      headers,
      body: form
    });
    if (!response.ok) {
      throw new Error(`O serviço de upload respondeu HTTP ${response.status}.`);
    }
    const payload: unknown = await response.json();
    const url = findUrl(payload);
    if (!url) {
      throw new Error("O serviço de upload não retornou uma URL pública.");
    }
    return url;
  }
}
