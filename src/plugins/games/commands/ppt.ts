import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

type Move = "pedra" | "papel" | "tesoura";

export const pptCommand: CommandModule = {
  definition: {
    name: "ppt",
    aliases: ["jokenpo"],
    description: "Jogue Pedra, Papel e Tesoura contra o bot (com ou sem aposta de moedas).",
    usage: "!ppt <pedra|papel|tesoura> [aposta]",
    category: "games",
    cooldownSeconds: 3
  },
  async execute(context) {
    const rawChoice = context.args[0]?.toLowerCase().trim();
    if (!rawChoice || !["pedra", "papel", "tesoura"].includes(rawChoice)) {
      await context.reply("🎲 Uso correto: *!ppt <pedra|papel|tesoura> [aposta]*\nExemplo: `!ppt pedra 50`");
      return;
    }

    const playerMove = rawChoice as Move;
    const moves: Move[] = ["pedra", "papel", "tesoura"];
    const botMove = moves[Math.floor(Math.random() * moves.length)]!;

    const moveIcons: Record<Move, string> = {
      pedra: "🪨 Pedra",
      papel: "📄 Papel",
      tesoura: "✂️ Tesoura"
    };

    let result: "win" | "lose" | "draw" = "draw";
    if (playerMove === botMove) {
      result = "draw";
    } else if (
      (playerMove === "pedra" && botMove === "tesoura") ||
      (playerMove === "papel" && botMove === "pedra") ||
      (playerMove === "tesoura" && botMove === "papel")
    ) {
      result = "win";
    } else {
      result = "lose";
    }

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
          `❌ Você não tem moedas suficientes para apostar *${betAmount} SC*.\n` +
          `💰 Seu saldo atual: *${account.balance} SC*`
        );
        return;
      }

      let netChange = 0;
      let outcomeText = "";

      if (result === "win") {
        netChange = betAmount;
        await context.repositories.economy.adjustBalance(
          context.sender,
          scope.scopeId,
          scope.scopeType,
          netChange,
          "Vitória no Jokenpô (PPT)",
          "game_win"
        );
        outcomeText = `🎉 *VOCÊ VENCEU!* Ganhou +*${betAmount} SC*!`;
      } else if (result === "lose") {
        netChange = -betAmount;
        await context.repositories.economy.adjustBalance(
          context.sender,
          scope.scopeId,
          scope.scopeType,
          netChange,
          "Derrota no Jokenpô (PPT)",
          "game_loss"
        );
        outcomeText = `💥 *VOCÊ PERDEU!* Perdeu -*${betAmount} SC*!`;
      } else {
        outcomeText = `🤝 *EMPATE!* Sua aposta de *${betAmount} SC* foi devolvida.`;
      }

      const updatedAccount = await context.repositories.economy.getOrCreate(
        context.sender,
        scope.scopeId,
        scope.scopeType
      );

      await context.reply(
        `🎮 *JOKENPÔ COM APOSTA* 🎮\n\n` +
        `👤 Você escolheu: ${moveIcons[playerMove]}\n` +
        `🤖 Bot escolheu: ${moveIcons[botMove]}\n\n` +
        `${outcomeText}\n\n` +
        `💰 Novo saldo: *${updatedAccount.balance} SC* (${scope.scopeLabel})`
      );
      return;
    }

    const resultMessage =
      result === "win"
        ? "🎉 *Parabéns, você venceu!*"
        : result === "lose"
        ? "💥 *O bot venceu dessa vez!*"
        : "🤝 *Deu empate!*";

    await context.reply(
      `🎮 *JOKENPÔ* 🎮\n\n` +
      `👤 Você: ${moveIcons[playerMove]}\n` +
      `🤖 Bot: ${moveIcons[botMove]}\n\n` +
      `${resultMessage}\n\n` +
      `💡 _Dica: Você pode apostar moedas usando !ppt <jogada> <valor>_`
    );
  }
};
