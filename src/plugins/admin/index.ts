import type { BotPlugin } from "../../core/types/plugin";
import { adminsCommand } from "./commands/admins";
import { banCommand } from "./commands/ban";
import { closeCommand } from "./commands/close";
import { muteCommand } from "./commands/mute";
import { openCommand } from "./commands/open";
import { tagAllCommand } from "./commands/tagall";
import { unbanCommand } from "./commands/unban";
import { warnCommand } from "./commands/warn";

const plugin: BotPlugin = {
  manifest: {
    id: "admin",
    name: "Admin Commands",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["admin", "moderation"]
  },
  commands: [adminsCommand, tagAllCommand, warnCommand, banCommand, unbanCommand, muteCommand, openCommand, closeCommand]
};

export default plugin;
