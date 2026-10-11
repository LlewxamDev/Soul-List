import type { BotPlugin } from "../../core/types/plugin";
import { chuparCommand } from "./commands/chupar";
import { shipCommand } from "./commands/ship";
import { gadoCommand } from "./commands/gado";
import { dadoCommand } from "./commands/dado";
import { beijarCommand } from "./commands/beijar";
import { tapaCommand } from "./commands/tapa";
import { abracarCommand } from "./commands/abracar";
import { cantadaCommand } from "./commands/cantada";
import { sorteCommand } from "./commands/sorte";

const plugin: BotPlugin = {
  manifest: {
    id: "fun",
    name: "Brincadeiras e Humor",
    version: "1.1.0",
    enabledByDefault: true,
    categories: ["fun"]
  },
  commands: [
    chuparCommand,
    shipCommand,
    gadoCommand,
    dadoCommand,
    beijarCommand,
    tapaCommand,
    abracarCommand,
    cantadaCommand,
    sorteCommand
  ]
};

export default plugin;
