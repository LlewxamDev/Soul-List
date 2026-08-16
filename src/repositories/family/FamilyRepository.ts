import { or, eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { familyTable } from "../../database/schema";

export class FamilyRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async findForUser(userId: string) {
    return this.database.db.query.familyTable.findMany({
      where: or(eq(familyTable.userId, userId), eq(familyTable.targetUserId, userId))
    });
  }
}
