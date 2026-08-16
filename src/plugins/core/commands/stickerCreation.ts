import type { CommandModule } from "../../../core/types/command";

const textStickerCommand: CommandModule = {
  definition: {
    name: "ttp",
    aliases: ["textosticker", "text2sticker", "stickertexto", "attp", "attp2", "attp3", "attp4", "attp5", "attp6"],
    description: "Cria uma figurinha a partir de um texto.",
    usage: "!ttp <texto>",
    category: "stickers",
    cooldownSeconds: 8
  },
  async execute(context) {
    const text = context.argString.trim();
    if (!text) {
      await context.reply("Informe o texto que será transformado em figurinha.");
      return;
    }
    const sticker = await context.services.stickers.fromText(text, context.command.name === "attp");
    await context.sendSticker(sticker);
  }
};

const emojiStickerCommand: CommandModule = {
  definition: {
    name: "emoji",
    aliases: ["semoji", "emojisticker", "emoji-sticker"],
    description: "Cria uma figurinha com um ou mais emojis.",
    usage: "!emoji <emoji>",
    category: "stickers",
    cooldownSeconds: 6
  },
  async execute(context) {
    const emojis = context.argString.trim();
    if (!emojis) {
      await context.reply("Informe um emoji para criar a figurinha.");
      return;
    }
    await context.sendSticker(await context.services.stickers.fromEmoji(emojis));
  }
};

const emojiMixCommand: CommandModule = {
  definition: {
    name: "emojimix",
    aliases: ["emoji-mix", "mixemoji", "misturemoji"],
    description: "Cria uma figurinha combinando dois emojis.",
    usage: "!emojimix <emoji 1> <emoji 2>",
    category: "stickers",
    cooldownSeconds: 8
  },
  async execute(context) {
    const emojis = context.args.slice(0, 2).join(" ").trim();
    if (context.args.length < 2) {
      await context.reply("Informe dois emojis separados por espaço.");
      return;
    }
    await context.sendSticker(await context.services.stickers.fromEmoji(emojis));
  }
};

const renameStickerCommand: CommandModule = {
  definition: {
    name: "roubar",
    aliases: ["rename", "roubarsticker", "packsticker", "stickerpack"],
    description: "Reenvia uma figurinha com metadata personalizada de pack e autor.",
    usage: "!roubar <pack> | <autor> (respondendo a sticker)",
    category: "stickers",
    cooldownSeconds: 8
  },
  async execute(context) {
    if (!context.media.hasSticker && !context.quotedMessage) {
      await context.reply("Responda a uma figurinha para alterar sua metadata.");
      return;
    }
    const sticker = await context.downloadMedia();
    if (!sticker) {
      await context.reply("Não consegui baixar a figurinha respondida.");
      return;
    }
    const [pack, author] = context.argString.split("|").map((value) => value.trim());
    const description = `${pack || "Soul-List"} • ${author || context.pushName}`;
    await context.sendSticker(await context.services.stickers.withMetadata(sticker, description));
  }
};

export const stickerCreationCommands: CommandModule[] = [textStickerCommand, emojiStickerCommand, emojiMixCommand, renameStickerCommand];
