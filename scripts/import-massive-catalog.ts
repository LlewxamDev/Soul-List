import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

interface RawCommand {
  name: string;
  aliases: string[];
  category: string;
  description: string;
  textResponse: string;
  requiresMention: boolean;
  percentageTest: boolean;
  botSource: string;
}

const SOURCES = [
  {
    bot: "blackofc",
    file: "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/reference_bots/extracted/blackofc/blackofc/index.js"
  },
  {
    bot: "AnnaV6-Ultra",
    file: "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/reference_bots/extracted/AnnaV6-Ultra/AnnaV6-Ultra/anna.js"
  },
  {
    bot: "Kokushibot",
    file: "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/reference_bots/extracted/Kokushibot/Kokushibot/index.js"
  },
  {
    bot: "zagan",
    file: "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/reference_bots/extracted/zagan/zagan/index.js"
  },
  {
    bot: "succubus-bot",
    file: "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/reference_bots/extracted/succubus-bot/succubus-bot/index.js"
  },
  {
    bot: "TED-BOT-V4.5",
    file: "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/reference_bots/extracted/TED-BOT-V4.5/TED-BOT-V4.5/index.js"
  }
];

// 67 Comandos Oficiais Nativos do Soul-List que não devem ser sobrescritos
const OFFICIAL_NATIVE_COMMANDS = new Set([
  "8ball", "adivinhar", "antilink", "ascii", "avaliar", "ban", "botinfo",
  "cantada", "caraoucoroa", "casar", "cassino", "charada", "coinflip",
  "comprarvip", "config", "corno", "crime", "daily", "dado", "deposit",
  "depositar", "divorcio", "doar", "doarvip", "doarxp", "echo", "elogio",
  "eval", "fealdade", "gay", "gpt", "gpt4", "help", "insulto", "kick",
  "lideres", "limpardados", "logo", "manha", "menu", "mute", "pagar",
  "pay", "perfil", "piada", "ping", "play", "ppt", "preservar", "ranking",
  "rebaixar", "reload", "renascer", "restart", "roleta", "saldo", "sensivel",
  "tagall", "toggle", "top", "trabalhar", "unmute", "uptime", "vip", "warn",
  "ytmp3", "ytmp4"
]);

// Termos proibidos: Travas, spam, abusos do WhatsApp, Doxxing / Vazamentos e Conteúdo Sexual Explícito (NSFW puro)
const FORBIDDEN_TERMS = [
  "trava", "destrava", "crash", "lag", "bug", "flood", "vcard", "spam",
  "dox", "cpf", "puxar", "consulta", "nome_mae", "titulo_eleitor",
  "hentai", "porn", "xxx", "nude", "boobs", "ass", "pussy", "dick",
  "penis", "vagina", "anal", "blowjob", "fuck", "lewd", "nsfw",
  "hthigh", "hboobs", "kemonomimi", "yaoi", "ecchi", "pack", "pelada",
  "pelado", "gostosa", "safada", "bundao", "peito", "masturba", "spamngl", "tabelagp"
];

function isForbidden(name: string): boolean {
  const lower = name.toLowerCase();
  return FORBIDDEN_TERMS.some((term) => lower.includes(term));
}

