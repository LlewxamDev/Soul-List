import type { CommandModule } from "../../../core/types/command";

export const muteCommand: CommandModule = {
  definition: {
    name: "mute",
    aliases: [],
    description: "Liga ou desliga o modo silencioso do bot no grupo.",
    usage: "!mute [on|off]",
    category: "admin",
    cooldownSeconds: 5,
    adminOnly: true,
    groupOnly: true
  },
  async execute(context) {
    const enableMute = context.args[0] !== "off";
    await context.repositories.groups.setMuted(context.from, enableMute);
    await context.reply(`Modo silencioso ${enableMute ? "ativado" : "desativado"} para este grupo.`);
  }
};
