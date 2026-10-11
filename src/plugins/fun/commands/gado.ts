import type { CommandModule } from "../../../core/types/command";

export const gadoCommand: CommandModule = {
  definition: {
    name: "gado",
    aliases: ["gadometro"],
    description: "Mede o nível de gado de um usuário.",
    usage: "!gado [@usuario]",
    category: "fun",
    cooldownSeconds: 3
  },
  async execute(context) {
    const target = context.args[0] ? context.args[0].replace(/[@\s]/g, "") : context.sender.split("@")[0];
    const percent = Math.floor(Math.random() * 101);

    let frase = "🐂 Normal, bebe água da torneira.";
    if (percent > 90) frase = "🌾 BERRANTEIRO PROFISSIONAL! Lambe o chão que ela pisa!";
    else if (percent > 70) frase = "🐮 Já comprou aliança no primeiro 'oi'.";
    else if (percent > 50) frase = "👀 Responde o story em 0.3 segundos.";
    else if (percent < 20) frase = "🗿 Coração de pedra, zero gadice.";

    await context.react("🐂");
    await context.reply(
      [
        `╭─ 🐂 *GADÔMETRO OFICIAL*`,
        `├ 👤 Alvo: @${target}`,
        `├ 📊 Nível: *${percent}% gado*`,
        `├ 💬 *Diagnóstico:* ${frase}`,
        `╰─────────────────────`
      ].join("\n")
    );
  }
};
