import { extractTargetJid, formatPhone } from "../../../core/utils/whatsapp";
import type { CommandModule } from "../../../core/types/command";

function targetFromContext(context: Parameters<CommandModule["execute"]>[0]): string | null {
  const mentionedOrQuoted = extractTargetJid(context.rawMessage);
  if (mentionedOrQuoted) {
    return mentionedOrQuoted;
  }
  const candidate = context.args[0]?.replace(/[^0-9:._@-]/g, "");
  return candidate && candidate.includes("@") ? candidate : null;
}

export const shopsCommand: CommandModule = {
  definition: {
    name: "lojas",
    aliases: ["loja-rpg"],
    description: "Abre o hub das lojas disponíveis no RPG.",
    usage: "!lojas",
    category: "rpg",
    cooldownSeconds: 6
  },
  async execute(context) {
    const shops = await context.repositories.rpg.listShops();
    const selectedId = context.args[0];
    if (selectedId) {
      const selected = shops.find((shop) => shop.id === selectedId);
      if (!selected) {
        await context.reply("Essa loja não está disponível no catálogo do RPG.");
        return;
      }
      await context.reply(`🏪 *${selected.name}*\n${selected.description}\n\nO catálogo de itens desta loja será exibido quando houver itens cadastrados no RPG.`);
      return;
    }
    const prefix = context.prefix ?? context.env.defaultPrefix;
    await context.sendList({
      title: "🏪 Lojas do RPG",
      description: "Selecione uma loja para consultar o catálogo disponível.",
      footer: `Use ${prefix}compras para consultar seu carrinho.`,
      buttonText: "ABRIR LOJAS",
      sections: [{
        title: "Lojas disponíveis",
        rows: shops.map((shop) => ({
          id: `${prefix}lojas ${shop.id}`,
          title: shop.name,
          description: shop.description
        }))
      }]
    });
  }
};

export const cartCommand: CommandModule = {
  definition: {
    name: "compras",
    aliases: ["carrinho", "carrinho-rpg"],
    description: "Mostra os itens no carrinho do RPG.",
    usage: "!compras",
    category: "rpg",
    cooldownSeconds: 4
  },
  async execute(context) {
    const cart = await context.repositories.rpg.getCart(context.sender);
    if (cart.length === 0) {
      await context.reply("Seu carrinho está vazio. Use !lojas para consultar as lojas do RPG.");
      return;
    }
    const lines = cart.map((item) => {
      const subtotal = item.unitPrice * item.quantity;
      return `• ${item.name} ×${item.quantity} — ${item.unitPrice} gold cada — subtotal ${subtotal} gold`;
    });
    const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    await context.reply(`🛒 *Seu carrinho*\n${lines.join("\n")}\n\nTotal: *${total} gold*`);
  }
};

export const relativesCommand: CommandModule = {
  definition: {
    name: "parentes",
    aliases: ["familia", "família", "arvoregenealogica"],
    description: "Mostra os parentes registrados no sistema de família do RPG.",
    usage: "!parentes",
    category: "rpg",
    cooldownSeconds: 5
  },
  async execute(context) {
    const relations = await context.repositories.family.findForUser(context.sender);
    if (relations.length === 0) {
      await context.reply("Nenhum parentesco foi registrado para você no sistema do RPG.");
      return;
    }
    const lines: string[] = [];
    for (const relation of relations) {
      const targetId = relation.userId === context.sender ? relation.targetUserId : relation.userId;
      const target = await context.repositories.users.findById(targetId);
      const targetName = target?.pushName || formatPhone(targetId);
      const relationLabel = relation.userId === context.sender
        ? relation.relation
        : `relação inversa de ${relation.relation}`;
      lines.push(`• ${relationLabel}: ${targetName} (@${formatPhone(targetId)})`);
    }
    await context.sendMentionedText(`🌳 *Parentes registrados*\n${lines.join("\n")}`, relations.map((relation) => relation.userId === context.sender ? relation.targetUserId : relation.userId));
  }
};

export const wantedCommand: CommandModule = {
  definition: {
    name: "wanted",
    aliases: ["procurado", "procurados"],
    description: "Declara um personagem ou jogador como procurado dentro do RPG.",
    usage: "!wanted @pessoa [motivo]",
    category: "rpg",
    cooldownSeconds: 6,
    groupOnly: true
  },
  async execute(context) {
    const target = targetFromContext(context);
    if (!target) {
      await context.reply("Marque ou responda à pessoa que será declarada procurada pelo RPG.");
      return;
    }
    const reason = context.argString.trim() || "Motivo não informado";
    await context.repositories.rpg.declareWanted({
      userId: target,
      declaredBy: context.sender,
      reason: reason.slice(0, 300),
      createdAt: new Date().toISOString()
    });
    await context.sendMentionedText(`🚨 @${formatPhone(target)} foi marcado como procurado no sistema do RPG.\nMotivo: ${reason}`, [target]);
  }
};

export const wastedCommand: CommandModule = {
  definition: {
    name: "wasted",
    aliases: ["mortos", "mortes"],
    description: "Mostra os personagens com mais mortes registradas no RPG.",
    usage: "!wasted",
    category: "rpg",
    cooldownSeconds: 6
  },
  async execute(context) {
    const stats = await context.repositories.rpg.topDeaths();
    if (stats.length === 0) {
      await context.reply("Ainda não há estatísticas de mortes registradas no RPG.");
      return;
    }
    const lines: string[] = [];
    for (const [index, stat] of stats.entries()) {
      const user = await context.repositories.users.findById(stat.userId);
      lines.push(`${index + 1}. ${user?.pushName || `@${formatPhone(stat.userId)}`} — ${stat.deaths} morte(s)`);
    }
    await context.reply(`☠️ *WASTED*\n${lines.join("\n")}`);
  }
};

export const rpgCommands: CommandModule[] = [shopsCommand, cartCommand, relativesCommand, wantedCommand, wastedCommand];
