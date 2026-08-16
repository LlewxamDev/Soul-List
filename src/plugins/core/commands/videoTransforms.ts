import type { CommandModule } from "../../../core/types/command";

function videoTransform(
  name: string,
  aliases: string[],
  description: string,
  transform: (context: Parameters<CommandModule["execute"]>[0], media: Buffer) => Promise<Buffer>
): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description,
      usage: `!${name} (respondendo a um vídeo)`,
      category: "media",
      cooldownSeconds: 10
    },
    async execute(context) {
      const media = await context.downloadMedia();
      if (!media) {
        await context.reply("Responda a um vídeo para usar este comando.");
        return;
      }
      try {
        const output = await transform(context, media);
        await context.sendVideo(output, `${name} aplicado.`);
      } catch (error) {
        context.logger.warn({ error, command: name }, "Falha na transformação de vídeo.");
        await context.reply("Não consegui processar este vídeo. Tente um arquivo menor.");
      }
    }
  };
}

export const slowVideoCommand = videoTransform(
  "videolento",
  ["slowvid", "videoslow", "slowvideo", "lento-video"],
  "Deixa um vídeo mais lento.",
  (context, media) => context.services.ffmpeg.slowVideo(media)
);

export const reverseVideoCommand = videoTransform(
  "videoreverso",
  ["reversevid", "videoreverse", "vidreverse"],
  "Inverte a reprodução de um vídeo.",
  (context, media) => context.services.ffmpeg.reverseVideo(media)
);

export const muteVideoCommand = videoTransform(
  "videosemaudio",
  ["videomudo", "mutevideo", "mutevid", "sem-audio"],
  "Remove o áudio de um vídeo.",
  (context, media) => context.services.ffmpeg.muteVideo(media)
);

export const bassVideoCommand = videoTransform(
  "bassvideo",
  ["bassvid", "bassvideo2", "gravevideo"],
  "Reforça os graves no áudio de um vídeo.",
  (context, media) => context.services.ffmpeg.bassVideo(media)
);

export const videoTransformCommands: CommandModule[] = [slowVideoCommand, reverseVideoCommand, muteVideoCommand, bassVideoCommand];
