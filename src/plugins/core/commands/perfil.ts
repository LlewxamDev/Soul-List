import type { CommandModule } from "../../../core/types/command";
import { formatPhone } from "../../../core/utils/whatsapp";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

export const profileCommand: CommandModule = {
  definition: {
    name: "perfil",
    aliases: ["profile"],
    description: "Exibe o perfil do usuário e seu saldo no escopo atual.",
    usage: "!perfil",
    category: "members",
    cooldownSeconds: 3
  },
  async execute(context) {
    const user = await context.repositories.users.findById(context.sender);
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);
    const economy = await context.repositories.economy.getOrCreate(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    const spouse = await context.repositories.family.getSpouse(context.sender);
    const spouseText = spouse
      ? `Casado(a) com @${spouse.targetUserId.split("@")[0]}`
      : "Solteiro(a)";

    const lines = [
      `╭─ 👤 *PERFIL DO USUÁRIO*`,
      `├ 🏷 *Nome:* ${context.pushName}`,
      `├ 📱 *Número:* ${formatPhone(context.sender)}`,
      `├ 💍 *Status:* ${spouseText}`,
      `├ ⭐ *VIP / Premium:* ${context.isPremium ? "Sim" : "Não"}`,
      `├ 🚫 *Banido:* ${user?.isBanned ? "Sim" : "Não"}`,
      `├ 💰 *Saldo:* ${economy.balance.toLocaleString("pt-BR")} moedas`,
      `├ 🔮 *XP:* ${economy.xp} | *Nível:* ${economy.level}`,
      `├ 🌐 *Escopo:* ${scope.scopeLabel} (${scope.scopeType})`,
      `╰─────────────────────`
    ];

    if (spouse) {
      await context.replyWithMentions(lines.join("\n"), [spouse.targetUserId]);
    } else {
      await context.reply(lines.join("\n"));
    }
  }
};
