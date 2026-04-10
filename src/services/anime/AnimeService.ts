import { fetchJson } from "../../core/utils/http";

interface JikanSearchResponse {
  data: Array<{
    title?: string;
    synopsis?: string;
    episodes?: number;
    status?: string;
  }>;
}

export class AnimeService {
  public async search(title: string) {
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`;
    const payload = await fetchJson<JikanSearchResponse>(url);
    return payload.data[0] ?? null;
  }
}
