import { fetchText } from "../../core/utils/http";

export class PlayStoreService {
  public async search(query: string) {
    const url = `https://play.google.com/store/search?q=${encodeURIComponent(query)}&c=apps&hl=pt_BR`;
    const html = await fetchText(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
      }
    });

    const match = html.match(/\/store\/apps\/details\?id=([^"&]+).*?aria-label="([^"]+)"/s);
    if (!match) {
      return null;
    }

    return {
      appId: match[1],
      title: match[2],
      url: `https://play.google.com/store/apps/details?id=${match[1]}`
    };
  }
}
