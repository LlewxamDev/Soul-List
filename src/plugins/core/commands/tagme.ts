import type { CommandModule } from "../../../core/types/command";

export const tagMeCommand: CommandModule = {
  definition: {
    name: "tagme",
    aliases: [],
    description: "Marca você na conversa.",
    usage: "!tagme",
    category: "fun",
    cooldownSeconds: 3
  },
  async execute(context) {
    await context.socket.sendMessage(
      context.from,
      {
        text: `Você pediu um ping pessoal, @${context.sender.split("@")[0]}`,
        mentions: [context.sender]
      },
      { quoted: context.rawMessage }
    );
  }
};
