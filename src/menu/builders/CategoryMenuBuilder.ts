import { CATEGORY_LABELS, type CommandCategory } from "../../core/constants/categories";
import type { CommandContext } from "../../core/types/context";

export class CategoryMenuBuilder {
  public build(context: CommandContext, category: CommandCategory, page = 1, totalPages = 1): string {
    const commands = context.registry.listByCategory(category);
    const prefix = context.prefix ?? context.env.defaultPrefix;
    const catLabel = CATEGORY_LABELS[category] || category;

    if (commands.length === 0) {
      return `Nenhum comando cadastrado na categoria *${catLabel}*.`;
    }

    const pageInfo = totalPages > 1 ? ` (Pág. ${page}/${totalPages})` : "";

    return [
      `╭─ 📂 *CATEGORIA: ${catLabel.toUpperCase()}*${pageInfo}`,
      `├ 📊 *Total de Comandos:* ${commands.length}`,
      `├ ⚡ *Prefixo:* [ ${prefix} ]`,
      `╰─────────────────────`,
      `💡 *Dica:* Digite *${prefix}menu <nome>* (ex: *${prefix}menu beijar*) para buscar qualquer comando no topo!`,
      ``,
      `Toque no botão *📑 ABRIR LISTA DE COMANDOS* abaixo para navegar.`
    ].join("\n");
  }
}
