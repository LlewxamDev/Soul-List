import type { CommandModule } from "../../../core/types/command";

export const vipPlaceholderCommand: CommandModule = {
  definition: {
    name: "vip",
    aliases: ["menuvip"],
    description: "Mostra a área reservada para recursos VIP.",
    usage: "!vip",
    category: "vip",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply("A área VIP está ativa como base de extensão. Use plugins para adicionar benefícios exclusivos.");
  }
};
