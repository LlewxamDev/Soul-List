import { eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { groupsTable } from "../../database/schema";

export class GroupRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async ensure(groupId: string, subject: string): Promise<void> {
    await this.database.db
      .insert(groupsTable)
      .values({ id: groupId, subject })
      .onConflictDoUpdate({
        target: groupsTable.id,
        set: {
          subject,
          updatedAt: new Date()
        }
      });
  }

  public async setMuted(groupId: string, isMuted: boolean): Promise<void> {
    await this.database.db
      .insert(groupsTable)
      .values({ id: groupId, subject: "", isMuted })
      .onConflictDoUpdate({
        target: groupsTable.id,
        set: { isMuted, updatedAt: new Date() }
      });
  }

  public async setOpen(groupId: string, isOpen: boolean): Promise<void> {
    await this.database.db
      .insert(groupsTable)
      .values({ id: groupId, subject: "", isOpen })
      .onConflictDoUpdate({
        target: groupsTable.id,
        set: { isOpen, updatedAt: new Date() }
      });
  }

  public async findById(groupId: string) {
    return this.database.db.query.groupsTable.findFirst({
      where: eq(groupsTable.id, groupId)
    });
  }
}
