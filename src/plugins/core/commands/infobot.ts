import type { CommandModule } from "../../../core/types/command";

export const infoBotCommand: CommandModule = {
  definition: {
    name: "infobot",
    aliases: ["aboutbot"],
    description: "Mostra um resumo técnico do Soul-List.",
    usage: "!infobot",
    category: "info",
    cooldownSeconds: 3
  },
  async execute(context) {
    const commands = context.registry.all().filter((command) => !command.hidden);
    const categories = context.registry.categories();
    await context.reply(
      [
        `Bot: ${context.env.botName}`,
        `Dono: ${context.env.ownerName}`,
        `Prefixos: ${context.env.prefixes.join(", ")}`,
        `Categorias ativas: ${categories.length}`,
        `Comandos ativos: ${commands.length}`,
        `Plugins carregados dinamicamente via runtime plugin-first.`
      ].join("\n")
    );
  }
};
