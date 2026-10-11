import type { CommandModule } from "../../../core/types/command";

export const sensivelCommand: CommandModule = {
  definition: {
    name: "sensivel",
    aliases: ["menuhentai", "sensitive", "nsfw"],
    description: "Informa as diretrizes de moderação e o status de conteúdo sensível (+18).",
    usage: "!sensivel",
    category: "sensitive",
    cooldownSeconds: 4,
    sensitive: true
  },
  async execute(context) {
    await context.reply(
      `🔞 *DIRETRIZES DE CONTEÚDO SENSÍVEL / +18* 🔞\n\n` +
      `🛡️ *Status do Núcleo:* Protegido.\n` +
      `Por políticas de conformidade e integridade do bot, comandos com teor sexual explícito (NSFW) são isolados e não fazem parte do núcleo público padrão.\n\n` +
      `😄 *Procurando diversão?*\n` +
      `Experimente nossos comandos de brincadeiras e duplo sentido seguros em *!menu fun* (ex: !chupar, !ship, !gado, !cantada)!`
    );
  }
};
