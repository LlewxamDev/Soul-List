import { and, eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { currencyTransactionsTable, economyTable } from "../../database/schema";

export interface DailyClaimResult {
  success: boolean;
  amount?: number;
  newBalance?: number;
  timeLeftMs?: number;
}

export interface TransferResult {
  success: boolean;
  senderNewBalance?: number;
  receiverNewBalance?: number;
  reason?: string;
}

export class EconomyRepository {
  public constructor(private readonly database: DatabaseClient) {}

  private makeId(userId: string, scopeId: string): string {
    return `${userId}:${scopeId}`;
  }

  public async getOrCreate(userId: string, scopeId: string, scopeType = "group") {
    const id = this.makeId(userId, scopeId);

    const existing = await this.database.db.query.economyTable.findFirst({
      where: eq(economyTable.id, id)
    });

    if (existing) {
      return existing;
    }

    await this.database.db
      .insert(economyTable)
      .values({
        id,
        userId,
        scopeId,
        scopeType,
        balance: 100, // Saldo inicial cortesia
        xp: 0,
        level: 1
      })
      .onConflictDoNothing();

    return (
      (await this.database.db.query.economyTable.findFirst({
        where: eq(economyTable.id, id)
      })) ?? {
        id,
        userId,
        scopeId,
        scopeType,
        balance: 100,
        xp: 0,
        level: 1,
        dailyClaimedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    );
  }

  public async claimDaily(
    userId: string,
    scopeId: string,
    scopeType = "group",
    amount = 500
  ): Promise<DailyClaimResult> {
    const account = await this.getOrCreate(userId, scopeId, scopeType);
    const now = Date.now();
    const cooldownMs = 24 * 60 * 60 * 1000;

    if (account.dailyClaimedAt) {
      const elapsed = now - account.dailyClaimedAt.getTime();
      if (elapsed < cooldownMs) {
        return {
          success: false,
          timeLeftMs: cooldownMs - elapsed
        };
      }
    }

    const newBalance = account.balance + amount;
    const newXp = account.xp + 50;

    await this.database.db
      .update(economyTable)
      .set({
        balance: newBalance,
        xp: newXp,
        dailyClaimedAt: new Date(now),
        updatedAt: new Date(now)
      })
      .where(eq(economyTable.id, account.id));

    await this.database.db.insert(currencyTransactionsTable).values({
      id: `tx_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      userId,
      scopeId,
      amount,
      balanceAfter: newBalance,
      type: "daily",
      reason: "Recompensa diária",
      createdAt: new Date(now)
    });

    return {
      success: true,
      amount,
      newBalance
    };
  }

  public async transfer(
    fromUserId: string,
    toUserId: string,
    scopeId: string,
    scopeType = "group",
    amount: number
  ): Promise<TransferResult> {
    if (amount <= 0) {
      return { success: false, reason: "O valor da transferência deve ser maior que zero." };
    }
    if (fromUserId === toUserId) {
      return { success: false, reason: "Você não pode transferir para si mesmo." };
    }

    const sender = await this.getOrCreate(fromUserId, scopeId, scopeType);
    if (sender.balance < amount) {
      return { success: false, reason: "Saldo insuficiente para realizar a transferência." };
    }

    const receiver = await this.getOrCreate(toUserId, scopeId, scopeType);

    const senderNewBalance = sender.balance - amount;
    const receiverNewBalance = receiver.balance + amount;
    const now = new Date();

    // Atualização atômica
    await this.database.db
      .update(economyTable)
      .set({ balance: senderNewBalance, updatedAt: now })
      .where(eq(economyTable.id, sender.id));

    await this.database.db
      .update(economyTable)
      .set({ balance: receiverNewBalance, updatedAt: now })
      .where(eq(economyTable.id, receiver.id));

    // Registro das transações
    await this.database.db.insert(currencyTransactionsTable).values({
      id: `tx_${Date.now()}_out_${Math.random().toString(36).substring(2, 6)}`,
      userId: fromUserId,
      scopeId,
      amount: -amount,
      balanceAfter: senderNewBalance,
      type: "transfer_out",
      targetUserId: toUserId,
      reason: "Transferência enviada",
      createdAt: now
    });

    await this.database.db.insert(currencyTransactionsTable).values({
      id: `tx_${Date.now()}_in_${Math.random().toString(36).substring(2, 6)}`,
      userId: toUserId,
      scopeId,
      amount,
      balanceAfter: receiverNewBalance,
      type: "transfer_in",
      targetUserId: fromUserId,
      reason: "Transferência recebida",
      createdAt: now
    });

    return {
      success: true,
      senderNewBalance,
      receiverNewBalance
    };
  }

  public async adjustBalance(
    userId: string,
    scopeId: string,
    scopeType = "group",
    amount: number,
    reason: string,
    type: string
  ): Promise<{ success: boolean; newBalance: number; previousBalance: number }> {
    const account = await this.getOrCreate(userId, scopeId, scopeType);
    const previousBalance = account.balance;
    const newBalance = Math.max(0, previousBalance + amount);
    const now = new Date();

    await this.database.db
      .update(economyTable)
      .set({
        balance: newBalance,
        updatedAt: now
      })
      .where(eq(economyTable.id, account.id));

    await this.database.db.insert(currencyTransactionsTable).values({
      id: `tx_${Date.now()}_adj_${Math.random().toString(36).substring(2, 6)}`,
      userId,
      scopeId,
      amount,
      balanceAfter: newBalance,
      type,
      reason,
      createdAt: now
    });

    return {
      success: true,
      newBalance,
      previousBalance
    };
  }

  public async work(
    userId: string,
    scopeId: string,
    scopeType = "group"
  ): Promise<{
    success: boolean;
    amount?: number;
    newBalance?: number;
    job?: string;
    xpGained?: number;
    timeLeftMs?: number;
  }> {
    const account = await this.getOrCreate(userId, scopeId, scopeType);
    const now = Date.now();
    const cooldownMs = 45 * 60 * 1000; // 45 minutos

    const lastWork = await this.database.db.query.currencyTransactionsTable.findFirst({
      where: and(
        eq(currencyTransactionsTable.userId, userId),
        eq(currencyTransactionsTable.scopeId, scopeId),
        eq(currencyTransactionsTable.type, "work")
      ),
      orderBy: (tx, { desc }) => [desc(tx.createdAt)]
    });

    if (lastWork) {
      const elapsed = now - lastWork.createdAt.getTime();
      if (elapsed < cooldownMs) {
        return {
          success: false,
          timeLeftMs: cooldownMs - elapsed
        };
      }
    }

    const jobs = [
      "Entregador(a) de Pizza no Grau",
      "Programador(a) Fullstack de Madrugada",
      "Adestrador(a) de Capivaras no Parque",
      "Criador(a) de Figurinhas Profissional",
      "Streamer de Jogos Retrô",
      "DJ em uma Festa Rave Secreta",
      "Operador(a) de Guindaste no Porto",
      "Garçom / Garçonete no Rodízio de Churrasco"
    ];
    const job = jobs[Math.floor(Math.random() * jobs.length)]!;
    const reward = Math.floor(Math.random() * (350 - 150 + 1)) + 150;
    const xpGained = 40;
    const newBalance = account.balance + reward;
    const newXp = account.xp + xpGained;

    await this.database.db
      .update(economyTable)
      .set({
        balance: newBalance,
        xp: newXp,
        updatedAt: new Date(now)
      })
      .where(eq(economyTable.id, account.id));

    await this.database.db.insert(currencyTransactionsTable).values({
      id: `tx_${Date.now()}_work_${Math.random().toString(36).substring(2, 6)}`,
      userId,
      scopeId,
      amount: reward,
      balanceAfter: newBalance,
      type: "work",
      reason: `Trabalhou como ${job}`,
      createdAt: new Date(now)
    });

    return {
      success: true,
      amount: reward,
      newBalance,
      job,
      xpGained
    };
  }

  public async crime(
    userId: string,
    scopeId: string,
    scopeType = "group"
  ): Promise<{
    success: boolean;
    executed: boolean;
    amount?: number;
    newBalance?: number;
    story?: string;
    xpGained?: number;
    timeLeftMs?: number;
  }> {
    const account = await this.getOrCreate(userId, scopeId, scopeType);
    const now = Date.now();
    const cooldownMs = 90 * 60 * 1000; // 90 minutos

    const lastCrime = await this.database.db.query.currencyTransactionsTable.findFirst({
      where: and(
        eq(currencyTransactionsTable.userId, userId),
        eq(currencyTransactionsTable.scopeId, scopeId),
        eq(currencyTransactionsTable.type, "crime")
      ),
      orderBy: (tx, { desc }) => [desc(tx.createdAt)]
    });

    if (lastCrime) {
      const elapsed = now - lastCrime.createdAt.getTime();
      if (elapsed < cooldownMs) {
        return {
          success: false,
          executed: false,
          timeLeftMs: cooldownMs - elapsed
        };
      }
    }

    const isSuccess = Math.random() < 0.6; // 60% chance de sucesso
    let amount = 0;
    let story = "";
    let xpGained = 0;
    let newBalance = account.balance;

    if (isSuccess) {
      amount = Math.floor(Math.random() * (650 - 300 + 1)) + 300;
      xpGained = 60;
      newBalance += amount;
      const successStories = [
        "Invadiu a cozinha de madrugada e assaltou a panela de brigadeiro!",
        "Hackeou o Wi-Fi da padaria e resgatou moedas digitais!",
        "Vendeu curso falso de como ficar milionário em 2 dias!",
        "Passou a perna em um agiota e escapou correndo ileso!"
      ];
      story = successStories[Math.floor(Math.random() * successStories.length)]!;
    } else {
      const penalty = Math.floor(Math.random() * (250 - 120 + 1)) + 120;
      amount = -Math.min(account.balance, penalty);
      xpGained = 5;
      newBalance = Math.max(0, account.balance + amount);
      const failStories = [
        "A polícia te pegou tentando furtar coxinha e você pagou a fiança!",
        "Tropeçou na própria perna fugindo do segurança do shopping!",
        "Foi pego tentando vender água de torneira como poção mágica e tomou uma multa!"
      ];
      story = failStories[Math.floor(Math.random() * failStories.length)]!;
    }

    await this.database.db
      .update(economyTable)
      .set({
        balance: newBalance,
        xp: account.xp + xpGained,
        updatedAt: new Date(now)
      })
      .where(eq(economyTable.id, account.id));

    await this.database.db.insert(currencyTransactionsTable).values({
      id: `tx_${Date.now()}_crime_${Math.random().toString(36).substring(2, 6)}`,
      userId,
      scopeId,
      amount,
      balanceAfter: newBalance,
      type: "crime",
      reason: story,
      createdAt: new Date(now)
    });

    return {
      success: true,
      executed: isSuccess,
      amount,
      newBalance,
      story,
      xpGained
    };
  }

  public async getLeaderboard(scopeId: string, limit = 10) {
    return this.database.db.query.economyTable.findMany({
      where: eq(economyTable.scopeId, scopeId),
      orderBy: (table, { desc }) => [desc(table.balance)],
      limit
    });
  }
}
