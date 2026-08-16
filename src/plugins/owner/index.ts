import type { BotPlugin } from "../../core/types/plugin";
import { healthCommand } from "./commands/health";
import { pluginsCommand } from "./commands/plugins";
import { setPremiumCommand } from "./commands/setpremium";
import { menuMediaCommand } from "./commands/menuMedia";

const plugin: BotPlugin = {
  manifest: {
    id: "owner",
    name: "Owner Commands",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["owner"]
  },
  commands: [pluginsCommand, healthCommand, setPremiumCommand, menuMediaCommand]
};

export default plugin;
