import type { CommandModule } from "../../../core/types/command";

function visionCommand(name: string, aliases: string[], prompt: string, description: string): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description,
      usage: `!${name} (respondendo a uma imagem)`,
      category: "media",
      cooldownSeconds: 10
    },
    async execute(context) {
      const image = await context.downloadMedia();
      if (!image) {
        await context.reply("Responda a uma imagem para usar este comando.");
        return;
      }
      try {
        await context.reply("Analisando a imagem com o modelo de visão...");
        const answer = await context.services.ai.describeImage(`${prompt}\nResponda em português brasileiro, de forma objetiva.`, image, "image/jpeg");
        await context.reply(answer);
      } catch (error) {
        context.logger.warn({ error, command: name }, "Falha na análise Groq de imagem.");
        await context.reply("A análise por imagem requer GROQ_API_KEY configurada e um modelo de visão disponível.");
      }
    }
  };
}

export const describeImageCommand = visionCommand("descreverimg", ["describeimg", "imagem", "vision", "visao", "visão"], "Descreva com precisão o que aparece na imagem.", "Descreve uma imagem usando um modelo de visão Groq.");
export const ocrImageCommand = visionCommand("ocr", ["extrairtexto", "textodaimagem", "lerimagem"], "Extraia todo o texto legível da imagem. Se não houver texto, informe isso.", "Extrai texto de uma imagem usando OCR multimodal Groq.");

export const imageVisionCommands: CommandModule[] = [describeImageCommand, ocrImageCommand];
