import type { BotPlugin } from "../../core/types/plugin";
import { pptCommand } from "./commands/ppt";
import { caraOuCoroaCommand } from "./commands/caraoucoroa";
import { cassinoCommand } from "./commands/cassino";
import { adivinharCommand } from "./commands/adivinhar";

const plugin: BotPlugin = {
  manifest: {
    id: "games",
    name: "Jogos & Apostas",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["games"]
  },
  commands: [
    pptCommand,
    caraOuCoroaCommand,
    cassinoCommand,
    adivinharCommand
  ]
};

export default plugin;
