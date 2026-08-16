import { and, eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { notesTable } from "../../database/schema";
import { createId } from "../../core/utils/id";

export interface NoteRecord {
  id: string;
  chatId: string;
  title: string;
  content: string;
}

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

  public async find(chatId: string, title: string): Promise<NoteRecord | null> {
    const record = await this.database.db.query.notesTable.findFirst({
      where: and(eq(notesTable.chatId, chatId), eq(notesTable.title, title))
    });
    return record ?? null;
  }

  public async list(chatId: string): Promise<NoteRecord[]> {
    return this.database.db.query.notesTable.findMany({
      where: eq(notesTable.chatId, chatId),
      orderBy: (table, { asc }) => asc(table.title)
    });
  }

  public async remove(chatId: string, title: string): Promise<boolean> {
    const record = await this.find(chatId, title);
    if (!record) {
      return false;
    }
    await this.database.db.delete(notesTable).where(eq(notesTable.id, record.id));
    return true;
  }
}
