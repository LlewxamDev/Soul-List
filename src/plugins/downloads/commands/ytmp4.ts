import type { CommandModule } from "../../../core/types/command";
import { DownloadSessionService } from "../../../services/downloads/DownloadSessionService";

export const ytMp4Command: CommandModule = {
  definition: {
    name: "ytmp4",
    aliases: ["playvideo", "baixarvideo"],
    description: "Baixa o vídeo de um link do YouTube em MP4 com seleção de resolução.",
    usage: "!ytmp4 <link do YouTube> [resolucao]",
    category: "downloads",
    cooldownSeconds: 5
  },
  async execute(context) {
    const rawUrl = context.args[0]?.trim();
    const explicitRes = Number(context.args[1]);

    if (!rawUrl || !/^https?:\/\//i.test(rawUrl)) {
      await context.reply(
        "Informe o link do vídeo para baixar.\n" +
        "Exemplo: `!ytmp4 https://youtube.com/watch?v=...`"
      );
      return;
    }

    await context.react("⏳");

    // 1. Se o usuário já especificou uma resolução direta (ex: !ytmp4 <url> 720)
    if (explicitRes) {
      const progress = await context.sendProgress(`⏳ *Baixando vídeo em ${explicitRes}p... Aguarde...*`);
      try {
        const [info, videoBuffer] = await Promise.all([
          context.services.youtube.getInfo(rawUrl).catch(() => null),
          context.services.youtube.downloadVideo(rawUrl, explicitRes)
        ]);

        await context.sendVideo(videoBuffer, `🎥 *${info?.title ?? "Vídeo"}*\n✨ Qualidade: *${explicitRes}p*`);
        await context.react("✅");
        if (progress) await progress.update("✅ Vídeo enviado com sucesso!");
      } catch (err) {
        context.logger.error({ err }, "Erro no download direto de ytmp4.");
        if (progress) await progress.update("❌ Falha ao baixar o vídeo na resolução informada.");
        else await context.reply("❌ Ocorreu um erro ao baixar o vídeo.");
      }
      return;
    }

    // 2. Fluxo com seleção de resolução por lista interativa e sessão protegida
    const progress = await context.sendProgress("🔎 *Consultando qualidades disponíveis do vídeo...*");

    try {
      const [info, resolutions] = await Promise.all([
        context.services.youtube.getInfo(rawUrl),
        context.services.youtube.getAvailableResolutions(rawUrl)
      ]);

      if (!info) {
        if (progress) await progress.update("❌ Não foi possível carregar as informações do vídeo.");
        else await context.reply("❌ Não foi possível obter informações do vídeo.");
        return;
      }

      const sessionService = DownloadSessionService.getInstance();
      const session = sessionService.createSession({
        userId: context.sender,
        chatId: context.from,
        videoUrl: rawUrl,
        videoTitle: info.title,
        thumbnail: info.thumbnail,
        availableResolutions: resolutions
      });

      const rows = resolutions.map((res) => ({
        id: `${context.prefix ?? context.env.defaultPrefix}ytmp4_sel ${session.id} ${res}`,
        title: `🎥 ${res}p ${res >= 1080 ? "(Full HD)" : res >= 720 ? "(HD)" : "(SD)"}`,
        description: `Qualidade ${res}p • Formato MP4`
      }));

      const bodyText = [
        `╭─ 🎥 *DOWNLOAD DE VÍDEO (MP4)*`,
        `├ 📌 *Título:* ${info.title}`,
        `├ ⏱ *Duração:* ${info.durationString}`,
        `├ 👤 *Canal:* ${info.channel}`,
        `╰─────────────────────`,
        `Escolha a qualidade desejada na lista abaixo:`,
        `_Nota: Apenas quem solicitou pode selecionar a resolução._`
      ].join("\n");

      try {
        await context.sendInteractiveButtons({
          title: "🎬 ESCOLHA A QUALIDADE DO VÍDEO",
          body: bodyText,
          footer: `${context.env.botName} • Sessão exclusiva`,
          imageUrl: info.thumbnail,
          menuTitle: "🎥 ESCOLHER RESOLUÇÃO",
          sections: [
            {
              title: "⚡ RESOLUÇÕES DISPONÍVEIS",
              rows
            }
          ]
        });

        if (progress) {
          await progress.update("✨ *Lista de qualidades enviada! Toque no botão acima para escolher.*");
        }
      } catch {
        // Fallback para download padrão em 720p caso o cliente não suporte listas interativas
        if (progress) await progress.update("⏳ Baixando em qualidade padrão (720p)...");
        const videoBuffer = await context.services.youtube.downloadVideo(rawUrl, 720);
        await context.sendVideo(videoBuffer, `🎥 *${info.title}* (720p)`);
        await context.react("✅");
      }
    } catch (err) {
      context.logger.error({ err }, "Erro ao consultar resoluções em ytmp4.");
      if (progress) await progress.update("❌ Erro ao consultar o vídeo. Tente novamente mais tarde.");
      else await context.reply("❌ Erro ao processar o vídeo.");
    }
  }
};
