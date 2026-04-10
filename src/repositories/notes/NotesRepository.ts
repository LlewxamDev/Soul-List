import { and, eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { notesTable } from "../../database/schema";
import { createId } from "../../core/utils/id";

export class NotesRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async put(chatId: string, title: string, content: string): Promise<void> {
    const existing = await this.database.db.query.notesTable.findFirst({
      where: and(eq(notesTable.chatId, chatId), eq(notesTable.title, title))
    });

    if (existing) {
      await this.database.db
        .update(notesTable)
        .set({ content, updatedAt: new Date() })
        .where(eq(notesTable.id, existing.id));
      return;
    }

    await this.database.db.insert(notesTable).values({
      id: createId(),
      chatId,
      title,
      content
    });
  }
}
