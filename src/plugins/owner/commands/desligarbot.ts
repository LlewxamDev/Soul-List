import type { CommandModule } from "../../../core/types/command";

export const desligarBotCommand: CommandModule = {
  definition: {
    name: "desligarbot",
    aliases: ["manutencao", "offbot", "desativarbot"],
    description: "Ativa o modo de manutenção, restringindo o uso do bot exclusivamente ao dono.",
    usage: "!desligarbot",
    category: "owner",
    cooldownSeconds: 2,
    ownerOnly: true
  },
  async execute(context) {
    await context.repositories.settings.set("bot_maintenance", "true");
    await context.react("🔒");
    await context.reply(
      `🔒 *MODO MANUTENÇÃO ATIVADO!*\n\n` +
      `O bot agora está pausado para membros comuns e responderá apenas a você (${context.env.ownerName}).\n\n` +
      `Para reativar para todos os usuários, envie: *${context.prefix ?? context.env.defaultPrefix}ligarbot*`
    );
  }
};
