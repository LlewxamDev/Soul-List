import type { BotPlugin } from "../../core/types/plugin";
import { trabalharCommand } from "./commands/trabalhar";
import { crimeCommand } from "./commands/crime";
import { topCommand } from "./commands/top";
import { casarCommand } from "./commands/casar";
import { divorcioCommand } from "./commands/divorcio";

const plugin: BotPlugin = {
  manifest: {
    id: "rpg",
    name: "RPG & Progressão",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["rpg"]
  },
  commands: [
    trabalharCommand,
    crimeCommand,
    topCommand,
    casarCommand,
    divorcioCommand
  ]
};

export default plugin;
