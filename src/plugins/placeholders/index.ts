import type { BotPlugin } from "../../core/types/plugin";
import { downloadsPlaceholderCommand } from "./commands/downloads";
import { gamesPlaceholderCommand } from "./commands/games";
import { logosPlaceholderCommand } from "./commands/logos";
import { rpgPlaceholderCommand } from "./commands/rpg";
import { sensitivePlaceholderCommand } from "./commands/sensitive";
import { vipPlaceholderCommand } from "./commands/vip";

const plugin: BotPlugin = {
  manifest: {
    id: "placeholders",
    name: "Expansion Placeholders",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["downloads", "logos", "vip", "rpg", "games", "sensitive"]
  },
  commands: [
    downloadsPlaceholderCommand,
    logosPlaceholderCommand,
    vipPlaceholderCommand,
    rpgPlaceholderCommand,
    gamesPlaceholderCommand,
    sensitivePlaceholderCommand
  ]
};

export default plugin;
