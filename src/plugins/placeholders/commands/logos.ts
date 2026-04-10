import type { CommandModule } from "../../../core/types/command";

export const logosPlaceholderCommand: CommandModule = {
  definition: {
    name: "logos",
    aliases: ["menulogos"],
    description: "Hub inicial da categoria de logos.",
    usage: "!logos",
    category: "logos",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply("A categoria de logos está pronta para receber geradores visuais por plugin.");
  }
};
