import type { CommandModule } from "../../../core/types/command";

export const healthCommand: CommandModule = {
  definition: {
    name: "health",
    aliases: ["healthcheck"],
    description: "Mostra um resumo de saúde do runtime.",
    usage: "!health",
    category: "owner",
    cooldownSeconds: 3,
    ownerOnly: true
  },
  async execute(context) {
    await context.reply(
      [
        `Node: ${process.version}`,
        `PID: ${process.pid}`,
        `Memória RSS: ${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
        `Banco: ${context.env.databaseUrl}`,
        `Sessões: ${context.env.sessionDir}`
      ].join("\n")
    );
  }
};
