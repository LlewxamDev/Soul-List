import type { CommandModule } from "../../../core/types/command";

async function findVideo(context: Parameters<CommandModule["execute"]>[0]) {
  const query = context.argString.trim();
  if (!query) {
    await context.reply(`Informe o nome ou URL do vídeo. Exemplo: ${context.prefix ?? context.env.defaultPrefix}${context.command.name} música para estudar`);
    return null;
  }
  const video = await context.services.youtube.search(query);
  if (!video) {
    await context.reply("Nenhum vídeo foi encontrado para essa pesquisa.");
    return null;
  }
  return video;
}

const directAudioCommand: CommandModule = {
  definition: {
    name: "ytmp3",
    aliases: ["ytaudio", "youtubemp3", "baixarmp3", "audioyt", "yt-audio", "ytmusic"],
    description: "Baixa o áudio de um vídeo do YouTube.",
    usage: "!ytmp3 <nome ou URL>",
    category: "downloads",
    cooldownSeconds: 12
  },
  async execute(context) {
    try {
      const video = await findVideo(context);
      if (!video) {
        return;
      }
      await context.reply(`Baixando o áudio de *${video.title}*...`);
      const raw = await context.services.youtube.download(video.id, "audio");
      const audio = await context.services.ffmpeg.extractAudio(raw);
      await context.sendAudio(audio);
    } catch (error) {
      context.logger.warn({ error }, "Falha no ytmp3.");
      await context.reply("Não consegui baixar o áudio deste vídeo.");
    }
  }
};

const directVideoCommand: CommandModule = {
  definition: {
    name: "ytmp4",
    aliases: ["ytvideo", "youtubevideo", "baixarmp4", "videoyt", "yt-video", "ytdlvideo"],
    description: "Baixa um vídeo do YouTube em MP4.",
    usage: "!ytmp4 <nome ou URL>",
    category: "downloads",
    cooldownSeconds: 15
  },
  async execute(context) {
    try {
      const video = await findVideo(context);
      if (!video) {
        return;
      }
      await context.reply(`Baixando o vídeo *${video.title}*...`);
      const raw = await context.services.youtube.download(video.id, "video");
      await context.sendVideo(raw, `${video.title}\nCanal: ${video.author}`);
    } catch (error) {
      context.logger.warn({ error }, "Falha no ytmp4.");
      await context.reply("Não consegui baixar o vídeo deste conteúdo.");
    }
  }
};

const documentVideoCommand: CommandModule = {
  definition: {
    name: "ytdoc",
    aliases: ["youtubedoc", "videodoc", "ytarquivo", "baixarytdoc"],
    description: "Baixa um vídeo do YouTube e o envia como documento MP4.",
    usage: "!ytdoc <nome ou URL>",
    category: "downloads",
    cooldownSeconds: 15
  },
  async execute(context) {
    try {
      const video = await findVideo(context);
      if (!video) {
        return;
      }
      await context.reply(`Preparando o documento de *${video.title}*...`);
      const raw = await context.services.youtube.download(video.id, "video");
      await context.sendDocument(raw, `${video.title.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80) || "youtube"}.mp4`, "video/mp4", `Vídeo do YouTube: ${video.title}`);
    } catch (error) {
      context.logger.warn({ error }, "Falha no ytdoc.");
      await context.reply("Não consegui gerar o documento deste vídeo.");
    }
  }
};

export const youtubeDirectCommands: CommandModule[] = [directAudioCommand, directVideoCommand, documentVideoCommand];
