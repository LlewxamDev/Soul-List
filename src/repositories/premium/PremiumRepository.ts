import { and, eq, gt } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { premiumTable } from "../../database/schema";

export class PremiumRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async set(userId: string, expiresAt: Date | null): Promise<void> {
    await this.database.db
      .insert(premiumTable)
      .values({ id: userId, userId, expiresAt: expiresAt ?? undefined })
      .onConflictDoUpdate({
        target: premiumTable.id,
        set: { expiresAt: expiresAt ?? null, updatedAt: new Date() }
      });
  }

  public async isPremium(userId: string): Promise<boolean> {
    const premium = await this.database.db.query.premiumTable.findFirst({
      where: and(eq(premiumTable.userId, userId), gt(premiumTable.expiresAt, new Date()))
    });
    return Boolean(premium);
  }
}
