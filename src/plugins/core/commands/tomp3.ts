import type { CommandModule } from "../../../core/types/command";

export const toMp3Command: CommandModule = {
  definition: {
    name: "tomp3",
    aliases: [],
    description: "Extrai o áudio de um vídeo ou converte mídia para MP3.",
    usage: "!tomp3 (respondendo a mídia)",
    category: "audio",
    cooldownSeconds: 8
  },
  async execute(context) {
    const media = await context.downloadMedia();
    if (!media) {
      await context.reply("Responda um vídeo ou áudio para converter.");
      return;
    }
    const audio = await context.services.ffmpeg.extractAudio(media);
    await context.sendAudio(audio);
  }
};
