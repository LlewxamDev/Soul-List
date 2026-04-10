import type { CommandModule } from "../../../core/types/command";
import { extractTargetJid } from "../../../core/utils/whatsapp";

export const warnCommand: CommandModule = {
  definition: {
    name: "warn",
    aliases: [],
    description: "Adiciona um aviso a um participante.",
    usage: "!warn @usuario [motivo]",
    category: "moderation",
    cooldownSeconds: 5,
    adminOnly: true,
    groupOnly: true
  },
  async execute(context) {
    const target = extractTargetJid(context.rawMessage);
    if (!target) {
      await context.reply("Marque ou responda a mensagem do usuário que será advertido.");
      return;
    }
    const reason = context.argString || "Sem motivo informado.";
    await context.repositories.warnings.add(context.from, target, reason, context.sender);
    const count = await context.repositories.warnings.count(context.from, target);
    await context.reply(`Aviso aplicado em ${target.split("@")[0]}. Total de avisos: ${count}.`);
  }
};
