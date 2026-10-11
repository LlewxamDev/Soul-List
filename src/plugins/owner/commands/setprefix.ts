import type { CommandModule } from "../../../core/types/command";

export const setPrefixCommand: CommandModule = {
  definition: {
    name: "setprefix",
    aliases: ["mudaprefixo", "prefixo", "prefix"],
    description: "Altera o prefixo padrão de comandos do bot.",
    usage: "!setprefix <novo_prefixo>",
    category: "owner",
    cooldownSeconds: 2,
    ownerOnly: true
  },
  async execute(context) {
    const newPrefix = context.args[0]?.trim();
    if (!newPrefix) {
      await context.reply(
        "Informe o novo prefixo desejado.\n" +
        "Exemplo: `!setprefix .` ou `!setprefix !`"
      );
      return;
    }

    if (newPrefix.length > 3) {
      await context.reply("O prefixo deve ter no máximo 3 caracteres.");
      return;
    }

    await context.repositories.settings.set("bot_prefix", newPrefix);
    context.env.prefixes = [newPrefix];
    context.env.defaultPrefix = newPrefix;

    await context.react("✅");
    await context.reply(
      `✅ *Prefixo alterado com sucesso para:* \`[ ${newPrefix} ]\`\n\n` +
      `Agora os comandos devem ser executados com \`${newPrefix}\` (ex: \`${newPrefix}menu\`).`
    );
  }
};
