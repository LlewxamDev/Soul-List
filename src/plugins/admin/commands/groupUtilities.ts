import { formatPhone } from "../../../core/utils/whatsapp";
import type { CommandModule } from "../../../core/types/command";

export const deleteQuotedCommand: CommandModule = {
  definition: {
    name: "del",
    aliases: ["delete", "deletar", "delet", "apagar", "d"],
    description: "Apaga uma mensagem citada quando o bot tem permissão.",
    usage: "!del (respondendo à mensagem)",
    category: "moderation",
    cooldownSeconds: 4,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    if (!context.quotedMessage) {
      await context.reply("Responda à mensagem que deseja apagar.");
      return;
    }
    await context.deleteMessage(context.quotedMessage);
    await context.react("🗑️");
  }
};

export const setGroupSubjectCommand: CommandModule = {
  definition: {
    name: "nomegp",
    aliases: ["novonome", "mudarnome"],
    description: "Altera o nome do grupo.",
    usage: "!nomegp <novo nome>",
    category: "admin",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const subject = context.argString.trim();
    if (!subject) {
      await context.reply("Informe o novo nome do grupo.");
      return;
    }
    if (subject.length > 100) {
      await context.reply("O nome do grupo deve ter no máximo 100 caracteres.");
      return;
    }
    await context.socket.groupUpdateSubject(context.from, subject);
    await context.reply("Nome do grupo atualizado com sucesso.");
  }
};

export const setGroupDescriptionCommand: CommandModule = {
  definition: {
    name: "descgp",
    aliases: ["descricaogp", "descriçãogp", "novadescricao"],
    description: "Altera a descrição do grupo.",
    usage: "!descgp <nova descrição>",
    category: "admin",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const description = context.argString.trim();
    if (!description) {
      await context.reply("Informe a nova descrição do grupo.");
      return;
    }
    await context.socket.groupUpdateDescription(context.from, description);
    await context.reply("Descrição do grupo atualizada com sucesso.");
  }
};

export const hideTagCommand: CommandModule = {
  definition: {
    name: "hidetag",
    aliases: ["cita", "marcar", "totag"],
    description: "Envia uma mensagem marcando todos sem exibir a lista de menções.",
    usage: "!hidetag <mensagem>",
    category: "members",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const metadata = await context.socket.groupMetadata(context.from);
    const mentions = metadata.participants.map((participant) => participant.id);
    const text = context.argString.trim() || `Aviso enviado por @${formatPhone(context.sender)}.`;
    await context.sendMentionedText(text, mentions);
  }
};

export const groupInfoCommand: CommandModule = {
  definition: {
    name: "grupoinfo",
    aliases: ["infogrupo", "infogp", "gpinfo"],
    description: "Mostra informações e permissões do grupo.",
    usage: "!grupoinfo",
    category: "admin",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const metadata = await context.socket.groupMetadata(context.from);
    const admins = metadata.participants.filter((participant) => participant.admin !== null).length;
    const subjectOwner = metadata.subjectOwner ? `@${formatPhone(metadata.subjectOwner)}` : "não informado";
    const announce = metadata.announce ? "Sim" : "Não";
    const restrict = metadata.restrict ? "Não" : "Sim";
    const text = [
      `Nome: *${metadata.subject}*`,
      `ID: *${metadata.id}*`,
      `Criador: *${subjectOwner}*`,
      `Administradores: *${admins}*`,
      `Participantes: *${metadata.participants.length}*`,
      `Grupo fechado para mensagens de membros: *${announce}*`,
      `Membros podem editar configurações: *${restrict}*`
    ].join("\\n");
    await context.sendMentionedText(text, metadata.subjectOwner ? [metadata.subjectOwner] : []);
  }
};

export const groupUtilitiesCommands: CommandModule[] = [
  deleteQuotedCommand,
  setGroupSubjectCommand,
  setGroupDescriptionCommand,
  hideTagCommand,
  groupInfoCommand
];

