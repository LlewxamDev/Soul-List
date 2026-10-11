import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

interface RawCommand {
  name: string;
  category: string;
  description: string;
  textResponse: string;
  requiresMention: boolean;
  percentageTest: boolean;
  botSource: string;
}

// Comandos nativos oficiais do Soul-List (não duplicar no catálogo)
const NATIVE_COMMANDS = new Set([
  "8ball", "adivinhar", "admins", "afk", "animeinfo", "antilink", "ascii", "avaliar",
  "ban", "botinfo", "buscar", "cantada", "caraoucoroa", "casar", "cassino", "charada",
  "clima", "coinflip", "comprarvip", "config", "corno", "crime", "dado", "daily",
  "deposit", "depositar", "desligarbot", "divorcio", "doar", "doarvip", "doarxp", "echo",
  "elogio", "eval", "fealdade", "gay", "gpt", "gpt4", "health", "help", "ia", "infocmd",
  "insulto", "kick", "lideres", "ligarbot", "limpardados", "listacmd", "logo", "manha",
  "menu", "mute", "noticias", "open", "pagar", "pay", "perfil", "piada", "ping", "play",
  "plugins", "ppt", "preservar", "ranking", "rebaixar", "reload", "renascer", "restart",
  "roleta", "saldo", "sensivel", "setprefix", "setpremium", "tagall", "toggle", "top",
  "trabalhar", "unban", "unmute", "unwarn", "uptime", "vip", "warn", "ytmp3", "ytmp4", "ytmp4_sel"
]);

// Termos e stubs inúteis a remover
const JUNK_RESPONSES = [
  "comando interativo de entretenimento",
  "tu é burro? cadê",
  "kokurpg",
  "astromods",
  "faltando a primeira |",
  "root@akamo",
  "para usar este comando, você deve ativar o comando:",
  "é nescessário a ativação"
];

function isJunk(name: string, text: string): boolean {
  const lowerName = name.toLowerCase();
  const lowerText = text.toLowerCase();

  // Nomes com sufixos numéricos duplicados (ex: ytmp3-1, menu1, adm, etc.)
  if (/-\d+$/.test(lowerName) || /^menu\d+$/.test(lowerName)) return true;
  if (lowerName === "adm" || lowerName === "admin" || lowerName === "playvideo" || lowerName === "playaudio") return true;

  // Stubs identificados na auditoria
  for (const junk of JUNK_RESPONSES) {
    if (lowerText.includes(junk)) return true;
  }

  return false;
}

