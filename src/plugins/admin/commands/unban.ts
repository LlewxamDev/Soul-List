import type { CommandModule } from "../../../core/types/command";
import { extractTargetJid } from "../../../core/utils/whatsapp";

export const unbanCommand: CommandModule = {
  definition: {
    name: "unban",
    aliases: [],
    description: "Remove o banimento de um usuário no bot.",
    usage: "!unban @usuario",
    category: "moderation",
    cooldownSeconds: 5,
    ownerOnly: true
  },
  async execute(context) {
    const target = extractTargetJid(context.rawMessage);
    if (!target) {
      await context.reply("Marque ou responda a mensagem do usuário.");
      return;
    }
    await context.repositories.users.setBanned(target, false);
    await context.reply(`Usuário ${target.split("@")[0]} desbanido no Soul-List.`);
  }
};
