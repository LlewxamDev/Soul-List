import type { CommandModule } from "../../../core/types/command";

export const instaPlayCommand: CommandModule = {
  definition: {
    name: "instaplay",
    aliases: ["instagram", "ig", "igplay", "reels", "insta"],
    description: "Pesquisa e baixa vídeos e Reels do Instagram com opções de áudio MP3 e vídeo MP4.",
    usage: "!instaplay <link do Instagram>",
    category: "downloads",
    cooldownSeconds: 4
  },
  async execute(context) {
    const rawUrl = context.args[0]?.trim();
    if (!rawUrl || !/^https?:\/\//i.test(rawUrl)) {
      await context.reply(
        "📸 *DOWNLOAD DO INSTAGRAM*\n\n" +
        "Informe o link do Reel ou publicação do Instagram que deseja baixar.\n" +
        "Exemplo: `!instaplay https://www.instagram.com/reel/...` ou `!ig https://www.instagram.com/p/...`"
      );
      return;
    }

    await context.react("🔍");
    const progress = await context.sendProgress("🔎 *Buscando publicação no Instagram...*");

    try {
      const info = await context.services.youtube.getInfo(rawUrl);
      if (!info) {
        if (progress) await progress.update("❌ Não foi possível carregar este conteúdo do Instagram. Verifique se o perfil é público.");
        else await context.reply("❌ Não foi possível carregar este conteúdo do Instagram.");
        return;
      }

      await context.react("📸");

      const cardBody = [
        `╭─ 📸 *INSTAGRAM PLAY*`,
        `├ 📌 *Título:* ${info.title.slice(0, 80)}`,
        `├ ⏱ *Duração:* ${info.durationString}`,
        `├ 👤 *Perfil:* @${info.channel.replace(/^@/, "")}`,
        `├ 🔗 *Link:* ${info.url}`,
        `╰─────────────────────`,
        "",
        `Toque em um dos botões abaixo para escolher como deseja receber:`
      ].join("\n");

      try {
        await context.sendInteractiveButtons({
          title: "📸 INSTAGRAM RESULTADO",
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
      context.logger.error({ err }, "Erro no comando instaplay.");
      if (progress) await progress.update("❌ Ocorreu um erro ao buscar o vídeo do Instagram.");
      else await context.reply("❌ Ocorreu um erro ao processar o link do Instagram.");
    }
  }
};