function determineCategory(name: string, snippet: string): string {
  const lower = name.toLowerCase();
  if (
    lower.includes("anime") || lower.includes("pat") || lower.includes("hug") ||
    lower.includes("slap") || lower.includes("cry") || lower.includes("dance") ||
    lower.includes("smile") || lower.includes("blush") || lower.includes("kiss") ||
    lower.includes("poke") || lower.includes("wink") || lower.includes("bite") ||
    lower.includes("cuddle") || lower.includes("kill") || lower.includes("punch") ||
    lower.includes("waifu") || lower.includes("neko") || lower.includes("shikimori")
  ) {
    return "anime";
  }
  if (
    lower.includes("sticker") || lower.includes("fig") || lower.includes("attp") ||
    lower.includes("ttp") || lower.includes("wm") || lower.includes("take") ||
    lower.includes("roubar") || lower.includes("toimg") || lower.includes("tovideo")
  ) {
    return "stickers";
  }
  if (
    lower.includes("jogo") || lower.includes("game") || lower.includes("velha") ||
    lower.includes("forca") || lower.includes("quiz") || lower.includes("charada") ||
    lower.includes("roleta") || lower.includes("adivinha") || lower.includes("dado")
  ) {
    return "games";
  }
  if (
    lower.includes("adm") || lower.includes("ban") || lower.includes("kick") ||
    lower.includes("promover") || lower.includes("rebaixar") || lower.includes("grupo") ||
    lower.includes("marcar") || lower.includes("totag") || lower.includes("warn")
  ) {
    return "admin";
  }
  if (
    lower.includes("clima") || lower.includes("tempo") || lower.includes("wiki") ||
    lower.includes("google") || lower.includes("traduz") || lower.includes("noticia") ||
    lower.includes("letra") || lower.includes("calc") || lower.includes("dolar") ||
    lower.includes("moeda") || lower.includes("cep") || lower.includes("horario")
  ) {
    return "search";
  }
  if (
    lower.includes("play") || lower.includes("yt") || lower.includes("video") ||
    lower.includes("audio") || lower.includes("mp3") || lower.includes("mp4") ||
    lower.includes("baixar")
  ) {
    return "downloads";
  }
  if (
    lower.includes("daily") || lower.includes("saldo") || lower.includes("trabalhar") ||
    lower.includes("crime") || lower.includes("top") || lower.includes("pagar") ||
    lower.includes("pix") || lower.includes("banco") || lower.includes("loja")
  ) {
    return "rpg";
  }
  if (
    lower.includes("logo") || lower.includes("text") || lower.includes("gerar")
  ) {
    return "logos";
  }
  return "fun";
}

