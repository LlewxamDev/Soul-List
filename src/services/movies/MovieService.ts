import { fetchJson } from "../../core/utils/http";

interface ItunesResponse {
  results: Array<{
    trackName?: string;
    artistName?: string;
    primaryGenreName?: string;
    longDescription?: string;
    releaseDate?: string;
  }>;
}

export class MovieService {
  public async searchMovie(query: string) {
    const url = new URL("https://itunes.apple.com/search");
    url.searchParams.set("term", query);
    url.searchParams.set("media", "movie");
    url.searchParams.set("limit", "1");
    const payload = await fetchJson<ItunesResponse>(url.toString());
    return payload.results[0] ?? null;
  }

  public async searchSeries(query: string) {
    const url = new URL("https://itunes.apple.com/search");
    url.searchParams.set("term", query);
    url.searchParams.set("media", "tvShow");
    url.searchParams.set("limit", "1");
    const payload = await fetchJson<ItunesResponse>(url.toString());
    return payload.results[0] ?? null;
  }
}
