import { eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { gameSessionsTable } from "../../database/schema";
import { createId } from "../../core/utils/id";

export class GameSessionRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async create(chatId: string, game: string, state: string): Promise<void> {
    await this.database.db.insert(gameSessionsTable).values({
      id: createId(),
      chatId,
      game,
      state
    });
  }

  public async findByChat(chatId: string) {
    return this.database.db.query.gameSessionsTable.findMany({
      where: eq(gameSessionsTable.chatId, chatId)
    });
  }
}
