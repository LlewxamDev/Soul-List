import type { CommandModule } from "../../../core/types/command";

function parsePoll(input: string): { question: string; values: string[] } | null {
  const [questionPart, optionsPart] = input.split("|").map((value) => value.trim());
  if (!questionPart) {
    return null;
  }
  const values = optionsPart
    ? optionsPart.split(",").map((value) => value.trim()).filter(Boolean).slice(0, 12)
    : [];
  return { question: questionPart, values };
}

export const pollCommand: CommandModule = {
  definition: {
    name: "enquete",
    aliases: ["poll", "votacao", "votação"],
    description: "Cria uma enquete nativa do WhatsApp.",
    usage: "!enquete pergunta | opção 1, opção 2",
    category: "fun",
    cooldownSeconds: 6
  },
  async execute(context) {
    const poll = parsePoll(context.argString);
    if (!poll) {
      await context.reply("Informe a pergunta. Para opções, use: !enquete pergunta | opção 1, opção 2");
      return;
    }
    if (poll.question.length > 500) {
      await context.reply("A pergunta deve ter no máximo 500 caracteres.");
      return;
    }
    if (poll.values.length === 1) {
      await context.reply("Informe pelo menos duas opções separadas por vírgula.");
      return;
    }
    if (poll.values.some((value) => value.length > 100)) {
      await context.reply("Cada opção deve ter no máximo 100 caracteres.");
      return;
    }
    if (poll.values.length === 0) {
      await context.sendPoll(poll.question, ["Sim", "Não"]);
      return;
    }
    await context.sendPoll(poll.question, poll.values, 1);
  }
};
