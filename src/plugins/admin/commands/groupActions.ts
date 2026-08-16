import { extractTargetJid } from "../../../core/utils/whatsapp";
import type { CommandModule } from "../../../core/types/command";

function participantAction(
  name: string,
  aliases: string[],
  action: "remove" | "promote" | "demote",
  description: string
): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description,
      usage: `!${name} @usuario`,
      category: "admin",
      cooldownSeconds: 5,
      adminOnly: true,
      groupOnly: true
    },
    async execute(context) {
      const target = extractTargetJid(context.rawMessage);
      if (!target) {
        await context.reply("Mencione ou responda à mensagem do usuário que será alterado.");
        return;
      }
      if (target === context.sender) {
        await context.reply("Essa ação não pode ser aplicada ao próprio solicitante.");
        return;
      }
      await context.socket.groupParticipantsUpdate(context.from, [target], action);
      const actionLabel = action === "remove" ? "removido" : action === "promote" ? "promovido" : "rebaixado";
      await context.reply(`Usuário @${target.split("@")[0]} ${actionLabel} com sucesso.`);
    }
  };
}

export const removeParticipantCommand = participantAction(
  "kick",
  ["remove", "banir"],
  "remove",
  "Remove um participante do grupo."
);

export const promoteParticipantCommand = participantAction(
  "promote",
  ["promover"],
  "promote",
  "Promove um participante a administrador do grupo."
);

export const demoteParticipantCommand = participantAction(
  "demote",
  ["rebaixar"],
  "demote",
  "Remove o status de administrador de um participante."
);

export const groupLinkCommand: CommandModule = {
  definition: {
    name: "linkgroup",
    aliases: ["linkgrupo", "grupolink"],
    description: "Envia o link de convite do grupo.",
    usage: "!linkgroup",
    category: "admin",
    cooldownSeconds: 10,
    adminOnly: true,
    groupOnly: true
  },
  async execute(context) {
    const code = await context.socket.groupInviteCode(context.from);
    await context.reply(`Link do grupo:\nhttps://chat.whatsapp.com/${code}`);
  }
};

export const revokeGroupLinkCommand: CommandModule = {
  definition: {
    name: "revoke",
    aliases: ["revokelink", "resetlink", "novolink"],
    description: "Revoga o link de convite atual e gera um novo.",
    usage: "!revoke",
    category: "admin",
    cooldownSeconds: 15,
    adminOnly: true,
    groupOnly: true
  },
  async execute(context) {
    await context.socket.groupRevokeInvite(context.from);
    const code = await context.socket.groupInviteCode(context.from);
    await context.reply(`Link revogado. Novo link:\nhttps://chat.whatsapp.com/${code}`);
  }
};
