import type { CommandModule } from "../../../core/types/command";

export const ligarBotCommand: CommandModule = {
  definition: {
    name: "ligarbot",
    aliases: ["onbot", "reativarbot", "ativarbot"],
    description: "Desativa o modo de manutenção, liberando o uso do bot para todos os membros.",
    usage: "!ligarbot",
    category: "owner",
    cooldownSeconds: 2,
    ownerOnly: true
  },
  async execute(context) {
    await context.repositories.settings.set("bot_maintenance", "false");
    await context.react("🔓");
    await context.reply(
      `🔓 *BOT REATIVADO COM SUCESSO!*\n\n` +
      `O bot voltou ao funcionamento público e todos os membros podem utilizar os comandos normalmente.`
    );
  }
};
