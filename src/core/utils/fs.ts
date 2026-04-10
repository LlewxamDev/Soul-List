import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type { AppEnv } from "../../config/env";

export function ensureDir(path: string): void {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
}

export function ensureRuntimeDirs(env: AppEnv): void {
  const databaseDir = dirname(resolve(env.databaseUrl));
  ensureDir(databaseDir);
  ensureDir(resolve(env.sessionDir));
}
