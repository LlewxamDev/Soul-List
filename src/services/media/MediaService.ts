import { downloadMediaMessage, type WAMessage } from "@whiskeysockets/baileys";
import pino from "pino";
import type { AppEnv } from "../../config/env";

const silentLogger = pino({ level: "silent" });

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
}
