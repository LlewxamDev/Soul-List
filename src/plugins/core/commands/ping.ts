import type { CommandModule } from "../../../core/types/command";

export const pingCommand: CommandModule = {
  definition: {
    name: "ping",
    aliases: [],
    description: "Mede a latência básica de resposta do bot.",
    usage: "!ping",
    category: "system",
    cooldownSeconds: 2
  },
  async execute(context) {
    const startedAt = Date.now();
    await context.reply(`Pong! ${Date.now() - startedAt}ms`);
  }
};
