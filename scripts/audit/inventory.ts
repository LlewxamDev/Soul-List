/**
 * Gera o inventário de comandos a partir do mecanismo REAL de carregamento (PluginRuntime).
 *
 * - Intercepta CommandRegistry.register para registrar a ordem de carga e detectar
 *   sobrescritas de nome, aliases que sombreiam nomes e aliases duplicados.
 * - Localiza o arquivo/linha de definição de cada comando.
 * - Faz análise estática do corpo do handler (dependências, mídia, interatividade, template).
 *
 * Uso: npx tsx scripts/audit/inventory.ts
 * Não abre conexão com WhatsApp nem toca no banco de dados.
 */
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import pino from "pino";
import { CommandRegistry } from "../../src/core/registry/CommandRegistry";
import { PluginRuntime } from "../../src/core/runtime/PluginRuntime";
import type { CommandModule, RegisteredCommand } from "../../src/core/types/command";
import type { AppEnv } from "../../src/config/env";

const ROOT = resolve(__dirname, "..", "..");
const OUT_DIR = join(ROOT, "audit");

interface RegistrationEvent {
  order: number;
  pluginId: string;
  name: string;
  aliases: string[];
}

export interface InventoryEntry {
  auditId: string;
  name: string;
  aliases: string[];
  category: string;
  pluginId: string;
  sourceFile: string;
  sourceLine: number | null;
  description: string;
  usage: string;
  permissions: string[];
  cooldownSeconds: number;
  hidden: boolean;
  implementationKind: string;
  services: string[];
  repositories: string[];
  media: string[];
  interactive: string[];
  externalNetwork: boolean;
  usesRandom: boolean;
  usesSocketDirectly: string[];
  staticResponse: string | null;
  shadowedRegistrations: string[];
  aliasConflicts: string[];
  technicalStatus: string;
  testStatus: string;
  failures: string;
  fixes: string;
  lastValidation: string;
}

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (full.endsWith(".ts")) acc.push(full);
  }
  return acc;
}

/** Índice nome -> [arquivo, linha] para todas as definições `name: "x"` em plugins. */
function buildSourceIndex(): Map<string, Array<{ file: string; line: number }>> {
  const index = new Map<string, Array<{ file: string; line: number }>>();
  const files = [...walk(join(ROOT, "src", "plugins")), ...walk(join(ROOT, "plugins"))];
  for (const file of files) {
    const lines = readFileSync(file, "utf-8").split(/\r?\n/);
    lines.forEach((text, i) => {
      const match = /^\s*name:\s*"([^"]+)"/.exec(text);
      if (!match?.[1]) return;
      const list = index.get(match[1]) ?? [];
      list.push({ file: relative(ROOT, file).replace(/\\/g, "/"), line: i + 1 });
      index.set(match[1], list);
    });
  }
  return index;
}

function unique(values: string[]): string[] {
  return [...new Set(values)].sort();
}

function analyze(body: string): Pick<
  InventoryEntry,
  "services" | "repositories" | "media" | "interactive" | "externalNetwork" | "usesRandom" | "usesSocketDirectly" | "staticResponse" | "implementationKind"
