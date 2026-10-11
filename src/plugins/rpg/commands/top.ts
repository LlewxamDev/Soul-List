import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

export const topCommand: CommandModule = {
  definition: {
    name: "top",
    aliases: ["rank", "ranking", "placar"],
    description: "Exibe o ranking dos usuários com maior saldo de moedas no escopo atual.",
    usage: "!top",
    category: "rpg",
    cooldownSeconds: 5
  },
  async execute(context) {
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    const leaders = await context.repositories.economy.getLeaderboard(scope.scopeId, 10);

    if (leaders.length === 0) {
      await context.reply("📊 Ainda não há registros econômicos suficientes para montar o ranking neste escopo.");
      return;
    }

    const medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    const mentions: string[] = [];

    const lines = leaders.map((item, index) => {
      const medal = medals[index] || `#${index + 1}`;
      const userNumber = item.userId.split("@")[0] || item.userId;
      mentions.push(item.userId);
      return `${medal} *@${userNumber}* — *${item.balance.toLocaleString()} SC* (Nv. ${item.level})`;
    });

    const header =
      `🏆 *RANKING DOS MAIS RICOS* 🏆\n` +
      `🌐 *Escopo:* ${scope.scopeLabel}\n\n` +
      lines.join("\n") +
      `\n\n💡 _Acumule SoulCoins com !daily, !trabalhar e minigames!_`;

    await context.replyWithMentions(header, mentions);
  }
};
