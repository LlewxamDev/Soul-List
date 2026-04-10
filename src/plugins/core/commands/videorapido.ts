import type { CommandModule } from "../../../core/types/command";

export const fastVideoCommand: CommandModule = {
  definition: {
    name: "videorapido",
    aliases: ["speedvideo"],
    description: "Acelera um vídeo curto.",
    usage: "!videorapido (respondendo um vídeo)",
    category: "media",
    cooldownSeconds: 10
  },
  async execute(context) {
    const media = await context.downloadMedia();
    if (!media) {
      await context.reply("Responda um vídeo para acelerar.");
      return;
    }
    const video = await context.services.ffmpeg.speedVideo(media);
    await context.sendVideo(video, "Vídeo acelerado");
  }
};
