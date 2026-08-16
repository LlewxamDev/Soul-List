import type { CommandModule } from "../../../core/types/command";

export const groupIdCommand: CommandModule = {
  definition: {
    name: "idgrupo",
    aliases: ["idgp", "groupid", "iddogrupo"],
    description: "Retorna o identificador/JID do grupo atual.",
    usage: "!idgrupo",
    category: "admin",
    cooldownSeconds: 4,
    groupOnly: true
  },
  async execute(context) {
    await context.reply(`JID deste grupo: *${context.from}*`);
  }
};
