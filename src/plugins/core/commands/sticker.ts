import type { CommandModule } from "../../../core/types/command";

export const stickerCommand: CommandModule = {
  definition: {
    name: "sticker",
    aliases: ["fig", "s"],
    description: "Converte uma imagem em figurinha.",
    usage: "!sticker (respondendo uma imagem)",
    category: "stickers",
    cooldownSeconds: 6
  },
  async execute(context) {
    const media = await context.downloadMedia();
    if (!media) {
      await context.reply("Responda uma imagem para criar a figurinha.");
      return;
    }
    const sticker = await context.services.stickers.fromImage(media);
    await context.sendSticker(sticker);
  }
};
