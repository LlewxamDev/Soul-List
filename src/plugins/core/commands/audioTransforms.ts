import type { CommandModule } from "../../../core/types/command";

function audioTransform(
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
      usage: `!${name} (responda a um áudio ou vídeo)`,
      category: "audio",
      cooldownSeconds: 8
    },
    async execute(context) {
      const media = await context.downloadMedia();
      if (!media) {
        await context.reply("Responda a um áudio ou vídeo para usar este comando.");
        return;
      }
      try {
        const result = await transform(context, media);
        await context.sendAudio(result);
      } catch (error) {
        context.logger.warn({ error, command: name }, "Falha na transformação de áudio.");
        await context.reply("Não consegui processar essa mídia. Tente um arquivo menor.");
      }
    }
  };
}

export const fastAudioCommand = audioTransform(
  "audiorapido",
  ["audiofast", "audiovelocidade", "fast"],
  "Acelera um áudio ou vídeo convertido para MP3.",
  (context, media) => context.services.ffmpeg.speedAudio(media)
);

export const slowAudioCommand = audioTransform(
  "audiolento",
  ["audioslow", "slow"],
  "Deixa um áudio ou vídeo mais lento.",
  (context, media) => context.services.ffmpeg.slowAudio(media)
);

export const reverseAudioCommand = audioTransform(
  "audioreverso",
  ["audioreverse", "audioinvertido"],
  "Inverte a reprodução do áudio.",
  (context, media) => context.services.ffmpeg.reverseAudio(media)
);

export const bassAudioCommand = audioTransform(
  "bass",
  ["grave", "bassboost", "bass2", "bass3"],
  "Reforça os graves de um áudio ou vídeo.",
  (context, media) => context.services.ffmpeg.bassBoost(media)
);
