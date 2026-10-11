import type { CommandModule } from "../../../core/types/command";

const FORTUNES = [
  "A paciência é uma árvore de raiz amarga, mas de frutos muito doces.",
  "Um pequeno gesto de gentileza pode mudar completamente o dia de alguém.",
  "Grandes jornadas começam com a decisão de dar o primeiro passo.",
  "O momento em que você decide não desistir é quando o milagre começa.",
  "A sorte favorece os audaciosos e os bem-humorados.",
  "Novas oportunidades surgirão onde você menos espera esta semana.",
  "Confie no processo: o que é seu encontrará o caminho até você.",
  "Hoje é um dia perfeito para começar aquele projeto que você vem adiando."
];

export const sorteCommand: CommandModule = {
  definition: {
    name: "sorte",
    aliases: ["biscoito", "fortune"],
    description: "Abra um biscoito da sorte para ler sua mensagem e números auspiciosos.",
    usage: "!sorte",
    category: "fun",
    cooldownSeconds: 3
  },
  async execute(context) {
    const fortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)]!;
    const luckyNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 60) + 1)
      .sort((a, b) => a - b)
      .join(" - ");

    await context.reply(
      `🥠 *BISCOITO DA SORTE* 🥠\n\n` +
      `📜 _"${fortune}"_\n\n` +
      `🔢 *Números da Sorte:* [ ${luckyNumbers} ]\n` +
      `🍀 Que a sorte esteja sempre com você!`
    );
  }
};
