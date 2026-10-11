import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

const SLOTS_ITEMS = ["🍒", "🍋", "🍇", "💎", "7️⃣", "🔔", "⭐"];

export const cassinoCommand: CommandModule = {
  definition: {
    name: "cassino",
    aliases: ["slots", "roleta"],
    description: "Gire o caça-níqueis do cassino e multiplique suas moedas.",
    usage: "!cassino <aposta>",
    category: "games",
    cooldownSeconds: 4
  },
  async execute(context) {
    const betAmount = parseInt(context.args[0] || "0", 10);
    if (!betAmount || betAmount <= 0) {
      await context.reply("🎰 Uso correto: *!cassino <aposta>*\nExemplo: `!cassino 100`");
      return;
    }

    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    const account = await context.repositories.economy.getOrCreate(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    if (account.balance < betAmount) {
      await context.reply(
        `❌ Saldo insuficiente para apostar *${betAmount} SC*.\n` +
        `💰 Seu saldo atual: *${account.balance} SC*`
      );
      return;
    }

    // Sortear 3 rolos
    const reel1 = SLOTS_ITEMS[Math.floor(Math.random() * SLOTS_ITEMS.length)]!;
    const reel2 = SLOTS_ITEMS[Math.floor(Math.random() * SLOTS_ITEMS.length)]!;
    const reel3 = SLOTS_ITEMS[Math.floor(Math.random() * SLOTS_ITEMS.length)]!;

    let multiplier = 0;
    let resultMessage = "";

    if (reel1 === reel2 && reel2 === reel3) {
      // 3 iguais - JACKPOT
      multiplier = reel1 === "7️⃣" ? 10 : reel1 === "💎" ? 7 : 4;
      const prize = betAmount * multiplier;
      await context.repositories.economy.adjustBalance(
        context.sender,
        scope.scopeId,
        scope.scopeType,
        prize - betAmount,
        `Jackpot no Cassino (${reel1}${reel2}${reel3})`,
        "casino_jackpot"
      );
      resultMessage = `🚨🔥 *JACKPOT ÉPICO!* Multiplicador *x${multiplier}*! Você faturou +*${prize} SC*!`;
    } else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
      // 2 iguais - Mini Prêmio
      multiplier = 1.5;
      const profit = Math.floor(betAmount * 0.5);
      await context.repositories.economy.adjustBalance(
        context.sender,
        scope.scopeId,
        scope.scopeType,
        profit,
        "Par de símbolos no Cassino",
        "casino_win"
      );
      resultMessage = `🎉 *DOIS IGUAIS!* Você recuperou a aposta e ganhou +*${profit} SC* de lucro!`;
    } else {
      // Perdeu
      await context.repositories.economy.adjustBalance(
        context.sender,
        scope.scopeId,
        scope.scopeType,
        -betAmount,
        "Derrota no Cassino",
        "casino_loss"
      );
      resultMessage = `💀 *NÃO FOI DESSA VEZ!* Você perdeu -*${betAmount} SC*. Tente a sorte novamente!`;
    }

    const updatedAccount = await context.repositories.economy.getOrCreate(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    await context.reply(
      `🎰 *CASSINO SOUL-LIST* 🎰\n\n` +
      `┌──────────────┐\n` +
      `│  [ ${reel1} | ${reel2} | ${reel3} ]  │\n` +
      `└──────────────┘\n\n` +
      `${resultMessage}\n\n` +
      `💰 Saldo: *${updatedAccount.balance} SC* (${scope.scopeLabel})`
    );
  }
};
