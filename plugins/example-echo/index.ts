import type { BotPlugin } from "../../src/core/types/plugin";
import { echoCommand } from "./commands/echo";

const plugin: BotPlugin = {
  manifest: {
    id: "example-echo",
    name: "Example Echo Plugin",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["fun"]
  },
  commands: [echoCommand]
};

export default plugin;
