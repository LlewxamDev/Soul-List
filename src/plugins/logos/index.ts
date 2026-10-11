import type { BotPlugin } from "../../core/types/plugin";
import { logoCommand } from "./commands/logo";
import { asciiCommand } from "./commands/ascii";

const plugin: BotPlugin = {
  manifest: {
    id: "logos",
    name: "Logos & Tipografia",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["logos"]
  },
  commands: [
    logoCommand,
    asciiCommand
  ]
};

export default plugin;
