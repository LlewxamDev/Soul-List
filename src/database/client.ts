import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

export function createDatabase(databaseUrl: string) {
  const sqlite = createClient({
    url: databaseUrl.startsWith("file:") ? databaseUrl : `file:${databaseUrl}`
  });
  const db = drizzle(sqlite, { schema });
  return {
    sqlite,
    db,
    close(): void {
      sqlite.close();
    }
  };
}

export type DatabaseClient = ReturnType<typeof createDatabase>;
