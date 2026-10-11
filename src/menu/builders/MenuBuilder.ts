import type { CommandContext } from "../../core/types/context";
import { formatDateTime, getGreeting } from "../../core/utils/time";

export class MenuBuilder {
  public build(context: CommandContext): string {
    const categories = context.registry.categories();
    const totalCount = categories.reduce((sum, cat) => sum + context.registry.listByCategory(cat).length, 0);

    return [
      `╭─ 🤖 *${context.env.botName.toUpperCase()} - MENU PRINCIPAL*`,
      `├ ${getGreeting(context.env)}, *${context.pushName}*!`,
      `├`,
      `├ 👑 *Dono:* ${context.env.ownerName}`,
      `├ 💎 *Premium:* ${context.isPremium ? "Sim" : "Não"}`,
      `├ ⚡ *Prefixo:* [ ${context.prefix ?? context.env.defaultPrefix} ]`,
      `├ 📊 *Total de Comandos:* ${totalCount.toLocaleString("pt-BR")}`,
      `├ 📂 *Categorias:* ${categories.length} ativas`,
      `├ 🕐 *Data/Hora:* ${formatDateTime(context.env)}`,
      `├─────────────────────`,
      `├ 💡 *Como usar:*`,
      `├ Toque no botão *📑 ABRIR LISTA DE COMANDOS* abaixo para navegar`,
      `╰ Ou busque direto: *${context.prefix ?? context.env.defaultPrefix}menu <comando>* (ex: *!menu beijar*)`
    ].join("\n");
  }
}
