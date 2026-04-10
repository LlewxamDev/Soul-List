import type { CommandModule } from "../../../core/types/command";

export const wikipediaCommand: CommandModule = {
  definition: {
    name: "wikipedia",
    aliases: ["wiki"],
    description: "Consulta um resumo na Wikipedia em português.",
    usage: "!wikipedia <tema>",
    category: "search",
    cooldownSeconds: 4
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe um tema para consultar.");
      return;
    }
    const result = await context.services.wikipedia.summary(context.argString);
    await context.reply([result.title, result.summary, result.url].filter(Boolean).join("\n"));
  }
};
