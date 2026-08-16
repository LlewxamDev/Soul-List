import { extractTargetJid, formatPhone } from "../../../core/utils/whatsapp";
import type { CommandModule } from "../../../core/types/command";

export const trackCommand: CommandModule = {
  definition: {
    name: "track",
    aliases: ["rastrear", "rastreamento", "rastrearalvo"],
    description: "Rastreia o status ficcional de um alvo dentro do RPG medieval.",
    usage: "!track @usuario",
    category: "rpg",
    cooldownSeconds: 8,
    groupOnly: true
  },
  async execute(context) {
    const target = extractTargetJid(context.rawMessage);
    if (!target) {
      await context.reply("Mencione um alvo para rastrear dentro do RPG.");
      return;
    }
    const wanted = (await context.repositories.rpg.listWanted()).find((entry) => entry.userId === target);
    const jailed = await context.repositories.rpg.getJail(context.from, target);
    const role = await context.repositories.rpg.getRole(context.from, target);
    const status = jailed ? `preso na cela ${jailed.cell}` : wanted ? "procurado pelo reino" : "livre no território";
    await context.sendMentionedText(`🧭 *Rastreamento RPG de @${formatPhone(target)}*\nStatus ficcional: *${status}*\nCargo: *${role}*\n\nEste comando não consulta localização, GPS, presença ou qualquer dado real do WhatsApp.`, [target]);
  }
};
