import { CommandListBuilder } from "../../../menu/builders/CommandListBuilder";
import type { CommandModule } from "../../../core/types/command";

const builder = new CommandListBuilder();

export const listCommandsCommand: CommandModule = {
  definition: {
    name: "listacmd",
    aliases: ["commands"],
    description: "Lista todos os comandos disponíveis.",
    usage: "!listacmd [filtro]",
    category: "info",
    cooldownSeconds: 3
  },
  async execute(context) {
    await context.reply(builder.build(context, context.argString || undefined));
  }
};
