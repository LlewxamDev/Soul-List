import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";
import ffmpegPath from "ffmpeg-static";

export interface YouTubeVideoInfo {
  id: string;
  title: string;
  url: string;
  durationString: string;
  durationSeconds: number;
  thumbnail: string;
  channel: string;
  views: number;
}

export class YouTubeDownloadService {
  private readonly tmpDir = path.join(os.tmpdir(), "soul-list-downloads");

  public constructor() {
    if (!fs.existsSync(this.tmpDir)) {
      fs.mkdirSync(this.tmpDir, { recursive: true });
    }
  }

  public async getInfo(queryOrUrl: string): Promise<YouTubeVideoInfo | null> {
    const isUrl = /^https?:\/\//i.test(queryOrUrl);
    const searchTarget = isUrl ? queryOrUrl : `ytsearch1:${queryOrUrl}`;

    return new Promise((resolve, reject) => {
      const args = [
        "--dump-single-json",
        "--flat-playlist",
        "--no-warnings",
        "--no-check-certificates",
        searchTarget
      ];

      const proc = spawn("yt-dlp", args, { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      let stderr = "";

      proc.stdout.on("data", (chunk) => {
        stdout += chunk.toString();
      });

      proc.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
      });

      proc.on("close", (code) => {
        if (code !== 0 || !stdout.trim()) {
          return resolve(null);
        }

        try {
          const data = JSON.parse(stdout);
          const entry = data.entries ? data.entries[0] : data;
          if (!entry) return resolve(null);

          const durationSeconds = Number(entry.duration) || 0;
          const mins = Math.floor(durationSeconds / 60);
          const secs = Math.floor(durationSeconds % 60);
          const durationString = `${mins}:${secs < 10 ? "0" : ""}${secs}`;

          resolve({
            id: entry.id,
            title: entry.title ?? "Sem título",
            url: entry.webpage_url ?? entry.url ?? `https://www.youtube.com/watch?v=${entry.id}`,
            durationString,
            durationSeconds,
            thumbnail: entry.thumbnail ?? (entry.thumbnails?.[0]?.url ?? ""),
            channel: entry.uploader ?? entry.channel ?? "YouTube",
            views: Number(entry.view_count) || 0
          });
        } catch (err) {
          reject(err);
        }
      });

      proc.on("error", (err) => {
        reject(err);
      });
    });
  }

  public async downloadAudio(url: string): Promise<Buffer> {
    const outTemplate = path.join(this.tmpDir, `audio_${Date.now()}_%(id)s.%(ext)s`);

    const isYouTube = /youtube\.com|youtu\.be/i.test(url);

    return new Promise((resolve, reject) => {
      const args = [
        ...(isYouTube ? ["--extractor-args", "youtube:player_client=android"] : []),
        "-x",
        "--audio-format",
        "mp3",
        "--audio-quality",
        "0",
        "--no-warnings",
        "--max-filesize",
        "50M",
        ...(ffmpegPath ? ["--ffmpeg-location", ffmpegPath] : []),
        "-o",
        outTemplate,
        url
      ];

      const proc = spawn("yt-dlp", args, { stdio: ["ignore", "pipe", "pipe"] });
      let stderr = "";
      proc.stdout.on("data", () => {});
      proc.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
      });

      proc.on("close", (code) => {
        // find generated mp3 file
        const dirFiles = fs.readdirSync(this.tmpDir);
        const prefix = path.basename(outTemplate).split("_%(id)s")[0] || "audio";
        const match = dirFiles.find((f) => f.startsWith(prefix) && f.endsWith(".mp3"));

        if (code !== 0 || !match) {
          return reject(new Error(`Falha ao baixar áudio com yt-dlp: ${stderr.trim() || `Exit code ${code}`}`));
        }

        const fullPath = path.join(this.tmpDir, match);
        try {
          const buffer = fs.readFileSync(fullPath);
          fs.unlinkSync(fullPath);
          resolve(buffer);
        } catch (err) {
          reject(err);
        }
      });

      proc.on("error", (err) => {
        reject(err);
      });
    });
  }

  public async getAvailableResolutions(url: string): Promise<number[]> {
    return new Promise((resolve) => {
      const args = [
        "--dump-json",
        "--no-playlist",
        "--no-warnings",
        url
      ];

      const proc = spawn("yt-dlp", args, { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      proc.stdout.on("data", (chunk) => {
        stdout += chunk.toString();
      });

      proc.on("close", (code) => {
        if (code !== 0 || !stdout.trim()) {
          return resolve([720, 480, 360]);
        }
        try {
          const data = JSON.parse(stdout);
          const formats = Array.isArray(data.formats) ? data.formats : [];
          const heights = new Set<number>();
          for (const f of formats) {
            if (f.vcodec !== "none" && typeof f.height === "number") {
              if (f.height <= 1080 && f.height >= 144) {
                heights.add(f.height);
              }
            }
          }
          const sorted = Array.from(heights).sort((a, b) => b - a);
          resolve(sorted.length > 0 ? sorted : [720, 480, 360]);
        } catch {
          resolve([720, 480, 360]);
        }
      });

      proc.on("error", () => {
        resolve([720, 480, 360]);
      });
    });
  }

  public async downloadVideo(url: string, targetHeight?: number): Promise<Buffer> {
    const outTemplate = path.join(this.tmpDir, `video_${Date.now()}_%(id)s.%(ext)s`);
    const isYouTube = /youtube\.com|youtu\.be/i.test(url);
    const formatSelector = targetHeight
      ? `bestvideo[height<=${targetHeight}][ext=mp4]+bestaudio[ext=m4a]/bestvideo[height<=${targetHeight}]+bestaudio/best[height<=${targetHeight}]/best`
      : (isYouTube ? "b[ext=mp4]/18/best[ext=mp4]/best" : "bestvideo+bestaudio/best[ext=mp4]/best");

    return new Promise((resolve, reject) => {
      const args = [
        ...(isYouTube ? ["--extractor-args", "youtube:player_client=android"] : []),
        "-f",
        formatSelector,
        "--remux-video",
        "mp4",
        "--no-warnings",
        "--max-filesize",
        "70M",
        ...(ffmpegPath ? ["--ffmpeg-location", ffmpegPath] : []),
        "-o",
        outTemplate,
        url
      ];

      const proc = spawn("yt-dlp", args, { stdio: ["ignore", "pipe", "pipe"] });
      let stderr = "";
      proc.stdout.on("data", () => {});
      proc.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
      });

      proc.on("close", (code) => {
        const dirFiles = fs.readdirSync(this.tmpDir);
        const prefix = path.basename(outTemplate).split("_%(id)s")[0] || "video";
        const match = dirFiles.find((f) => f.startsWith(prefix) && (f.endsWith(".mp4") || f.endsWith(".m4v")));

        if (code !== 0 || !match) {
          return reject(new Error(`Falha ao baixar vídeo com yt-dlp: ${stderr.trim() || `Exit code ${code}`}`));
        }

        const fullPath = path.join(this.tmpDir, match);
        try {
          const buffer = fs.readFileSync(fullPath);
          fs.unlinkSync(fullPath);
          resolve(buffer);
        } catch (err) {
          reject(err);
        }
      });

      proc.on("error", (err) => {
        reject(err);
      });
    });
  }
}
