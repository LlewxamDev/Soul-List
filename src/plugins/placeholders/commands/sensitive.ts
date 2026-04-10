import type { CommandModule } from "../../../core/types/command";

export const sensitivePlaceholderCommand: CommandModule = {
  definition: {
    name: "sensivel",
    aliases: ["menuhentai", "sensitive"],
    description: "Mostra o status da categoria sensível controlada por feature flag.",
    usage: "!sensivel",
    category: "sensitive",
    cooldownSeconds: 4,
    sensitive: true
  },
  async execute(context) {
    await context.reply("A categoria sensível está habilitada, mas sem comandos ativos por padrão neste plugin base.");
  }
};
