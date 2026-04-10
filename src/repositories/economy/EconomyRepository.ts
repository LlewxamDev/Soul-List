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
}
