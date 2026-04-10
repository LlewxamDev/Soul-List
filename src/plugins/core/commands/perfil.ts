import type { CommandModule } from "../../../core/types/command";
import { formatPhone } from "../../../core/utils/whatsapp";

export const profileCommand: CommandModule = {
  definition: {
    name: "perfil",
    aliases: ["profile"],
    description: "Exibe o perfil básico do usuário.",
    usage: "!perfil",
    category: "members",
    cooldownSeconds: 3
  },
  async execute(context) {
    const user = await context.repositories.users.findById(context.sender);
    const economy = await context.repositories.economy.get(context.sender);
    await context.reply(
      [
        `Usuário: ${context.pushName}`,
        `Número: ${formatPhone(context.sender)}`,
        `Premium: ${context.isPremium ? "Sim" : "Não"}`,
        `Banido: ${user?.isBanned ? "Sim" : "Não"}`,
        `Saldo: ${economy?.balance ?? 0}`,
        `XP: ${economy?.xp ?? 0}`,
        `Nível: ${economy?.level ?? 1}`
      ].join("\n")
    );
  }
};
