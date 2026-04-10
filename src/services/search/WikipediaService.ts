import { fetchJson } from "../../core/utils/http";

interface WikipediaSummaryResponse {
  title: string;
  extract: string;
  content_urls?: {
    desktop?: {
      page?: string;
    };
  };
}

export class WikipediaService {
  public async summary(query: string) {
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    const payload = await fetchJson<WikipediaSummaryResponse>(url);
    return {
      title: payload.title,
      summary: payload.extract,
      url: payload.content_urls?.desktop?.page ?? ""
    };
  }
}
