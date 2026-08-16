import type { CommandModule } from "../../../core/types/command";
import { detectMediaKind } from "../../../core/utils/messageMedia";

interface MenuMediaSetting {
  kind: "image" | "video";
  dataBase64: string;
  mimetype: string;
}

export const menuMediaCommand: CommandModule = {
  definition: {
    name: "fotomenu",
    aliases: ["midiamenu", "menumedia"],
    description: "Substitui a mídia usada na tela inicial do menu.",
    usage: "!fotomenu (imagem ou GIF/vídeo junto ou respondido)",
    category: "owner",
    cooldownSeconds: 12,
    ownerOnly: true
  },
  async execute(context) {
    const kind = detectMediaKind(context);
    if (kind !== "image" && kind !== "video") {
      await context.reply("Envie ou responda a uma imagem ou GIF/vídeo para substituir a mídia do menu.");
      return;
    }
    const media = await context.downloadMedia();
    if (!media) {
      await context.reply("Não consegui baixar a mídia do menu.");
      return;
    }
    if (media.length > 4 * 1024 * 1024) {
      await context.reply("A mídia do menu deve ter no máximo 4 MiB.");
      return;
    }
    const setting: MenuMediaSetting = {
      kind,
      dataBase64: media.toString("base64"),
      mimetype: kind === "image" ? "image/jpeg" : "video/mp4"
    };
    await context.repositories.settings.setJson("menu:media", setting);
    await context.reply("Mídia do menu atualizada e persistida com sucesso.");
  }
};
