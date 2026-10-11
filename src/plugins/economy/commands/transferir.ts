import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

export const transferirCommand: CommandModule = {
  definition: {
    name: "pagar",
    aliases: ["transferir", "pay", "pix"],
    description: "Transfere moedas atomicamente para outro usuário no grupo ou comunidade atual.",
    usage: "!pagar @usuario <valor>",
    category: "rpg",
    cooldownSeconds: 4
  },
  async execute(context) {
    const targetArg = context.args[0];
    const amountArg = parseInt(context.args[1] || "", 10);

    if (!targetArg || isNaN(amountArg) || amountArg <= 0) {
      await context.reply("Uso incorreto. Exemplo: `!pagar @usuario 100`");
      return;
    }

    const cleanTargetNumber = targetArg.replace(/[^0-9]/g, "");
    if (!cleanTargetNumber) {
      await context.reply("Você precisa mencionar ou informar o número do destinatário.");
      return;
    }

    const targetJid = `${cleanTargetNumber}@s.whatsapp.net`;
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    const result = await context.repositories.economy.transfer(
      context.sender,
      targetJid,
      scope.scopeId,
      scope.scopeType,
      amountArg
    );

    if (!result.success) {
      await context.react("❌");
      await context.reply(`❌ Não foi possível transferir: *${result.reason}*`);
      return;
    }

    await context.react("💸");
    await context.reply(
      [
        `╭─ 💸 *TRANSFERÊNCIA CONCLUÍDA!*`,
        `├ 📤 Remetente: ${context.pushName}`,
        `├ 📥 Destinatário: @${cleanTargetNumber}`,
        `├ 💰 Valor: *${amountArg.toLocaleString("pt-BR")} moedas*`,
        `├ 🏦 Seu Novo Saldo: *${result.senderNewBalance?.toLocaleString("pt-BR")} moedas*`,
        `├ 🌐 Escopo: *${scope.scopeLabel}*`,
        `╰─────────────────────`
      ].join("\n")
    );
  }
};