function generateCleanDescription(name: string, category: string, isMention: boolean, isPercent: boolean): string {
  const n = name.toLowerCase();

  // Ações de menção / interação social
  if (isMention) {
    const actions: Record<string, string> = {
      beijar: "Dá um beijo carinhoso na pessoa marcada",
      kiss: "Dá um beijo na pessoa marcada",
      abracar: "Dá um abraço quentinho na pessoa marcada",
      hug: "Dá um abraço na pessoa marcada",
      tapa: "Dá um tapa estalado na pessoa marcada",
      slap: "Dá um tapa na pessoa marcada",
      chutar: "Dá um chute bem dado na pessoa marcada",
      kick: "Dá um chute de brincadeira na pessoa marcada",
      cafune: "Faz um cafuné gostoso na pessoa marcada",
      pat: "Faz carinho na cabeça da pessoa marcada",
      morder: "Dá uma mordidinha na pessoa marcada",
      bite: "Dá uma mordidinha na pessoa marcada",
      dancar: "Chama a pessoa marcada para dançar",
      dance: "Dança animado com a pessoa marcada",
      soco: "Dá um soco de brincadeira na pessoa",
      punch: "Dá um soco na pessoa marcada",
      matar: "Elimina a pessoa de brincadeira",
      kill: "Derruba a pessoa de brincadeira",
      cutucar: "Cutuca a pessoa marcada",
      poke: "Cutuca a pessoa marcada",
      piscar: "Dá uma piscadinha para a pessoa",
      wink: "Dá uma piscada charmosa para a pessoa",
      lamber: "Passa a língua na pessoa marcada",
      lick: "Dá uma lambida na pessoa marcada",
      alimentar: "Dá comida na boca da pessoa marcada",
      feed: "Alimenta a pessoa marcada com carinho",
      cuddle: "Fica de dengo e carinho com a pessoa"
    };

    if (actions[n]) return actions[n];
    return `Interage de forma divertida com a pessoa marcada (${n})`;
  }

  // Medidores de porcentagem
  if (isPercent) {
    const meters: Record<string, string> = {
      corno: "Calcula a porcentagem de chifre da pessoa",
      gado: "Calcula o nível de gado da pessoa",
      gay: "Calcula o medidor de viadagem da pessoa",
      feio: "Calcula o nível de feiura da pessoa",
      lindo: "Calcula o nível de beleza e charme da pessoa",
      gostoso: "Calcula o nível de sensualidade da pessoa",
      safado: "Calcula a porcentagem de safadeza da pessoa",
      fiel: "Calcula a taxa de fidelidade da pessoa",
      rico: "Calcula a chance de ficar milionário",
      inteligente: "Calcula o QI e esperteza da pessoa",
      sorte: "Mede o nível de sorte da pessoa hoje",
      azar: "Mede o nível de azar da pessoa hoje",
      pobre: "Calcula o índice de pobreza da pessoa",
      medroso: "Calcula o medidor de covardia da pessoa",
      bebado: "Calcula o teor de álcool no sangue da pessoa"
    };

    if (meters[n]) return meters[n];
    return `Calcula a porcentagem de ${n} da pessoa`;
  }

  // Logos e Efeitos Visuais
  if (category === "logos") {
    return `Cria logo com texto personalizado em efeito ${n.toUpperCase()}`;
  }

  // Figurinhas
  if (category === "stickers") {
    if (n.startsWith("ttp") || n.startsWith("attp")) return `Cria figurinha com texto animado (${n})`;
    return `Gera figurinha estilizada ou recurso de sticker (${n})`;
  }

  // Anime
  if (category === "anime") {
    return `Envia imagens e conteúdos temáticos de anime (${n})`;
  }

  // Pesquisas
  if (category === "search") {
    return `Consulta informações e dados sobre ${n}`;
  }

  // Jogos
  if (category === "games") {
    return `Minigame interativo de entretenimento (${n})`;
  }

  return `Comando de entretenimento e interação (${n})`;
}

