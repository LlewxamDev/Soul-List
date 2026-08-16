import { CATEGORY_ORDER, type CommandCategory } from "../../../core/constants/categories";
import type { CommandContext } from "../../../core/types/context";
import type { CommandModule } from "../../../core/types/command";
import { CategoryMenuBuilder } from "../../../menu/builders/CategoryMenuBuilder";
import { InteractiveMenuBuilder } from "../../../menu/builders/InteractiveMenuBuilder";
import { MenuBuilder } from "../../../menu/builders/MenuBuilder";

const menuBuilder = new MenuBuilder();
const categoryBuilder = new CategoryMenuBuilder();
const interactiveBuilder = new InteractiveMenuBuilder();

function resolveCategory(value: string | undefined, context: CommandContext): CommandCategory | null {
  if (!value) {
    return null;
  }
  const normalized = value.toLowerCase();
  const category = CATEGORY_ORDER.find((entry) => entry === normalized);
  if (!category || !interactiveBuilder.visibleCategories(context).includes(category)) {
    return null;
  }
  return category;
}

export const menuCommand: CommandModule = {
  definition: {
    name: "menu",
    aliases: [
      "help",
      "menu2",
      "menuadm",
      "menuadms",
      "adm",
      "menu3",
      "menudono",
      "donomenu",
      "menu4",
      "brincadeiras",
      "menu5",
      "logos",
      "menulogo",
      "menulogos",
      "menu6",
      "menu7",
      "efeitos",
      "efeitoimg",
      "efeitosimg",
      "menu9",
      "menuvip",
      "menu10",
      "menucoins"
    ],
    description: "Abre o menu interativo e navega por categorias e comandos.",
    usage: "!menu [categorias|categoria]",
    category: "info",
    cooldownSeconds: 3
  },
  async execute(context) {
    const [first, second] = context.args.map((value) => value.toLowerCase());
    const prefix = context.prefix ?? context.env.defaultPrefix;

    if (!first) {
      await context.sendButtons(interactiveBuilder.buildHome(context));
      return;
    }

    if (["categorias", "categories", "menus", "menu"].includes(first)) {
      await context.sendList(interactiveBuilder.buildCategories(context));
      return;
    }

    if (["categoria", "category"].includes(first)) {
      const category = resolveCategory(second, context);
      if (!category) {
        await context.reply(`Categoria inválida. Use ${prefix}menu categorias para ver as opções.`);
        return;
      }
      await context.sendList(interactiveBuilder.buildCategory(context, category));
      return;
    }

    const directCategory = resolveCategory(first, context);
    if (directCategory) {
      await context.sendList(interactiveBuilder.buildCategory(context, directCategory));
      return;
    }

    const category = CATEGORY_ORDER.find((entry) => entry === first);
    if (category && !interactiveBuilder.visibleCategories(context).includes(category)) {
      await context.reply("Essa categoria está desativada neste bot.");
      return;
    }

    await context.reply(`Uso: ${prefix}menu ou ${prefix}menu categorias.`);
  }
};

export { menuBuilder, categoryBuilder };
