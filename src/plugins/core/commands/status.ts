import type { CommandModule } from "../../../core/types/command";

export const statusCommand: CommandModule = {
  definition: {
    name: "status",
    aliases: [],
    description: "Resume a atividade atual do chat.",
    usage: "!status",
    category: "members",
    cooldownSeconds: 4
  },
  async execute(context) {
    const totalMessages = await context.repositories.activity.countTotalMessages(context.from);
    const isAfk = await context.repositories.afk.get(context.sender);
    await context.reply(
      [
        `Chat: ${context.from}`,
        `Mensagens rastreadas: ${totalMessages}`,
        `Você está AFK: ${isAfk ? "Sim" : "Não"}`,
        `Comando atual: ${context.command?.name ?? "n/d"}`
      ].join("\n")
    );
  }
};
