import type { CommandModule } from "../../../core/types/command";
import { messageContains } from "../../../core/utils/messageMedia";

function randomItem<T>(items: T[]): T | null {
  if (items.length === 0) {
    return null;
  }
  return items[Math.floor(Math.random() * items.length)] ?? null;
}

export const uploadCommand: CommandModule = {
  definition: {
    name: "upload",
    aliases: ["baixarurl", "downloadurl"],
    description: "Baixa um arquivo de uma URL pública compatível e o envia no chat.",
    usage: "!upload <URL>",
    category: "downloads",
    cooldownSeconds: 12
  },
  async execute(context) {
    const url = context.args[0];
    if (!url) {
      await context.reply("Informe uma URL HTTP/HTTPS de arquivo.");
      return;
    }
    try {
      const remote = await context.services.media.downloadRemote(url);
      await context.sendDocument(remote.data, remote.fileName, remote.mimeType, "Arquivo baixado de uma URL pública.");
    } catch (error) {
      context.logger.warn({ error, url }, "Falha no upload/download remoto.");
      await context.reply("Não consegui baixar essa URL. Apenas endereços públicos, seguros e dentro do limite de tamanho são aceitos.");
    }
  }
};

export const imageToLinkCommand: CommandModule = {
  definition: {
    name: "imgpralink",
    aliases: ["imagemurl", "imgurl"],
    description: "Envia uma imagem para o storage configurado e retorna uma URL pública.",
    usage: "!imgpralink (imagem junto ou respondida)",
    category: "media",
    cooldownSeconds: 12
  },
  async execute(context) {
    const isImage = context.media.hasImage || messageContains(context.quotedMessage, "imageMessage");
    if (!isImage) {
      await context.reply("Envie ou responda a uma imagem para gerar uma URL pública.");
      return;
    }
    const image = await context.downloadMedia();
    if (!image) {
      await context.reply("Não consegui baixar a imagem recebida.");
      return;
    }
    try {
      const url = await context.services.media.uploadPublic(image, "imagem.webp", "image/webp");
      await context.reply(`URL pública da imagem:\n${url}`);
    } catch (error) {
      context.logger.warn({ error }, "Falha no upload público de imagem.");
      await context.reply("O storage público não está configurado ou rejeitou a imagem.");
    }
  }
};

export const randomStickerCommand: CommandModule = {
  definition: {
    name: "figurandom",
    aliases: ["stickeraleatorio", "figrandom"],
    description: "Envia uma figurinha aleatória do banco configurado.",
    usage: "!figurandom",
    category: "stickers",
    cooldownSeconds: 8
  },
  async execute(context) {
    const bank = await context.repositories.settings.getJson<string[]>("stickers:random");
    const sticker = randomItem(bank ?? []);
    if (!sticker) {
      await context.reply("O banco de stickers aleatórios ainda não foi configurado para este bot.");
      return;
    }
    try {
      const remote = await context.services.media.downloadRemote(sticker);
      await context.sendSticker(remote.data);
    } catch (error) {
      context.logger.warn({ error }, "Falha ao enviar sticker aleatório.");
      await context.reply("Não consegui carregar uma figurinha aleatória agora.");
    }
  }
};

export const stickerMetadataCommand: CommandModule = {
  definition: {
    name: "get",
    aliases: ["stickerinfo", "stickerdata"],
    description: "Reenvia uma figurinha com metadata personalizada do usuário.",
    usage: "!get [texto] (respondendo a uma figurinha)",
    category: "stickers",
    cooldownSeconds: 8
  },
  async execute(context) {
    const isSticker = context.media.hasSticker || messageContains(context.quotedMessage, "stickerMessage");
    if (!isSticker) {
      await context.reply("Responda a uma figurinha para usar o metadata personalizado.");
      return;
    }
    const sticker = await context.downloadMedia();
    if (!sticker) {
      await context.reply("Não consegui baixar a figurinha respondida.");
      return;
    }
    const label = context.argString.trim()
      ? `${context.pushName} • ${context.argString.trim().slice(0, 120)}`
      : context.pushName;
    try {
      const withMetadata = await context.services.stickers.withMetadata(sticker, label);
      await context.sendSticker(withMetadata);
    } catch (error) {
      context.logger.warn({ error }, "Falha ao aplicar metadata no sticker.");
      await context.reply("Não consegui aplicar metadata nessa figurinha.");
    }
  }
};

export const publicMediaCommands: CommandModule[] = [uploadCommand, imageToLinkCommand, randomStickerCommand, stickerMetadataCommand];
