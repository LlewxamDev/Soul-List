import type { CommandModule } from "../../../core/types/command";
import { extractTargetJid } from "../../../core/utils/whatsapp";

export const setPremiumCommand: CommandModule = {
  definition: {
    name: "setpremium",
    aliases: ["premium"],
    description: "Concede premium a um usuário por alguns dias.",
    usage: "!setpremium @usuario <dias>",
    category: "owner",
    cooldownSeconds: 5,
    ownerOnly: true
  },
  async execute(context) {
    const target = extractTargetJid(context.rawMessage);
    const days = Number(context.args.at(-1) ?? "30");
    if (!target || Number.isNaN(days) || days <= 0) {
      await context.reply("Use: !setpremium @usuario <dias>");
      return;
    }
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    await context.repositories.premium.set(target, expiresAt);
    await context.reply(`Premium concedido para ${target.split("@")[0]} até ${expiresAt.toLocaleDateString("pt-BR")}.`);
  }
};
