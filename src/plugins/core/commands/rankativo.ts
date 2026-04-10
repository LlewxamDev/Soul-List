import type { CommandModule } from "../../../core/types/command";
import { formatPhone } from "../../../core/utils/whatsapp";

export const activeRankCommand: CommandModule = {
  definition: {
    name: "rankativo",
    aliases: [],
    description: "Mostra os membros mais ativos do grupo.",
    usage: "!rankativo",
    category: "members",
    cooldownSeconds: 5,
    groupOnly: true
  },
  async execute(context) {
    const ranking = await context.repositories.activity.getRank(context.from, 10, true);
    await context.reply(
      ["Top atividade:", ...ranking.map((entry, index) => `${index + 1}. ${formatPhone(entry.userId)} - ${entry.messages}`)].join("\n")
    );
  }
};
