import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

export const caraOuCoroaCommand: CommandModule = {
  definition: {
    name: "caraoucoroa",
    aliases: ["moeda", "coinflip"],
    description: "Jogue cara ou coroa (com ou sem aposta de moedas).",
    usage: "!caraoucoroa <cara|coroa> [aposta]",
    category: "games",
    cooldownSeconds: 3
  },
  async execute(context) {
    const rawChoice = context.args[0]?.toLowerCase().trim();
    if (!rawChoice || !["cara", "coroa"].includes(rawChoice)) {
      await context.reply("🪙 Uso correto: *!caraoucoroa <cara|coroa> [aposta]*\nExemplo: `!caraoucoroa cara 50`");
      return;
    }

    const playerChoice = rawChoice as "cara" | "coroa";
    const coinResult: "cara" | "coroa" = Math.random() < 0.5 ? "cara" : "coroa";
    const won = playerChoice === coinResult;

    const betAmount = parseInt(context.args[1] || "0", 10);
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    if (betAmount > 0) {
      const account = await context.repositories.economy.getOrCreate(
        context.sender,
        scope.scopeId,
        scope.scopeType
      );

      if (account.balance < betAmount) {
        await context.reply(
          `❌ Você não possui saldo suficiente para apostar *${betAmount} SC*.\n` +
          `💰 Saldo disponível: *${account.balance} SC*`
        );
        return;
      }

      if (won) {
        await context.repositories.economy.adjustBalance(
          context.sender,
          scope.scopeId,
          scope.scopeType,
          betAmount,
          "Vitória no Cara ou Coroa",
          "game_win"
        );
      } else {
        await context.repositories.economy.adjustBalance(
          context.sender,
          scope.scopeId,
          scope.scopeType,
          -betAmount,
          "Derrota no Cara ou Coroa",
          "game_loss"
        );
      }

      const updatedAccount = await context.repositories.economy.getOrCreate(
        context.sender,
        scope.scopeId,
        scope.scopeType
      );

      await context.reply(
        `🪙 *CARA OU COROA* 🪙\n\n` +
        `🌀 A moeda foi lançada para o alto...\n` +
        `✨ E caiu: *${coinResult.toUpperCase()}*!\n\n` +
        (won
          ? `🎉 *ACERTOU!* Você ganhou +*${betAmount} SC*!`
          : `💥 *ERROU!* Você perdeu -*${betAmount} SC*!`) +
        `\n\n💰 Saldo atualizado: *${updatedAccount.balance} SC* (${scope.scopeLabel})`
      );
      return;
    }

    await context.reply(
      `🪙 *CARA OU COROA* 🪙\n\n` +
      `🌀 A moeda girou e caiu em: *${coinResult.toUpperCase()}*!\n\n` +
      (won ? `🎉 Você escolheu *${playerChoice}* e acertou!` : `😅 Você escolheu *${playerChoice}* e errou!`)
    );
  }
};
