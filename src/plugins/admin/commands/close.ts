import type { CommandModule } from "../../../core/types/command";

export const closeCommand: CommandModule = {
  definition: {
    name: "close",
    aliases: [],
    description: "Fecha o grupo para mensagens comuns.",
    usage: "!close",
    category: "admin",
    cooldownSeconds: 5,
    adminOnly: true,
    groupOnly: true
  },
  async execute(context) {
    await context.socket.groupSettingUpdate(context.from, "announcement");
    await context.repositories.groups.setOpen(context.from, false);
    await context.reply("Grupo fechado. Somente admins podem enviar mensagens.");
  }
};
