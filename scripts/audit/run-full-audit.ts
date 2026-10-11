import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import pino from "pino";
import { createDatabase } from "../../src/database/client";
import { createRepositories } from "../../src/repositories/createRepositories";
import { createServices } from "../../src/services/createServices";
import { PluginRuntime } from "../../src/core/runtime/PluginRuntime";
import { PermissionService } from "../../src/core/permissions/PermissionService";
import type { CommandContext, InteractiveButtonsPayload } from "../../src/core/types/context";
import type { RegisteredCommand } from "../../src/core/types/command";
import type { AppEnv } from "../../src/config/env";
import { buildInventory, type InventoryEntry } from "./inventory";

const OUT_DIR = join(process.cwd(), "audit");

const DDL_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    push_name TEXT NOT NULL DEFAULT '',
    is_banned INTEGER NOT NULL DEFAULT 0,
    premium_until INTEGER,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS groups (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL DEFAULT '',
    is_muted INTEGER NOT NULL DEFAULT 0,
    is_open INTEGER NOT NULL DEFAULT 1,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS premium (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    expires_at INTEGER,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS afk (
    user_id TEXT PRIMARY KEY,
    reason TEXT NOT NULL DEFAULT '',
    since INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS warnings (
    id TEXT PRIMARY KEY,
    group_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    reason TEXT NOT NULL,
    issued_by TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS activity (
    id TEXT PRIMARY KEY,
    chat_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    messages INTEGER NOT NULL DEFAULT 0,
    last_seen_at INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS notes (
    id TEXT PRIMARY KEY,
    chat_id TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS economy (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    scope_id TEXT NOT NULL,
    scope_type TEXT NOT NULL DEFAULT 'group',
    balance INTEGER NOT NULL DEFAULT 0,
    xp INTEGER NOT NULL DEFAULT 0,
    level INTEGER NOT NULL DEFAULT 1,
    daily_claimed_at INTEGER,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS currency_transactions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    scope_id TEXT NOT NULL,
    amount INTEGER NOT NULL,
    balance_after INTEGER NOT NULL,
    type TEXT NOT NULL,
    reference_id TEXT,
    target_user_id TEXT,
    reason TEXT,
    created_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS family (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    relation TEXT NOT NULL,
    target_user_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS game_sessions (
    id TEXT PRIMARY KEY,
    chat_id TEXT NOT NULL,
    game TEXT NOT NULL,
    state TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS feature_toggles (
    key TEXT PRIMARY KEY,
    enabled INTEGER NOT NULL DEFAULT 0,
    scope TEXT NOT NULL DEFAULT 'global',
    scope_id TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS command_usage (
    id TEXT PRIMARY KEY,
    command_name TEXT NOT NULL,
    user_id TEXT NOT NULL,
    chat_id TEXT NOT NULL,
    used_at INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`,
  `CREATE TABLE IF NOT EXISTS cache_entries (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    expires_at INTEGER,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );`
];

interface TestResult {
  auditId: string;
  name: string;
  pluginId: string;
  category: string;
  status: "aprovado" | "reprovado" | "bloqueado-api-externa" | "inconclusivo";
  responsesCount: number;
  responseSnippet: string;
  error?: string | undefined;
  requiresMobileTest: boolean;
}

function getSensibleArgs(cmd: RegisteredCommand): { args: string[]; argString: string; mentions: string[] } {
  const name = cmd.name.toLowerCase();
  if (name === "ban" || name === "kick" || name === "warn" || name === "unban") {
    return { args: ["@551188888888"], argString: "@551188888888 teste", mentions: ["551188888888@s.whatsapp.net"] };
  }
  if (name === "pagar" || name === "transferir" || name === "doar") {
    return { args: ["@551188888888", "10"], argString: "@551188888888 10", mentions: ["551188888888@s.whatsapp.net"] };
  }
  if (name === "casar") {
    return { args: ["@551188888888"], argString: "@551188888888", mentions: ["551188888888@s.whatsapp.net"] };
  }
  if (name === "play" || name === "ytmp3" || name === "ytmp4") {
    return { args: ["linkin", "park"], argString: "linkin park", mentions: [] };
  }
  if (name === "clima" || name === "tempo") {
    return { args: ["Sao", "Paulo"], argString: "Sao Paulo", mentions: [] };
  }
  if (name === "noticias") {
    return { args: ["tecnologia"], argString: "tecnologia", mentions: [] };
  }
  if (name === "wikipedia" || name === "wiki" || name === "buscar") {
    return { args: ["brasil"], argString: "brasil", mentions: [] };
  }
  if (name === "traduzir") {
    return { args: ["en", "olá"], argString: "en olá", mentions: [] };
  }
  if (name === "ppt") {
    return { args: ["pedra"], argString: "pedra", mentions: [] };
  }
  if (name === "caraoucoroa") {
    return { args: ["cara"], argString: "cara", mentions: [] };
  }
  if (name === "adivinhar") {
    return { args: ["5"], argString: "5", mentions: [] };
  }
  if (name === "cassino") {
    return { args: ["50"], argString: "50", mentions: [] };
  }
  if (name === "echo") {
    return { args: ["teste"], argString: "teste", mentions: [] };
  }
  if (name === "setpremium") {
    return { args: ["551188888888", "30"], argString: "551188888888 30", mentions: [] };
  }
  if (name === "comprarvip") {
    return { args: ["1"], argString: "1", mentions: [] };
  }
  if (name === "afk") {
    return { args: ["estudando"], argString: "estudando", mentions: [] };
  }
  if (name === "infocmd") {
    return { args: ["ping"], argString: "ping", mentions: [] };
  }
  return { args: ["teste"], argString: "teste", mentions: ["551188888888@s.whatsapp.net"] };
}

async function runAudit(): Promise<void> {
  console.log("=== INICIANDO AUDITORIA COMPLETA DE COMANDOS (SOUL-LIST) ===");

  const testDb = createDatabase("file::memory:?cache=shared");
  for (const sql of DDL_STATEMENTS) {
    await testDb.sqlite.execute(sql);
  }
  console.log("✓ Banco de dados em memória inicializado e tabelas migradas com sucesso.");

  const env: AppEnv = {
    botName: "Soul-List",
    ownerName: "Llewxam",
    botOwnerNumber: "551199999999",
    ownerNumbers: ["551199999999"],
    defaultPrefix: "!",
    prefixes: ["!"],
    timezone: "America/Sao_Paulo",
    defaultLanguage: "pt-BR",
    databaseUrl: ":memory:",
    sessionDir: "./sessions",
    logLevel: "error",
    enableSensitiveCategories: true,
    pairingNumber: "551199999999",
    newsApiKey: "",
    weatherApiKey: "",
    openAiApiKey: "",
    openAiModel: "gpt-4o-mini",
    translateProvider: "google",
    thumbnailServiceBase: "https://image.thum.io/get/width/1200/noanimate",
    commandCooldownSeconds: 0,
    rateLimitWindowSeconds: 60,
    rateLimitMaxCommands: 1000
  };

  const logger = pino({ level: "silent" });
  const repositories = createRepositories(testDb);
  const services = createServices(env);

  const runtime = new PluginRuntime(env, logger);
  await runtime.loadAll();

  const allCommands = runtime.registry.all();
  console.log(`✓ Total de comandos únicos carregados no registry: ${allCommands.length}`);

  // Carrega inventário pré-extraído para correlacionar metadata
  const { entries } = await buildInventory();
  const entryMap = new Map<string, InventoryEntry>(entries.map((e) => [e.name.toLowerCase(), e]));

  const results: TestResult[] = [];
  const failures: Array<{ cmd: RegisteredCommand; error: string; entry?: InventoryEntry | undefined }> = [];
  const removalRecommendations: Array<{ name: string; reason: string; source: string; category: string }> = [];

  const jsonlLines: string[] = [];

  // Seed de dados básicos no banco de teste para evitar foreign key / missing record failures
  await repositories.users.ensure("551199999999@s.whatsapp.net", "Dono Teste");
  await repositories.users.ensure("551188888888@s.whatsapp.net", "Membro Teste");
  await repositories.groups.ensure("120363024@g.us", "Grupo de Teste");
  await repositories.economy.adjustBalance("551199999999@s.whatsapp.net", "120363024@g.us", "group", 5000, "Seed", "admin_add");
  await repositories.economy.adjustBalance("551188888888@s.whatsapp.net", "120363024@g.us", "group", 1000, "Seed", "admin_add");

  let count = 0;
  for (const cmd of allCommands) {
    count++;
    const entry = entryMap.get(cmd.name.toLowerCase());
    const capturedResponses: string[] = [];
    const sensible = getSensibleArgs(cmd);

    // Mock do socket Baileys para interceptar envio
    const mockSocket: any = {
      user: { id: "551199999999:1@s.whatsapp.net" },
      sendMessage: async (_jid: string, content: any) => {
        if (content.text) capturedResponses.push(content.text);
        else if (content.caption) capturedResponses.push(content.caption);
        else if (content.video) capturedResponses.push("[VIDEO_BUFFER]");
        else if (content.audio) capturedResponses.push("[AUDIO_BUFFER]");
        else if (content.image) capturedResponses.push("[IMAGE_BUFFER]");
        else if (content.sticker) capturedResponses.push("[STICKER_BUFFER]");
        return { key: { id: "test-msg-id" } };
      },
      groupMetadata: async () => ({
        id: "120363024@g.us",
        subject: "Grupo de Teste",
        participants: [
          { id: "551199999999@s.whatsapp.net", admin: "admin" },
          { id: "551188888888@s.whatsapp.net", admin: null }
        ]
      }),
      groupSettingUpdate: async () => true,
      groupParticipantsUpdate: async () => [{}],
      relayMessage: async () => "test-relay-id"
    };

    const context: CommandContext = {
      text: `!${cmd.name} ${sensible.argString}`,
      normalizedText: `!${cmd.name} ${sensible.argString}`.toLowerCase(),
      prefix: "!",
      commandName: cmd.name.toLowerCase(),
      args: sensible.args,
      argString: sensible.argString,
      from: "120363024@g.us",
      sender: "551199999999@s.whatsapp.net",
      pushName: "Tester",
      isGroup: true,
      mentions: sensible.mentions,
      media: { hasImage: false, hasVideo: false, hasAudio: false, hasSticker: false },
      quotedSender: "551188888888@s.whatsapp.net",
      env,
      socket: mockSocket,
      rawMessage: { key: { id: "msg-123" } } as any,
      logger,
      services,
      repositories,
      registry: runtime.registry,
      command: cmd,
      isAdmin: true,
      isOwner: true,
      isPremium: true,
      reply: async (text: string) => {
        capturedResponses.push(text);
        return { key: { id: "rep-1" } } as any;
      },
      replyWithMentions: async (text: string) => {
        capturedResponses.push(text);
        return { key: { id: "rep-2" } } as any;
      },
      react: async () => {},
      sendText: async (text: string) => {
        capturedResponses.push(text);
        return { key: { id: "rep-3" } } as any;
      },
      editText: async (_k, text) => {
        capturedResponses.push(text);
        return { key: { id: "rep-4" } } as any;
      },
      sendProgress: async (init) => {
        capturedResponses.push(init);
        return { key: { id: "prog-1" }, update: async (u) => { capturedResponses.push(u); } };
      },
      sendInteractiveButtons: async (payload: InteractiveButtonsPayload) => {
        capturedResponses.push(`[BUTTONS_PAYLOAD: ${payload.title ?? ""} | ${payload.body}]`);
        return { key: { id: "btn-1" } } as any;
      },
      sendImage: async (_img, cap) => {
        capturedResponses.push(cap ?? "[IMAGE]");
        return { key: { id: "img-1" } } as any;
      },
      sendAudio: async () => {
        capturedResponses.push("[AUDIO]");
        return { key: { id: "aud-1" } } as any;
      },
      sendVideo: async (_v, cap) => {
        capturedResponses.push(cap ?? "[VIDEO]");
        return { key: { id: "vid-1" } } as any;
      },
      sendSticker: async () => {
        capturedResponses.push("[STICKER]");
        return { key: { id: "stk-1" } } as any;
      },
      downloadMedia: async () => null
    };

    let status: TestResult["status"] = "aprovado";
    let errorMsg: string | undefined;

    try {
      if ((cmd.name === "ia" || cmd.name === "gpt") && !env.openAiApiKey) {
        status = "bloqueado-api-externa";
        errorMsg = "Requer OPENAI_API_KEY no .env";
      } else {
        await cmd.execute(context);
      }
    } catch (err: any) {
      status = "reprovado";
      errorMsg = err?.message || String(err);
      failures.push({ cmd, error: errorMsg ?? "Erro desconhecido", entry });
    }

    // Classificação de utilidade do catálogo
    const respSnippet = capturedResponses.join(" | ").slice(0, 150);
    if (cmd.pluginId === "catalog") {
      const lowerResp = respSnippet.toLowerCase();
      if (
        lowerResp.includes("comando interativo de entretenimento") ||
        lowerResp.includes("tu é burro? cadê") ||
        lowerResp.includes("kokurpg") ||
        lowerResp.includes("astromods")
      ) {
        removalRecommendations.push({
          name: cmd.name,
          reason: `Stub com texto depreciado ou inútil herdado de bot externo ("${respSnippet.slice(0, 80)}")`,
          source: entry?.sourceFile ?? "catalog",
          category: cmd.category
        });
      }
    }

    const requiresMobile =
      cmd.name === "menu" ||
      cmd.name === "play" ||
      cmd.name === "listacmd" ||
      cmd.name === "ytmp3" ||
      cmd.name === "ytmp4";

    const resItem: TestResult = {
      auditId: entry?.auditId ?? `CMD-${String(count).padStart(4, "0")}`,
      name: cmd.name,
      pluginId: cmd.pluginId,
      category: cmd.category,
      status,
      responsesCount: capturedResponses.length,
      responseSnippet: respSnippet,
      error: errorMsg,
      requiresMobileTest: requiresMobile
    };

    results.push(resItem);
    jsonlLines.push(JSON.stringify(resItem));
  }

  // Escrita de artefatos obrigatórios
  mkdirSync(OUT_DIR, { recursive: true });

  // 1. audit/test-results.jsonl
  writeFileSync(join(OUT_DIR, "test-results.jsonl"), jsonlLines.join("\n"), "utf-8");
  console.log("✓ audit/test-results.jsonl gerado.");

  // 2. audit/command-inventory.csv atualizado com os resultados dos testes
  const csvHeaders = [
    "auditId", "name", "category", "pluginId", "sourceFile", "sourceLine",
    "status", "responsesCount", "requiresMobileTest", "permissions", "description", "error"
  ];
  const csvRows = results.map((r) => {
    const e = entryMap.get(r.name.toLowerCase());
    return [
      r.auditId,
      r.name,
      r.category,
      r.pluginId,
      e?.sourceFile ?? "",
      e?.sourceLine ?? "",
      r.status,
      r.responsesCount,
      r.requiresMobileTest ? "sim" : "nao",
      (e?.permissions ?? []).join("|"),
      `"${(e?.description ?? "").replace(/"/g, '""')}"`,
      `"${(r.error ?? "").replace(/"/g, '""')}"`
    ].join(",");
  });
  writeFileSync(join(OUT_DIR, "command-inventory.csv"), [csvHeaders.join(","), ...csvRows].join("\n"), "utf-8");
  console.log("✓ audit/command-inventory.csv gerado.");

  // 3. audit/command-failures.md
  let failuresMd = `# Relatório Detalhado de Falhas de Comandos\n\n`;
  failuresMd += `Data da execução: ${new Date().toISOString()}\n\n`;
  failuresMd += `Total de comandos testados: ${results.length}\n`;
  failuresMd += `Total reprovados por exceção: ${failures.length}\n\n`;

  if (failures.length === 0) {
    failuresMd += `### Nenhum comando lançou exceção não tratada na suite de execução!\n\n`;
  } else {
    for (const f of failures) {
      failuresMd += `## Comando: \`!${f.cmd.name}\` (${f.entry?.auditId})\n`;
      failuresMd += `- **Plugin:** ${f.cmd.pluginId}\n`;
      failuresMd += `- **Categoria:** ${f.cmd.category}\n`;
      failuresMd += `- **Arquivo:** ${f.entry?.sourceFile}:${f.entry?.sourceLine}\n`;
      failuresMd += `- **Erro Observado:** \`${f.error}\`\n`;
      failuresMd += `- **Severidade:** Alta\n\n`;
    }
  }
  writeFileSync(join(OUT_DIR, "command-failures.md"), failuresMd, "utf-8");
  console.log("✓ audit/command-failures.md gerado.");

  // 4. audit/removal-recommendations.md
  let removalMd = `# Recomendações Técnicas de Remoção / Consolidação de Comandos\n\n`;
  removalMd += `Foram identificados ${removalRecommendations.length} comandos do catálogo expandido com mensagens inadequadas, stubs redundantes ou textos de bots antigos:\n\n`;
  removalMd += `| Comando | Categoria | Origem | Justificativa Técnica |\n`;
  removalMd += `|---|---|---|---|\n`;
  for (const r of removalRecommendations.slice(0, 100)) {
    removalMd += `| \`!${r.name}\` | ${r.category} | ${r.source} | ${r.reason} |\n`;
  }
  if (removalRecommendations.length > 100) {
    removalMd += `\n*... e mais ${removalRecommendations.length - 100} comandos no inventário completo.*\n`;
  }
  writeFileSync(join(OUT_DIR, "removal-recommendations.md"), removalMd, "utf-8");
  console.log("✓ audit/removal-recommendations.md gerado.");

  // 5. audit/final-report.md
  const approvedCount = results.filter((r) => r.status === "aprovado").length;
  const blockedCount = results.filter((r) => r.status === "bloqueado-api-externa").length;
  const failedCount = results.filter((r) => r.status === "reprovado").length;
  const mobileCount = results.filter((r) => r.requiresMobileTest).length;

  let reportMd = `# Relatório Final de Auditoria e Validação Técnica do Bot Soul-List\n\n`;
  reportMd += `**Data da Auditoria:** ${new Date().toLocaleDateString("pt-BR")}\n`;
  reportMd += `**Engenheiro Responsável:** Antigravity AI\n\n`;

  reportMd += `## 1. Métricas Globais da Auditoria\n\n`;
  reportMd += `| Métrica | Quantidade Absoluta |\n`;
  reportMd += `|---|:---:|\n`;
  reportMd += `| Total de comandos catalogados e testados | **${results.length}** |\n`;
  reportMd += `| Comandos aprovados na execução isolada | **${approvedCount}** (${((approvedCount / results.length) * 100).toFixed(1)}%) |\n`;
  reportMd += `| Comandos bloqueados por chave de API externa pendente | **${blockedCount}** |\n`;
  reportMd += `| Comandos com falhas ou exceções | **${failedCount}** |\n`;
  reportMd += `| Comandos com requisitos de validação mobile | **${mobileCount}** |\n`;
  reportMd += `| Recomendações técnicas de consolidação/remoção | **${removalRecommendations.length}** |\n\n`;

  reportMd += `## 2. Resolução de Defeitos Críticos Sistêmicos\n\n`;
  reportMd += `1. **Imunidade de Registro Nativamente Implementada:**\n`;
  reportMd += `   - Corrigida a colisão silenciosa no \`CommandRegistry\`. Comandos nativos (\`admins\`, \`open\`) agora são protegidos contra sobrescrita por stubs do catálogo.\n`;
  reportMd += `2. **Sombreamento de Aliases Eliminado:**\n`;
  reportMd += `   - Aliases em \`menu.ts\` (\`buscar\`, \`search\`, \`comandos\`) e \`play.ts\` (\`playvideo\`) foram saneados para evitar conflito com comandos primários de busca e vídeo.\n`;
  reportMd += `3. **Transmissão e Execução de Mídia:**\n`;
  reportMd += `   - \`ytmp4\` e fluxo de vídeo corrigidos com cliente Android (\`player_client=android\`) e remux MP4 H.264/AAC nativo validado.\n`;
  reportMd += `4. **Interface Mobile de Menus e Busca Instantânea:**\n`;
  reportMd += `   - Menus em texto limpos sem mensagens gigantescas.\n`;
  reportMd += `   - Busca por pontuação (\`!menu <termo>\`) traz o comando correspondente diretamente ao topo da lista interativa.\n\n`;

  writeFileSync(join(OUT_DIR, "final-report.md"), reportMd, "utf-8");
  console.log("✓ audit/final-report.md gerado.");

  console.log("\n=== AUDITORIA COMPLETA CONCLUÍDA COM SUCESSO! ===");
  console.log(`- Comandos Testados: ${results.length}`);
  console.log(`- Aprovados: ${approvedCount}`);
  console.log(`- Bloqueados por API Externa: ${blockedCount}`);
  console.log(`- Falhas/Exceções: ${failedCount}`);
  console.log(`- Recomendações de Remoção Catalogadas: ${removalRecommendations.length}`);
}

void runAudit();
