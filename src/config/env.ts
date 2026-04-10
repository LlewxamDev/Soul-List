import { config as loadEnv } from "dotenv";
import { z } from "zod";

loadEnv();

const envSchema = z.object({
  BOT_NAME: z.string().default("Soul-List"),
  BOT_OWNER_NAME: z.string().default("Owner"),
  BOT_OWNER_NUMBER: z.string().default(""),
  BOT_OWNER_NUMBERS: z.string().default(""),
  PREFIX: z.string().default("!"),
  PREFIXES: z.string().default("!"),
  TIMEZONE: z.string().default("America/Sao_Paulo"),
  DEFAULT_LANGUAGE: z.string().default("pt-BR"),
  DATABASE_URL: z.string().default("./data/soul-list.db"),
  SESSION_DIR: z.string().default("./sessions"),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info"),
  ENABLE_SENSITIVE_CATEGORIES: z
    .string()
    .transform((value) => value === "true")
    .default("false"),
  PAIRING_NUMBER: z.string().default(""),
  NEWS_API_KEY: z.string().default(""),
  WEATHER_API_KEY: z.string().default(""),
  OPENAI_API_KEY: z.string().default(""),
  OPENAI_MODEL: z.string().default("gpt-4o-mini"),
  TRANSLATE_PROVIDER: z.string().default("google"),
  THUMBNAIL_SERVICE_BASE: z.string().default("https://image.thum.io/get/width/1200/noanimate"),
  COMMAND_COOLDOWN_SECONDS: z.coerce.number().int().positive().default(3),
  RATE_LIMIT_WINDOW_SECONDS: z.coerce.number().int().positive().default(10),
  RATE_LIMIT_MAX_COMMANDS: z.coerce.number().int().positive().default(6)
});

const parsed = envSchema.parse(process.env);

const prefixes = parsed.PREFIXES.split(",")
  .map((prefix) => prefix.trim())
  .filter(Boolean);

const ownerNumbers = [
  parsed.BOT_OWNER_NUMBER.trim(),
  ...parsed.BOT_OWNER_NUMBERS.split(",").map((value) => value.trim())
].filter(Boolean);

export const env = {
  botName: parsed.BOT_NAME,
  ownerName: parsed.BOT_OWNER_NAME,
  ownerNumbers,
  defaultPrefix: parsed.PREFIX,
  prefixes: prefixes.length > 0 ? prefixes : [parsed.PREFIX],
  timezone: parsed.TIMEZONE,
  defaultLanguage: parsed.DEFAULT_LANGUAGE,
  databaseUrl: parsed.DATABASE_URL,
  sessionDir: parsed.SESSION_DIR,
  logLevel: parsed.LOG_LEVEL,
  enableSensitiveCategories: parsed.ENABLE_SENSITIVE_CATEGORIES,
  pairingNumber: parsed.PAIRING_NUMBER,
  newsApiKey: parsed.NEWS_API_KEY,
  weatherApiKey: parsed.WEATHER_API_KEY,
  openAiApiKey: parsed.OPENAI_API_KEY,
  openAiModel: parsed.OPENAI_MODEL,
  translateProvider: parsed.TRANSLATE_PROVIDER,
  thumbnailServiceBase: parsed.THUMBNAIL_SERVICE_BASE,
  commandCooldownSeconds: parsed.COMMAND_COOLDOWN_SECONDS,
  rateLimitWindowSeconds: parsed.RATE_LIMIT_WINDOW_SECONDS,
  rateLimitMaxCommands: parsed.RATE_LIMIT_MAX_COMMANDS
};

export type AppEnv = typeof env;
