import { CATEGORY_LABELS } from "../../core/constants/categories";
import type { CommandContext } from "../../core/types/context";
import { formatDateTime, getGreeting } from "../../core/utils/time";

export class MenuBuilder {
  public build(context: CommandContext): string {
    const categories = context.registry.categories().filter((category) =>
      category !== "sensitive" || context.env.enableSensitiveCategories
    );
    const lines = categories.map((category) => {
      const count = context.registry
        .listByCategory(category)
        .filter((command) => !command.hidden && (!command.sensitive || context.env.enableSensitiveCategories)).length;
      return `- ${CATEGORY_LABELS[category]}: ${count} comando(s)`;
    });

    return [
      `╭─ ${context.env.botName}`,
      `├ ${getGreeting(context.env)}, ${context.pushName}`,
      `├ Número: ${context.sender.split("@")[0]}`,
      `├ Dono: ${context.env.ownerName}`,
      `├ Premium: ${context.isPremium ? "Sim" : "Não"}`,
      `├ Prefixo: ${context.prefix ?? context.env.defaultPrefix}`,
      `├ Data/Hora: ${formatDateTime(context.env)}`,
      `├ Plugins: ${categories.length} categorias ativas`,
      "├",
      "├ Categorias:",
      ...lines.map((line) => `├ ${line}`),
      "├",
      `├ Use ${context.env.defaultPrefix}menu <categoria> para abrir um submenu.`,
      `╰ Use ${context.env.defaultPrefix}listacmd para listar tudo.`
    ].join("\n");
  }
}
