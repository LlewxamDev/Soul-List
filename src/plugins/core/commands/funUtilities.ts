import type { CommandModule } from "../../../core/types/command";

export const calculatorCommand: CommandModule = {
  definition: {
    name: "calc",
    aliases: ["calcular", "calculadora"],
    description: "Calcula uma expressão aritmética simples com segurança.",
    usage: "!calc <expressão>",
    category: "fun",
    cooldownSeconds: 3
  },
  async execute(context) {
    if (!context.argString.trim()) {
      await context.reply("Informe uma expressão, por exemplo: !calc (12+8)*3");
      return;
    }
    try {
      const result = context.services.calculator.evaluate(context.argString);
      await context.reply(`Resultado: *${result}*`);
    } catch {
      await context.reply("Não consegui interpretar essa expressão. Use apenas números, parênteses e + - * / %.");
    }
  }
};

export const chanceCommand: CommandModule = {
  definition: {
    name: "chance",
    aliases: ["probabilidade"],
    description: "Calcula uma porcentagem aleatória para uma pergunta.",
    usage: "!chance <pergunta>",
    category: "fun",
    cooldownSeconds: 4,
    groupOnly: true
  },
  async execute(context) {
    if (!context.argString.trim()) {
      await context.reply("Informe o que deseja consultar, por exemplo: !chance de chover hoje");
      return;
    }
    const percentage = Math.floor(Math.random() * 101);
    await context.reply(`A chance de *${context.argString.trim()}* é de *${percentage}%*.`);
  }
};

export const coinFlipCommand: CommandModule = {
  definition: {
    name: "caraoucoroa",
    aliases: ["moeda", "coinflip"],
    description: "Joga uma moeda virtual.",
    usage: "!caraoucoroa",
    category: "fun",
    cooldownSeconds: 3
  },
  async execute(context) {
    await context.reply(Math.random() < 0.5 ? "Cara!" : "Coroa!");
  }
};

export const drawCommand: CommandModule = {
  definition: {
    name: "sorteio",
    aliases: ["sortear"],
    description: "Sorteia uma opção entre os argumentos informados.",
    usage: "!sorteio opção 1 | opção 2 | opção 3",
    category: "fun",
    cooldownSeconds: 3,
    groupOnly: true
  },
  async execute(context) {
    const options = context.argString.split("|").map((value) => value.trim()).filter(Boolean);
    if (options.length < 2) {
      await context.reply("Informe pelo menos duas opções separadas por |.");
      return;
    }
    const choice = options[Math.floor(Math.random() * options.length)];
    await context.reply(`Resultado do sorteio: *${choice}*`);
  }
};

const advice = [
  "Faça o próximo passo possível, mesmo que seja pequeno.",
  "Uma decisão simples hoje pode poupar muito esforço amanhã.",
  "Nem toda urgência merece sua atenção imediata.",
  "Ouça com calma antes de responder."
];

export const adviceCommand: CommandModule = {
  definition: {
    name: "conselho",
    aliases: ["conselhos", "conselhob", "conselhosb"],
    description: "Envia um conselho aleatório.",
    usage: "!conselho",
    category: "fun",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply(`Conselho: ${advice[Math.floor(Math.random() * advice.length)]}`);
  }
};

const biblicalAdvice = [
  "Pratique a paciência e a bondade nas suas decisões.",
  "Procure agir com justiça, humildade e compaixão.",
  "A sabedoria também está em saber pedir ajuda."
];

export const biblicalAdviceCommand: CommandModule = {
  definition: {
    name: "conselhobiblico",
    aliases: ["conselhosbiblico", "conselhobiblicos"],
    description: "Envia um conselho de inspiração bíblica.",
    usage: "!conselhobiblico",
    category: "fun",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply(`Conselho bíblico: ${biblicalAdvice[Math.floor(Math.random() * biblicalAdvice.length)]}`);
  }
};

export const funUtilityCommands: CommandModule[] = [
  calculatorCommand,
  chanceCommand,
  coinFlipCommand,
  drawCommand,
  adviceCommand,
  biblicalAdviceCommand
];
