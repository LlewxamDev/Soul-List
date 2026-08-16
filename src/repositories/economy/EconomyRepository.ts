import { eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { economyTable } from "../../database/schema";

export class EconomyRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async ensure(userId: string): Promise<void> {
    await this.database.db
      .insert(economyTable)
      .values({ userId })
      .onConflictDoNothing();
  }

  public async get(userId: string) {
    await this.ensure(userId);
    return this.database.db.query.economyTable.findFirst({
      where: eq(economyTable.userId, userId)
    });
  }

  public async adjustBalance(userId: string, delta: number): Promise<number> {
    const current = await this.get(userId);
    const balance = Math.max(0, (current?.balance ?? 0) + delta);
    await this.database.db
      .update(economyTable)
      .set({ balance, updatedAt: new Date() })
      .where(eq(economyTable.userId, userId));
    return balance;
  }
}
