import type { CommandModule } from "../../../core/types/command";

const CANTADAS = [
  "Você não é Wi-Fi, mas eu sinto uma conexão muito forte entre nós.",
  "Se beleza fosse tempo, você seria a eternidade.",
  "Você tem um mapa? Porque me perdi no brilho dos seus olhos.",
  "Você não é gravidade, mas me atrai para perto de você a cada segundo.",
  "Me chama de tabela periódica e diz que rola uma química entre nós.",
  "Você gosta de brigadeiro? Porque eu sou um docinho de pessoa.",
  "Se nada dura para sempre, quer ser o meu nada?",
  "Seu pai é mecânico? Porque você é uma gracinha de peça rara!",
  "Você acredita em amor à primeira vista ou tenho que mandar figurinha de novo?"
];

export const cantadaCommand: CommandModule = {
  definition: {
    name: "cantada",
    aliases: ["flerte", "xaveco"],
    description: "Gera uma cantada infalível e bem-humorada.",
    usage: "!cantada",
    category: "fun",
    cooldownSeconds: 3
  },
  async execute(context) {
    const cantada = CANTADAS[Math.floor(Math.random() * CANTADAS.length)]!;
    await context.reply(`😏 *CANTADA DO DIA:*\n\n"${cantada}"\n\n_Use com sabedoria!_ 😉`);
  }
};
