import type { CommandModule } from "../../../core/types/command";

export const ytMp3Command: CommandModule = {
  definition: {
    name: "ytmp3",
    aliases: ["playaudio", "baixaraudio"],
    description: "Baixa o áudio de um vídeo do YouTube em MP3.",
    usage: "!ytmp3 <link do YouTube>",
    category: "downloads",
    cooldownSeconds: 6
  },
  async execute(context) {
    const url = context.argString.trim();
    if (!url || !/^https?:\/\//i.test(url)) {
      await context.reply("Informe o link do vídeo para baixar o áudio.\nExemplo: `!ytmp3 https://youtube.com/watch?v=...`");
      return;
    }

    await context.react("⏳");
    const progress = await context.sendProgress("⏳ Processando e baixando áudio...");

    try {
      if (progress) await progress.update("⏳ Baixando fluxo de áudio...");
      const audioBuffer = await context.services.youtube.downloadAudio(url);

      if (progress) await progress.update("⏳ Enviando áudio...");
      await context.sendAudio(audioBuffer, false);
      await context.react("✅");

      if (progress) await progress.update("✅ Áudio enviado com sucesso!");
    } catch (err) {
      context.logger.error({ err }, "Erro no comando ytmp3.");
      if (progress) await progress.update("❌ Falha ao baixar áudio. Verifique o link e tente novamente.");
      else await context.reply("Ocorreu um erro ao baixar o áudio.");
    }
  }
};