> {
  const services = unique([...body.matchAll(/services\.(\w+)/g)].map((m) => m[1]!));
  const repositories = unique([...body.matchAll(/repositories\.(\w+)/g)].map((m) => m[1]!));
  const media: string[] = [];
  if (/sendImage\(/.test(body)) media.push("image");
  if (/sendVideo\(/.test(body)) media.push("video");
  if (/sendAudio\(/.test(body)) media.push("audio");
  if (/sendSticker\(/.test(body)) media.push("sticker");
  if (/downloadMedia\(/.test(body)) media.push("downloadMedia");
  const interactive: string[] = [];
  if (/sendInteractiveButtons\(/.test(body)) interactive.push("nativeFlow");
  if (/poll|InteractivePoll/i.test(body)) interactive.push("poll");
  if (/sendProgress\(|editText\(/.test(body)) interactive.push("editMessage");
  const usesSocketDirectly = unique([...body.matchAll(/socket\.(\w+)/g)].map((m) => m[1]!));
  const externalNetwork = /fetch\(|axios|https?:\/\//.test(body) || services.some((s) =>
    ["search", "wikipedia", "weather", "news", "books", "movies", "translation", "playStore", "ai", "anime", "youtube", "speech"].includes(s)
  );

  // Detecção dos três templates gerados por scripts/import-massive-catalog.ts
  let implementationKind = "custom";
  let staticResponse: string | null = null;
  const percent = /Math\.floor\(Math\.random\(\) \* 101\)[\s\S]*tem " \+ percent \+ "%!\\n" \+ "((?:[^"\\]|\\.)*)"/.exec(body);
  const mention = /" usou ![\w.-]+ em @" \+ targetNum \+ "!\\n" \+ "((?:[^"\\]|\\.)*)"/.exec(body);
  const text = /context\.reply\("✨ \[[^\]]+\]\\n" \+ "((?:[^"\\]|\\.)*)"\)/.exec(body);
  if (percent) {
    implementationKind = "catalog-template-percent";
    staticResponse = percent[1] ?? null;
  } else if (mention) {
    implementationKind = "catalog-template-mention";
    staticResponse = mention[1] ?? null;
  } else if (text) {
    implementationKind = "catalog-template-text";
    staticResponse = text[1] ?? null;
  }

  const usesRandom = /Math\.random/.test(body);
  return { services, repositories, media, interactive, externalNetwork, usesRandom, usesSocketDirectly, staticResponse, implementationKind };
}

function permissionsOf(cmd: RegisteredCommand): string[] {
  const flags: string[] = [];
  if (cmd.ownerOnly) flags.push("owner");
  if (cmd.adminOnly) flags.push("admin");
  if (cmd.groupOnly) flags.push("group");
  if (cmd.privateOnly) flags.push("private");
  if (cmd.premiumOnly) flags.push("premium");
  if (cmd.sensitive) flags.push("sensitive");
  return flags;
}

function csvCell(value: unknown): string {
  const text = Array.isArray(value) ? value.join("|") : value === null || value === undefined ? "" : String(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export async function buildInventory(): Promise<{
  entries: InventoryEntry[];
  events: RegistrationEvent[];
  collisions: { nameOverwrites: string[]; aliasShadowsName: string[]; aliasDuplicates: string[] };
}> {
  const events: RegistrationEvent[] = [];
  const originalRegister = CommandRegistry.prototype.register;
  let order = 0;
  CommandRegistry.prototype.register = function patched(this: CommandRegistry, pluginId: string, module: CommandModule) {
    events.push({ order: order++, pluginId, name: module.definition.name.toLowerCase(), aliases: module.definition.aliases.map((a) => a.toLowerCase()) });
    return originalRegister.call(this, pluginId, module);
  };

  const env = { botName: "Soul-List", defaultPrefix: "!", prefixes: ["!"] } as unknown as AppEnv;
  const runtime = new PluginRuntime(env, pino({ level: "silent" }));
  try {
    await runtime.loadAll();
  } finally {
    CommandRegistry.prototype.register = originalRegister;
  }

  // Colisões
  const byName = new Map<string, RegistrationEvent[]>();
  for (const ev of events) byName.set(ev.name, [...(byName.get(ev.name) ?? []), ev]);
  const nameOverwrites: string[] = [];
  for (const [name, list] of byName) {
    if (list.length > 1) nameOverwrites.push(`${name}: ${list.map((e) => `${e.pluginId}#${e.order}`).join(" -> ")} (vence o último)`);
  }
  const allNames = new Set(events.map((e) => e.name));
  const aliasOwners = new Map<string, string[]>();
  for (const ev of events) for (const alias of ev.aliases) aliasOwners.set(alias, [...(aliasOwners.get(alias) ?? []), `${ev.pluginId}:${ev.name}`]);
  const aliasShadowsName: string[] = [];
  const aliasDuplicates: string[] = [];
  for (const [alias, owners] of aliasOwners) {
    if (allNames.has(alias)) aliasShadowsName.push(`alias "${alias}" (de ${owners.join(", ")}) sombreia o comando de nome "${alias}"`);
    if (owners.length > 1) aliasDuplicates.push(`alias "${alias}" declarado por ${owners.join(", ")} (vence o último)`);
  }

  const sourceIndex = buildSourceIndex();
  const entries: InventoryEntry[] = runtime.registry.all().map((cmd, i) => {
    const sources = sourceIndex.get(cmd.name) ?? [];
    const pluginDir = cmd.pluginId === "example-echo" ? "plugins/example-echo" : `src/plugins/${cmd.pluginId}`;
    const source = sources.find((s) => s.file.startsWith(pluginDir)) ?? sources[0];
    const body = cmd.execute.toString();
    const analysis = analyze(body);
    const shadowed = (byName.get(cmd.name) ?? []).filter((e) => e.pluginId !== cmd.pluginId || false).map((e) => `${e.pluginId}#${e.order}`);
    const aliasConflicts = cmd.aliases
      .map((a) => a.toLowerCase())
      .filter((a) => allNames.has(a) || (aliasOwners.get(a)?.length ?? 0) > 1);
    return {
      auditId: `CMD-${String(i + 1).padStart(4, "0")}`,
      name: cmd.name,
      aliases: cmd.aliases,
      category: cmd.category,
      pluginId: cmd.pluginId,
      sourceFile: source?.file ?? "(não localizado)",
      sourceLine: source?.line ?? null,
      description: cmd.description,
      usage: cmd.usage,
      permissions: permissionsOf(cmd),
      cooldownSeconds: cmd.cooldownSeconds,
      hidden: Boolean(cmd.hidden),
      ...analysis,
      shadowedRegistrations: shadowed,
      aliasConflicts,
      technicalStatus: "pendente-classificacao",
      testStatus: "nao-testado",
      failures: "",
      fixes: "",
      lastValidation: ""
    };
  });

  return { entries, events, collisions: { nameOverwrites, aliasShadowsName, aliasDuplicates } };
}

async function main(): Promise<void> {
  const { entries, events, collisions } = await buildInventory();
  mkdirSync(OUT_DIR, { recursive: true });

  const columns: Array<keyof InventoryEntry> = [
    "auditId", "name", "aliases", "category", "pluginId", "sourceFile", "sourceLine", "implementationKind",
    "permissions", "services", "repositories", "media", "interactive", "externalNetwork", "usesRandom",
    "usesSocketDirectly", "shadowedRegistrations", "aliasConflicts", "technicalStatus", "testStatus",
    "failures", "fixes", "lastValidation", "description", "staticResponse"
  ];
  const csv = [columns.join(","), ...entries.map((e) => columns.map((c) => csvCell(e[c])).join(","))].join("\n");
  writeFileSync(join(OUT_DIR, "command-inventory.raw.csv"), csv, "utf-8");
  writeFileSync(
    join(OUT_DIR, "command-inventory.raw.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), registrations: events.length, collisions, entries }, null, 2),
    "utf-8"
  );

  const kinds = new Map<string, number>();
  for (const e of entries) kinds.set(e.implementationKind, (kinds.get(e.implementationKind) ?? 0) + 1);
  const byPlugin = new Map<string, number>();
  for (const e of entries) byPlugin.set(e.pluginId, (byPlugin.get(e.pluginId) ?? 0) + 1);
  const aliasCount = entries.reduce((sum, e) => sum + e.aliases.length, 0);

  console.log(JSON.stringify({
    registrationsAttempted: events.length,
    uniqueCommands: entries.length,
    aliasesDeclared: aliasCount,
    byPlugin: Object.fromEntries(byPlugin),
    byImplementationKind: Object.fromEntries(kinds),
    nameOverwrites: collisions.nameOverwrites.length,
    aliasShadowsName: collisions.aliasShadowsName.length,
    aliasDuplicates: collisions.aliasDuplicates.length,
    notLocated: entries.filter((e) => e.sourceLine === null).map((e) => e.name)
  }, null, 2));
}

if (require.main === module) {
  void main();
}
