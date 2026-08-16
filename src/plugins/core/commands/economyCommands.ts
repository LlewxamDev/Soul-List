import type { CommandModule } from "../../../core/types/command";

export const balanceCommand: CommandModule = {
  definition: {
    name: "coins",
    aliases: ["saldo", "estatisticas", "estatística", "moedas"],
    description: "Mostra o saldo de moedas e XP do usuário.",
    usage: "!coins",
    category: "fun",
    cooldownSeconds: 4
  },
  async execute(context) {
    const record = await context.repositories.economy.get(context.sender);
    await context.reply(`Saldo: *${record?.balance ?? 0}* N-Coins\nXP: *${record?.xp ?? 0}*\nNível: *${record?.level ?? 1}*`);
  }
};

export const slotCommand: CommandModule = {
  definition: {
    name: "cassino",
    aliases: ["slot"],
    description: "Joga uma rodada de slot usando N-Coins.",
    usage: "!cassino",
    category: "fun",
    cooldownSeconds: 8,
    groupOnly: true
  },
  async execute(context) {
    const current = await context.repositories.economy.get(context.sender);
    if ((current?.balance ?? 0) < 5) {
      await context.reply("Saldo insuficiente. Você precisa de pelo menos 5 N-Coins.");
      return;
    }
    const symbols = ["🍓", "🍒", "🍎", "🍉"];
    const result = Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
    const win = result[0] === result[1] && result[1] === result[2];
    const balance = await context.repositories.economy.adjustBalance(context.sender, win ? 65 : -5);
    await context.reply(`${result.join(" | ")}\n${win ? "Você ganhou 65 N-Coins!" : "Você perdeu 5 N-Coins."}\nSaldo atual: *${balance}* N-Coins.`);
  }
};

export const economyCommands: CommandModule[] = [balanceCommand, slotCommand];
