import { extractTargetJid, formatPhone } from "../../../core/utils/whatsapp";
import type { CommandModule } from "../../../core/types/command";

export const addParticipantCommand: CommandModule = {
  definition: {
    name: "add",
    aliases: ["unkick", "adicionar"],
    description: "Adiciona um número ao grupo.",
    usage: "!add 5511999999999 ou responda à mensagem do contato",
    category: "admin",
    cooldownSeconds: 10,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const mentioned = extractTargetJid(context.rawMessage);
    const number = mentioned ? formatPhone(mentioned) : context.argString.replace(/\D/g, "");
    if (!number) {
      await context.reply("Informe um número com DDD ou responda à mensagem do contato que será adicionado.");
      return;
    }
    const contacts = await context.socket.onWhatsApp(number);
    const contact = contacts?.[0];
    if (!contact?.jid) {
      await context.reply("Esse número não está registrado no WhatsApp.");
      return;
    }
    const [result] = await context.socket.groupParticipantsUpdate(context.from, [contact.jid], "add");
    if (result?.status === "409") {
      await context.reply("Esse usuário já está no grupo.");
      return;
    }
    if (result?.status === "403") {
      await context.reply(`Não consegui adicionar @${formatPhone(contact.jid)} porque a conta restringiu convites.`);
      return;
    }
    await context.sendMentionedText(`Solicitação de adição enviada para @${formatPhone(contact.jid)}.`, [contact.jid]);
  }
};

export const joinGroupCommand: CommandModule = {
  definition: {
    name: "join",
    aliases: ["entrar", "convite"],
    description: "Entra em um grupo usando um link de convite.",
    usage: "!join https://chat.whatsapp.com/código",
    category: "admin",
    cooldownSeconds: 20,
    ownerOnly: true
  },
  async execute(context) {
    const match = context.argString.match(/chat\.whatsapp\.com\/([A-Za-z0-9_-]+)/i);
    if (!match?.[1]) {
      await context.reply("Informe um link de convite válido do WhatsApp.");
      return;
    }
    const groupId = await context.socket.groupAcceptInvite(match[1]);
    await context.reply(`Entrei no grupo ${groupId}.`);
  }
};

export const groupMembershipCommands: CommandModule[] = [addParticipantCommand, joinGroupCommand];
