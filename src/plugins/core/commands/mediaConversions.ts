import type { CommandModule } from "../../../core/types/command";

export const toImageCommand: CommandModule = {
  definition: {
    name: "toimg",
    aliases: ["toimage", "unsticker"],
    description: "Converte uma figurinha em imagem PNG.",
    usage: "!toimg (respondendo a uma figurinha)",
    category: "media",
    cooldownSeconds: 8
  },
  async execute(context) {
    const media = await context.downloadMedia();
    if (!media) {
      await context.reply("Responda a uma figurinha para convertê-la em imagem.");
      return;
    }
    try {
      const image = await context.services.stickers.toImage(media);
      await context.sendImage(image);
    } catch {
      await context.reply("Não consegui converter essa figurinha em imagem.");
    }
  }
};

export const toGifCommand: CommandModule = {
  definition: {
    name: "togif",
    aliases: ["gif", "stickeranimado", "figvideo"],
    description: "Converte uma mídia animada em vídeo GIF para o WhatsApp.",
    usage: "!togif (respondendo a uma figurinha animada ou vídeo)",
    category: "media",
    cooldownSeconds: 12
  },
  async execute(context) {
    const media = await context.downloadMedia();
    if (!media) {
      await context.reply("Responda a uma figurinha animada ou vídeo para converter.");
      return;
    }
    try {
      const animation = await context.services.ffmpeg.toAnimation(media);
      await context.sendAnimation(animation, "", []);
    } catch {
      await context.reply("Não consegui converter essa mídia em animação.");
    }
  }
};

export const mediaConversionCommands: CommandModule[] = [toImageCommand, toGifCommand];
