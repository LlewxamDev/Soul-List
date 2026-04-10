import { eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { usersTable } from "../../database/schema";

export class UserRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async ensure(userId: string, pushName: string): Promise<void> {
    await this.database.db
      .insert(usersTable)
      .values({ id: userId, pushName })
      .onConflictDoUpdate({
        target: usersTable.id,
        set: {
          pushName,
          updatedAt: new Date()
        }
      });
  }

  public async findById(userId: string) {
    return this.database.db.query.usersTable.findFirst({
      where: eq(usersTable.id, userId)
    });
  }

  public async setBanned(userId: string, isBanned: boolean): Promise<void> {
    await this.database.db
      .insert(usersTable)
      .values({ id: userId, pushName: "", isBanned })
      .onConflictDoUpdate({
        target: usersTable.id,
        set: {
          isBanned,
          updatedAt: new Date()
        }
      });
  }
}
