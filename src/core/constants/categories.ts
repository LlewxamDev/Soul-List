export const CATEGORY_ORDER = [
  "info",
  "search",
  "media",
  "audio",
  "members",
  "admin",
  "owner",
  "anime",
  "games",
  "vip",
  "rpg",
  "downloads",
  "stickers",
  "logos",
  "fun",
  "moderation",
  "system",
  "sensitive"
] as const;

export type CommandCategory = (typeof CATEGORY_ORDER)[number];

export const CATEGORY_LABELS: Record<CommandCategory, string> = {
  info: "Infos",
  search: "Pesquisa",
  media: "Mídia",
  audio: "Áudio",
  members: "Members",
  admin: "Admin",
  owner: "Dono",
  anime: "Anime",
  games: "Games",
  vip: "VIP",
  rpg: "RPG",
  downloads: "Downloads",
  stickers: "Figurinhas",
  logos: "Logos",
  fun: "Brincadeiras",
  moderation: "Moderação",
  system: "Sistema",
  sensitive: "+18"
};
