import type { CommandModule } from "../../../core/types/command";

export const facePlayCommand: CommandModule = {
  definition: {
    name: "faceplay",
    aliases: ["facebook", "fb", "fbplay", "face"],
    description: "Pesquisa e baixa vídeos do Facebook com opções de áudio MP3 e vídeo MP4.",
    usage: "!faceplay <link do Facebook>",
    category: "downloads",
    cooldownSeconds: 4
  },
  async execute(context) {
    const rawUrl = context.args[0]?.trim();
    if (!rawUrl || !/^https?:\/\//i.test(rawUrl)) {
      await context.reply(
        "📘 *DOWNLOAD DO FACEBOOK*\n\n" +
        "Informe o link do vídeo ou reel do Facebook que deseja baixar.\n" +
        "Exemplo: `!faceplay https://www.facebook.com/watch/?v=...` ou `!fb https://fb.watch/...`"
      );
      return;
    }

    await context.react("🔍");
    const progress = await context.sendProgress("🔎 *Buscando vídeo no Facebook...*");

    try {
      const info = await context.services.youtube.getInfo(rawUrl);
      if (!info) {
        if (progress) await progress.update("❌ Não foi possível carregar este vídeo do Facebook. Verifique se o post é público.");
        else await context.reply("❌ Não foi possível carregar este vídeo do Facebook.");
        return;
      }

      await context.react("📘");

      const cardBody = [
        `╭─ 📘 *FACEBOOK PLAY*`,
        `├ 📌 *Título:* ${info.title.slice(0, 80)}`,
        `├ ⏱ *Duração:* ${info.durationString}`,
        `├ 👤 *Autor:* ${info.channel}`,
        `├ 🔗 *Link:* ${info.url}`,
        `╰─────────────────────`,
        "",
        `Toque em um dos botões abaixo para escolher como deseja receber:`
      ].join("\n");

      try {
        await context.sendInteractiveButtons({
          title: "📘 FACEBOOK RESULTADO",
          body: cardBody,
          footer: `${context.env.botName} • Escolha o formato desejado`,
          imageUrl: info.thumbnail,
          menuTitle: "⚡ ESCOLHA O FORMATO:",
          buttons: [
            {
              type: "quick_reply",
              displayText: "🎵 ÁUDIO (MP3)",
              idOrUrl: `${context.prefix ?? context.env.defaultPrefix}ytmp3 ${info.url}`
            },
            {
              type: "quick_reply",
              displayText: "🎥 VÍDEO (MP4)",
              idOrUrl: `${context.prefix ?? context.env.defaultPrefix}ytmp4 ${info.url}`
            }
          ]
        });
      } catch {
        if (info.thumbnail) {
          await context.sendImage(info.thumbnail, cardBody);
        } else {
          await context.reply(cardBody);
        }
      }

      if (progress) {
        await progress.update("✨ Toque em *ÁUDIO (MP3)* ou *VÍDEO (MP4)* para receber o arquivo!");
      }
    } catch (err) {
      context.logger.error({ err }, "Erro no comando faceplay.");
      if (progress) await progress.update("❌ Ocorreu um erro ao buscar o vídeo do Facebook.");
      else await context.reply("❌ Ocorreu um erro ao processar o link do Facebook.");
    }
  }
};
