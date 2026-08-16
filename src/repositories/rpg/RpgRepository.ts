import type { SettingsRepository } from "../settings/SettingsRepository";

export interface RpgShop {
  id: string;
  name: string;
  description: string;
}

export interface RpgCartItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface WantedEntry {
  userId: string;
  declaredBy: string;
  reason: string;
  createdAt: string;
}

export interface DeathStat {
  userId: string;
  deaths: number;
}

export interface JailRecord {
  groupId: string;
  userId: string;
  jailedBy: string;
  reason: string;
  cell: string;
  bail: number;
  jailedAt: string;
  releaseAt: string;
}

export type RpgRole = "warden" | "judge" | "guard" | "citizen";

const DEFAULT_SHOPS: RpgShop[] = [
  { id: "horses", name: "Cavalos", description: "Montarias e transporte." },
  { id: "animals", name: "Animais", description: "Companheiros e animais do RPG." },
  { id: "equipment", name: "Equipamentos", description: "Armas, armaduras e acessórios." },
  { id: "items", name: "Itens", description: "Itens consumíveis e utilidades." },
  { id: "special", name: "Especiais", description: "Itens especiais e VIP do RPG." }
];

export class RpgRepository {
  public constructor(private readonly settings: SettingsRepository) {}

  public async listShops(): Promise<RpgShop[]> {
    return (await this.settings.getJson<RpgShop[]>("rpg:shops")) ?? DEFAULT_SHOPS;
  }

  public async getCart(userId: string): Promise<RpgCartItem[]> {
    return (await this.settings.getJson<RpgCartItem[]>(`rpg:cart:${userId}`)) ?? [];
  }

  public async declareWanted(entry: WantedEntry): Promise<void> {
    const current = (await this.settings.getJson<WantedEntry[]>("rpg:wanted")) ?? [];
    const next = current.filter((item) => item.userId !== entry.userId);
    next.push(entry);
    await this.settings.setJson("rpg:wanted", next);
  }

  public async listWanted(): Promise<WantedEntry[]> {
    return (await this.settings.getJson<WantedEntry[]>("rpg:wanted")) ?? [];
  }

  public async topDeaths(limit = 10): Promise<DeathStat[]> {
    const stats = (await this.settings.getJson<DeathStat[]>("rpg:death-stats")) ?? [];
    return stats
      .filter((item) => Number.isFinite(item.deaths) && item.deaths > 0)
      .sort((left, right) => right.deaths - left.deaths)
      .slice(0, limit);
  }

  public async getJail(groupId: string, userId: string): Promise<JailRecord | null> {
    const records = await this.listJailed(groupId);
    return records.find((record) => record.userId === userId) ?? null;
  }

  public async listJailed(groupId: string): Promise<JailRecord[]> {
    const records = (await this.settings.getJson<JailRecord[]>("rpg:jail")) ?? [];
    const now = Date.now();
    const active = records.filter((record) => record.releaseAt === "permanent" || new Date(record.releaseAt).getTime() > now);
    if (active.length !== records.length) {
      await this.settings.setJson("rpg:jail", active);
    }
    return active.filter((record) => record.groupId === groupId);
  }

  public async imprison(record: JailRecord): Promise<void> {
    const records = (await this.settings.getJson<JailRecord[]>("rpg:jail")) ?? [];
    const next = records.filter((item) => !(item.groupId === record.groupId && item.userId === record.userId));
    next.push(record);
    await this.settings.setJson("rpg:jail", next);
  }

  public async release(groupId: string, userId: string): Promise<boolean> {
    const records = (await this.settings.getJson<JailRecord[]>("rpg:jail")) ?? [];
    const next = records.filter((item) => !(item.groupId === groupId && item.userId === userId));
    if (next.length === records.length) {
      return false;
    }
    await this.settings.setJson("rpg:jail", next);
    return true;
  }

  public async getRole(groupId: string, userId: string): Promise<RpgRole> {
    const roles = (await this.settings.getJson<Record<string, RpgRole>>(`rpg:roles:${groupId}`)) ?? {};
    return roles[userId] ?? "citizen";
  }

  public async setRole(groupId: string, userId: string, role: RpgRole): Promise<void> {
    const roles = (await this.settings.getJson<Record<string, RpgRole>>(`rpg:roles:${groupId}`)) ?? {};
    roles[userId] = role;
    await this.settings.setJson(`rpg:roles:${groupId}`, roles);
  }
}
