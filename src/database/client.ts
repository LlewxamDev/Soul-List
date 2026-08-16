import { drizzle } from "drizzle-orm/libsql";
import type { Client } from "@libsql/client-wasm";
import * as schema from "./schema";

type WasmClientModule = typeof import("@libsql/client-wasm");
type DynamicImport = (specifier: string) => Promise<WasmClientModule>;

const dynamicImport = new Function("specifier", "return import(specifier);") as DynamicImport;

export async function createDatabase(databaseUrl: string) {
  const { createClient } = await dynamicImport("@libsql/client-wasm");
  const sqlite: Client = createClient({
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

export type DatabaseClient = Awaited<ReturnType<typeof createDatabase>>;
