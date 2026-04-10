export class RateLimitService {
  private readonly buckets = new Map<string, number[]>();

  public constructor(
    private readonly windowMs: number,
    private readonly maxHits: number
  ) {}

  public check(key: string): { allowed: boolean; retryAfterMs: number } {
    const now = Date.now();
    const bucket = (this.buckets.get(key) ?? []).filter((value) => value > now - this.windowMs);
    if (bucket.length >= this.maxHits) {
      const oldest = bucket[0] ?? now;
      this.buckets.set(key, bucket);
      return {
        allowed: false,
        retryAfterMs: Math.max(0, oldest + this.windowMs - now)
      };
    }
    bucket.push(now);
    this.buckets.set(key, bucket);
    return { allowed: true, retryAfterMs: 0 };
  }
}
