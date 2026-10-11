import type { AppEnv } from "../config/env";
import type { BotServices } from "../core/types/services";
import { AIService } from "./ai/AIService";
import { YouTubeDownloadService } from "./downloads/YouTubeDownloadService";
import { AnimeService } from "./anime/AnimeService";
import { BookService } from "./books/BookService";
import { CacheService } from "./cache/CacheService";
import { RateLimitService } from "./cache/RateLimitService";
import { FFmpegService } from "./ffmpeg/FFmpegService";
import { MediaService } from "./media/MediaService";
import { MovieService } from "./movies/MovieService";
import { NewsService } from "./news/NewsService";
import { PlayStoreService } from "./search/PlayStoreService";
import { SearchService } from "./search/SearchService";
import { WikipediaService } from "./search/WikipediaService";
import { SpeechService } from "./speech/SpeechService";
import { StickerService } from "./stickers/StickerService";
import { TranslationService } from "./translation/TranslationService";
import { WeatherService } from "./weather/WeatherService";

export function createServices(env: AppEnv): BotServices {
  return {
    cache: new CacheService(),
    rateLimit: new RateLimitService(env.rateLimitWindowSeconds * 1000, env.rateLimitMaxCommands),
    search: new SearchService(),
    wikipedia: new WikipediaService(),
    weather: new WeatherService(),
    news: new NewsService(),
    books: new BookService(),
    movies: new MovieService(),
    translation: new TranslationService(),
    playStore: new PlayStoreService(),
    media: new MediaService(env),
    ffmpeg: new FFmpegService(),
    stickers: new StickerService(),
    speech: new SpeechService(env.openAiApiKey),
    ai: new AIService(env.openAiApiKey, env.openAiModel),
    anime: new AnimeService(),
    youtube: new YouTubeDownloadService()
  };
}
