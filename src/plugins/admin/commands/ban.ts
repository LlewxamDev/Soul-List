import type { CommandModule } from "../../../core/types/command";
import { extractTargetJid } from "../../../core/utils/whatsapp";

export const banCommand: CommandModule = {
  definition: {
    name: "ban",
    aliases: [],
    description: "Marca um usuário como banido no bot.",
    usage: "!ban @usuario",
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
    await context.repositories.users.setBanned(target, true);
    await context.reply(`Usuário ${target.split("@")[0]} banido no Soul-List.`);
  }
};
