import type { AppEnv } from "../config/env";
import type { BotServices } from "../core/types/services";
import { AIService } from "./ai/AIService";
import { ImageGenerationService } from "./ai/ImageGenerationService";
import { AnimeService } from "./anime/AnimeService";
import { BookService } from "./books/BookService";
import { CacheService } from "./cache/CacheService";
import { CalculatorService } from "./calculator/CalculatorService";
import { RateLimitService } from "./cache/RateLimitService";
import { FFmpegService } from "./ffmpeg/FFmpegService";
import { MediaService } from "./media/MediaService";
import { LocationService } from "./location/LocationService";
import { ImageEffectsService } from "./image-effects/ImageEffectsService";
import { MovieService } from "./movies/MovieService";
import { NewsService } from "./news/NewsService";
import { PlayStoreService } from "./search/PlayStoreService";
import { SearchService } from "./search/SearchService";
import { WikipediaService } from "./search/WikipediaService";
import { SpeechService } from "./speech/SpeechService";
import { StickerService } from "./stickers/StickerService";
import { TranslationService } from "./translation/TranslationService";
import { WeatherService } from "./weather/WeatherService";
import { YouTubeService } from "./youtube/YouTubeService";

export function createServices(env: AppEnv): BotServices {
  return {
    cache: new CacheService(),
    calculator: new CalculatorService(),
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
    location: new LocationService(),
    imageEffects: new ImageEffectsService(),
    ffmpeg: new FFmpegService(),
    stickers: new StickerService(),
    speech: new SpeechService(env.openAiApiKey),
    ai: new AIService(env.openAiApiKey, env.openAiModel, env.groqApiKey, env.groqModel, env.groqVisionModel),
    imageGeneration: new ImageGenerationService(env.openAiApiKey, env.imageGenerationModel),
    anime: new AnimeService(),
    youtube: new YouTubeService(env.youtubeMaxDownloadBytes, env.youtubeMaxDurationSeconds)
  };
}
