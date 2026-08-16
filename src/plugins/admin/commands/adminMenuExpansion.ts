import { extractTargetJid, formatPhone } from "../../../core/utils/whatsapp";
import type { CommandContext } from "../../../core/types/context";
import type { CommandModule } from "../../../core/types/command";

async function getStringList(context: CommandContext, key: string): Promise<string[]> {
  return (await context.repositories.settings.getJson<string[]>(key)) ?? [];
}

async function setStringList(context: CommandContext, key: string, values: string[]): Promise<void> {
  await context.repositories.settings.setJson(key, [...new Set(values)]);
}

function targetRequiredCommand(
  name: string,
  aliases: string[],
  action: "mute" | "unmute" | "blacklist" | "unblacklist"
): CommandModule {
  const labels = {
    mute: "silenciado",
    unmute: "retirado do mute",
    blacklist: "adicionado à lista negra",
    unblacklist: "retirado da lista negra"
  } as const;
  return {
    definition: {
      name,
      aliases,
      description: `Marca um participante como ${labels[action]} neste grupo.`,
      usage: `!${name} @usuario`,
      category: "moderation",
      cooldownSeconds: 5,
      groupOnly: true,
      adminOnly: true
    },
    async execute(context) {
      const target = extractTargetJid(context.rawMessage);
      if (!target) {
        await context.reply("Mencione ou responda à pessoa que será alterada.");
        return;
      }
      if (target === context.sender) {
        await context.reply("Essa ação não pode ser aplicada ao próprio administrador.");
        return;
      }
      const key = action === "mute" || action === "unmute"
        ? `group:${context.from}:muted-users`
        : `group:${context.from}:blacklist`;
      const current = await getStringList(context, key);
      const next = action === "mute" || action === "blacklist"
        ? [...current, target]
        : current.filter((jid) => jid !== target);
      await setStringList(context, key, next);
      await context.reply(`@${formatPhone(target)} foi ${labels[action]}.`);
    }
  };
}

export const muteParticipantCommand = targetRequiredCommand("muteuser", ["mutepessoa", "silenciar"], "mute");
export const unmuteParticipantCommand = targetRequiredCommand("desmute", ["unmute", "dessilenciar", "tirarmute"], "unmute");
export const blacklistAddCommand = targetRequiredCommand("listanegra", ["blacklist", "blacklistadd", "banlista"], "blacklist");
export const blacklistRemoveCommand = targetRequiredCommand("tirardalista", ["blacklistremove", "removerlista", "unlistban"], "unblacklist");

export const muteListCommand: CommandModule = {
  definition: {
    name: "mutelist",
    aliases: ["listamute", "listasilenciados"],
    description: "Lista participantes silenciados no grupo.",
    usage: "!mutelist",
    category: "moderation",
    cooldownSeconds: 5,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const users = await getStringList(context, `group:${context.from}:muted-users`);
    await context.reply(users.length > 0 ? `🔇 *Mutados*\n${users.map((jid, index) => `${index + 1}. @${formatPhone(jid)}`).join("\n")}` : "Não há participantes silenciados neste grupo.");
  }
};

export const blacklistListCommand: CommandModule = {
  definition: {
    name: "listban",
    aliases: ["listablack", "listanegra-lista"],
    description: "Lista participantes na lista negra do grupo.",
    usage: "!listban",
    category: "moderation",
    cooldownSeconds: 5,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const users = await getStringList(context, `group:${context.from}:blacklist`);
    await context.reply(users.length > 0 ? `🚫 *Lista negra*\n${users.map((jid, index) => `${index + 1}. @${formatPhone(jid)}`).join("\n")}` : "A lista negra deste grupo está vazia.");
  }
};

export const groupModeCommand: CommandModule = {
  definition: {
    name: "grupo",
    aliases: ["groupmode", "modogrupo"],
    description: "Abre ou fecha o envio de mensagens para participantes.",
    usage: "!grupo a|f",
    category: "admin",
    cooldownSeconds: 6,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const mode = context.args[0]?.toLowerCase();
    if (mode !== "a" && mode !== "f" && mode !== "abrir" && mode !== "fechar") {
      await context.reply("Use !grupo a para abrir ou !grupo f para fechar o grupo.");
      return;
    }
    const open = mode === "a" || mode === "abrir";
    await context.socket.groupSettingUpdate(context.from, open ? "not_announcement" : "announcement");
    await context.repositories.groups.setOpen(context.from, open);
    await context.reply(open ? "Grupo aberto para mensagens dos participantes." : "Grupo fechado: somente administradores podem enviar mensagens.");
  }
};

