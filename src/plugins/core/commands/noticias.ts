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
    try {
      const items = await context.services.news.latest(context.argString || "Brasil");
      if (!items || items.length === 0) {
        await context.reply("Nenhuma notícia encontrada para este tema.");
        return;
      }
      await context.reply(
        ["Últimas notícias:", ...items.map((item, index) => `${index + 1}. ${item.title}\n${item.link}`)].join("\n\n")
      );
    } catch {
      await context.reply("Não foi possível carregar as notícias no momento (serviço indisponível).");
    }
  }
};
