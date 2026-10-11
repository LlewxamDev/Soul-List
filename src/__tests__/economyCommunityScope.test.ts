import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { createDatabase } from "../database/client";
import { EconomyRepository } from "../repositories/economy/EconomyRepository";
import { CommunityScopeResolver } from "../services/economy/CommunityScopeResolver";

async function runTests() {
  console.log("=== INICIANDO TESTES AUTOMATIZADOS DO ESCOPO ECONÔMICO E RPG ===");

  const tmpDbPath = path.join(os.tmpdir(), `test_economy_${Date.now()}.db`);
  const database = createDatabase(tmpDbPath);

  // DDL inicial para testes
  await database.sqlite.execute(`
    CREATE TABLE IF NOT EXISTS economy (
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
    );
  `);
  await database.sqlite.execute(`
    CREATE TABLE IF NOT EXISTS currency_transactions (
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
    );
  `);

  const repo = new EconomyRepository(database);

  // Teste 1: Resolução de Comunidade vs Grupo Isolado
  console.log("\n[Teste 1] Resolução de Escopo por Comunidade vs Grupo Isolado...");
  const mockSocket = {
    groupMetadata: async (jid: string) => {
      if (jid === "grupo_a@g.us" || jid === "grupo_b@g.us") {
        return {
          id: jid,
          subject: "Grupo da Comunidade Alpha",
          linkedParent: "comunidade_alpha@g.us" // Pertencem à mesma comunidade!
        };
      }
      return {
        id: jid,
        subject: "Grupo Isolado C",
        linkedParent: undefined // Não pertence a comunidade
      };
    }
  } as any;

  const scopeA = await CommunityScopeResolver.resolve(mockSocket, "grupo_a@g.us");
  const scopeB = await CommunityScopeResolver.resolve(mockSocket, "grupo_b@g.us");
  const scopeC = await CommunityScopeResolver.resolve(mockSocket, "grupo_c@g.us");

  assert.equal(scopeA.scopeId, "comunidade_alpha@g.us");
  assert.equal(scopeA.scopeType, "community");

  assert.equal(scopeB.scopeId, "comunidade_alpha@g.us");
  assert.equal(scopeB.scopeType, "community");

  assert.equal(scopeC.scopeId, "grupo_c@g.us");
  assert.equal(scopeC.scopeType, "group");

  console.log("✓ Grupo A e B mapeados corretamente para a mesma comunidade:", scopeA.scopeId);
  console.log("✓ Grupo C mantido com escopo isolado próprio:", scopeC.scopeId);

  // Teste 2: Compartilhamento Econômico entre Grupos da Mesma Comunidade
  console.log("\n[Teste 2] Compartilhamento Econômico no Grupo A refletindo no Grupo B...");
  const userId = "551199999999@s.whatsapp.net";

  // Usuário resgata daily no Grupo A
  const dailyRes = await repo.claimDaily(userId, scopeA.scopeId, scopeA.scopeType, 500);
  assert.equal(dailyRes.success, true);
  assert.equal(dailyRes.amount, 500);

  // Usuário consulta saldo no Grupo B (mesma comunidade)
  const accountB = await repo.getOrCreate(userId, scopeB.scopeId, scopeB.scopeType);
  assert.equal(accountB.balance, 600); // 100 inicial cortesia + 500 daily

  console.log("✓ Saldo no Grupo B reflete o Daily resgatado no Grupo A:", accountB.balance, "moedas");

  // Teste 3: Isolamento do Grupo C (não pertence à comunidade)
  console.log("\n[Teste 3] Isolamento no Grupo C...");
  const accountC = await repo.getOrCreate(userId, scopeC.scopeId, scopeC.scopeType);
  assert.equal(accountC.balance, 100); // Saldo inicial isolado, sem o daily da comunidade Alpha

  console.log("✓ Saldo no Grupo C permaneceu isolado:", accountC.balance, "moedas");

  // Teste 4: Tentativa de Daily duplo no mesmo dia na comunidade
  console.log("\n[Teste 4] Prevenção de Resgate Duplo de Daily...");
  const doubleDaily = await repo.claimDaily(userId, scopeB.scopeId, scopeB.scopeType, 500);
  assert.equal(doubleDaily.success, false);
  assert.ok((doubleDaily.timeLeftMs ?? 0) > 0);
  console.log("✓ Segundo resgate bloqueado com sucesso (tempo restante):", Math.round((doubleDaily.timeLeftMs ?? 0) / 1000 / 60), "minutos");

  // Teste 5: Transferência Atômica entre Usuários
  console.log("\n[Teste 5] Transferência Atômica entre Jogadores...");
  const user2 = "551188888888@s.whatsapp.net";
  const transferRes = await repo.transfer(userId, user2, scopeA.scopeId, scopeA.scopeType, 200);
  assert.equal(transferRes.success, true);
  assert.equal(transferRes.senderNewBalance, 400); // 600 - 200
  assert.equal(transferRes.receiverNewBalance, 300); // 100 + 200

  // Bloqueio de transferência com saldo insuficiente
  const failTransfer = await repo.transfer(userId, user2, scopeA.scopeId, scopeA.scopeType, 9999);
  assert.equal(failTransfer.success, false);
  console.log("✓ Transferência atômica concluída e transferência inválida bloqueada:", failTransfer.reason);

  database.close();
  try {
    fs.unlinkSync(tmpDbPath);
  } catch {}

  console.log("\n=== TODOS OS TESTES PASSARAM COM SUCESSO! 100% APROVADO! ===");
}

runTests().catch((err) => {
  console.error("FALHA NOS TESTES:", err);
  process.exit(1);
});
