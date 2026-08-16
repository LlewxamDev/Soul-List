import { ensureRuntimeDirs } from "../src/core/utils/fs";
import { env } from "../src/config/env";
import { createDatabase } from "../src/database/client";

async function main(): Promise<void> {
  ensureRuntimeDirs(env);
  const { close } = await createDatabase(env.databaseUrl);
  close();
  console.log("Banco inicializado em", env.databaseUrl);
}

void main();
