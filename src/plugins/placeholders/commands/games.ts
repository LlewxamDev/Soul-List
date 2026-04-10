import type { CommandModule } from "../../../core/types/command";

export const gamesPlaceholderCommand: CommandModule = {
  definition: {
    name: "games",
    aliases: ["menugame"],
    description: "Entrada principal dos jogos plugáveis.",
    usage: "!games",
    category: "games",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply("A área de games está pronta para jogos em módulos independentes, sem alterar o core.");
  }
};
