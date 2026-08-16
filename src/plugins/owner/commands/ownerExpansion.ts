import type { CommandModule } from "../../../core/types/command";

export const botStatsCommand: CommandModule = {
  definition: {
    name: "botstats",
    aliases: ["statsbot", "estatisticasbot", "estatísticasbot", "metricasbot", "métricasbot"],
    description: "Mostra estatísticas técnicas básicas do bot.",
    usage: "!botstats",
    category: "owner",
    cooldownSeconds: 4,
    ownerOnly: true
  },
  async execute(context) {
    await context.reply(`📈 *Estatísticas do bot*\nComandos no registry: *${context.registry.all().length}*\nUptime do processo: *${Math.floor(process.uptime())} segundos*\nNode.js: *${process.versions.node}*\nMemória RSS: *${Math.round(process.memoryUsage().rss / 1024 / 1024)} MiB*`);
  }
};

export const premiumStatusCommand: CommandModule = {
  definition: {
    name: "premiumstatus",
    aliases: ["vipstatus", "meuvip", "premiuminfo", "statuspremium", "statusvip"],
    description: "Mostra o status premium do usuário executor.",
    usage: "!premiumstatus",
    category: "vip",
    cooldownSeconds: 4
  },
  async execute(context) {
    const premium = await context.repositories.premium.isPremium(context.sender);
    await context.reply(premium ? "⭐ Você possui acesso premium ativo." : "Você está no plano padrão. Fale com o proprietário do bot sobre recursos premium.");
  }
};

export const maintenanceCommand: CommandModule = {
  definition: {
    name: "maintenance",
    aliases: ["manutencao", "manutenção", "modomanutencao", "modomanutenção"],
    description: "Ativa ou desativa o modo manutenção do bot.",
    usage: "!maintenance on|off",
    category: "owner",
    cooldownSeconds: 4,
    ownerOnly: true
  },
  async execute(context) {
    const value = context.args[0]?.toLowerCase();
    if (value !== "on" && value !== "off") {
      const enabled = await context.repositories.settings.get("bot:maintenance");
      await context.reply(`Modo manutenção: *${enabled === "true" ? "ativo" : "inativo"}*.`);
      return;
    }
    await context.repositories.settings.set("bot:maintenance", value === "on" ? "true" : "false");
    await context.reply(`Modo manutenção ${value === "on" ? "ativado" : "desativado"}.`);
  }
};

export const ownerExpansionCommands: CommandModule[] = [botStatsCommand, premiumStatusCommand, maintenanceCommand];
