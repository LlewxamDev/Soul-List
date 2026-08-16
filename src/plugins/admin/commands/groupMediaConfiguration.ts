import type { CommandModule } from "../../../core/types/command";
import { detectMediaKind } from "../../../core/utils/messageMedia";
import { isTemplateMediaKind, templateKey, type GroupTemplate } from "../../../core/utils/groupTemplates";

function quotedCaption(context: Parameters<CommandModule["execute"]>[0]): string {
  const message = context.quotedMessage?.message;
  if (!message) {
    return "";
  }
  if ("imageMessage" in message) {
    return message.imageMessage?.caption ?? "";
  }
  if ("videoMessage" in message) {
    return message.videoMessage?.caption ?? "";
  }
  return "";
}

export const setGroupPhotoCommand: CommandModule = {
  definition: {
    name: "fotogp",
    aliases: ["fotogrupo"],
    description: "Altera a foto do grupo usando uma imagem enviada ou respondida.",
    usage: "!fotogp (imagem junto ou respondida)",
    category: "admin",
    cooldownSeconds: 12,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const kind = detectMediaKind(context);
    if (kind !== "image") {
      await context.reply("Envie ou responda a uma imagem para alterar a foto do grupo.");
      return;
    }
    const image = await context.downloadMedia();
    if (!image) {
      await context.reply("Não consegui baixar a imagem.");
      return;
    }
    try {
      await context.socket.updateProfilePicture(context.from, image);
      await context.reply("Foto do grupo atualizada com sucesso.");
    } catch (error) {
      context.logger.warn({ error }, "Falha ao atualizar foto do grupo.");
      await context.reply("Não consegui alterar a foto. Verifique se o bot tem permissão de administrador.");
    }
  }
};

function configureTemplate(type: "welcome" | "leave", label: string): CommandModule {
  return {
    definition: {
      name: type === "welcome" ? "fundobemvindo" : "fundosaiu",
      aliases: type === "welcome" ? ["fundobv", "welcomeconfig"] : ["fundosaida", "leaveconfig"],
      description: `Configura a mensagem de ${label} do grupo.`,
      usage: type === "welcome" ? "!fundobemvindo <texto> (mídia opcional)" : "!fundosaiu <texto> (mídia opcional)",
      category: "admin",
      cooldownSeconds: 10,
      groupOnly: true,
      adminOnly: true
    },
    async execute(context) {
      const kind = detectMediaKind(context);
      if (kind && !isTemplateMediaKind(kind)) {
        await context.reply("O template aceita texto, imagem ou vídeo/GIF; áudio e figurinha não são suportados.");
        return;
      }
      const media = kind ? await context.downloadMedia() : null;
      if (kind && !media) {
        await context.reply("Não consegui baixar a mídia do template.");
        return;
      }
      const text = context.argString.trim() || quotedCaption(context).trim();
      if (!text && !media) {
        await context.reply(`Informe um texto ou responda a uma mídia para configurar ${label}.`);
        return;
      }
      const template: GroupTemplate = {
        text: text.slice(0, 1000) || (type === "welcome" ? "Sejam bem-vindos {{nome}} ao grupo *{{grupo}}*!" : "Até mais {{nome}}. A saída do grupo *{{grupo}}* foi registrada.")
      };
      if (media && kind && isTemplateMediaKind(kind)) {
        template.media = {
          kind,
          dataBase64: media.toString("base64"),
          mimetype: kind === "image" ? "image/jpeg" : "video/mp4"
        };
      }
      if (media && media.length > 4 * 1024 * 1024) {
        await context.reply("A mídia do template deve ter no máximo 4 MiB.");
        return;
      }
      await context.repositories.settings.setJson(templateKey(context.from, type), template);
      if (type === "welcome") {
        await context.repositories.features.setEnabled("welcome", context.from, true);
        await context.repositories.features.setEnabled("welcome-text", context.from, true);
      } else {
        await context.repositories.features.setEnabled("welcome", context.from, true);
      }
      await context.reply(`Template de ${label} salvo para este grupo.`);
    }
  };
}

export const groupMediaConfigurationCommands: CommandModule[] = [
  setGroupPhotoCommand,
  configureTemplate("welcome", "boas-vindas"),
  configureTemplate("leave", "saída")
];
