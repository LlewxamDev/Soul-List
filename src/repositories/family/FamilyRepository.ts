import { and, eq, or } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { familyTable } from "../../database/schema";
import { createId } from "../../core/utils/id";

export class FamilyRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async getSpouse(userId: string) {
    const relation = await this.database.db.query.familyTable.findFirst({
      where: and(
        eq(familyTable.userId, userId),
        eq(familyTable.relation, "casado")
      )
    });
    return relation ?? null;
  }

  public async marry(userId: string, targetUserId: string): Promise<void> {
    const now = new Date();
    await this.database.db.insert(familyTable).values([
      {
        id: createId(),
        userId,
        relation: "casado",
        targetUserId,
        createdAt: now,
        updatedAt: now
      },
      {
        id: createId(),
        userId: targetUserId,
        relation: "casado",
        targetUserId: userId,
        createdAt: now,
        updatedAt: now
      }
    ]);
  }

  public async divorce(userId: string): Promise<string | null> {
    const spouseRecord = await this.getSpouse(userId);
    if (!spouseRecord) {
      return null;
    }

    const targetUserId = spouseRecord.targetUserId;

    await this.database.db
      .delete(familyTable)
      .where(
        or(
          and(eq(familyTable.userId, userId), eq(familyTable.relation, "casado")),
          and(eq(familyTable.userId, targetUserId), eq(familyTable.relation, "casado"))
        )
      );

    return targetUserId;
  }
}
