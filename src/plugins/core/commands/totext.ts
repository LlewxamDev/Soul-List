import type { CommandModule } from "../../../core/types/command";

export const toTextCommand: CommandModule = {
  definition: {
    name: "totext",
    aliases: ["transcrever"],
    description: "Transcreve áudio para texto usando Speech-to-Text.",
    usage: "!totext (respondendo um áudio)",
    category: "audio",
    cooldownSeconds: 10,
    premiumOnly: true
  },
  async execute(context) {
    const media = await context.downloadMedia();
    if (!media) {
      await context.reply("Responda um áudio ou vídeo com som.");
      return;
    }
    const text = await context.services.speech.transcribeAudio(media);
    await context.reply(text);
  }
};
