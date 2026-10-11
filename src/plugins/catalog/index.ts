import type { BotPlugin } from "../../core/types/plugin";
import { pack1Commands } from "./pack1";
import { pack2Commands } from "./pack2";
import { pack3Commands } from "./pack3";
import { pack4Commands } from "./pack4";
import { pack5Commands } from "./pack5";
import { pack6Commands } from "./pack6";
import { pack7Commands } from "./pack7";

const plugin: BotPlugin = {
  manifest: {
    id: "catalog",
    name: "Catálogo Curado",
    version: "2.0.0",
    enabledByDefault: true,
    categories: ["fun", "anime", "search", "games", "stickers", "admin", "rpg", "logos"]
  },
  commands: [
    ...pack1Commands,
    ...pack2Commands,
    ...pack3Commands,
    ...pack4Commands,
    ...pack5Commands,
    ...pack6Commands,
    ...pack7Commands,
  ]
};

export default plugin;
