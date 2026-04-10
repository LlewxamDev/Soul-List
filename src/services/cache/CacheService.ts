export class CacheService {
  private readonly store = new Map<string, { expiresAt: number; value: unknown }>();

  public get<T>(key: string): T | null {
    const entry = this.store.get(key);
    if (!entry) {
      return null;
    }
    if (entry.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return entry.value as T;
  }

  public set<T>(key: string, value: T, ttlMs: number): void {
    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
  }
}
