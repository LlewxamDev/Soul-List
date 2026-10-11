import type { CommandModule } from "../../../core/types/command";

export const dadoCommand: CommandModule = {
  definition: {
    name: "dado",
    aliases: ["roll", "dice"],
    description: "Joga um dado de 6 faces ou com o número de lados especificado.",
    usage: "!dado [lados]",
    category: "fun",
    cooldownSeconds: 2
  },
  async execute(context) {
    const sides = parseInt(context.args[0] || "6", 10);
    const validSides = isNaN(sides) || sides < 2 ? 6 : Math.min(sides, 1000);

    const roll = Math.floor(Math.random() * validSides) + 1;

    await context.react("🎲");
    await context.reply(`🎲 *DADO D${validSides}* 🎲\n\nVocê rolou e tirou: *${roll}*!`);
  }
};
