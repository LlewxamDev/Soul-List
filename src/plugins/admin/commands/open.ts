import type { CommandModule } from "../../../core/types/command";

export const openCommand: CommandModule = {
  definition: {
    name: "open",
    aliases: ["abrirgp", "abrirgrupo", "grupoaberto"],
    description: "Abre o grupo para envio de mensagens.",
    usage: "!open",
    category: "admin",
    cooldownSeconds: 5,
    adminOnly: true,
    groupOnly: true
  },
  async execute(context) {
    await context.socket.groupSettingUpdate(context.from, "not_announcement");
    await context.repositories.groups.setOpen(context.from, true);
    await context.reply("Grupo aberto para os participantes.");
  }
};
