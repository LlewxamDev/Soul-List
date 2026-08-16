import youtubedl, { type Payload } from "youtube-dl-exec";
import ytSearch, { type YtSearchVideo } from "yt-search";
import { promises as fs } from "node:fs";
import { dirname, join } from "node:path";
import ffmpegStatic from "ffmpeg-static";
import { tmpdir } from "node:os";
import { randomUUID } from "node:crypto";

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

function ensurePayload(value: Payload | string): Payload {
  if (typeof value === "string") {
    throw new Error(`Resposta inesperada do yt-dlp: ${value.slice(0, 200)}`);
  }
  return value;
}

function videoUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
}

export class YouTubeService {
  public constructor(
    private readonly maxBytes: number,
    private readonly maxDurationSeconds: number
  ) {}

  public async search(query: string): Promise<YouTubeVideoResult | null> {
    const videoId = extractVideoId(query);
    const result = videoId ? await ytSearch({ videoId }) : await ytSearch(query);
    const video = "videos" in result ? result.videos[0] : result;
    return video ? normalizeSearchVideo(video) : null;
  }

  private async getMetadata(videoId: string): Promise<Payload> {
    const result = await youtubedl(videoUrl(videoId), {
      dumpSingleJson: true,
      skipDownload: true,
      noWarnings: true,
      noCheckCertificates: true,
      noPlaylist: true,
      preferFreeFormats: true,
      jsRuntimes: "node",
      remoteComponent: "ejs:npm",
      addHeader: ["User-Agent: Mozilla/5.0", "Referer: https://www.youtube.com/"]
    });
    return ensurePayload(result);
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
    if (metadata.duration > this.maxDurationSeconds) {
      throw new Error(`O vídeo excede o limite de ${this.maxDurationSeconds} segundos.`);
    }

    const basePath = join(tmpdir(), `soul-list-${randomUUID()}`);
    const outputTemplate = `${basePath}.%(ext)s`;
    const maxFilesize = `${Math.max(1, Math.ceil(this.maxBytes / 1024 / 1024))}M`;
    const format = type === "audio"
      ? "bestaudio[ext=m4a]/bestaudio"
      : "bestvideo[ext=mp4][height<=360]+bestaudio[ext=m4a]/bestvideo[height<=360]+bestaudio/best[ext=mp4]";

    const flags = {
      format,
      output: outputTemplate,
      noWarnings: true,
      noCheckCertificates: true,
      noPlaylist: true,
      noPart: true,
      noProgress: true,
      maxFilesize,
      jsRuntimes: "node" as const,
      remoteComponent: "ejs:npm",
      addHeader: ["User-Agent: Mozilla/5.0", "Referer: https://www.youtube.com/"],
      ...(ffmpegStatic ? { ffmpegLocation: dirname(ffmpegStatic) } : {}),
      ...(type === "video" ? { mergeOutputFormat: "mp4" } : {})
    };

    try {
      await youtubedl.exec(videoUrl(videoId), flags, { timeout: 180_000 });

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
