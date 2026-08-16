import { CATEGORY_LABELS, CATEGORY_ORDER, type CommandCategory } from "../../core/constants/categories";
import type { CommandContext, InteractiveButtonOptions, InteractiveListOptions } from "../../core/types/context";
import type { RegisteredCommand } from "../../core/types/command";

function isVisible(context: CommandContext, command: RegisteredCommand): boolean {
  return !command.hidden && (!command.sensitive || context.env.enableSensitiveCategories);
}

function visibleCategories(context: CommandContext): CommandCategory[] {
  return CATEGORY_ORDER.filter((category) =>
    category !== "sensitive" || context.env.enableSensitiveCategories
  ).filter((category) => context.registry.listByCategory(category).some((command) => isVisible(context, command)));
}

function commandPrefix(context: CommandContext): string {
  return context.prefix ?? context.env.defaultPrefix;
}

export class InteractiveMenuBuilder {
  public async buildHome(context: CommandContext): Promise<InteractiveButtonOptions> {
    const prefix = commandPrefix(context);
    const persisted = await context.repositories.settings.getJson<{
      kind: "image" | "video";
      dataBase64: string;
      mimetype: string;
    }>("menu:media");
    const media = persisted?.dataBase64 ? Buffer.from(persisted.dataBase64, "base64") : undefined;
    return {
      text: [
        `╭─ ${context.env.botName}`,
        `├ Olá, ${context.pushName}.`,
        "├ Escolha uma opção para navegar pelos menus.",
        `╰ Prefixo ativo: ${prefix}`
      ].join("\n"),
      footer: "Soul-List · menu interativo",
      ...(media && persisted?.kind === "video"
        ? { video: media }
        : media
          ? { image: media }
          : context.env.menuMediaUrl
            ? { image: context.env.menuMediaUrl }
            : {}),
      buttons: [{ id: `${prefix}menu categorias`, text: "ABRIR MENUS" }]
    };
  }

  public buildCategories(context: CommandContext): InteractiveListOptions {
    const prefix = commandPrefix(context);
    const categories = visibleCategories(context);
    return {
      title: "Menu de categorias",
      description: "Selecione uma categoria para ver seus comandos.",
      footer: `Use ${prefix}menu para voltar ao início.`,
      buttonText: "VER CATEGORIAS",
      sections: [{
        title: "Categorias disponíveis",
        rows: categories.map((category) => ({
          id: `${prefix}menu categoria ${category}`,
          title: CATEGORY_LABELS[category],
          description: `${this.visibleCommands(context, category).length} comando(s)`
        }))
      }]
    };
  }

  public buildCategory(context: CommandContext, category: CommandCategory): InteractiveListOptions {
    const prefix = commandPrefix(context);
    const commands = this.visibleCommands(context, category);
    return {
      title: CATEGORY_LABELS[category],
      description: "Selecione um comando para executá-lo.",
      footer: `Use ${prefix}menu categorias para voltar às categorias.`,
      buttonText: `ABRIR ${CATEGORY_LABELS[category].toUpperCase()}`,
      sections: [{
        title: CATEGORY_LABELS[category],
        rows: [
          ...commands.map((command) => ({
            id: `${prefix}${command.name}`,
            title: `${prefix}${command.name}`,
            description: command.description
          })),
          {
            id: `${prefix}menu categorias`,
            title: "Voltar às categorias",
            description: "Retorna ao menu anterior."
          }
        ]
      }]
    };
  }

  public visibleCategories(context: CommandContext): CommandCategory[] {
    return visibleCategories(context);
  }

  public visibleCommands(context: CommandContext, category: CommandCategory): RegisteredCommand[] {
    return context.registry.listByCategory(category).filter((command) => isVisible(context, command));
  }
}
