import type { CommandModule } from "../../../core/types/command";

export const rpgPlaceholderCommand: CommandModule = {
  definition: {
    name: "rpg",
    aliases: ["menurpg"],
    description: "Hub da base de economia e RPG.",
    usage: "!rpg",
    category: "rpg",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply("A base de RPG/economia está preparada. Novas mecânicas podem ser adicionadas por plugins.");
  }
};
