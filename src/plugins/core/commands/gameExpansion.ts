import { randomInt } from "node:crypto";
import { formatPhone } from "../../../core/utils/whatsapp";
import type { CommandContext } from "../../../core/types/context";
import type { CommandModule } from "../../../core/types/command";

function gameCommand(name: string, aliases: string[], description: string, execute: CommandModule["execute"]): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description,
      usage: `!${name}`,
      category: "games",
      cooldownSeconds: 4
    },
    execute
  };
}

export const rockPaperScissorsCommand = gameCommand("jokenpo", ["ppt", "pedrapapeltesoura", "rpc", "jokenpô"], "Joga pedra, papel e tesoura.", async (context) => {
  const choice = context.args[0]?.toLowerCase();
  const options = ["pedra", "papel", "tesoura"];
  if (!choice || !options.includes(choice)) {
    await context.reply("Escolha pedra, papel ou tesoura. Exemplo: !jokenpo pedra");
    return;
  }
  const bot = options[randomInt(options.length)] ?? "pedra";
  const win = (choice === "pedra" && bot === "tesoura") || (choice === "papel" && bot === "pedra") || (choice === "tesoura" && bot === "papel");
  const tie = choice === bot;
  await context.reply(`🪨📄✂️ Você: *${choice}*\nBot: *${bot}*\n\n${tie ? "Empate." : win ? "Você venceu." : "O bot venceu."}`);
});

export const diceCommand = gameCommand("dado", ["dados", "rolardado", "rolardados", "dice", "d6", "d20"], "Rola dados de RPG com notação opcional NdM.", async (context) => {
  const notation = context.args[0] ?? "1d6";
  const match = notation.match(/^(\d{1,2})d(\d{1,4})$/i);
  if (!match) {
    await context.reply("Use uma notação como 1d6, 2d6 ou 1d20.");
    return;
  }
  const amount = Math.min(20, Math.max(1, Number(match[1])));
  const sides = Math.min(1000, Math.max(2, Number(match[2])));
  const values = Array.from({ length: amount }, () => randomInt(1, sides + 1));
  await context.reply(`🎲 ${amount}d${sides}: *${values.join(", ")}*\nTotal: *${values.reduce((sum, value) => sum + value, 0)}*`);
});

interface QuizState {
  answer: string;
  question: string;
  expiresAt: number;
}

const quizBank = [
  { question: "Qual é o maior planeta do Sistema Solar?", answer: "jupiter" },
  { question: "Qual é o resultado de 7 × 8?", answer: "56" },
  { question: "Qual idioma é falado principalmente no Brasil?", answer: "portugues" },
  { question: "Quantos lados tem um hexágono?", answer: "6" },
  { question: "Qual é o símbolo químico da água?", answer: "h2o" }
];

function normalizeAnswer(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

export const quizCommand = gameCommand("quiz", ["quizbot", "perguntas", "trivia"], "Cria uma pergunta de quiz com resposta persistida por conversa.", async (context) => {
  const answerMode = context.args[0]?.toLowerCase() === "responder" || context.args[0]?.toLowerCase() === "resposta";
  const key = `game:quiz:${context.from}`;
  const current = await context.repositories.settings.getJson<QuizState>(key);
  if (answerMode) {
    const answer = context.args.slice(1).join(" ");
    if (!current || current.expiresAt < Date.now()) {
      await context.reply("Não há um quiz ativo nesta conversa. Use !quiz para começar.");
      return;
    }
    await context.repositories.settings.setJson(key, null);
    await context.reply(normalizeAnswer(answer) === normalizeAnswer(current.answer) ? "✅ Resposta correta!" : `❌ Resposta incorreta. A resposta era: *${current.answer}*.`);
    return;
  }
  const item = quizBank[randomInt(quizBank.length)] ?? { question: "Qual é o resultado de 2 + 2?", answer: "4" };
  const state: QuizState = { answer: item.answer, question: item.question, expiresAt: Date.now() + 120_000 };
  await context.repositories.settings.setJson(key, state);
  await context.reply(`🧠 *Quiz*\n${item.question}\n\nResponda com: !quiz responder <resposta>\nA pergunta expira em 2 minutos.`);
});

interface GuessState {
  number: number;
  attempts: number;
  expiresAt: number;
}

export const guessCommand = gameCommand("adivinhar", ["adivinhe", "palpite", "guess", "numero-secreto"], "Cria uma rodada de adivinhação de número.", async (context) => {
  const key = `game:guess:${context.from}`;
  const current = await context.repositories.settings.getJson<GuessState>(key);
  const guess = Number.parseInt(context.args[0] ?? "", 10);
  if (!current || current.expiresAt < Date.now() || context.args[0]?.toLowerCase() === "novo") {
    const state: GuessState = { number: randomInt(1, 101), attempts: 0, expiresAt: Date.now() + 180_000 };
    await context.repositories.settings.setJson(key, state);
    await context.reply("🔢 Pensei em um número de 1 a 100. Use !adivinhar <número> para tentar.");
    return;
  }
  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    await context.reply("Informe um número inteiro entre 1 e 100.");
    return;
  }
  const attempts = current.attempts + 1;
  await context.repositories.settings.setJson(key, { ...current, attempts });
  if (guess === current.number) {
    await context.repositories.settings.setJson(key, null);
    await context.reply(`🎉 Acertou em ${attempts} tentativa(s)!`);
  } else {
    await context.reply(guess < current.number ? "É maior." : "É menor.");
  }
});

