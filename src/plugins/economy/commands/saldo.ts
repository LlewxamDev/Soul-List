import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

export const saldoCommand: CommandModule = {
  definition: {
    name: "saldo",
    aliases: ["carteira", "atm", "banco", "money"],
    description: "Consulta o seu saldo e nível de RPG no grupo/comunidade atual.",
    usage: "!saldo",
    category: "rpg",
    cooldownSeconds: 3
  },
  async execute(context) {
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);
    const economy = await context.repositories.economy.getOrCreate(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    await context.react("💰");
    await context.reply(
      [
        `╭─ 💰 *BANCO & CARTEIRA*`,
        `├ 👤 Titular: *${context.pushName}*`,
        `├ 💵 Saldo: *${economy.balance.toLocaleString("pt-BR")} moedas*`,
        `├ 🔮 Nível: *${economy.level}* (${economy.xp} XP)`,
        `├ 🌐 Escopo: *${scope.scopeLabel}* (${scope.scopeType})`,
        `╰─────────────────────`,
        `_Use !daily para coletar moedas diárias ou !pagar para transferir._`
      ].join("\n")
    );
  }
};
