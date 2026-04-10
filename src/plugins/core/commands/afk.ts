import type { CommandModule } from "../../../core/types/command";

export const afkCommand: CommandModule = {
  definition: {
    name: "afk",
    aliases: [],
    description: "Marca você como ausente até a próxima mensagem.",
    usage: "!afk [motivo]",
    category: "members",
    cooldownSeconds: 5
  },
  async execute(context) {
    const reason = context.argString || "Sem motivo informado.";
    await context.repositories.afk.set(context.sender, reason);
    await context.reply(`AFK ativado: ${reason}`);
  }
};
