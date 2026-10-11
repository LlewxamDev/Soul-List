import type { CommandModule } from "../../../core/types/command";

export const beijarCommand: CommandModule = {
  definition: {
    name: "beijar",
    aliases: ["kiss", "beijo"],
    description: "Mande um beijo carinhoso para outro membro do grupo.",
    usage: "!beijar @usuario",
    category: "fun",
    cooldownSeconds: 3,
    groupOnly: true
  },
  async execute(context) {
    const target = context.mentions[0] || (context.quotedSender ?? "");
    if (!target) {
      await context.reply("💋 Mencione quem você deseja beijar!\nExemplo: `!beijar @usuario`");
      return;
    }

    if (target === context.sender) {
      await context.reply("😘 Você se olhou no espelho e deu um beijinho em si mesmo... Que amor próprio!");
      return;
    }

    const senderNumber = context.sender.split("@")[0] || context.sender;
    const targetNumber = target.split("@")[0] || target;

    const messages = [
      `💋 *@${senderNumber}* deu um beijo apaixonado em *@${targetNumber}*! Que clima gostoso!`,
      `🥰 *@${senderNumber}* roubou um beijo de *@${targetNumber}* sem pedir licença!`,
      `😘 *@${senderNumber}* mandou um beijinho carinhoso na bochecha de *@${targetNumber}*!`
    ];
    const phrase = messages[Math.floor(Math.random() * messages.length)]!;

    await context.replyWithMentions(phrase, [context.sender, target]);
  }
};
