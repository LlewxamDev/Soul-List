import { extractTargetJid, formatPhone } from "../../../core/utils/whatsapp";
import type { CommandContext } from "../../../core/types/context";
import type { CommandModule } from "../../../core/types/command";
import type { RpgRole } from "../../../repositories/rpg/RpgRepository";

function targetOf(context: CommandContext): string | null {
  return extractTargetJid(context.rawMessage);
}

function durationAndReason(context: CommandContext): { days: number; reason: string } {
  const maybeDays = Number.parseInt(context.args[0] ?? "", 10);
  if (Number.isInteger(maybeDays) && maybeDays > 0) {
    return { days: Math.min(30, maybeDays), reason: context.args.slice(1).join(" ").trim() || "Sentença definida pela autoridade do reino." };
  }
  return { days: 1, reason: context.argString.trim() || "Sentença definida pela autoridade do reino." };
}

export const jailCommand: CommandModule = {
  definition: {
    name: "jail",
    aliases: ["prender", "encarcerar", "cadeia"],
    description: "Prende um participante no sistema RPG medieval por uma sentença definida.",
    usage: "!jail @usuario [dias] [motivo]",
    category: "rpg",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const target = targetOf(context);
    if (!target || target === context.sender) {
      await context.reply("Mencione um participante diferente de você para aplicar a sentença.");
      return;
    }
    const metadata = await context.socket.groupMetadata(context.from);
    const targetParticipant = metadata.participants.find((participant) => participant.id === target);
    if (targetParticipant?.admin && !context.isOwner) {
      await context.reply("Somente o dono do bot pode prender um administrador do grupo no RPG.");
      return;
    }
    const { days, reason } = durationAndReason(context);
    const releaseAt = new Date(Date.now() + days * 86_400_000).toISOString();
    const bail = days * 100;
    const cell = `C-${Math.abs([...target].reduce((sum, character) => sum + character.charCodeAt(0), 0)) % 99 + 1}`;
    await context.repositories.rpg.imprison({
      groupId: context.from,
      userId: target,
      jailedBy: context.sender,
      reason: reason.slice(0, 300),
      cell,
      bail,
      jailedAt: new Date().toISOString(),
      releaseAt
    });
    await context.sendMentionedText(`⚖️ @${formatPhone(target)} foi enviado para a cela *${cell}* por *${days} dia(s)*.\nMotivo: ${reason}\nFiança: *${bail} gold*\nA autoridade responsável foi @${formatPhone(context.sender)}.`, [target, context.sender]);
  }
};

export const unjailCommand: CommandModule = {
  definition: {
    name: "unjail",
    aliases: ["libertar", "soltar", "tirarcadeia", "tirarjail"],
    description: "Liberta um participante da prisão RPG.",
    usage: "!unjail @usuario",
    category: "rpg",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const target = targetOf(context);
    if (!target) {
      await context.reply("Mencione a pessoa que será libertada.");
      return;
    }
    const released = await context.repositories.rpg.release(context.from, target);
    await context.reply(released ? `🔓 @${formatPhone(target)} foi libertado da prisão.` : "Essa pessoa não está presa neste reino.");
  }
};

export const jailedListCommand: CommandModule = {
  definition: {
    name: "presos",
    aliases: ["listapresos", "cadeiados", "prisioneiros", "jail-list"],
    description: "Lista os participantes atualmente presos no grupo.",
    usage: "!presos",
    category: "rpg",
    cooldownSeconds: 6,
    groupOnly: true
  },
  async execute(context) {
    const records = await context.repositories.rpg.listJailed(context.from);
    if (records.length === 0) {
      await context.reply("As celas estão vazias.");
      return;
    }
    const lines: string[] = [];
    for (const [index, record] of records.entries()) {
      const user = await context.repositories.users.findById(record.userId);
      lines.push(`${index + 1}. @${formatPhone(record.userId)} — cela ${record.cell} — fiança ${record.bail} gold — ${user?.pushName || "cidadão"}`);
    }
    await context.sendMentionedText(`🏰 *Prisioneiros do reino*\n${lines.join("\n")}`, records.map((record) => record.userId));
  }
};

export const cellCommand: CommandModule = {
  definition: {
    name: "cela",
    aliases: ["minhacela", "statusprisao", "meujail"],
    description: "Mostra o status da sua cela e sentença RPG.",
    usage: "!cela",
    category: "rpg",
    cooldownSeconds: 4,
    groupOnly: true
  },
  async execute(context) {
    const record = await context.repositories.rpg.getJail(context.from, context.sender);
    if (!record) {
      await context.reply("Você está livre no reino.");
      return;
    }
    await context.reply(`⛓️ Você está na cela *${record.cell}*.\nMotivo: ${record.reason}\nFiança: *${record.bail} gold*\nLibertação prevista: *${new Date(record.releaseAt).toLocaleString(context.env.defaultLanguage)}*`);
  }
};

