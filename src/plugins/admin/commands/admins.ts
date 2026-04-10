import type { CommandModule } from "../../../core/types/command";
import { formatPhone, listAdmins } from "../../../core/utils/whatsapp";

export const adminsCommand: CommandModule = {
  definition: {
    name: "admins",
    aliases: [],
    description: "Lista os administradores do grupo.",
    usage: "!admins",
    category: "admin",
    cooldownSeconds: 4,
    groupOnly: true
  },
  async execute(context) {
    const metadata = await context.socket.groupMetadata(context.from);
    const admins = listAdmins(metadata);
    await context.reply(["Admins do grupo:", ...admins.map((jid) => `- ${formatPhone(jid)}`)].join("\n"));
  }
};
