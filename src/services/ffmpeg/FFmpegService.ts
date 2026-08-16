import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import { promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic);
}

export class FFmpegService {
  private async runTransform(input: Buffer, outputExtension: string, configure: (command: ffmpeg.FfmpegCommand) => void) {
    const inputPath = join(tmpdir(), `${randomUUID()}.bin`);
    const outputPath = join(tmpdir(), `${randomUUID()}.${outputExtension}`);
    await fs.writeFile(inputPath, input);

    await new Promise<void>((resolve, reject) => {
      const command = ffmpeg(inputPath).output(outputPath);
      configure(command);
      command
        .on("end", () => resolve())
        .on("error", (error) => reject(error))
        .run();
    });

    const output = await fs.readFile(outputPath);
    await Promise.allSettled([fs.unlink(inputPath), fs.unlink(outputPath)]);
    return output;
  }

  public extractAudio(input: Buffer): Promise<Buffer> {
    return this.runTransform(input, "mp3", (command) => {
      command.audioCodec("libmp3lame").format("mp3");
    });
  }

  public slowAudio(input: Buffer): Promise<Buffer> {
    return this.runTransform(input, "mp3", (command) => {
      command.audioFilters("atempo=0.8").audioCodec("libmp3lame").format("mp3");
    });
  }

  public speedAudio(input: Buffer): Promise<Buffer> {
    return this.runTransform(input, "mp3", (command) => {
      command.audioFilters("atempo=1.25").audioCodec("libmp3lame").format("mp3");
    });
  }

  public reverseAudio(input: Buffer): Promise<Buffer> {
    return this.runTransform(input, "mp3", (command) => {
      command.audioFilters("areverse").audioCodec("libmp3lame").format("mp3");
    });
  }

  public bassBoost(input: Buffer): Promise<Buffer> {
    return this.runTransform(input, "mp3", (command) => {
      command.audioFilters("bass=g=10").audioCodec("libmp3lame").format("mp3");
    });
  }

  public speedVideo(input: Buffer): Promise<Buffer> {
    return this.runTransform(input, "mp4", (command) => {
      command
        .videoFilters("setpts=0.75*PTS")
        .audioFilters("atempo=1.25")
        .videoCodec("libx264")
        .audioCodec("aac")
        .format("mp4");
    });
  }
}
