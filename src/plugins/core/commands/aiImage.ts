import type { CommandModule } from "../../../core/types/command";

export const aiImageCommand: CommandModule = {
  definition: {
    name: "aiimg",
    aliases: ["iaimagem", "imagemaí"],
    description: "Gera uma imagem usando o provedor de IA configurado.",
    usage: "!aiimg <descrição>",
    category: "media",
    cooldownSeconds: 20
  },
  async execute(context) {
    const prompt = context.argString.trim();
    if (!prompt) {
      await context.reply("Informe a descrição da imagem. Exemplo: !aiimg uma cidade cyberpunk durante a chuva");
      return;
    }
    if (prompt.length > 4000) {
      await context.reply("A descrição deve ter no máximo 4.000 caracteres.");
      return;
    }
    await context.reply("Gerando a imagem; aguarde alguns segundos.");
    try {
      const image = await context.services.imageGeneration.generate(prompt);
      await context.sendImage(image.data, `Imagem gerada a partir de: ${prompt}`);
    } catch (error) {
      context.logger.warn({ error }, "Falha na geração de imagem por IA.");
      await context.reply("Não consegui gerar a imagem. Verifique se o provedor de imagens está configurado e tente novamente.");
    }
  }
};
