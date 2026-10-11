import type { CommandModule } from "../../../core/types/command";

export const vipCommand: CommandModule = {
  definition: {
    name: "vip",
    aliases: ["menuvip", "beneficiosvip"],
    description: "Exibe seu status VIP e os benefícios exclusivos disponíveis.",
    usage: "!vip",
    category: "vip",
    cooldownSeconds: 3
  },
  async execute(context) {
    const isVip = await context.repositories.premium.isPremium(context.sender);

    const statusText = isVip
      ? "✨ *Status:* ATIVO (Você é um membro VIP!)"
      : "⚪ *Status:* INATIVO (Membro padrão)";

    await context.reply(
      `💎 *CLUBE VIP SOUL-LIST* 💎\n\n` +
      `${statusText}\n\n` +
      `🎁 *BENEFÍCIOS EXCLUSIVOS:*\n` +
      `• ⚡ Downloads prioritários no *!play*, *!ytmp3* e *!ytmp4*\n` +
      `• 🎙️ Acesso liberado à transcrição de áudios via IA (*!totext*)\n` +
      `• 💸 Bônus de moedas extras no *!daily* e minigames\n` +
      `• 🛡️ Imunidade a limites rigorosos de cooldown\n` +
      `• 👑 Distintivo de prestígio no comando *!perfil*\n\n` +
      `🛒 *Como obter VIP:*\n` +
      `Adquira 30 dias usando suas próprias SoulCoins através do comando *!comprarvip* (Custa 3.000 SC)!`
    );
  }
};
