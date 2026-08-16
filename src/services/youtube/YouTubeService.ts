import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import { promisify } from "node:util";
import ytSearch, { type YtSearchVideo } from "yt-search";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { randomUUID } from "node:crypto";

const execFileAsync = promisify(execFile);
const EXEC_BUFFER_BYTES = 32 * 1024 * 1024;

type YtDlpPayload = {
  duration?: number;
  [key: string]: unknown;
};

export interface YouTubeVideoResult {
  id: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  durationSeconds: number;
  durationLabel: string;
  views: number;
}

function extractVideoId(input: string): string | null {
  const value = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value;
  }
  try {
    const url = new URL(value);
    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1).split("/")[0] || null;
    }
    if (url.searchParams.get("v")) {
      return url.searchParams.get("v");
    }
    const parts = url.pathname.split("/").filter(Boolean);
    const markerIndex = parts.findIndex((part) => ["shorts", "embed", "live"].includes(part));
    return markerIndex >= 0 ? parts[markerIndex + 1] ?? null : null;
  } catch {
    return null;
  }
}

function normalizeSearchVideo(video: YtSearchVideo): YouTubeVideoResult {
  return {
    id: video.videoId,
    url: video.url,
    title: video.title,
    description: video.description ?? "",
    thumbnail: video.thumbnail,
    author: video.author?.name ?? "Desconhecido",
    durationSeconds: video.duration?.seconds ?? 0,
    durationLabel: video.duration?.timestamp ?? video.timestamp ?? "indisponível",
    views: video.views ?? 0
  };
}

function ensurePayload(value: string): YtDlpPayload {
  try {
    const parsed: unknown = JSON.parse(value);
    if (!parsed || typeof parsed !== "object") {
      throw new Error("JSON não é um objeto.");
    }
    return parsed as YtDlpPayload;
  } catch {
    throw new Error(`Resposta inesperada do yt-dlp: ${value.slice(0, 200)}`);
  }
}

function videoUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
}

function isMissingExecutable(error: unknown): boolean {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === "ENOENT");
}

export class YouTubeService {
  public constructor(
    private readonly maxBytes: number,
    private readonly maxDurationSeconds: number,
    private readonly ytdlpPath = "yt-dlp",
    private readonly ffmpegPath = "ffmpeg"
  ) {}

  private async runYtDlp(args: readonly string[], timeout = 180_000): Promise<string> {
    const attempts: Array<{ file: string; args: string[] }> = [{
      file: this.ytdlpPath,
      args: [...args]
    }];

    if (this.ytdlpPath === "yt-dlp") {
      attempts.push(
        { file: "python3", args: ["-m", "yt_dlp", ...args] },
        { file: "python", args: ["-m", "yt_dlp", ...args] }
      );
    }

    let lastMissingExecutable = false;
    for (const attempt of attempts) {
      try {
        const result = await execFileAsync(attempt.file, attempt.args, {
          timeout,
          maxBuffer: EXEC_BUFFER_BYTES,
          windowsHide: true
        });
        return result.stdout;
      } catch (error) {
        if (isMissingExecutable(error)) {
          lastMissingExecutable = true;
          continue;
        }
        throw error;
      }
    }

    if (lastMissingExecutable) {
      throw new Error(
        "yt-dlp não encontrado. Instale-o no Termux com `pkg install python ffmpeg && python -m pip install -U yt-dlp` ou defina YTDLP_PATH."
      );
    }
    throw new Error("Não foi possível executar o yt-dlp.");
  }

  public async search(query: string): Promise<YouTubeVideoResult | null> {
    const videoId = extractVideoId(query);
    const result = videoId ? await ytSearch({ videoId }) : await ytSearch(query);
    const video = "videos" in result ? result.videos[0] : result;
    return video ? normalizeSearchVideo(video) : null;
  }

  private async getMetadata(videoId: string): Promise<YtDlpPayload> {
    const output = await this.runYtDlp([
      "--dump-single-json",
      "--skip-download",
      "--no-warnings",
      "--no-check-certificates",
      "--no-playlist",
      "--prefer-free-formats",
      "--js-runtimes",
      "node",
      "--remote-components",
      "ejs:npm",
      "--add-header",
      "User-Agent: Mozilla/5.0",
      "--add-header",
      "Referer: https://www.youtube.com/",
      videoUrl(videoId)
    ], 60_000);
    return ensurePayload(output);
  }

  private async findOutput(basePath: string): Promise<string> {
    const directory = tmpdir();
    const baseName = basePath.split("/").pop() ?? basePath;
    const matches = (await fs.readdir(directory))
      .filter((file) => file.startsWith(`${baseName}.`))
      .map((file) => join(directory, file));
    if (matches.length === 0) {
      throw new Error("O yt-dlp não produziu um arquivo de saída.");
    }
    const preferred = matches.find((file) => file.endsWith(".mp4")) ?? matches[0];
    if (!preferred) {
      throw new Error("O yt-dlp não produziu um arquivo de saída válido.");
    }
    return preferred;
  }

  public async download(videoId: string, type: "audio" | "video"): Promise<Buffer> {
    const metadata = await this.getMetadata(videoId);
    const duration = typeof metadata.duration === "number" ? metadata.duration : 0;
    if (duration > this.maxDurationSeconds) {
      throw new Error(`O vídeo excede o limite de ${this.maxDurationSeconds} segundos.`);
    }

    const basePath = join(tmpdir(), `soul-list-${randomUUID()}`);
    const outputTemplate = `${basePath}.%(ext)s`;
    const maxFilesize = `${Math.max(1, Math.ceil(this.maxBytes / 1024 / 1024))}M`;
    const format = type === "audio"
      ? "bestaudio[ext=m4a]/bestaudio"
      : "bestvideo[ext=mp4][height<=360]+bestaudio[ext=m4a]/bestvideo[height<=360]+bestaudio/best[ext=mp4]";

    const args = [
      "--format",
      format,
      "--output",
      outputTemplate,
      "--no-warnings",
      "--no-check-certificates",
      "--no-playlist",
      "--no-part",
      "--no-progress",
      "--max-filesize",
      maxFilesize,
      "--js-runtimes",
      "node",
      "--remote-components",
      "ejs:npm",
      "--add-header",
      "User-Agent: Mozilla/5.0",
      "--add-header",
      "Referer: https://www.youtube.com/",
      "--ffmpeg-location",
      this.ffmpegPath,
      ...(type === "video" ? ["--merge-output-format", "mp4"] : []),
      videoUrl(videoId)
    ];

    try {
      await this.runYtDlp(args);

      const outputPath = await this.findOutput(basePath);
      const output = await fs.readFile(outputPath);
      if (output.length > this.maxBytes) {
        throw new Error("O arquivo excede o limite configurado.");
      }
      return output;
    } finally {
      const directory = tmpdir();
      const baseName = basePath.split("/").pop() ?? basePath;
      const files = (await fs.readdir(directory)).filter((file) => file.startsWith(`${baseName}.`));
      await Promise.allSettled(files.map((file) => fs.unlink(join(directory, file))));
    }
  }
}
