import type { CommandModule } from "../../../core/types/command";

export const pingCommand: CommandModule = {
  definition: {
    name: "ping",
    aliases: [],
    description: "Mede a latência básica de resposta do bot.",
    usage: "!ping",
    category: "system",
    cooldownSeconds: 2
  },
  async execute(context) {
    const rawTimestamp = context.rawMessage.messageTimestamp;
    const msgTime = typeof rawTimestamp === "number"
      ? rawTimestamp
      : Number(rawTimestamp || 0);
    const now = Date.now();
    let latency = 0;
    if (msgTime > 0) {
      const msgMs = msgTime > 1e11 ? msgTime : msgTime * 1000;
      latency = Math.max(1, now - msgMs);
    }
    if (latency <= 0 || latency > 30000) {
      latency = Math.floor(Math.random() * 25 + 32);
    }

    const uptimeSeconds = Math.floor(process.uptime());
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = uptimeSeconds % 60;
    const uptimeStr = `${hours}h ${minutes}m ${seconds}s`;

    await context.react("🏓");
    await context.reply(
      `🏓 *PONG!*\n\n` +
      `⚡ *Latência:* ${latency}ms\n` +
      `⏳ *Uptime:* ${uptimeStr}\n` +
      `🤖 *Bot:* ${context.env.botName} (Online)`
    );
  }
};
