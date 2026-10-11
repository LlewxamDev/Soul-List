import type { CommandModule } from "../../../core/types/command";

export const shipCommand: CommandModule = {
  definition: {
    name: "ship",
    aliases: ["casal", "amor"],
    description: "Calcula a porcentagem de amor entre duas pessoas.",
    usage: "!ship @pessoa1 @pessoa2",
    category: "fun",
    cooldownSeconds: 4
  },
  async execute(context) {
    let p1 = context.args[0] ? context.args[0].replace(/[@\s]/g, "") : context.sender.split("@")[0] || "user1";
    let p2: string = context.args[1] ? context.args[1].replace(/[@\s]/g, "") : "";

    if (!p2) {
      // Se marcou só 1, shipa o remetente com a pessoa
      p2 = p1;
      p1 = context.sender.split("@")[0] || "user1";
    }

    // Hash pseudoaleatório estável para o dia
    const today = new Date().toISOString().slice(0, 10);
    const combined = [p1, p2].sort().join(":") + today;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = (hash << 5) - hash + combined.charCodeAt(i);
      hash |= 0;
    }
    const percent = Math.abs(hash % 101);

    const filled = Math.round(percent / 10);
    const empty = 10 - filled;
    const bar = "█".repeat(filled) + "▒".repeat(empty);

    let comment = "💔 Nada a ver...";
    if (percent > 85) comment = "💍 CASAMENTO À VISTA! Almas gêmeas!";
    else if (percent > 60) comment = "❤️ Um belo casal com muito futuro!";
    else if (percent > 40) comment = "🔥 Rola um clima forte aí...";
    else if (percent > 20) comment = "👀 Talvez uma amizade colorida...";

    await context.react("💘");
    await context.reply(
      [
        `╭─ 💘 *TESTE DO CASAL (SHIP)*`,
        `├ 👤 Par: @${p1} ❤️ @${p2}`,
        `├ 📊 Compatibilidade: *${percent}%*`,
        `├ [${bar}]`,
        `├ 💬 *Veredito:* ${comment}`,
        `╰─────────────────────`
      ].join("\n")
    );
  }
};
