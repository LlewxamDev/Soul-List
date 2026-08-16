import type { CommandModule } from "../../../core/types/command";

export const aiQuestionCommand: CommandModule = {
  definition: {
    name: "gpt",
    aliases: ["chatgpt", "pergunta"],
    description: "Envia uma pergunta ao serviço de IA configurado.",
    usage: "!gpt <pergunta>",
    category: "fun",
    cooldownSeconds: 12
  },
  async execute(context) {
    const prompt = context.argString.trim();
    if (!prompt) {
      await context.reply("Informe a pergunta ou solicitação depois do comando.");
      return;
    }
    try {
      const answer = await context.services.ai.ask(prompt);
      await context.reply(answer);
    } catch {
      await context.reply("O serviço de IA não está configurado ou ficou indisponível no momento.");
    }
  }
};
