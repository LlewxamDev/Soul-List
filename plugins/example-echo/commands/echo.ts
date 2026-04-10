import type { CommandModule } from "../../../src/core/types/command";

export const echoCommand: CommandModule = {
  definition: {
    name: "echo",
    aliases: [],
    description: "Plugin externo de exemplo que repete o texto informado.",
    usage: "!echo <texto>",
    category: "fun",
    cooldownSeconds: 2
  },
  async execute(context) {
    await context.reply(context.argString || "Nada para ecoar.");
  }
};
