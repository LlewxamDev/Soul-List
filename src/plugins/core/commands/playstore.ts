import type { CommandModule } from "../../../core/types/command";

export const playStoreCommand: CommandModule = {
  definition: {
    name: "playstore",
    aliases: ["appsearch"],
    description: "Busca um app na Play Store.",
    usage: "!playstore <app>",
    category: "search",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe o nome do app.");
      return;
    }
    const result = await context.services.playStore.search(context.argString);
    if (!result) {
      await context.reply("Nenhum app encontrado.");
      return;
    }
    await context.reply([`App: ${result.title}`, result.url].join("\n"));
  }
};
