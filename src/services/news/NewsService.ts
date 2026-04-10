import { XMLParser } from "fast-xml-parser";
import { fetchText } from "../../core/utils/http";

interface RssEnvelope {
  rss?: {
    channel?: {
      item?: Array<{ title?: string; link?: string; pubDate?: string }>;
    };
  };
}

export class NewsService {
  private readonly parser = new XMLParser();

  public async latest(query: string) {
    const url = new URL("https://news.google.com/rss/search");
    url.searchParams.set("q", query || "Brasil");
    url.searchParams.set("hl", "pt-BR");
    url.searchParams.set("gl", "BR");
    url.searchParams.set("ceid", "BR:pt-419");
    const xml = await fetchText(url.toString());
    const parsed = this.parser.parse(xml) as RssEnvelope;
    return (parsed.rss?.channel?.item ?? []).slice(0, 5).map((item) => ({
      title: item.title ?? "Sem título",
      link: item.link ?? "",
      publishedAt: item.pubDate ?? ""
    }));
  }
}
