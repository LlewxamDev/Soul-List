import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

export const dailyCommand: CommandModule = {
  definition: {
    name: "daily",
    aliases: ["diario", "recompensa"],
    description: "Resgata a sua recompensa diária de moedas e XP.",
    usage: "!daily",
    category: "rpg",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.isGroup) {
      await context.react("❌");
      await context.reply("❌ *Comando indisponível no privado!*\nO *!daily* só pode ser resgatado dentro de grupos.");
      return;
    }

    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);
    const result = await context.repositories.economy.claimDaily(
      context.sender,
      scope.scopeId,
      scope.scopeType,
      500
    );

    if (!result.success && result.timeLeftMs) {
      const hours = Math.floor(result.timeLeftMs / (1000 * 60 * 60));
      const mins = Math.floor((result.timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
      await context.react("⏳");
      await context.reply(
        `⏳ *Você já resgatou seu Daily hoje!*\nVolte em *${hours}h ${mins}m* para resgatar novamente.`
      );
      return;
    }

    await context.react("🎁");
    await context.reply(
      [
        `╭─ 🎁 *RECOMPENSA DIÁRIA RESGATADA!*`,
        `├ 💰 Você recebeu: *+${result.amount} moedas*`,
        `├ 🔮 Ganho de experiência: *+50 XP*`,
        `├ 🏦 Novo Saldo: *${result.newBalance?.toLocaleString("pt-BR")} moedas*`,
        `├ 🌐 Escopo: *${scope.scopeLabel}*`,
        `╰─────────────────────`,
        `_Dica: volte amanhã para continuar sua sequência!_`
      ].join("\n")
    );
  }
};
