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
    const ddgSummary = payload.AbstractText || payload.RelatedTopics[0]?.Text;
    const ddgUrl = payload.AbstractURL || payload.RelatedTopics[0]?.FirstURL;

    if (ddgSummary) {
      return {
        title: payload.Heading || query,
        summary: ddgSummary,
        url: ddgUrl || ""
      };
    }

    // Fallback inteligente para Wikipedia em português
    try {
      const wikiUrl = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
      const wiki = await fetchJson<{ title: string; extract: string; content_urls?: { desktop?: { page?: string } } }>(wikiUrl);
      if (wiki.extract) {
        return {
          title: `🔍 ${wiki.title}`,
          summary: wiki.extract,
          url: wiki.content_urls?.desktop?.page || `https://pt.wikipedia.org/wiki/${encodeURIComponent(query)}`
        };
      }
    } catch {
      // Ignora erro de fallback
    }

    return {
      title: `🔍 Busca: ${query}`,
      summary: "Não foi encontrado um artigo direto para este termo. Experimente refinar sua busca ou usar palavras-chave mais específicas.",
      url: `https://www.google.com/search?q=${encodeURIComponent(query)}`
    };
  }
}
