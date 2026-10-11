import type { CommandModule } from "../../../core/types/command";

export const playCommand: CommandModule = {
  definition: {
    name: "play",
    aliases: ["p", "musica", "tocar"],
    description: "Pesquisa vídeos no YouTube e permite escolher entre áudio MP3 ou vídeo MP4 em alta qualidade.",
    usage: "!play <nome da música ou link>",
    category: "downloads",
    cooldownSeconds: 4
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply(
        "Informe o nome da música ou link do YouTube.\n" +
        "Exemplo: `!play linkin park in the end`"
      );
      return;
    }

    await context.react("🔍");
    const progress = await context.sendProgress("🔎 Buscando no YouTube...");

    try {
      const info = await context.services.youtube.getInfo(context.argString);
      if (!info) {
        if (progress) await progress.update("❌ Nenhum resultado encontrado para sua busca.");
        else await context.reply("Nenhum resultado encontrado.");
        return;
      }

      await context.react("🎵");

      // Card limpo e elegante sem mensagem prematura de download
      const cardBody = [
        `╭─ 🎵 *YOUTUBE PLAY*`,
        `├ 📌 *Título:* ${info.title}`,
        `├ ⏱ *Duração:* ${info.durationString}`,
        `├ 👤 *Canal:* ${info.channel}`,
        `├ 👁 *Visualizações:* ${info.views.toLocaleString("pt-BR")}`,
        `├ 🔗 *Link:* ${info.url}`,
        `╰─────────────────────`,
        "",
        `Toque em um dos botões abaixo para escolher como deseja receber:`
      ].join("\n");

      // Envia cartão com botões de ação rápida
      try {
        await context.sendInteractiveButtons({
          title: "🎵 YOUTUBE RESULTADO",
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
        await progress.update("✨ Toque em *ÁUDIO (MP3)* ou *VÍDEO (MP4)* para iniciar o download!");
      }
    } catch (err) {
      context.logger.error({ err }, "Erro no comando play.");
      if (progress) await progress.update("❌ Ocorreu um erro ao buscar o conteúdo no YouTube.");
      else await context.reply("❌ Ocorreu um erro ao buscar a mídia do YouTube.");
    }
  }
};
