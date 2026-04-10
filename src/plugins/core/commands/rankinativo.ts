import type { CommandModule } from "../../../core/types/command";
import { formatPhone } from "../../../core/utils/whatsapp";

export const inactiveRankCommand: CommandModule = {
  definition: {
    name: "rankinativo",
    aliases: [],
    description: "Mostra os membros menos ativos do grupo.",
    usage: "!rankinativo",
    category: "members",
    cooldownSeconds: 5,
    groupOnly: true
  },
  async execute(context) {
    const ranking = await context.repositories.activity.getRank(context.from, 10, false);
    await context.reply(
      ["Menor atividade:", ...ranking.map((entry, index) => `${index + 1}. ${formatPhone(entry.userId)} - ${entry.messages}`)].join("\n")
    );
  }
};