export const fakeListCommand: CommandModule = {
  definition: {
    name: "listfake",
    aliases: ["fakes", "listafake", "estrangeiros"],
    description: "Lista participantes cujo número não começa com o código do Brasil.",
    usage: "!listfake",
    category: "moderation",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const participants = (await context.socket.groupMetadata(context.from)).participants;
    const fakes = participants.map((participant) => participant.id).filter((jid) => !jid.startsWith("55"));
    await context.reply(fakes.length > 0 ? `🌍 *Números fora do padrão BR*\n${fakes.map((jid, index) => `${index + 1}. @${formatPhone(jid)}`).join("\n")}` : "Nenhum participante fora do padrão BR foi encontrado.");
  }
};

export const markNumberedCommand: CommandModule = {
  definition: {
    name: "marcar2",
    aliases: ["marcarwa", "marcarlista", "marcartodos2"],
    description: "Marca os participantes com uma lista numerada.",
    usage: "!marcar2 [mensagem]",
    category: "members",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const participants = (await context.socket.groupMetadata(context.from)).participants.map((participant) => participant.id);
    const prefix = context.argString.trim() ? `${context.argString.trim()}\n\n` : "";
    const text = `${prefix}${participants.map((jid, index) => `${index + 1}. @${formatPhone(jid)}`).join("\n")}`;
    await context.sendMentionedText(text, participants);
  }
};

export const createTableCommand: CommandModule = {
  definition: {
    name: "criartabela",
    aliases: ["tabelagp", "tabela", "rankinggp"],
    description: "Cria ou mostra uma tabela simples persistida para o grupo.",
    usage: "!criartabela [título]",
    category: "admin",
    cooldownSeconds: 6,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const key = `group:${context.from}:admin-table`;
    const title = context.argString.trim() || "Tabela do grupo";
    const saved = await context.repositories.settings.getJson<{ title: string; createdAt: string }>(key);
    const table = saved ?? { title, createdAt: new Date().toISOString() };
    if (!saved) {
      await context.repositories.settings.setJson(key, table);
    }
    await context.reply(`📊 *${table.title}*\nTabela administrativa criada em ${new Date(table.createdAt).toLocaleDateString(context.env.defaultLanguage)}.\n\nUse os comandos de ranking do bot para consultar atividade.`);
  }
};

function adminRandomCommand(name: string, aliases: string[], mode: "number" | "wheel"): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description: mode === "number" ? "Sorteia um número dentro de um limite." : "Gira uma roleta com opções informadas.",
      usage: mode === "number" ? `!${name} 1-100` : `!${name} opção 1 | opção 2`,
      category: "fun",
      cooldownSeconds: 4,
      groupOnly: true,
      adminOnly: true
    },
    async execute(context) {
      if (mode === "number") {
        const maximum = Math.min(1_000_000, Math.max(2, Number.parseInt(context.args[0] ?? "100", 10) || 100));
        await context.reply(`🎲 Número sorteado: *${Math.floor(Math.random() * maximum) + 1}* de 1 a ${maximum}.`);
        return;
      }
      const options = context.argString.split("|").map((item) => item.trim()).filter(Boolean);
      if (options.length < 2) {
        await context.reply("Informe pelo menos duas opções separadas por |.");
        return;
      }
      await context.reply(`🎡 Roleta: *${options[Math.floor(Math.random() * options.length)]}*`);
    }
  };
}

export const sorteioNumeroCommand = adminRandomCommand("sorteionumero", ["sorteionum", "randomnumero"], "number");
export const rouletteCommand = adminRandomCommand("roleta", ["roleta2", "girarroleta"], "wheel");

export const contestInfoCommand: CommandModule = {
  definition: {
    name: "infosorteio",
    aliases: ["infovotacao", "infovotação", "infosorteio2"],
    description: "Mostra a forma de uso dos sorteios e votações administrativas.",
    usage: "!infosorteio",
    category: "admin",
    cooldownSeconds: 4,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    await context.reply("ℹ️ Para sortear opções, use !sorteio item 1 | item 2. Para um número, use !sorteionumero 100. Para uma votação nativa, use !enquete pergunta | opção 1, opção 2.");
  }
};

export const adminExpansionCommands: CommandModule[] = [
  muteParticipantCommand,
  unmuteParticipantCommand,
  blacklistAddCommand,
  blacklistRemoveCommand,
  muteListCommand,
  blacklistListCommand,
  groupModeCommand,
  fakeListCommand,
  markNumberedCommand,
  createTableCommand,
  sorteioNumeroCommand,
  rouletteCommand,
  contestInfoCommand
];
