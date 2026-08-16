import type { BotPlugin } from "../../core/types/plugin";
import { activeRankCommand } from "./commands/rankativo";
import { afkCommand } from "./commands/afk";
import { animeInfoCommand } from "./commands/animeinfo";
import { bookCommand } from "./commands/livro";
import { infoCommandCommand } from "./commands/infocmd";
import { infoBotCommand } from "./commands/infobot";
import { inactiveRankCommand } from "./commands/rankinativo";
import { listCommandsCommand } from "./commands/listacmd";
import { menuCommand } from "./commands/menu";
import { movieCommand } from "./commands/filme";
import { newsCommand } from "./commands/noticias";
import { pingCommand } from "./commands/ping";
import { playStoreCommand } from "./commands/playstore";
import { playCommand } from "./commands/play";
import { printSiteCommand } from "./commands/printsite";
import { profileCommand } from "./commands/perfil";
import { searchCommand } from "./commands/buscar";
import { seriesCommand } from "./commands/serie";
import { statusCommand } from "./commands/status";
import { stickerCommand } from "./commands/sticker";
import { tagMeCommand } from "./commands/tagme";
import { toMp3Command } from "./commands/tomp3";
import { toTextCommand } from "./commands/totext";
import { translateCommand } from "./commands/traduzir";
import { weatherCommand } from "./commands/clima";
import { wikipediaCommand } from "./commands/wikipedia";
import { fastVideoCommand } from "./commands/videorapido";
import {
  bassAudioCommand,
  fastAudioCommand,
  reverseAudioCommand,
  slowAudioCommand
} from "./commands/audioTransforms";

const plugin: BotPlugin = {
  manifest: {
    id: "core",
    name: "Core Commands",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["info", "search", "media", "audio", "members", "anime", "fun", "stickers", "system"]
  },
  commands: [
    menuCommand,
    listCommandsCommand,
    infoCommandCommand,
    infoBotCommand,
    pingCommand,
    profileCommand,
    statusCommand,
    afkCommand,
    activeRankCommand,
    inactiveRankCommand,
    searchCommand,
    wikipediaCommand,
    newsCommand,
    weatherCommand,
    bookCommand,
    movieCommand,
    seriesCommand,
    translateCommand,
    playStoreCommand,
    playCommand,
    printSiteCommand,
    stickerCommand,
    toTextCommand,
    toMp3Command,
    fastAudioCommand,
    slowAudioCommand,
    reverseAudioCommand,
    bassAudioCommand,
    fastVideoCommand,
    animeInfoCommand,
    tagMeCommand
  ]
};

export default plugin;
