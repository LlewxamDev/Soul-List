import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";
import { formatDuration } from "../../../core/utils/time";

export const crimeCommand: CommandModule = {
  definition: {
    name: "crime",
    aliases: ["assalto", "roubo"],
    description: "Arrisque cometer um crime de RPG para lucrar ou ser multado.",
    usage: "!crime",
    category: "rpg",
    cooldownSeconds: 4
  },
  async execute(context) {
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    const result = await context.repositories.economy.crime(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    if (!result.success) {
      const waitSeconds = Math.ceil((result.timeLeftMs || 0) / 1000);
      await context.reply(
        `🚨 *A polícia ainda está patrulhando o local!*\n` +
        `Espere a poeira abaixar por *${formatDuration(waitSeconds)}* antes de arriscar novamente.`
      );
      return;
    }

    if (result.executed) {
      await context.reply(
        `🦹 *GOLPE BEM SUCEDIDO!* 🦹\n\n` +
        `📝 ${result.story}\n\n` +
        `💰 Lucro: +*${result.amount} SC*\n` +
        `⭐ Reputação: +*${result.xpGained} XP*\n\n` +
        `💵 Novo saldo: *${result.newBalance} SC* (${scope.scopeLabel})`
      );
    } else {
      await context.reply(
        `🚓 *DEU RUIM! A POLÍCIA CHEGOU!* 🚓\n\n` +
        `📝 ${result.story}\n\n` +
        `💸 Fiança/Multa: *${result.amount} SC*\n\n` +
        `💵 Saldo restante: *${result.newBalance} SC* (${scope.scopeLabel})`
      );
    }
  }
};
