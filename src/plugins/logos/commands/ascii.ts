import type { CommandModule } from "../../../core/types/command";

const FONT_MAP: Record<string, string[]> = {
  A: [" ▄▀█ ", "█▀█ ", "▀ ▀ "],
  B: ["█▄▄ ", "█▄█ ", "▀▀  "],
  C: [" █▀▀", "█▄▄ ", " ▀▀▀"],
  D: ["█▀▄ ", "█ █ ", "▀▀  "],
  E: ["█▀▀ ", "██▄ ", "▀▀▀ "],
  F: ["█▀▀ ", "█▀  ", "▀   "],
  G: ["█▀▀ ", "█ █▌", " ▀▀▀"],
  H: ["█ █ ", "█▀█ ", "▀ ▀ "],
  I: ["█ ", "█ ", "▀ "],
  J: ["  █ ", "▄ █ ", " ▀  "],
  K: ["█▄▀ ", "█ █ ", "▀ ▀ "],
  L: ["█   ", "█▄▄ ", "▀▀▀ "],
  M: ["█▀▄▀█", "█ ▀ █", "▀   ▀"],
  N: ["█▄ █", "█ ▀█", "▀  ▀"],
  O: ["█▀█ ", "█▄█ ", "▀▀▀ "],
  P: ["█▀█ ", "█▀▀ ", "▀   "],
  Q: ["█▀█ ", "▀▀█ ", "  ▀▀"],
  R: ["█▀█ ", "█▀▄ ", "▀ ▀ "],
  S: ["█▀ ", "▄█ ", "▀▀ "],
  T: ["▀█▀ ", " █  ", " ▀  "],
  U: ["█ █ ", "█▄█ ", "▀▀▀ "],
  V: ["█ █ ", "▀▄▀ ", " ▀  "],
  W: ["█ █ █", "▀▄▀▄▀", " ▀ ▀ "],
  X: ["▀▄▀ ", "█ █ ", "▀ ▀ "],
  Y: ["█▄█ ", " █  ", " ▀  "],
  Z: ["▀▀█ ", "▄▀  ", "▀▀▀ "]
};

export const asciiCommand: CommandModule = {
  definition: {
    name: "ascii",
    aliases: ["banner", "arttext"],
    description: "Cria um banner de texto em arte ASCII formatado em bloco monoespaçado.",
    usage: "!ascii <palavra>",
    category: "logos",
    cooldownSeconds: 3
  },
  async execute(context) {
    const word = context.args[0]?.toUpperCase().replace(/[^A-Z]/g, "") || "";
    if (!word || word.length > 10) {
      await context.reply("🔤 Envie uma palavra de até 10 letras para gerar o banner ASCII!\nExemplo: `!ascii SOUL`");
      return;
    }

    const lines: [string[], string[], string[]] = [[], [], []];

    for (const char of word) {
      const glyph = FONT_MAP[char] || ["   ", "   ", "   "];
      lines[0].push(glyph[0]!);
      lines[1].push(glyph[1]!);
      lines[2].push(glyph[2]!);
    }

    const banner = [
      lines[0].join(" "),
      lines[1].join(" "),
      lines[2].join(" ")
    ].join("\n");

    await context.reply(`\`\`\`\n${banner}\n\`\`\``);
  }
};
