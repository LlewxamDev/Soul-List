import type { CommandModule } from "../../../core/types/command";

export const searchCommand: CommandModule = {
  definition: {
    name: "buscar",
    aliases: ["search"],
    description: "Faz uma busca geral e resume o primeiro resultado.",
    usage: "!buscar <termo>",
    category: "search",
    cooldownSeconds: 4
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe um termo para pesquisar.");
      return;
    }
    const result = await context.services.search.search(context.argString);
    await context.reply([result.title, result.summary, result.url].filter(Boolean).join("\n"));
  }
};
