import type { CommandModule } from "../../../core/types/command";

const signs: Record<string, { name: string; period: string; advice: string }> = {
  aries: { name: "Áries", period: "21/03 a 19/04", advice: "Tome iniciativa, mas reserve um momento para ouvir antes de agir." },
  touro: { name: "Touro", period: "20/04 a 20/05", advice: "Persistência ajuda, desde que você também aceite ajustes no caminho." },
  gemeos: { name: "Gêmeos", period: "21/05 a 20/06", advice: "Uma conversa bem conduzida pode abrir uma oportunidade importante." },
  cancer: { name: "Câncer", period: "21/06 a 22/07", advice: "Proteja seu tempo e aproxime-se de quem demonstra reciprocidade." },
  leao: { name: "Leão", period: "23/07 a 22/08", advice: "Mostre seu talento sem esquecer de reconhecer a contribuição alheia." },
  virgem: { name: "Virgem", period: "23/08 a 22/09", advice: "Organização é útil, mas não deixe o perfeccionismo atrasar o início." },
  libra: { name: "Libra", period: "23/09 a 22/10", advice: "Busque equilíbrio sem transferir todas as decisões para outras pessoas." },
  escorpiao: { name: "Escorpião", period: "23/10 a 21/11", advice: "Use sua intensidade para concluir algo, não para alimentar conflitos." },
  sagitario: { name: "Sagitário", period: "22/11 a 21/12", advice: "Explore novas possibilidades, mantendo um plano para o retorno." },
  capricornio: { name: "Capricórnio", period: "22/12 a 19/01", advice: "Disciplina traz resultado, mas descanso também faz parte da estratégia." },
  aquario: { name: "Aquário", period: "20/01 a 18/02", advice: "Uma ideia diferente pode funcionar melhor se for explicada com clareza." },
  peixes: { name: "Peixes", period: "19/02 a 20/03", advice: "Confie na intuição, mas confira os fatos antes de assumir compromissos." }
};

const aliases: Record<string, string> = {
  aries: "aries", áries: "aries", touro: "touro", gemeos: "gemeos", "gêmeos": "gemeos", cancer: "cancer", "câncer": "cancer",
  leao: "leao", leão: "leao", virgem: "virgem", libra: "libra", escorpiao: "escorpiao", escorpião: "escorpiao",
  sagitario: "sagitario", sagitário: "sagitario", capricornio: "capricornio", capricórnio: "capricornio", aquario: "aquario", aquário: "aquario", peixes: "peixes"
};

export const zodiacCommand: CommandModule = {
  definition: {
    name: "signo",
    aliases: ["horoscopo", "horóscopo"],
    description: "Mostra o período e um conselho para o signo informado.",
    usage: "!signo <signo>",
    category: "fun",
    cooldownSeconds: 5
  },
  async execute(context) {
    const key = aliases[context.argString.trim().toLowerCase()];
    const sign = key ? signs[key] : undefined;
    if (!sign) {
      await context.reply(`Informe um signo válido: ${Object.values(signs).map((value) => value.name).join(", ")}.`);
      return;
    }
    await context.reply(`*${sign.name}*\nPeríodo: ${sign.period}\n\n${sign.advice}`);
  }
};
