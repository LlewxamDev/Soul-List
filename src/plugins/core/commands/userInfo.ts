import { formatPhone } from "../../../core/utils/whatsapp";
import type { CommandModule } from "../../../core/types/command";

export const userInfoCommand: CommandModule = {
  definition: {
    name: "user",
    aliases: ["usuario", "usuário", "whoami"],
    description: "Mostra informações públicas disponíveis sobre o usuário executor.",
    usage: "!user",
    category: "info",
    cooldownSeconds: 8
  },
  async execute(context) {
    const [localUser, business, profilePicture, whatsapp] = await Promise.all([
      context.repositories.users.findById(context.sender),
      context.socket.getBusinessProfile(context.sender).catch(() => undefined),
      context.socket.profilePictureUrl(context.sender, "image").catch(() => undefined),
      context.socket.onWhatsApp(context.sender).catch(() => undefined)
    ]);
    const verifiedJid = whatsapp?.[0]?.jid ?? context.sender;
    const isBusiness = Boolean(business);
    const lines = [
      "👤 *Informações reais disponíveis no WhatsApp*",
      `Nome exibido: *${context.pushName || localUser?.pushName || "não informado"}*`,
      `Identificador público: *${formatPhone(verifiedJid)}*`,
      `Tipo de conta: *${isBusiness ? "Business" : "comum ou não identificado"}*`,
      `Foto de perfil: *${profilePicture ? "disponível" : "não disponível"}`
    ];
    if (business?.description) {
      lines.push(`Bio/descrição Business: *${business.description}*`);
    }
    if (business?.category) {
      lines.push(`Categoria Business: *${business.category}*`);
    }

    if (context.isGroup) {
      const activity = await context.repositories.activity.getRank(context.from, 100, true);
      const ownActivity = activity.find((item) => item.userId === context.sender);
      if (ownActivity) {
        lines.push(`Mensagens registradas neste grupo: *${ownActivity.messages}*`);
      }
    }

    const descriptionPrompt = [
      "Gere uma descrição curta e divertida, em português brasileiro, sem inventar dados pessoais.",
      `Nome exibido: ${context.pushName || "não informado"}.`,
      `Mensagens registradas no grupo: ${context.isGroup ? "disponível apenas se informado acima" : "não aplicável"}.`,
      "Deixe claro que é uma descrição gerada por IA e não uma informação oficial do WhatsApp."
    ].join(" ");
    try {
      const generated = await context.services.ai.ask(descriptionPrompt);
      lines.push("", "🤖 *Descrição gerada por IA (não é metadata do WhatsApp)*", generated.slice(0, 700));
    } catch (error) {
      context.logger.debug({ error }, "Descrição de IA indisponível para user.");
    }

    if (profilePicture) {
      await context.sendImage(profilePicture, lines.join("\n"));
      return;
    }
    await context.reply(lines.join("\n"));
  }
};
