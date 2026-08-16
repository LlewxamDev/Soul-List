import { CATEGORY_LABELS, type CommandCategory } from "../../core/constants/categories";
import type { CommandContext } from "../../core/types/context";

export class CategoryMenuBuilder {
  public build(context: CommandContext, category: CommandCategory): string {
    const commands = context.registry
      .listByCategory(category)
      .filter((command) => !command.hidden && (!command.sensitive || context.env.enableSensitiveCategories));
    if (commands.length === 0) {
      return `Nenhum comando cadastrado na categoria ${CATEGORY_LABELS[category]}.`;
    }

    return [
      `╭─ ${CATEGORY_LABELS[category]}`,
      ...commands.map((command) => `├ ${context.env.defaultPrefix}${command.name} · ${command.description}`),
      `╰ Use ${context.env.defaultPrefix}infocmd <comando> para mais detalhes.`
    ].join("\n");
  }
}
