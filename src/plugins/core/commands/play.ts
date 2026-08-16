import type { CommandModule } from "../../../core/types/command";
import type { CommandContext } from "../../../core/types/context";
import type { YouTubeVideoResult } from "../../../services/youtube/YouTubeService";

const pendingSelections = new Map<string, { video: YouTubeVideoResult; expiresAt: number }>();
const SELECTION_TTL_MS = 10 * 60 * 1000;

function selectionKey(context: CommandContext): string {
  return `${context.from}:${context.sender}`;
}

function trimDescription(description: string): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  return normalized.length > 240 ? `${normalized.slice(0, 237)}...` : normalized;
}

function formatViews(views: number): string {
  return views > 0 ? new Intl.NumberFormat("pt-BR").format(views) : "indisponível";
}

async function executeDownload(context: CommandContext, type: "audio" | "video", video: YouTubeVideoResult): Promise<void> {
  await context.reply(type === "audio" ? "Baixando o áudio, aguarde..." : "Baixando o vídeo, aguarde...");
  const raw = await context.services.youtube.download(video.id, type);
  if (type === "audio") {
    const audio = await context.services.ffmpeg.extractAudio(raw);
    await context.sendAudio(audio);
    return;
  }
  await context.sendVideo(raw, `${video.title}\nCanal: ${video.author}`);
}

export const playCommand: CommandModule = {
  definition: {
    name: "play",
    aliases: ["youtube"],
    description: "Pesquisa um vídeo e permite baixar áudio ou vídeo.",
    usage: "!play <nome do vídeo ou URL>",
    category: "media",
    cooldownSeconds: 8
  },
  async execute(context) {
    const [action, ...actionArgs] = context.args;
    const key = selectionKey(context);
    const pending = pendingSelections.get(key);

    if (action === "audio" || action === "video") {
      if (!pending || pending.expiresAt < Date.now()) {
        pendingSelections.delete(key);
        await context.reply("Essa seleção expirou. Envie o comando play novamente.");
        return;
      }
      pendingSelections.delete(key);
      try {
        await executeDownload(context, action, pending.video);
      } catch (error) {
        context.logger.warn({ error, videoId: pending.video.id, type: action }, "Falha no download do play.");
        await context.reply("Não consegui baixar esse conteúdo. Tente outro vídeo ou aguarde alguns minutos.");
      }
      return;
    }

    const query = context.argString;
    if (!query) {
      await context.reply(`Uso correto: ${context.prefix ?? context.env.defaultPrefix}play nome do vídeo ou URL.`);
      return;
    }

    try {
      const video = await context.services.youtube.search(query);
      if (!video) {
        await context.reply("Nenhum vídeo encontrado para essa pesquisa.");
        return;
      }
      pendingSelections.set(key, { video, expiresAt: Date.now() + SELECTION_TTL_MS });
      const prefix = context.prefix ?? context.env.defaultPrefix;
      const caption = [
        "╭─ Resultado do YouTube",
        `├ Título: ${video.title}`,
        `├ Canal: ${video.author}`,
        `├ Duração: ${video.durationLabel}`,
        `├ Visualizações: ${formatViews(video.views)}`,
        `├ Descrição: ${trimDescription(video.description) || "indisponível"}`,
        "╰ Escolha o formato abaixo."
      ].join("\n");
      await context.sendButtons({
        text: caption,
        footer: "A seleção expira em 10 minutos.",
        image: video.thumbnail,
        buttons: [
          { id: `${prefix}play audio`, text: "ÁUDIO" },
          { id: `${prefix}play video`, text: "VÍDEO" }
        ]
      });
    } catch (error) {
      context.logger.warn({ error, query }, "Falha na pesquisa do play.");
      await context.reply("Não consegui pesquisar esse vídeo agora. Tente novamente mais tarde.");
    }
  }
};
