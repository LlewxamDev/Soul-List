import type { CommandModule } from "../../../core/types/command";

export const translateCommand: CommandModule = {
  definition: {
    name: "traduzir",
    aliases: ["translate"],
    description: "Traduz um texto para o idioma informado.",
    usage: "!traduzir <idioma> <texto>",
    category: "search",
    cooldownSeconds: 4
  },
  async execute(context) {
    const [to, ...content] = context.args;
    if (!to || content.length === 0) {
      await context.reply("Use: !traduzir <idioma> <texto>");
      return;
    }
    const translated = await context.services.translation.translateText(content.join(" "), to);
    await context.reply(translated);
  }
};
