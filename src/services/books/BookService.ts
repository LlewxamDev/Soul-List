import { fetchJson } from "../../core/utils/http";

interface OpenLibraryResponse {
  docs: Array<{
    title?: string;
    author_name?: string[];
    first_publish_year?: number;
  }>;
}

export class BookService {
  public async search(query: string) {
    const url = new URL("https://openlibrary.org/search.json");
    url.searchParams.set("q", query);
    const payload = await fetchJson<OpenLibraryResponse>(url.toString());
    const first = payload.docs[0];
    return {
      title: first?.title ?? query,
      authors: first?.author_name?.join(", ") ?? "Desconhecido",
      firstPublishYear: first?.first_publish_year?.toString() ?? "N/D"
    };
  }
}
