import type { CommandModule } from "../../../core/types/command";

export const tapaCommand: CommandModule = {
  definition: {
    name: "tapa",
    aliases: ["slap", "bofete"],
    description: "Dê um tapa cômico em alguém para colocar a pessoa no lugar.",
    usage: "!tapa @usuario",
    category: "fun",
    cooldownSeconds: 3,
    groupOnly: true
  },
  async execute(context) {
    const target = context.mentions[0] || (context.quotedSender ?? "");
    if (!target) {
      await context.reply("👋 Mencione quem merece tomar um tapa!\nExemplo: `!tapa @usuario`");
      return;
    }

    if (target === context.sender) {
      await context.reply("🤦 Você deu um tapa na própria testa de tanta vergonha alheia!");
      return;
    }

    const senderNumber = context.sender.split("@")[0] || context.sender;
    const targetNumber = target.split("@")[0] || target;

    const messages = [
      `💥 *PLACT!* *@${senderNumber}* deu um tapa cinematográfico na cara de *@${targetNumber}*! Acorda pra vida!`,
      `👋 *@${senderNumber}* acertou uma bofetada estalada em *@${targetNumber}*! O barulho ecoou pelo grupo todo!`,
      `🥊 *@${senderNumber}* perdeu a paciência e deu um tapão pedagógico em *@${targetNumber}*!`
    ];
    const phrase = messages[Math.floor(Math.random() * messages.length)]!;

    await context.replyWithMentions(phrase, [context.sender, target]);
  }
};
