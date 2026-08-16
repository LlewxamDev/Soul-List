declare module "yt-search" {
  export interface YtSearchVideo {
    videoId: string;
    url: string;
    title: string;
    description: string;
    thumbnail: string;
    author: { name: string };
    timestamp: string;
    duration: { seconds: number; timestamp: string };
    views: number;
  }

  export interface YtSearchResult {
    videos: YtSearchVideo[];
  }

  export interface YtVideoLookup {
    videoId: string;
  }

  function ytSearch(query: string | YtVideoLookup): Promise<YtSearchResult | YtSearchVideo>;
  export default ytSearch;
}
