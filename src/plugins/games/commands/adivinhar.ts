import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

export const adivinharCommand: CommandModule = {
  definition: {
    name: "adivinhar",
    aliases: ["chute", "adivinha"],
    description: "Tente adivinhar o número secreto de 1 a 20 e ganhe moedas e XP.",
    usage: "!adivinhar <numero>",
    category: "games",
    cooldownSeconds: 3
  },
  async execute(context) {
    const guess = parseInt(context.args[0] || "", 10);
    if (!guess || guess < 1 || guess > 20) {
      await context.reply("🎯 Uso correto: *!adivinhar <número de 1 a 20>*\nExemplo: `!adivinhar 7`");
      return;
    }

    const secretNumber = Math.floor(Math.random() * 20) + 1;
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    if (guess === secretNumber) {
      const prize = 300;
      await context.repositories.economy.adjustBalance(
        context.sender,
        scope.scopeId,
        scope.scopeType,
        prize,
        "Acertou número secreto no jogo de adivinhação",
        "game_win"
      );

      const account = await context.repositories.economy.getOrCreate(
        context.sender,
        scope.scopeId,
        scope.scopeType
      );

      await context.reply(
        `🎯 *BULLSEYE! VOCÊ ACERTOU!* 🎯\n\n` +
        `✨ O número secreto era exatamente *${secretNumber}*!\n` +
        `🎁 Recompensa: +*${prize} SC* e +50 XP!\n\n` +
        `💰 Seu saldo: *${account.balance} SC* (${scope.scopeLabel})`
      );
      return;
    }

    const hint = guess < secretNumber ? "maior" : "menor";
    await context.reply(
      `❌ *Errou!* Você chutou *${guess}*, mas o número secreto era *${secretNumber}* (era ${hint}).\nTente outra vez!`
    );
  }
};
