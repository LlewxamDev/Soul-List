import type { CommandModule } from "../../../core/types/command";
import { DownloadSessionService } from "../../../services/downloads/DownloadSessionService";

export const ytmp4SelCommand: CommandModule = {
  definition: {
    name: "ytmp4_sel",
    aliases: [],
    description: "Processa a seleção de qualidade e resolução de vídeo do YouTube com trava atômica.",
    usage: "!ytmp4_sel <sessionId> <resolution>",
    category: "downloads",
    cooldownSeconds: 2,
    hidden: true
  },
  async execute(context) {
    const sessionId = context.args[0];
    const resolutionStr = context.args[1];
    const targetHeight = Number(resolutionStr) || 720;

    if (!sessionId) {
      await context.reply("Parâmetros de sessão inválidos.");
      return;
    }

    const sessionService = DownloadSessionService.getInstance();
    const lockResult = sessionService.lockSession(sessionId, context.sender);

    if (!lockResult.success || !lockResult.session) {
      await context.reply(lockResult.error ?? "Não foi possível iniciar o download desta sessão.");
      return;
    }

    const session = lockResult.session;
    await context.react("⏳");
    const progress = await context.sendProgress(
      `⏳ *Baixando vídeo em ${targetHeight}p...*\n📌 *Título:* ${session.videoTitle}\n_Por favor, aguarde alguns instantes..._`
    );

    try {
      const videoBuffer = await context.services.youtube.downloadVideo(session.videoUrl, targetHeight);
      await context.sendVideo(videoBuffer, `🎥 *${session.videoTitle}*\n✨ Qualidade: *${targetHeight}p*`);
      await context.react("✅");
      if (progress) {
        await progress.update(`✅ *Vídeo entregue com sucesso em ${targetHeight}p!*`);
      }
      sessionService.completeSession(sessionId);
    } catch (err: any) {
      sessionService.failSession(sessionId);
      context.logger.error({ err, sessionId, targetHeight }, "Erro ao processar download de vídeo por resolução.");
      if (progress) {
        await progress.update("❌ Falha ao processar o vídeo na resolução selecionada. Tente outra resolução menor.");
      } else {
        await context.reply("❌ Falha ao baixar o vídeo na resolução selecionada.");
      }
    }
  }
};
