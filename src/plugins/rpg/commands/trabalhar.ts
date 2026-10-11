import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";
import { formatDuration } from "../../../core/utils/time";

export const trabalharCommand: CommandModule = {
  definition: {
    name: "trabalhar",
    aliases: ["work", "trampo"],
    description: "Trabalhe para ganhar moedas (SoulCoins) e XP com seu esforço diário.",
    usage: "!trabalhar",
    category: "rpg",
    cooldownSeconds: 3
  },
  async execute(context) {
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    const result = await context.repositories.economy.work(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    if (!result.success) {
      const waitSeconds = Math.ceil((result.timeLeftMs || 0) / 1000);
      await context.reply(
        `⏳ *Você já trabalhou recentemente!*\n` +
        `Descanse um pouco e volte em *${formatDuration(waitSeconds)}* para trabalhar novamente.`
      );
      return;
    }

    await context.reply(
      `💼 *EXPEDIENTE CONCLUÍDO!* 💼\n\n` +
      `🛠️ Função: *${result.job}*\n` +
      `💵 Salário: +*${result.amount} SC*\n` +
      `⭐ Experiência: +*${result.xpGained} XP*\n\n` +
      `💰 Saldo total: *${result.newBalance} SC* (${scope.scopeLabel})`
    );
  }
};
