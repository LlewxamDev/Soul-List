import { eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { settingsTable } from "../../database/schema";

export class SettingsRepository {
  public constructor(private readonly database: DatabaseClient) {}

  public async set(key: string, value: string): Promise<void> {
    await this.database.db
      .insert(settingsTable)
      .values({ key, value })
      .onConflictDoUpdate({
        target: settingsTable.key,
        set: { value, updatedAt: new Date() }
      });
  }

  public async get(key: string): Promise<string | null> {
    const result = await this.database.db.query.settingsTable.findFirst({
      where: eq(settingsTable.key, key)
    });

    return result?.value ?? null;
  }

  public async setJson<T>(key: string, value: T): Promise<void> {
    await this.set(key, JSON.stringify(value));
  }

  public async getJson<T>(key: string): Promise<T | null> {
    const value = await this.get(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }
}
