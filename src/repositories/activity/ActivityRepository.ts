import { and, asc, desc, eq, sql } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { activityTable } from "../../database/schema";
import { createId } from "../../core/utils/id";

export class ActivityRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async touch(chatId: string, userId: string): Promise<void> {
    const existing = await this.database.db.query.activityTable.findFirst({
      where: and(eq(activityTable.chatId, chatId), eq(activityTable.userId, userId))
    });

    if (existing) {
      await this.database.db
        .update(activityTable)
        .set({
          messages: existing.messages + 1,
          lastSeenAt: new Date(),
          updatedAt: new Date()
        })
        .where(eq(activityTable.id, existing.id));
      return;
    }

    await this.database.db.insert(activityTable).values({
      id: createId(),
      chatId,
      userId,
      messages: 1,
      lastSeenAt: new Date()
    });
  }

  public async getRank(chatId: string, limit = 10, active = true) {
    return this.database.db.query.activityTable.findMany({
      where: eq(activityTable.chatId, chatId),
      orderBy: [active ? desc(activityTable.messages) : asc(activityTable.messages), desc(activityTable.lastSeenAt)],
      limit
    });
  }

  public async countTotalMessages(chatId: string): Promise<number> {
    const result = await this.database.db
      .select({ total: sql<number>`sum(${activityTable.messages})` })
      .from(activityTable)
      .where(eq(activityTable.chatId, chatId));
    return result[0]?.total ?? 0;
  }
}
