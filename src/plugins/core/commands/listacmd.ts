import { menuCommand } from "./menu";
import type { CommandModule } from "../../../core/types/command";

export const listCommandsCommand: CommandModule = {
  definition: {
    name: "listacmd",
    aliases: ["commands", "todoscomandos"],
    description: "Lista todos os comandos disponíveis através do menu interativo ou filtra por termo.",
    usage: "!listacmd [filtro]",
    category: "info",
    cooldownSeconds: 3
  },
  async execute(context) {
    const filter = context.argString.trim();
    if (!filter) {
      await menuCommand.execute(context);
      return;
    }

    const matches = context.registry.all().filter(
      (cmd) =>
        !cmd.hidden &&
        (cmd.name.toLowerCase().includes(filter.toLowerCase()) ||
          cmd.category.toLowerCase().includes(filter.toLowerCase()) ||
          cmd.aliases.some((a) => a.toLowerCase().includes(filter.toLowerCase())))
    );

    if (matches.length === 0) {
      await context.reply(`Nenhum comando encontrado para o filtro "${filter}". Digite *!menu* para ver as categorias.`);
      return;
    }

    const rows = matches.slice(0, 20).map((cmd) => ({
      id: `${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
      title: `⚡ ${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
      description: cmd.description.slice(0, 50)
    }));

    await context.sendInteractiveButtons({
      title: `🔍 RESULTADO DA BUSCA: "${filter.toUpperCase()}"`,
      body: `Encontrado(s) *${matches.length}* comando(s) relacionado(s).\nToque no botão abaixo para ver a lista:`,
      footer: context.env.botName,
      menuTitle: "📑 VER COMANDOS ENCONTRADOS",
      sections: [
        {
          title: `⚡ RESULTADOS (${matches.length})`,
          rows
        },
        {
          title: "📂 NAVEGAÇÃO",
          rows: [
            {
              id: `${context.prefix ?? context.env.defaultPrefix}menu`,
              title: "🏠 Menu Principal",
              description: ""
            }
          ]
        }
      ]
    });
  }
};