function cleanText(text: string): string {
  return text
    .replace(/\\n/g, " ")
    .replace(/['"`]/g, "")
    .replace(/\${[^}]+}/g, "")
    .replace(/[\r\n\t]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function extractAll(): Promise<RawCommand[]> {
  const map = new Map<string, RawCommand>();

  for (const src of SOURCES) {
    if (!existsSync(src.file)) continue;
    console.log(`Extraindo comandos de ${src.bot}...`);
    const content = readFileSync(src.file, "utf-8");

    const caseRegex = /case\s+['"`]([^'"`]+)['"`]\s*:/g;
    let match: RegExpExecArray | null;

    while ((match = caseRegex.exec(content)) !== null) {
      const rawName = match[1]?.trim();
      if (!rawName) continue;

      const normalized = rawName
        .replace(/^\${prefix}/, "")
        .replace(/^!/, "")
        .replace(/^\//, "")
        .toLowerCase()
        .trim();

      if (
        !normalized ||
        normalized.length > 25 ||
        normalized.includes("\n") ||
        normalized.includes(" ") ||
        OFFICIAL_NATIVE_COMMANDS.has(normalized) ||
        isForbidden(normalized)
      ) {
        continue;
      }

      const snippet = content.substring(match.index, match.index + 800);
      const isPercentage = snippet.includes("Math.random() * 10") || snippet.includes("Math.random() * 110") || snippet.includes("%");
      const requiresMention = snippet.includes("mentionedJid") || snippet.includes("mentions") || snippet.includes("@");

      let textResponse = "";
      const textMatch = snippet.match(/text:\s*[`'"]([^`'"]+)[`'"]/);
      const captionMatch = snippet.match(/caption:\s*[`'"]([^`'"]+)[`'"]/);
      const replyMatch = snippet.match(/reply\(\s*[`'"]([^`'"]+)[`'"]/);

      if (textMatch && textMatch[1]) {
        textResponse = cleanText(textMatch[1]);
      } else if (captionMatch && captionMatch[1]) {
        textResponse = cleanText(captionMatch[1]);
      } else if (replyMatch && replyMatch[1]) {
        textResponse = cleanText(replyMatch[1]);
      }

      if (!textResponse || textResponse.length < 5) {
        textResponse = `Comando interativo de entretenimento ${normalized}!`;
      }

      const category = determineCategory(normalized, snippet);

      if (!map.has(normalized)) {
        map.set(normalized, {
          name: normalized,
          aliases: [],
          category,
          description: `Comando ${normalized} da coleção de utilidades e entretenimento.`,
          textResponse: textResponse.substring(0, 180),
          requiresMention,
          percentageTest: isPercentage,
          botSource: src.bot
        });
      }
    }
  }

  return Array.from(map.values());
}

async function main() {
  const extracted = await extractAll();
  console.log(`Total de comandos válidos seguros adicionais extraídos: ${extracted.length}`);

  const chunkSize = 150;
  const packs: RawCommand[][] = [];
  for (let i = 0; i < extracted.length; i += chunkSize) {
    packs.push(extracted.slice(i, i + chunkSize));
  }

  console.log(`Gerando ${packs.length} pacotes modulares em src/plugins/catalog/...`);

  const catalogDir = "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/catalog";
  if (!existsSync(catalogDir)) {
    mkdirSync(catalogDir, { recursive: true });
  }

  for (let idx = 0; idx < packs.length; idx++) {
    const pack = packs[idx]!;
    const packNum = idx + 1;
    const fileName = `pack${packNum}.ts`;

    let fileContent = `import type { CommandModule } from "../../core/types/command";\n\n`;
    fileContent += `export const pack${packNum}Commands: CommandModule[] = [\n`;

    for (const cmd of pack) {
      const descJson = JSON.stringify(cmd.description);
      const respJson = JSON.stringify(cmd.textResponse);
      const nameJson = JSON.stringify(cmd.name);
      const catJson = JSON.stringify(cmd.category);

      fileContent += `  {\n`;
      fileContent += `    definition: {\n`;
      fileContent += `      name: ${nameJson},\n`;
      fileContent += `      aliases: [],\n`;
      fileContent += `      description: ${descJson},\n`;
      fileContent += `      usage: "!${cmd.name}",\n`;
      fileContent += `      category: ${catJson} as any,\n`;
      fileContent += `      cooldownSeconds: 3\n`;
      fileContent += `    },\n`;
      fileContent += `    async execute(context) {\n`;

      if (cmd.percentageTest) {
        fileContent += `      const percent = Math.floor(Math.random() * 101);\n`;
        fileContent += `      const target = context.mentions[0] || context.quotedSender || context.sender;\n`;
        fileContent += `      const targetNum = target.split("@")[0] || target;\n`;
        fileContent += `      await context.replyWithMentions("🎯 [${cmd.name.toUpperCase()}] @" + targetNum + " tem " + percent + "%!\\n" + ${respJson}, [target]);\n`;
      } else if (cmd.requiresMention) {
        fileContent += `      const target = context.mentions[0] || context.quotedSender || context.sender;\n`;
        fileContent += `      const targetNum = target.split("@")[0] || target;\n`;
        fileContent += `      const senderNum = context.sender.split("@")[0] || context.sender;\n`;
        fileContent += `      await context.replyWithMentions("✨ @" + senderNum + " usou !${cmd.name} em @" + targetNum + "!\\n" + ${respJson}, [context.sender, target]);\n`;
      } else {
        fileContent += `      await context.reply("✨ [${cmd.name.toUpperCase()}]\\n" + ${respJson});\n`;
      }

      fileContent += `    }\n`;
      fileContent += `  },\n`;
    }

    fileContent += `];\n`;

    writeFileSync(join(catalogDir, fileName), fileContent, "utf-8");
  }

  // Criar index.ts do plugin catalog
  let indexContent = `import type { BotPlugin } from "../../core/types/plugin";\n`;
  for (let idx = 0; idx < packs.length; idx++) {
    indexContent += `import { pack${idx + 1}Commands } from "./pack${idx + 1}";\n`;
  }

  indexContent += `\nconst plugin: BotPlugin = {\n`;
  indexContent += `  manifest: {\n`;
  indexContent += `    id: "catalog",\n`;
  indexContent += `    name: "Catálogo Expandido",\n`;
  indexContent += `    version: "1.0.0",\n`;
  indexContent += `    enabledByDefault: true,\n`;
  indexContent += `    categories: ["fun", "anime", "search", "games", "stickers", "admin", "rpg", "logos"]\n`;
  indexContent += `  },\n`;
  indexContent += `  commands: [\n`;
  for (let idx = 0; idx < packs.length; idx++) {
    indexContent += `    ...pack${idx + 1}Commands,\n`;
  }
  indexContent += `  ]\n`;
  indexContent += `};\n\n`;
  indexContent += `export default plugin;\n`;

  writeFileSync(join(catalogDir, "index.ts"), indexContent, "utf-8");
  console.log(`Catálogo expandido gerado com sucesso! Total gerado no catálogo: ${extracted.length}`);
}

void main();
