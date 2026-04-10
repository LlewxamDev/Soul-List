import type { AppEnv } from "./env";

export function createBotConfig(env: AppEnv) {
  return {
    name: env.botName,
    ownerName: env.ownerName,
    ownerNumbers: env.ownerNumbers,
    prefixes: env.prefixes,
    defaultPrefix: env.defaultPrefix,
    language: env.defaultLanguage,
    timezone: env.timezone
  };
}

export type BotConfig = ReturnType<typeof createBotConfig>;
