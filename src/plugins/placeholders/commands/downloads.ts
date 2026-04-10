import type { CommandModule } from "../../../core/types/command";

export const downloadsPlaceholderCommand: CommandModule = {
  definition: {
    name: "downloads",
    aliases: ["menubaixar"],
    description: "Hub inicial da categoria de downloads.",
    usage: "!downloads",
    category: "downloads",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply("A área de downloads está preparada como plugin e será expandida com adaptadores específicos.");
  }
};
