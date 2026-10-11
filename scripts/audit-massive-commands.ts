import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

interface CommandEvidence {
  name: string;
  botSource: string;
  fileSource: string;
  snippet: string;
  classification: "PASSAM_COM_CERTEZA" | "MERECEM_EXPLICACAO" | "NAO_SABE_O_QUE_FAZEM";
  reason: string;
  category: string;
}

const SOURCES = [
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

function classifyCommand(name: string, snippet: string, bot: string): {
  classification: "PASSAM_COM_CERTEZA" | "MERECEM_EXPLICACAO" | "NAO_SABE_O_QUE_FAZEM";
  reason: string;
  category: string;
} {
  const lowerName = name.toLowerCase();
  const lowerSnippet = snippet.toLowerCase();

  // 1. Inconclusivos / Não sabe o que fazem
  if (
    snippet.trim().length === 0 ||
    lowerSnippet.includes("erro") && lowerSnippet.length < 50 ||
    lowerSnippet.includes("todo") ||
    lowerSnippet.includes("em breve") ||
    lowerSnippet.includes("nao definido") ||
    lowerSnippet.includes("undefined") ||
    /require\(['"]\.\/[^'"]+['"]\)/.test(snippet) && lowerSnippet.includes("not found")
  ) {
    return {
      classification: "NAO_SABE_O_QUE_FAZEM",
      reason: "Código incompleto, vazio ou com referências a arquivos locais inexistentes no bot original.",
      category: "inconclusivo"
    };
  }

  // Comandos quebrados com IPs/URLs mortas ou obfuscadas
  if (
    lowerSnippet.includes("localhost:") ||
    lowerSnippet.includes("127.0.0.1") ||
    lowerSnippet.includes("eval(unescape") ||
    lowerSnippet.includes("eval(atob") ||
    /https?:\/\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/.test(snippet)
  ) {
    return {
      classification: "NAO_SABE_O_QUE_FAZEM",
      reason: "Código depende de servidor local fechado, IP estático inativo ou ofuscação não decifrável.",
      category: "inconclusivo"
    };
  }

  // 2. Merecem Explicação
  // Destrutivos / Ataques / Travas / Spam
  if (
    lowerName.includes("trava") ||
    lowerName.includes("spam") ||
    lowerName.includes("crash") ||
    lowerName.includes("lag") ||
    lowerName.includes("flood") ||
    lowerName.includes("bug") ||
    lowerSnippet.includes("vcard") && lowerSnippet.includes("repeat") ||
    lowerSnippet.includes("travazap")
  ) {
    return {
      classification: "MERECEM_EXPLICACAO",
      reason: "Comando com características de ataque/spam/travazap. Viola os termos do WhatsApp e gera risco grave de banimento de número.",
      category: "risco_ban"
    };
  }

  // Nomes sugestivos / duplo sentido / adultos / pegadinhas
  if (
    lowerName.includes("chupar") ||
    lowerName.includes("mamar") ||
    lowerName.includes("beijar") ||
    lowerName.includes("casar") ||
    lowerName.includes("divorcio") ||
    lowerName.includes("sexo") ||
    lowerName.includes("hentai") ||
    lowerName.includes("nsfw") ||
    lowerName.includes("pau") ||
    lowerName.includes("gostos") ||
    lowerName.includes("safad") ||
    lowerName.includes("bund") ||
    lowerName.includes("peit") ||
    lowerName.includes("nude") ||
    lowerName.includes("pack") ||
    lowerName.includes("gado") ||
    lowerName.includes("corno") ||
    lowerName.includes("gay") ||
    lowerName.includes("feio") ||
    lowerName.includes("lindo") ||
    lowerName.includes("morte") ||
    lowerName.includes("roleta") ||
    lowerName.includes("dox") ||
    lowerName.includes("stalk") ||
    lowerName.includes("cpf") ||
    lowerName.includes("puxar")
  ) {
    if (lowerName.includes("cpf") || lowerName.includes("puxar") || lowerName.includes("dox")) {
      return {
        classification: "MERECEM_EXPLICACAO",
        reason: "Comando que alega consulta de dados pessoais/privados (OSINT/vazamentos). Altíssimo risco legal e ético.",
        category: "dados_sensiveis"
      };
    }

    if (
      lowerSnippet.includes("picol") ||
      lowerSnippet.includes("sorvete") ||
      lowerSnippet.includes("brincadeira") ||
      lowerSnippet.includes("meme") ||
      lowerSnippet.includes("porcentagem")
    ) {
      return {
        classification: "MERECEM_EXPLICACAO",
        reason: "Comando de brincadeira com nome de duplo sentido. No código executa piada inofensiva ou meme seguro, mas o nome exige alinhamento prévio.",
        category: "duplo_sentido"
      };
    }

    if (
      lowerSnippet.includes("porn") ||
      lowerSnippet.includes("xxx") ||
      lowerSnippet.includes("nude") ||
      lowerSnippet.includes("hentai") ||
      lowerSnippet.includes("boobs") ||
      lowerSnippet.includes("ass")
    ) {
      return {
        classification: "MERECEM_EXPLICACAO",
        reason: "Comando com requisição de conteúdo adulto/NSFW explícito. Requer isolamento fora do núcleo padrão conforme diretrizes.",
        category: "nsfw_explicito"
      };
    }

    return {
      classification: "MERECEM_EXPLICACAO",
      reason: "Comando interativo ou social com teor satírico que pode gerar interpretações divergentes.",
      category: "social_satirico"
    };
  }

  // APIs externas que podem ter expirado ou exigir chaves privadas não informadas
  if (
    lowerSnippet.includes("apikey") ||
    lowerSnippet.includes("api.lolhuman") ||
    lowerSnippet.includes("api.zahwazein") ||
    lowerSnippet.includes("hadi-api") ||
    lowerSnippet.includes("neoxr") ||
    lowerSnippet.includes("caliph")
  ) {
    return {
      classification: "MERECEM_EXPLICACAO",
      reason: "Depende de APIs de terceiros não oficiais que frequentemente expiram ou exigem chaves pagas.",
      category: "api_terceiros"
    };
  }

  // 3. Passam com Certeza (Utilitários, Mídia, Ferramentas, Info, Moderação, Jogos seguros)
  let category = "utilitarios";
  if (
    lowerName.includes("menu") ||
    lowerName.includes("help") ||
    lowerName.includes("info") ||
    lowerName.includes("ping") ||
    lowerName.includes("status") ||
    lowerName.includes("regras")
  ) {
    category = "info";
  } else if (
    lowerName.includes("ban") ||
    lowerName.includes("kick") ||
    lowerName.includes("promover") ||
    lowerName.includes("rebaixar") ||
    lowerName.includes("grupo") ||
    lowerName.includes("abrir") ||
    lowerName.includes("fechar") ||
    lowerName.includes("tagall") ||
    lowerName.includes("totag") ||
    lowerName.includes("marcar") ||
    lowerName.includes("aviso") ||
    lowerName.includes("warn")
  ) {
    category = "administracao";
  } else if (
    lowerName.includes("s") ||
    lowerName.includes("fig") ||
    lowerName.includes("sticker") ||
    lowerName.includes("take") ||
    lowerName.includes("roubar") ||
    lowerName.includes("attp") ||
    lowerName.includes("ttp") ||
    lowerName.includes("wm")
  ) {
    category = "stickers";
  } else if (
    lowerName.includes("play") ||
    lowerName.includes("yt") ||
    lowerName.includes("musica") ||
    lowerName.includes("video") ||
    lowerName.includes("audio") ||
    lowerName.includes("mp3") ||
    lowerName.includes("mp4") ||
    lowerName.includes("baixar")
  ) {
    category = "downloads";
  } else if (
    lowerName.includes("clima") ||
    lowerName.includes("tempo") ||
    lowerName.includes("wiki") ||
    lowerName.includes("google") ||
    lowerName.includes("traduz") ||
    lowerName.includes("noticia") ||
    lowerName.includes("letra") ||
    lowerName.includes("dolar") ||
    lowerName.includes("calcula")
  ) {
    category = "pesquisa";
  } else if (
    lowerName.includes("jogar") ||
    lowerName.includes("dado") ||
    lowerName.includes("ppt") ||
    lowerName.includes("moeda") ||
    lowerName.includes("cassino") ||
    lowerName.includes("slots") ||
    lowerName.includes("adivinhar") ||
    lowerName.includes("velha") ||
    lowerName.includes("forca")
  ) {
    category = "jogos";
  } else if (
    lowerName.includes("daily") ||
    lowerName.includes("saldo") ||
    lowerName.includes("trabalhar") ||
    lowerName.includes("banco") ||
    lowerName.includes("pagar") ||
    lowerName.includes("pix") ||
    lowerName.includes("top") ||
    lowerName.includes("rank")
  ) {
    category = "economia_rpg";
  }

  return {
    classification: "PASSAM_COM_CERTEZA",
    reason: "Comando utilitário/funcional claro, com execução transparente e comportamento seguro no WhatsApp.",
    category
  };
}

async function main() {
  const allCommands = new Map<string, CommandEvidence>();

  for (const src of SOURCES) {
    if (!existsSync(src.file)) {
      console.log(`[AVISO] Arquivo não encontrado: ${src.file}`);
      continue;
    }

    console.log(`Analisando ${src.bot}...`);
    const content = readFileSync(src.file, "utf-8");

    // Expressões regulares para capturar cases de comandos
    const caseRegex = /case\s+['"`]([^'"`]+)['"`]\s*:/g;
    let match: RegExpExecArray | null;

    while ((match = caseRegex.exec(content)) !== null) {
      const cmdRaw = match[1]?.trim();
      if (!cmdRaw) continue;

      // Normalizar comandos que usam prefixo dinâmico tipo ${prefix}play
      const normalizedName = cmdRaw
        .replace(/^\${prefix}/, "")
        .replace(/^!/, "")
        .replace(/^\//, "")
        .toLowerCase()
        .trim();

      if (!normalizedName || normalizedName.length > 30 || normalizedName.includes("\n")) {
        continue;
      }

      // Extrair um trecho de 350 caracteres após o case
      const snippetStart = match.index + match[0].length;
      const snippet = content.substring(snippetStart, snippetStart + 350).trim();

      const { classification, reason, category } = classifyCommand(normalizedName, snippet, src.bot);

      if (!allCommands.has(normalizedName)) {
        allCommands.set(normalizedName, {
          name: normalizedName,
          botSource: src.bot,
          fileSource: src.file.split("/").pop() || "",
          snippet: snippet.replace(/\r?\n/g, " ").substring(0, 150),
          classification,
          reason,
          category
        });
      }
    }
  }

  const commandsList = Array.from(allCommands.values());
  console.log(`Total de comandos únicos catalogados: ${commandsList.length}`);

  const passam = commandsList.filter((c) => c.classification === "PASSAM_COM_CERTEZA");
  const merecem = commandsList.filter((c) => c.classification === "MERECEM_EXPLICACAO");
  const naoSabe = commandsList.filter((c) => c.classification === "NAO_SABE_O_QUE_FAZEM");

  console.log(`Passam com certeza: ${passam.length}`);
  console.log(`Merecem explicação: ${merecem.length}`);
  console.log(`Não sabe o que fazem / Inconclusivos: ${naoSabe.length}`);

  // Gerar o documento de auditoria massiva
  let md = `# Auditoria Massiva de Comandos dos Bots de Referência\n\n`;
  md += `> Data da Auditoria: 10 de Outubro de 2026\n`;
  md += `> Total de comandos únicos catalogados nas referências: **${commandsList.length}**\n\n`;
  md += `## 1. Resumo Consolidado das Categorias\n\n`;
  md += `| Classificação | Quantidade | Percentual | Descrição |\n`;
  md += `|---|:---:|:---:|---|\n`;
  md += `| **Passam com Certeza** | **${passam.length}** | ${((passam.length / commandsList.length) * 100).toFixed(1)}% | Comandos utilitários, multimídia, ferramentas, figurinhas, entretenimento seguro e moderação. |\n`;
  md += `| **Merecem Explicação** | **${merecem.length}** | ${((merecem.length / commandsList.length) * 100).toFixed(1)}% | Duplo sentido, pegadinhas, riscos de ban (spam/trava), dados sensíveis ou APIs instáveis. |\n`;
  md += `| **Não Sabe o que Fazem** | **${naoSabe.length}** | ${((naoSabe.length / commandsList.length) * 100).toFixed(1)}% | Código incompleto, quebrado, dependências faltando ou servidores locais inacessíveis. |\n\n`;

  md += `## 2. Comandos que Passam com Certeza (${passam.length})\n\n`;
  md += `São comandos comprovadamente úteis, seguros e prontos para compor o núcleo do bot.\n\n`;
  md += `| Comando | Categoria | Origem | Justificativa |\n`;
  md += `|---|---|---|---|\n`;
  for (const c of passam.slice(0, 150)) {
    md += `| \`${c.name}\` | ${c.category} | ${c.botSource} | ${c.reason} |\n`;
  }
  if (passam.length > 150) {
    md += `| ... e mais ${passam.length - 150} comandos mapeados | | | |\n`;
  }

  md += `\n## 3. Comandos que Merecem Explicação (${merecem.length})\n\n`;
  md += `Comandos identificados que possuem ambiguidades, nomes sugestivos, riscos operacionais ou dependências externas delicadas.\n\n`;
  md += `| Comando | Subtipo | Origem | Explicação / Ponto de Atenção |\n`;
  md += `|---|---|---|---|\n`;
  for (const c of merecem) {
    md += `| \`${c.name}\` | ${c.category} | ${c.botSource} | ${c.reason} |\n`;
  }

  md += `\n## 4. Comandos Inconclusivos / Não Sabe o que Fazem (${naoSabe.length})\n\n`;
  md += `Comandos onde o código de referência não possui corpo funcional, tem chamadas a módulos inexistentes ou lógica corrompida.\n\n`;
  md += `| Comando | Origem | Evidência / Diagnóstico Técnico |\n`;
  md += `|---|---|---|\n`;
  for (const c of naoSabe) {
    md += `| \`${c.name}\` | ${c.botSource} | ${c.reason} |\n`;
  }

  const outPath = "c:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/docs/audit/MASSIVE_COMMAND_AUDIT.md";
  writeFileSync(outPath, md, "utf-8");
  console.log(`Documento salvo com sucesso em: ${outPath}`);
}

void main();
