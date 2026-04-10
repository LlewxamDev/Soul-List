import type { CommandModule } from "../../../core/types/command";

export const newsCommand: CommandModule = {
  definition: {
    name: "noticias",
    aliases: ["news"],
    description: "Busca as manchetes mais recentes sobre um tema.",
    usage: "!noticias [tema]",
    category: "search",
    cooldownSeconds: 6
  },
  async execute(context) {
    const items = await context.services.news.latest(context.argString || "Brasil");
    await context.reply(
      ["Últimas notícias:", ...items.map((item, index) => `${index + 1}. ${item.title}\n${item.link}`)].join("\n\n")
    );
  }
};
