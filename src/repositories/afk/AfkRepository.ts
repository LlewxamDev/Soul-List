import { eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { afkTable } from "../../database/schema";

export class AfkRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async set(userId: string, reason: string): Promise<void> {
    await this.database.db
      .insert(afkTable)
      .values({ userId, reason, since: new Date() })
      .onConflictDoUpdate({
        target: afkTable.userId,
        set: {
          reason,
          since: new Date(),
          updatedAt: new Date()
        }
      });
  }

  public async clear(userId: string): Promise<void> {
    await this.database.db.delete(afkTable).where(eq(afkTable.userId, userId));
  }

  public async get(userId: string) {
    return this.database.db.query.afkTable.findFirst({
      where: eq(afkTable.userId, userId)
    });
  }
}