export const bailCommand: CommandModule = {
  definition: {
    name: "fianca",
    aliases: ["fiança", "pagarfianca", "pagarfiança", "bail"],
    description: "Paga a fiança usando o saldo econômico central do RPG.",
    usage: "!fianca",
    category: "rpg",
    cooldownSeconds: 10,
    groupOnly: true
  },
  async execute(context) {
    const record = await context.repositories.rpg.getJail(context.from, context.sender);
    if (!record) {
      await context.reply("Você não está preso.");
      return;
    }
    const wallet = await context.repositories.economy.get(context.sender);
    if ((wallet?.balance ?? 0) < record.bail) {
      await context.reply(`Você precisa de ${record.bail} gold, mas possui apenas ${wallet?.balance ?? 0}.`);
      return;
    }
    await context.repositories.economy.adjustBalance(context.sender, -record.bail);
    await context.repositories.rpg.release(context.from, context.sender);
    await context.reply(`💰 Fiança paga. Você gastou ${record.bail} gold e foi libertado.`);
  }
};

const ROLE_LABELS: Record<RpgRole, string> = {
  warden: "Carcereiro-mor",
  judge: "Juiz do reino",
  guard: "Guarda",
  citizen: "Cidadão"
};

export const roleCommand: CommandModule = {
  definition: {
    name: "cargo",
    aliases: ["cargorpg", "role", "patente", "classecargo"],
    description: "Define ou consulta cargos da hierarquia medieval do RPG.",
    usage: "!cargo @usuario guarda|juiz|carcereiro|cidadao",
    category: "rpg",
    cooldownSeconds: 8,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const target = targetOf(context) ?? context.sender;
    const roleInput = context.args.find((value) => ["guarda", "guard", "juiz", "judge", "carcereiro", "warden", "cidadao", "cidadão", "citizen"].includes(value.toLowerCase()))?.toLowerCase();
    if (!roleInput) {
      const role = await context.repositories.rpg.getRole(context.from, target);
      await context.reply(`🏰 @${formatPhone(target)} ocupa o cargo: *${ROLE_LABELS[role]}*.`);
      return;
    }
    const role: RpgRole = ["carcereiro", "warden"].includes(roleInput) ? "warden" : ["juiz", "judge"].includes(roleInput) ? "judge" : ["guarda", "guard"].includes(roleInput) ? "guard" : "citizen";
    if ((role === "warden" || role === "judge") && !context.isOwner) {
      await context.reply("Somente o dono do bot pode nomear carcereiros-mores ou juízes.");
      return;
    }
    await context.repositories.rpg.setRole(context.from, target, role);
    await context.reply(`Cargo atualizado: @${formatPhone(target)} agora é *${ROLE_LABELS[role]}*.`);
  }
};

export const hierarchyCommand: CommandModule = {
  definition: {
    name: "hierarquia",
    aliases: ["cargos", "patentesrpg", "ordem", "hierarquiarpg"],
    description: "Mostra as regras de autoridade do reino medieval.",
    usage: "!hierarquia",
    category: "rpg",
    cooldownSeconds: 5,
    groupOnly: true
  },
  async execute(context) {
    await context.reply("🏰 *Hierarquia do reino*\nCarcereiro-mor: administra prisões e sentenças.\nJuiz: define julgamentos e cargos intermediários.\nGuarda: aplica ordens do reino.\nCidadão: participa da economia, missões e duelos.\n\nAdministradores do grupo podem operar prisões básicas; o dono do bot controla os cargos superiores.");
  }
};

export const rpgRulesCommand: CommandModule = {
  definition: {
    name: "regrasrpg",
    aliases: ["leisrpg", "leisdoreino", "regrasmedievais"],
    description: "Mostra as regras da prisão e do reino RPG.",
    usage: "!regrasrpg",
    category: "rpg",
    cooldownSeconds: 5,
    groupOnly: true
  },
  async execute(context) {
    await context.reply("⚖️ *Leis do reino*\n1. Prisões são mecânicas fictícias do RPG.\n2. A sentença deve ter motivo e duração.\n3. A fiança usa o saldo gold/N-Coins central.\n4. Não há rastreamento real de pessoas.\n5. Ofensas, ameaças e ações fora do jogo continuam sujeitas às regras do grupo.");
  }
};

export const medievalRpgCommands: CommandModule[] = [jailCommand, unjailCommand, jailedListCommand, cellCommand, bailCommand, roleCommand, hierarchyCommand, rpgRulesCommand];
