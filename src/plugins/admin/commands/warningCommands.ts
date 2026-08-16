import { extractTargetJid, formatPhone } from "../../../core/utils/whatsapp";
import type { CommandModule } from "../../../core/types/command";

export const warnCommand: CommandModule = {
  definition: {
    name: "advertir",
    aliases: ["adverter", "warn", "adv"],
    description: "Adverte um participante; a terceira advertência remove o usuário.",
    usage: "!advertir @usuario",
    category: "moderation",
    cooldownSeconds: 6,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const target = extractTargetJid(context.rawMessage);
    if (!target) {
      await context.reply("Mencione ou responda à mensagem do usuário que será advertido.");
      return;
    }
    if (target === context.sender) {
      await context.reply("Você não pode advertir a si mesmo.");
      return;
    }
    const count = await context.repositories.warnings.count(context.from, target);
    const next = count + 1;
    await context.repositories.warnings.add(context.from, target, context.argString || "Advertência administrativa", context.sender);
    if (next >= 3) {
      await context.sendMentionedText(`@${formatPhone(target)} atingiu 3/3 advertências e será removido.`, [target]);
      await context.socket.groupParticipantsUpdate(context.from, [target], "remove");
      await context.repositories.warnings.clear(context.from, target);
      return;
    }
    await context.sendMentionedText(`@${formatPhone(target)} recebeu a advertência ${next}/3.`, [target]);
  }
};

export const removeWarningCommand: CommandModule = {
  definition: {
    name: "rmadv",
    aliases: ["removeradv", "clearwarn"],
    description: "Remove todas as advertências de um participante.",
    usage: "!rmadv @usuario",
    category: "moderation",
    cooldownSeconds: 5,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const target = extractTargetJid(context.rawMessage);
    if (!target) {
      await context.reply("Mencione ou responda à mensagem do usuário que terá as advertências removidas.");
      return;
    }
    const count = await context.repositories.warnings.count(context.from, target);
    if (count === 0) {
      await context.reply("Esse usuário não possui advertências neste grupo.");
      return;
    }
    await context.repositories.warnings.clear(context.from, target);
    await context.sendMentionedText(`As advertências de @${formatPhone(target)} foram removidas.`, [target]);
  }
};

export const warningCommands: CommandModule[] = [warnCommand, removeWarningCommand];
