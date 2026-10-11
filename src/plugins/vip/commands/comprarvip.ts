import type { CommandModule } from "../../../core/types/command";
import { CommunityScopeResolver } from "../../../services/economy/CommunityScopeResolver";

const VIP_PRICE = 3000;
const VIP_DURATION_DAYS = 30;

export const comprarVipCommand: CommandModule = {
  definition: {
    name: "comprarvip",
    aliases: ["obtervip", "assinarvip"],
    description: "Compre 30 dias de VIP utilizando suas SoulCoins acumuladas.",
    usage: "!comprarvip",
    category: "vip",
    cooldownSeconds: 5
  },
  async execute(context) {
    const scope = await CommunityScopeResolver.resolve(context.socket, context.from);

    const account = await context.repositories.economy.getOrCreate(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    if (account.balance < VIP_PRICE) {
      await context.reply(
        `❌ *Saldo insuficiente!*\n\n` +
        `O passe VIP de 30 dias custa *${VIP_PRICE.toLocaleString()} SC*.\n` +
        `Seu saldo atual neste escopo é de *${account.balance.toLocaleString()} SC*.\n\n` +
        `💡 _Junte mais moedas trabalhando (!trabalhar), resgatando o !daily e jogando no !cassino!_`
      );
      return;
    }

    // Deduzir moedas atômico
    await context.repositories.economy.adjustBalance(
      context.sender,
      scope.scopeId,
      scope.scopeType,
      -VIP_PRICE,
      `Compra de VIP por ${VIP_DURATION_DAYS} dias`,
      "vip_purchase"
    );

    // Conceder status VIP por 30 dias
    const expiresAt = new Date(Date.now() + VIP_DURATION_DAYS * 24 * 60 * 60 * 1000);
    await context.repositories.premium.set(context.sender, expiresAt);

    const updatedAccount = await context.repositories.economy.getOrCreate(
      context.sender,
      scope.scopeId,
      scope.scopeType
    );

    await context.reply(
      `🎉💎 *PARABÉNS! VOCÊ AGORA É VIP!* 💎🎉\n\n` +
      `✨ Seu passe VIP foi ativado com sucesso por *${VIP_DURATION_DAYS} dias*!\n` +
      `📅 Válido até: *${expiresAt.toLocaleDateString("pt-BR")}*\n` +
      `💰 Saldo restante: *${updatedAccount.balance.toLocaleString()} SC* (${scope.scopeLabel})\n\n` +
      `Aproveite todos os benefícios digitando *!vip*!`
    );
  }
};
