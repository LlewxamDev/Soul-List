import { CATEGORY_ORDER } from "../../../core/constants/categories";
import { CategoryMenuBuilder } from "../../../menu/builders/CategoryMenuBuilder";
import { MenuBuilder } from "../../../menu/builders/MenuBuilder";
import type { CommandModule } from "../../../core/types/command";

const menuBuilder = new MenuBuilder();
const categoryBuilder = new CategoryMenuBuilder();

export const menuCommand: CommandModule = {
  definition: {
    name: "menu",
    aliases: ["help"],
    description: "Mostra o menu principal ou um submenu por categoria.",
    usage: "!menu [categoria]",
    category: "info",
    cooldownSeconds: 3
  },
  async execute(context) {
    const requestedCategory = context.args[0]?.toLowerCase();
    const category = CATEGORY_ORDER.find((entry) => entry === requestedCategory);
    await context.reply(category ? categoryBuilder.build(context, category) : menuBuilder.build(context));
  }
};
