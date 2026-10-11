import type { CommandModule } from "../../../core/types/command";

export const abracarCommand: CommandModule = {
  definition: {
    name: "abracar",
    aliases: ["hug", "abraco"],
    description: "Dê um abraço aconchegante em outro participante do grupo.",
    usage: "!abracar @usuario",
    category: "fun",
    cooldownSeconds: 3,
    groupOnly: true
  },
  async execute(context) {
    const target = context.mentions[0] || (context.quotedSender ?? "");
    if (!target) {
      await context.reply("🤗 Mencione quem você quer abraçar!\nExemplo: `!abracar @usuario`");
      return;
    }

    if (target === context.sender) {
      await context.reply("🫂 Você se abraçou bem forte... Todo mundo precisa de um autocuidado de vez em quando!");
      return;
    }

    const senderNumber = context.sender.split("@")[0] || context.sender;
    const targetNumber = target.split("@")[0] || target;

    const messages = [
      `🫂 *@${senderNumber}* deu um abraço caloroso e quentinho em *@${targetNumber}*! Tudo vai ficar bem.`,
      `🤗 *@${senderNumber}* correu e deu aquele abraço de urso em *@${targetNumber}*!`,
      `✨ *@${senderNumber}* envolveu *@${targetNumber}* em um abraço reconfortante cheio de carinho!`
    ];
    const phrase = messages[Math.floor(Math.random() * messages.length)]!;

    await context.replyWithMentions(phrase, [context.sender, target]);
  }
};