interface HangmanState {
  word: string;
  guessed: string[];
  expiresAt: number;
}

const hangmanWords = ["castelo", "dragao", "aventura", "cavaleiro", "floresta", "magia"];

export const hangmanCommand = gameCommand("forca", ["hangman", "jogoforca", "forcagame"], "Inicia ou atualiza um jogo de forca simples.", async (context) => {
  const key = `game:hangman:${context.from}`;
  let state = await context.repositories.settings.getJson<HangmanState>(key);
  const attempt = context.args[0]?.toLowerCase();
  if (!state || state.expiresAt < Date.now() || attempt === "novo") {
    state = { word: hangmanWords[randomInt(hangmanWords.length)] ?? "castelo", guessed: [], expiresAt: Date.now() + 300_000 };
  } else if (attempt && /^[a-záàâãéêíóôõúç]$/i.test(attempt)) {
    const normalized = normalizeAnswer(attempt);
    if (!state.guessed.includes(normalized)) {
      state.guessed.push(normalized);
    }
  }
  await context.repositories.settings.setJson(key, state);
  const masked = [...state.word].map((letter) => state.guessed.includes(normalizeAnswer(letter)) ? letter : "_").join(" ");
  const won = !masked.includes("_");
  if (won) {
    await context.repositories.settings.setJson(key, null);
  }
  await context.reply(`🪢 *Forca*\n${masked}\n\nLetras tentadas: ${state.guessed.join(", ") || "nenhuma"}\n${won ? `Você venceu! A palavra era *${state.word}*.` : "Use !forca <letra> para jogar."}`);
});

export const teamsCommand: CommandModule = {
  definition: {
    name: "times",
    aliases: ["dividirtimes", "sortearteams", "equipes"],
    description: "Divide participantes do grupo em dois times aleatórios.",
    usage: "!times",
    category: "games",
    cooldownSeconds: 8,
    groupOnly: true
  },
  async execute(context) {
    const participants = (await context.socket.groupMetadata(context.from)).participants.map((participant) => participant.id).filter((jid) => jid !== context.socket.user?.id);
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const first = shuffled.filter((_, index) => index % 2 === 0);
    const second = shuffled.filter((_, index) => index % 2 === 1);
    const format = (team: string[]) => team.length > 0 ? team.map((jid) => `@${formatPhone(jid)}`).join(", ") : "vazio";
    await context.sendMentionedText(`⚔️ *Times sorteados*\nTime A: ${format(first)}\nTime B: ${format(second)}`, shuffled);
  }
};

const challenges = [
  "mande uma mensagem elogiando alguém do grupo",
  "conte uma curiosidade sobre você",
  "escolha uma música para a próxima rodada",
  "use uma figurinha que represente seu humor",
  "responda uma pergunta do quiz"
];

export const challengeCommand = gameCommand("desafio", ["challenge", "missao", "missão", "tarefagame"], "Sorteia um desafio leve e não explícito.", async (context) => {
  await context.reply(`🎯 Seu desafio: *${challenges[randomInt(challenges.length)]}*`);
});

const truthQuestions = [
  "Qual foi uma decisão da qual você se orgulha?",
  "Qual lugar você gostaria de visitar?",
  "Qual habilidade gostaria de aprender?",
  "Qual foi o último filme de que você gostou?"
];

export const truthCommand = gameCommand("verdade", ["truth", "perguntaverdade"], "Sorteia uma pergunta segura de verdade.", async (context) => {
  await context.reply(`💬 Verdade: *${truthQuestions[randomInt(truthQuestions.length)]}*`);
});

export const gameExpansionCommands: CommandModule[] = [
  rockPaperScissorsCommand,
  diceCommand,
  quizCommand,
  guessCommand,
  hangmanCommand,
  teamsCommand,
  challengeCommand,
  truthCommand
];
