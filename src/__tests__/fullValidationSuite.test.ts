import assert from "node:assert/strict";
import { PluginRuntime } from "../core/runtime/PluginRuntime";
import { parseIncomingMessage } from "../core/parser/messageParser";
import { PermissionService } from "../core/permissions/PermissionService";
import { CommunityScopeResolver } from "../services/economy/CommunityScopeResolver";
import type { AppEnv } from "../config/env";
import pino from "pino";

async function runValidation() {
  console.log("=================================================================");
  console.log("       SUÍTE COMPLETA DE VALIDAÇÃO FUNCIONAL - SOUL-LIST BOT     ");
  console.log("=================================================================");

  const dummyEnv: AppEnv = {
    botName: "Soul-List",
    defaultPrefix: "!",
    prefixes: ["!", "/", "."],
    ownerNumbers: ["551199999999"],
    enableSensitiveCategories: true,
    cooldownSeconds: 3,
    maxRequestsPerMinute: 60,
    databasePath: ":memory:"
  } as any;

  const logger = pino({ level: "silent" });

  // 1. Validação do Registro de Comandos e Plugins
  console.log("\n[1] Validando Registro de Comandos e Plugins...");
  const pr = new PluginRuntime(dummyEnv, logger);
  await pr.loadAll();
  const allCommands = pr.registry.all();
  console.log(`✓ Total de comandos carregados no registro: ${allCommands.length}`);
  assert.ok(allCommands.length >= 1400, "Deve haver pelo menos 1400 comandos carregados");

  // Verificar comandos vitais essenciais
  const vitalCommands = ["play", "ytmp3", "ytmp4", "saldo", "daily", "trabalhar", "crime", "menu", "ping", "ban", "mute", "vip"];
  for (const cmdName of vitalCommands) {
    const cmd = pr.registry.get(cmdName);
    assert.ok(cmd, `Comando vital '${cmdName}' deve existir`);
    assert.equal(cmd.name, cmdName);
  }
  console.log("✓ Todos os comandos vitais do bot estão registrados e íntegros.");

  // 2. Validação do MessageParser
  console.log("\n[2] Validando MessageParser (Prefixos, Argumentos, Menções)...");
  const rawMsg1 = {
    key: { remoteJid: "12345@s.whatsapp.net", fromMe: false },
    message: { conversation: "!play linkin park in the end" }
  } as any;
  const parsed1 = parseIncomingMessage(rawMsg1, dummyEnv);
  assert.equal(parsed1.commandName, "play");
  assert.equal(parsed1.prefix, "!");
  assert.equal(parsed1.argString, "linkin park in the end");

  const rawMsg2 = {
    key: { remoteJid: "120363024@g.us", participant: "551199999999@s.whatsapp.net", fromMe: false },
    message: {
      extendedTextMessage: {
        text: "/ban @551188888888",
        contextInfo: {
          mentionedJid: ["551188888888@s.whatsapp.net"]
        }
      }
    }
  } as any;
  const parsed2 = parseIncomingMessage(rawMsg2, dummyEnv);
  assert.equal(parsed2.commandName, "ban");
  assert.equal(parsed2.prefix, "/");
  assert.equal(parsed2.mentions.length, 1);
  assert.equal(parsed2.mentions[0], "551188888888@s.whatsapp.net");
  console.log("✓ MessageParser parseou comandos com prefixos '!' e '/' com perfeição.");

  // 3. Validação de Permissões
  console.log("\n[3] Validando PermissionService...");
  const permService = new PermissionService(dummyEnv);
  const muteCmd = pr.registry.get("mute");
  const banCmd = pr.registry.get("ban");

  // Teste de Admin (Mute)
  const mockContextMember = {
    command: muteCmd,
    sender: "551177777777@s.whatsapp.net",
    isOwner: false,
    isAdmin: false,
    isGroup: true,
    isPremium: false,
    services: {
      rateLimit: {
        check: () => ({ allowed: true, retryAfterMs: 0 })
      }
    }
  } as any;

  const evalMemberMute = permService.evaluate(mockContextMember);
  assert.equal(evalMemberMute.allowed, false, "Membro comum não deve poder executar mute");

  const mockContextAdmin = {
    ...mockContextMember,
    sender: "551166666666@s.whatsapp.net",
    isAdmin: true
  };
  const evalAdminMute = permService.evaluate(mockContextAdmin);
  assert.equal(evalAdminMute.allowed, true, "Admin do grupo deve poder executar mute");

  // Teste de Owner (Ban)
  const mockContextOwner = {
    ...mockContextMember,
    command: banCmd,
    sender: "551199999999@s.whatsapp.net",
    isOwner: true
  };
  const evalOwnerBan = permService.evaluate(mockContextOwner);
  assert.equal(evalOwnerBan.allowed, true, "Dono do bot deve poder executar ban");
  console.log("✓ Hierarquia de permissões (Dono, Admin, Membro) validada com sucesso.");

  // 4. Validação do Escopo de Comunidade e Grupos
  console.log("\n[4] Validando Resolução de Escopo Comunitário...");
  const fakeSocket = {
    groupMetadata: async (jid: string) => {
      if (jid === "g1@g.us") return { id: "g1@g.us", linkedParent: "comunidade@g.us" };
      return { id: "g2@g.us", linkedParent: undefined };
    }
  } as any;

  const scopeCommunity = await CommunityScopeResolver.resolve(fakeSocket, "g1@g.us");
  const scopeIsolated = await CommunityScopeResolver.resolve(fakeSocket, "g2@g.us");

  assert.equal(scopeCommunity.scopeId, "comunidade@g.us");
  assert.equal(scopeCommunity.scopeType, "community");
  assert.equal(scopeIsolated.scopeId, "g2@g.us");
  assert.equal(scopeIsolated.scopeType, "group");
  console.log("✓ Associação comprovada por linkedParent e isolamento de grupo externo validados.");

  console.log("\n=================================================================");
  console.log("    TODOS OS TESTES DA SUÍTE DE VALIDAÇÃO PASSARAM COM SUCESSO!   ");
  console.log("=================================================================\n");
}

runValidation().catch((err) => {
  console.error("Falha na validação:", err);
  process.exit(1);
});
