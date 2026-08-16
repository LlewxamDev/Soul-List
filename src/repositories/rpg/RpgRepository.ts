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
}
