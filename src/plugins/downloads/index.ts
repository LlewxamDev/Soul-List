import type { BotPlugin } from "../../core/types/plugin";
import { playCommand } from "./commands/play";
import { ytMp3Command } from "./commands/ytmp3";
import { ytMp4Command } from "./commands/ytmp4";
import { ytmp4SelCommand } from "./commands/ytmp4_sel";

const downloadsPlugin: BotPlugin = {
  manifest: {
    id: "downloads",
    name: "Downloads Hub",
    version: "1.0.0",
    description: "Comandos de pesquisa e download com botões interativos e yt-dlp.",
    enabledByDefault: true
  },
  commands: [playCommand, ytMp3Command, ytMp4Command, ytmp4SelCommand]
};

export default downloadsPlugin;
