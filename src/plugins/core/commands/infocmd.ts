import { CommandInfoBuilder } from "../../../menu/builders/CommandInfoBuilder";
import type { CommandModule } from "../../../core/types/command";

const builder = new CommandInfoBuilder();

export const infoCommandCommand: CommandModule = {
  definition: {
    name: "infocmd",
    aliases: ["cmdinfo"],
    description: "Mostra os detalhes de um comando.",
    usage: "!infocmd <comando>",
    category: "info",
    cooldownSeconds: 3
  },
  async execute(context) {
    const target = context.args[0];
    if (!target || !context.registry.has(target)) {
      await context.reply("Informe um comando válido para consultar.");
      return;
    }
    await context.reply(builder.build(context.registry.get(target)));
  }
};
