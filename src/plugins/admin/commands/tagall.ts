import type { CommandModule } from "../../../core/types/command";

export const tagAllCommand: CommandModule = {
  definition: {
    name: "tagall",
    aliases: [],
    description: "Marca todos os participantes do grupo.",
    usage: "!tagall [mensagem]",
    category: "admin",
    cooldownSeconds: 10,
    adminOnly: true,
    groupOnly: true
  },
  async execute(context) {
    const metadata = await context.socket.groupMetadata(context.from);
    const mentions = metadata.participants.map((participant) => participant.id);
    const lines = mentions.map((jid) => `@${jid.split("@")[0]}`);
    await context.socket.sendMessage(
      context.from,
      {
        text: [context.argString || "Chamada geral do grupo:", ...lines].join("\n"),
        mentions
      },
      { quoted: context.rawMessage }
    );
  }
};
