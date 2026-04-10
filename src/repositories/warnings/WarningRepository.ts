import { and, eq, sql } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { warningsTable } from "../../database/schema";
import { createId } from "../../core/utils/id";

export class WarningRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async add(groupId: string, userId: string, reason: string, issuedBy: string): Promise<void> {
    await this.database.db.insert(warningsTable).values({
      id: createId(),
      groupId,
      userId,
      reason,
      issuedBy
    });
  }

  public async count(groupId: string, userId: string): Promise<number> {
    const result = await this.database.db
      .select({ total: sql<number>`count(*)` })
      .from(warningsTable)
      .where(and(eq(warningsTable.groupId, groupId), eq(warningsTable.userId, userId)));
    return result[0]?.total ?? 0;
  }

  public async clear(groupId: string, userId: string): Promise<void> {
    await this.database.db
      .delete(warningsTable)
      .where(and(eq(warningsTable.groupId, groupId), eq(warningsTable.userId, userId)));
  }
}
