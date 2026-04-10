import { fetchJson } from "../../core/utils/http";

interface DuckDuckGoResponse {
  AbstractText: string;
  AbstractURL: string;
  Heading: string;
  RelatedTopics: Array<{ Text?: string; FirstURL?: string }>;
}

export class SearchService {
  public async search(query: string) {
    const url = new URL("https://api.duckduckgo.com/");
    url.searchParams.set("q", query);
    url.searchParams.set("format", "json");
    url.searchParams.set("no_redirect", "1");
    url.searchParams.set("skip_disambig", "1");

    const payload = await fetchJson<DuckDuckGoResponse>(url.toString());
    return {
      title: payload.Heading || query,
      summary: payload.AbstractText || payload.RelatedTopics[0]?.Text || "Sem resumo disponível.",
      url: payload.AbstractURL || payload.RelatedTopics[0]?.FirstURL || ""
    };
  }
}
