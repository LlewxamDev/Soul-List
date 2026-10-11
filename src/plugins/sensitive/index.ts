import type { BotPlugin } from "../../core/types/plugin";
import { sensivelCommand } from "./commands/sensivel";

const plugin: BotPlugin = {
  manifest: {
    id: "sensitive",
    name: "Moderação Sensível",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["sensitive"]
  },
  commands: [
    sensivelCommand
  ]
};

export default plugin;
