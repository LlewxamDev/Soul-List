import type { BotPlugin } from "../../core/types/plugin";
import { dailyCommand } from "./commands/daily";
import { saldoCommand } from "./commands/saldo";
import { transferirCommand } from "./commands/transferir";

const economyPlugin: BotPlugin = {
  manifest: {
    id: "economy",
    name: "Economia e RPG por Comunidade",
    version: "1.0.0",
    description: "Sistema de moedas, XP e transferências federadas por grupo e comunidade WhatsApp.",
    enabledByDefault: true
  },
  commands: [dailyCommand, saldoCommand, transferirCommand]
};

export default economyPlugin;
