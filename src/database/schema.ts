import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const timestampColumns = {
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date())
};

export const usersTable = sqliteTable("users", {
  id: text("id").primaryKey(),
  pushName: text("push_name").notNull().default(""),
  isBanned: integer("is_banned", { mode: "boolean" }).notNull().default(false),
  premiumUntil: integer("premium_until", { mode: "timestamp_ms" }),
  ...timestampColumns
});

export const groupsTable = sqliteTable("groups", {
  id: text("id").primaryKey(),
  subject: text("subject").notNull().default(""),
  isMuted: integer("is_muted", { mode: "boolean" }).notNull().default(false),
  isOpen: integer("is_open", { mode: "boolean" }).notNull().default(true),
  ...timestampColumns
});

export const settingsTable = sqliteTable("settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  ...timestampColumns
});

export const premiumTable = sqliteTable("premium", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }),
  ...timestampColumns
});

export const afkTable = sqliteTable("afk", {
  userId: text("user_id").primaryKey(),
  reason: text("reason").notNull().default(""),
  since: integer("since", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  ...timestampColumns
});

export const warningsTable = sqliteTable("warnings", {
  id: text("id").primaryKey(),
  groupId: text("group_id").notNull(),
  userId: text("user_id").notNull(),
  reason: text("reason").notNull(),
  issuedBy: text("issued_by").notNull(),
  ...timestampColumns
});

export const activityTable = sqliteTable("activity", {
  id: text("id").primaryKey(),
  chatId: text("chat_id").notNull(),
  userId: text("user_id").notNull(),
  messages: integer("messages").notNull().default(0),
  lastSeenAt: integer("last_seen_at", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  ...timestampColumns
});

export const notesTable = sqliteTable("notes", {
  id: text("id").primaryKey(),
  chatId: text("chat_id").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  ...timestampColumns
});

export const economyTable = sqliteTable("economy", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  scopeId: text("scope_id").notNull(),
  scopeType: text("scope_type").notNull().default("group"),
  balance: integer("balance").notNull().default(0),
  xp: integer("xp").notNull().default(0),
  level: integer("level").notNull().default(1),
  dailyClaimedAt: integer("daily_claimed_at", { mode: "timestamp_ms" }),
  ...timestampColumns
});

export const currencyTransactionsTable = sqliteTable("currency_transactions", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  scopeId: text("scope_id").notNull(),
  amount: integer("amount").notNull(),
  balanceAfter: integer("balance_after").notNull(),
  type: text("type").notNull(),
  referenceId: text("reference_id"),
  targetUserId: text("target_user_id"),
  reason: text("reason"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date())
});

export const familyTable = sqliteTable("family", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  relation: text("relation").notNull(),
  targetUserId: text("target_user_id").notNull(),
  ...timestampColumns
});

export const gameSessionsTable = sqliteTable("game_sessions", {
  id: text("id").primaryKey(),
  chatId: text("chat_id").notNull(),
  game: text("game").notNull(),
  state: text("state").notNull(),
  ...timestampColumns
});

export const featureTogglesTable = sqliteTable("feature_toggles", {
  key: text("key").primaryKey(),
  enabled: integer("enabled", { mode: "boolean" }).notNull().default(false),
  scope: text("scope").notNull().default("global"),
  scopeId: text("scope_id"),
  ...timestampColumns
});

export const commandUsageTable = sqliteTable("command_usage", {
  id: text("id").primaryKey(),
  commandName: text("command_name").notNull(),
  userId: text("user_id").notNull(),
  chatId: text("chat_id").notNull(),
  usedAt: integer("used_at", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  ...timestampColumns
});

export const cacheTable = sqliteTable("cache_entries", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }),
  ...timestampColumns
});
