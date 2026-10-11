import type { BotPlugin } from "../../core/types/plugin";
import { vipCommand } from "./commands/vip";
import { comprarVipCommand } from "./commands/comprarvip";

const plugin: BotPlugin = {
  manifest: {
    id: "vip",
    name: "Sistema VIP",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["vip"]
  },
  commands: [
    vipCommand,
    comprarVipCommand
  ]
};

export default plugin;