async function run() {
  console.log("=== INICIANDO CURADORIA DO CATÁLOGO DE COMANDOS ===");

  const rawJsonPath = join(process.cwd(), "audit", "command-inventory.raw.json");
  const rawData = JSON.parse(readFileSync(rawJsonPath, "utf-8"));
  const entries: any[] = rawData.entries;

  const catalogEntries = entries.filter((e) => e.pluginId === "catalog");
  console.log(`Total de comandos no catálogo original: ${catalogEntries.length}`);

  const curated: RawCommand[] = [];
  const removed: Array<{ name: string; reason: string }> = [];

  for (const entry of catalogEntries) {
    const name = entry.name.toLowerCase();

    // 1. Já existe como comando nativo do bot
    if (NATIVE_COMMANDS.has(name)) {
      removed.push({ name, reason: "Já implementado como comando nativo oficial" });
      continue;
    }

    // 2. É lixo / stub inútil
    if (isJunk(name, entry.staticResponse ?? "")) {
      removed.push({ name, reason: "Stub depreciado ou mensagem inútil herdada de bot externo" });
      continue;
    }

    // 3. Determina características
    const isMention = entry.implementationKind === "catalog-template-mention";
    const isPercent = entry.implementationKind === "catalog-template-percent";
    const description = generateCleanDescription(name, entry.category, isMention, isPercent);

    // Limpa a resposta estática
    let textResponse = entry.staticResponse ?? "";
    textResponse = textResponse.replace(/✨ \[.*?\]\s*/g, "").trim();
    if (!textResponse) {
      textResponse = `Aqui está o resultado de *${name}*!`;
    }

    curated.push({
      name,
      category: entry.category,
      description,
      textResponse,
      requiresMention: isMention,
      percentageTest: isPercent,
      botSource: "soul-list-curated"
    });
  }

  console.log(`✓ Comandos curados e aprovados: ${curated.length}`);
  console.log(`✓ Comandos removidos na curadoria: ${removed.length}`);

  // Divide em pacotes modulares de 150 comandos
  const chunkSize = 150;
  const packs: RawCommand[][] = [];
  for (let i = 0; i < curated.length; i += chunkSize) {
    packs.push(curated.slice(i, i + chunkSize));
  }

  const catalogDir = join(process.cwd(), "src", "plugins", "catalog");
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

      if (cmd.percentageTest) {
        fileContent += `    async execute(context) {\n`;
        fileContent += `      const target = context.mentions[0] || context.quotedSender || context.sender;\n`;
        fileContent += `      const targetNum = target.split("@")[0] || target;\n`;
        fileContent += `      const percent = Math.floor(Math.random() * 101);\n`;
        fileContent += `      await context.replyWithMentions(\`🎯 [*${cmd.name.toUpperCase()}*] @\${targetNum} tem *\${percent}%*!\\n${cmd.description}\`, [target]);\n`;
        fileContent += `    }\n`;
      } else if (cmd.requiresMention) {
        fileContent += `    async execute(context) {\n`;
        fileContent += `      const target = context.mentions[0] || context.quotedSender || context.sender;\n`;
        fileContent += `      const targetNum = target.split("@")[0] || target;\n`;
        fileContent += `      const senderNum = context.sender.split("@")[0] || context.sender;\n`;
        fileContent += `      await context.replyWithMentions(\`✨ @\${senderNum} usou !${cmd.name} em @\${targetNum}!\\n${cmd.description}\`, [context.sender, target]);\n`;
        fileContent += `    }\n`;
      } else {
        fileContent += `    async execute(context) {\n`;
        fileContent += `      await context.reply(${respJson});\n`;
        fileContent += `    }\n`;
      }
      fileContent += `  },\n`;
    }

    fileContent += `];\n`;
    writeFileSync(join(catalogDir, fileName), fileContent, "utf-8");
  }

  // Gera novo index.ts do catalog
  let indexContent = `import type { BotPlugin } from "../../core/types/plugin";\n`;
  for (let idx = 1; idx <= packs.length; idx++) {
    indexContent += `import { pack${idx}Commands } from "./pack${idx}";\n`;
  }
  indexContent += `\nconst plugin: BotPlugin = {\n`;
  indexContent += `  manifest: {\n`;
  indexContent += `    id: "catalog",\n`;
  indexContent += `    name: "Catálogo Curado",\n`;
  indexContent += `    version: "2.0.0",\n`;
  indexContent += `    enabledByDefault: true,\n`;
  indexContent += `    categories: ["fun", "anime", "search", "games", "stickers", "admin", "rpg", "logos"]\n`;
  indexContent += `  },\n`;
  indexContent += `  commands: [\n`;
  for (let idx = 1; idx <= packs.length; idx++) {
    indexContent += `    ...pack${idx}Commands,\n`;
  }
  indexContent += `  ]\n`;
  indexContent += `};\n\nexport default plugin;\n`;
  writeFileSync(join(catalogDir, "index.ts"), indexContent, "utf-8");

  // Remove arquivos residuais de packs antigos se o número de packs diminuiu
  const existingFiles = readdirSync(catalogDir);
  for (const f of existingFiles) {
    const match = f.match(/^pack(\d+)\.ts$/);
    if (match && Number(match[1]) > packs.length) {
      const p = join(catalogDir, f);
      writeFileSync(p, `export const pack${match[1]}Commands = [];\n`, "utf-8");
    }
  }

  console.log("=== CURADORIA DO CATÁLOGO CONCLUÍDA COM SUCESSO! ===");
}

run().catch(console.error);
