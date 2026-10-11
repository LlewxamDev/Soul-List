import type { CommandModule } from "../../core/types/command";

export const pack3Commands: CommandModule[] = [
  {
    definition: {
      name: "fb",
      aliases: [],
      description: "Comando de entretenimento e interação (fb)",
      usage: "!fb",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Limit kamu tidak cukup! Limit tersisa: Limit yang dibutuhkan:");
    }
  },
  {
    definition: {
      name: "fbvid",
      aliases: [],
      description: "Comando de entretenimento e interação (fbvid)",
      usage: "!fbvid",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Limit kamu tidak cukup! Limit tersisa: Limit yang dibutuhkan:");
    }
  },
  {
    definition: {
      name: "fbvideo",
      aliases: [],
      description: "Comando de entretenimento e interação (fbvideo)",
      usage: "!fbvideo",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Limit kamu tidak cukup! Limit tersisa: Limit yang dibutuhkan:");
    }
  },
  {
    definition: {
      name: "feio",
      aliases: [],
      description: "Calcula o nível de feiura da pessoa",
      usage: "!feio",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*FEIO*] @${targetNum} tem *${percent}%*!\nCalcula o nível de feiura da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "femdom",
      aliases: [],
      description: "Comando de entretenimento e interação (femdom)",
      usage: "!femdom",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "ff1",
      aliases: [],
      description: "Calcula a porcentagem de ff1 da pessoa",
      usage: "!ff1",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*FF1*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de ff1 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "ff2",
      aliases: [],
      description: "Calcula a porcentagem de ff2 da pessoa",
      usage: "!ff2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*FF2*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de ff2 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "ffavatar",
      aliases: [],
      description: "Comando de entretenimento e interação (ffavatar)",
      usage: "!ffavatar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "ffgren",
      aliases: [],
      description: "Calcula a porcentagem de ffgren da pessoa",
      usage: "!ffgren",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*FFGREN*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de ffgren da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "ffrose",
      aliases: [],
      description: "Calcula a porcentagem de ffrose da pessoa",
      usage: "!ffrose",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*FFROSE*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de ffrose da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "ffstalk",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (ffstalk)",
      usage: "!ffstalk",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !ffstalk em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (ffstalk)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "fiction",
      aliases: [],
      description: "Comando de entretenimento e interação (fiction)",
      usage: "!fiction",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "fiel",
      aliases: [],
      description: "Calcula a taxa de fidelidade da pessoa",
      usage: "!fiel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*FIEL*] @${targetNum} tem *${percent}%*!\nCalcula a taxa de fidelidade da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "figaleatoria",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figaleatoria)",
      usage: "!figaleatoria",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou gerando sua figurinha, aguarde um pouco amigo(a)...");
    }
  },
  {
    definition: {
      name: "figfundo",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figfundo)",
      usage: "!figfundo",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("So imagem amigo(a)!");
    }
  },
  {
    definition: {
      name: "figu-animais",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-animais)",
      usage: "!figu-animais",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-anime",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (figu-anime)",
      usage: "!figu-anime",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-bebe",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-bebe)",
      usage: "!figu-bebe",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-coreana",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-coreana)",
      usage: "!figu-coreana",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-desenho",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-desenho)",
      usage: "!figu-desenho",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-flork",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-flork)",
      usage: "!figu-flork",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-meme",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-meme)",
      usage: "!figu-meme",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-raiva",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-raiva)",
      usage: "!figu-raiva",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-random",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-random)",
      usage: "!figu-random",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figu-roblox",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figu-roblox)",
      usage: "!figu-roblox",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("cadê a quantidade?");
    }
  },
  {
    definition: {
      name: "figuanimais",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figuanimais)",
      usage: "!figuanimais",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figuanime",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (figuanime)",
      usage: "!figuanime",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figuanime2",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (figuanime2)",
      usage: "!figuanime2",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    }
  },
  {
    definition: {
      name: "figubebe",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figubebe)",
      usage: "!figubebe",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figubts",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figubts)",
      usage: "!figubts",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    }
  },
  {
    definition: {
      name: "figucoreana",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figucoreana)",
      usage: "!figucoreana",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figucoreanas2",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figucoreanas2)",
      usage: "!figucoreanas2",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    }
  },
  {
    definition: {
      name: "figudesenho",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figudesenho)",
      usage: "!figudesenho",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figuemoji",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figuemoji)",
      usage: "!figuemoji",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figuflork",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figuflork)",
      usage: "!figuflork",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figufunny",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figufunny)",
      usage: "!figufunny",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figugatos",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figugatos)",
      usage: "!figugatos",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    }
  },
  {
    definition: {
      name: "figumemes",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figumemes)",
      usage: "!figumemes",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figumemes2",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figumemes2)",
      usage: "!figumemes2",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    }
  },
  {
    definition: {
      name: "figuraiva",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figuraiva)",
      usage: "!figuraiva",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figurandom",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figurandom)",
      usage: "!figurandom",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira a quantidade de figurinhas que deseja que eu envie!");
    }
  },
  {
    definition: {
      name: "figurinha",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figurinha)",
      usage: "!figurinha",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🎨📱✨ *Digite a quantidade de figurinhas* (❌ Máximo permitido: 50).");
    }
  },
  {
    definition: {
      name: "figurinhas",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figurinhas)",
      usage: "!figurinhas",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar a quantidade de stickers que você deseja...");
    }
  },
  {
    definition: {
      name: "figuroblox",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (figuroblox)",
      usage: "!figuroblox",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !figuroblox em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (figuroblox)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "figusemfundo",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figusemfundo)",
      usage: "!figusemfundo",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("So imagem amigo(a)!");
    }
  },
  {
    definition: {
      name: "figuweb",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figuweb)",
      usage: "!figuweb",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Aguarde, estou gerando a figurinha de acordo o que você solicitou!");
    }
  },
  {
    definition: {
      name: "figvideo",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (figvideo)",
      usage: "!figvideo",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("So imagem amigo(a)!");
    }
  },
  {
    definition: {
      name: "fire",
      aliases: [],
      description: "Comando de entretenimento e interação (fire)",
      usage: "!fire",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "florwooden",
      aliases: [],
      description: "Comando de entretenimento e interação (florwooden)",
      usage: "!florwooden",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "foot",
      aliases: [],
      description: "Comando de entretenimento e interação (foot)",
      usage: "!foot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "fotobot",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (fotobot)",
      usage: "!fotobot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !fotobot em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (fotobot)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "fotogp",
      aliases: [],
      description: "Comando de entretenimento e interação (fotogp)",
      usage: "!fotogp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use: <Marque uma foto>");
    }
  },
  {
    definition: {
      name: "fotomenu",
      aliases: [],
      description: "Comando de entretenimento e interação (fotomenu)",
      usage: "!fotomenu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem");
    }
  },
  {
    definition: {
      name: "fpsmascote",
      aliases: [],
      description: "Comando de entretenimento e interação (fpsmascote)",
      usage: "!fpsmascote",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "frases",
      aliases: [],
      description: "Comando de entretenimento e interação (frases)",
      usage: "!frases",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar um link do *mega.nz* após o comando.");
    }
  },
  {
    definition: {
      name: "fundobemvindo",
      aliases: [],
      description: "Comando de entretenimento e interação (fundobemvindo)",
      usage: "!fundobemvindo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem..");
    }
  },
  {
    definition: {
      name: "fundobv",
      aliases: [],
      description: "Comando de entretenimento e interação (fundobv)",
      usage: "!fundobv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem..");
    }
  },
  {
    definition: {
      name: "fundolevel",
      aliases: [],
      description: "Comando de entretenimento e interação (fundolevel)",
      usage: "!fundolevel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem..");
    }
  },
  {
    definition: {
      name: "fundomenu",
      aliases: [],
      description: "Comando de entretenimento e interação (fundomenu)",
      usage: "!fundomenu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem");
    }
  },
  {
    definition: {
      name: "fundosaiu",
      aliases: [],
      description: "Comando de entretenimento e interação (fundosaiu)",
      usage: "!fundosaiu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem..");
    }
  },
  {
    definition: {
      name: "g1noticia",
      aliases: [],
      description: "Consulta informações e dados sobre g1noticia",
      usage: "!g1noticia",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Volte mais tarde...");
    }
  },
  {
    definition: {
      name: "gada",
      aliases: [],
      description: "Calcula a porcentagem de gada da pessoa",
      usage: "!gada",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*GADA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de gada da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "game",
      aliases: [],
      description: "Calcula a porcentagem de game da pessoa",
      usage: "!game",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*GAME*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de game da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "gamenews",
      aliases: [],
      description: "Minigame interativo de entretenimento (gamenews)",
      usage: "!gamenews",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _ *--help*_");
    }
  },
  {
    definition: {
      name: "games",
      aliases: [],
      description: "Minigame interativo de entretenimento (games)",
      usage: "!games",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar o nome do jogo após o comando.");
    }
  },
  {
    definition: {
      name: "gamesnews",
      aliases: [],
      description: "Minigame interativo de entretenimento (gamesnews)",
      usage: "!gamesnews",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _ *--help*_");
    }
  },
  {
    definition: {
      name: "ganbganb",
      aliases: [],
      description: "Comando de entretenimento e interação (ganbganb)",
      usage: "!ganbganb",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "gangbang",
      aliases: [],
      description: "Comando de entretenimento e interação (gangbang)",
      usage: "!gangbang",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "gartic",
      aliases: [],
      description: "Comando de entretenimento e interação (gartic)",
      usage: "!gartic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "gdrive",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (gdrive)",
      usage: "!gdrive",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !gdrive em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (gdrive)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "gelo",
      aliases: [],
      description: "Comando de entretenimento e interação (gelo)",
      usage: "!gelo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "gemini",
      aliases: [],
      description: "Comando de entretenimento e interação (gemini)",
      usage: "!gemini",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua pergunta, isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "geminip",
      aliases: [],
      description: "Comando de entretenimento e interação (geminip)",
      usage: "!geminip",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cade a pergunta?");
    }
  },
  {
    definition: {
      name: "gerarcodecort",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito GERARCODECORT",
      usage: "!gerarcodecort",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🛒🤍 O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo: -> **");
    }
  },
  {
    definition: {
      name: "gerarcodegp",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (gerarcodegp)",
      usage: "!gerarcodegp",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !gerarcodegp em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (gerarcodegp)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "gerarcoderent",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (gerarcoderent)",
      usage: "!gerarcoderent",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !gerarcoderent em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (gerarcoderent)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "gerargf",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito GERARGF",
      usage: "!gerargf",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Defina o valor que você desejar adicionar ao giftCard.");
    }
  },
  {
    definition: {
      name: "gerarlink",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito GERARLINK",
      usage: "!gerarlink",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Link gerado: **");
    }
  },
  {
    definition: {
      name: "gerarlink2",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito GERARLINK2",
      usage: "!gerarlink2",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❯❯AGUARDE...❮❮");
    }
  },
  {
    definition: {
      name: "gerarnick",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito GERARNICK",
      usage: "!gerarnick",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
    }
  },
  {
    definition: {
      name: "gerarqr",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito GERARQR",
      usage: "!gerarqr",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("💫| 𝐒𝐞𝐮 𝐪𝐫 𝐜𝐨𝐝𝐞 𝐟𝐨𝐢 𝐠𝐞𝐫𝐚𝐝𝐨 𝐜𝐨𝐧𝐭𝐞𝐧𝐝𝐨 𝐨 𝐭𝐞𝐱𝐭𝐨/𝐮𝐫𝐥 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐚𝐨 𝐥𝐚𝐝𝐨: **");
    }
  },
  {
    definition: {
      name: "get",
      aliases: [],
      description: "Comando de entretenimento e interação (get)",
      usage: "!get",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("CPF gerado com sucesso:");
    }
  },
  {
    definition: {
      name: "get-txt",
      aliases: [],
      description: "Comando de entretenimento e interação (get-txt)",
      usage: "!get-txt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("CPF gerado com sucesso:");
    }
  },
  {
    definition: {
      name: "getcase",
      aliases: [],
      description: "Comando de entretenimento e interação (getcase)",
      usage: "!getcase",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Seu perdido é uma ordem! Aguarde um pouco mestre! <3");
    }
  },
  {
    definition: {
      name: "getinfo",
      aliases: [],
      description: "Comando de entretenimento e interação (getinfo)",
      usage: "!getinfo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("CPF gerado com sucesso:");
    }
  },
  {
    definition: {
      name: "getnoticias",
      aliases: [],
      description: "Consulta informações e dados sobre getnoticias",
      usage: "!getnoticias",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Informe um tema para realizar a pesquisa de suas notícias!");
    }
  },
  {
    definition: {
      name: "getquoted",
      aliases: [],
      description: "Comando de entretenimento e interação (getquoted)",
      usage: "!getquoted",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("CPF gerado com sucesso:");
    }
  },
  {
    definition: {
      name: "gimage",
      aliases: [],
      description: "Comando de entretenimento e interação (gimage)",
      usage: "!gimage",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o que deseja após o comando... Por exemplo: * Fogo*");
    }
  },
  {
    definition: {
      name: "girlmascote",
      aliases: [],
      description: "Comando de entretenimento e interação (girlmascote)",
      usage: "!girlmascote",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "gitclone",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (gitclone)",
      usage: "!gitclone",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !gitclone em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (gitclone)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "gizquadro",
      aliases: [],
      description: "Comando de entretenimento e interação (gizquadro)",
      usage: "!gizquadro",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "glitch2",
      aliases: [],
      description: "Comando de entretenimento e interação (glitch2)",
      usage: "!glitch2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "glitch3",
      aliases: [],
      description: "Comando de entretenimento e interação (glitch3)",
      usage: "!glitch3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Bronxys|Aleatory");
    }
  },
  {
    definition: {
      name: "gnews",
      aliases: [],
      description: "Comando de entretenimento e interação (gnews)",
      usage: "!gnews",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("> Google Notícias - Brasil: – • Título: ** • Postagem por: ** | – • URL: **");
    }
  },
  {
    definition: {
      name: "gold",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (gold)",
      usage: "!gold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !gold em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (gold)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "golds",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (golds)",
      usage: "!golds",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !golds em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (golds)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "google",
      aliases: [],
      description: "Consulta informações e dados sobre google",
      usage: "!google",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar o que você deseja pesquisar após o comando.");
    }
  },
  {
    definition: {
      name: "googledrive",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (googledrive)",
      usage: "!googledrive",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !googledrive em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (googledrive)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "googlenews",
      aliases: [],
      description: "Consulta informações e dados sobre googlenews",
      usage: "!googlenews",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("> Google Notícias - Brasil: – • Título: ** • Postagem por: ** | – • URL: **");
    }
  },
  {
    definition: {
      name: "googlesg",
      aliases: [],
      description: "Consulta informações e dados sobre googlesg",
      usage: "!googlesg",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cade o texto?");
    }
  },
  {
    definition: {
      name: "googlesrc",
      aliases: [],
      description: "Consulta informações e dados sobre googlesrc",
      usage: "!googlesrc",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar o que você deseja pesquisar após o comando.");
    }
  },
  {
    definition: {
      name: "gostoso",
      aliases: [],
      description: "Calcula o nível de sensualidade da pessoa",
      usage: "!gostoso",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*GOSTOSO*] @${targetNum} tem *${percent}%*!\nCalcula o nível de sensualidade da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "gpt-3.5",
      aliases: [],
      description: "Comando de entretenimento e interação (gpt-3.5)",
      usage: "!gpt-3.5",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua pergunta, isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "gptvoz",
      aliases: [],
      description: "Comando de entretenimento e interação (gptvoz)",
      usage: "!gptvoz",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Utilize o comando: registrar");
    }
  },
  {
    definition: {
      name: "grafity",
      aliases: [],
      description: "Comando de entretenimento e interação (grafity)",
      usage: "!grafity",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Bronxys|Aleatory");
    }
  },
  {
    definition: {
      name: "grave",
      aliases: [],
      description: "Comando de entretenimento e interação (grave)",
      usage: "!grave",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "grave2",
      aliases: [],
      description: "Comando de entretenimento e interação (grave2)",
      usage: "!grave2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "grupo",
      aliases: [],
      description: "Comando de entretenimento e interação (grupo)",
      usage: "!grupo",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _grupo *--help*_");
    }
  },
  {
    definition: {
      name: "grupos",
      aliases: [],
      description: "Comando de entretenimento e interação (grupos)",
      usage: "!grupos",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Pesquisa realizada: Sobre grupos de WhatsApp");
    }
  },
  {
    definition: {
      name: "gruposwhatsapp",
      aliases: [],
      description: "Comando de entretenimento e interação (gruposwhatsapp)",
      usage: "!gruposwhatsapp",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Enviando lista de grupos..");
    }
  },
  {
    definition: {
      name: "gtaia",
      aliases: [],
      description: "Comando de entretenimento e interação (gtaia)",
      usage: "!gtaia",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "gtts",
      aliases: [],
      description: "Comando de entretenimento e interação (gtts)",
      usage: "!gtts",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cade o texto?, digite algo Exemplo: gtts PT Oi");
    }
  },
  {
    definition: {
      name: "hackneon",
      aliases: [],
      description: "Comando de entretenimento e interação (hackneon)",
      usage: "!hackneon",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "halloween",
      aliases: [],
      description: "Comando de entretenimento e interação (halloween)",
      usage: "!halloween",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "happymod",
      aliases: [],
      description: "Comando de entretenimento e interação (happymod)",
      usage: "!happymod",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("NaN, você esqueceu de digitar após o comando.");
    }
  },
  {
    definition: {
      name: "harryp",
      aliases: [],
      description: "Comando de entretenimento e interação (harryp)",
      usage: "!harryp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "hd",
      aliases: [],
      description: "Comando de entretenimento e interação (hd)",
      usage: "!hd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "hd2",
      aliases: [],
      description: "Comando de entretenimento e interação (hd2)",
      usage: "!hd2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "hd3",
      aliases: [],
      description: "Comando de entretenimento e interação (hd3)",
      usage: "!hd3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "hdr",
      aliases: [],
      description: "Comando de entretenimento e interação (hdr)",
      usage: "!hdr",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "hdr2",
      aliases: [],
      description: "Comando de entretenimento e interação (hdr2)",
      usage: "!hdr2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "hdr3",
      aliases: [],
      description: "Comando de entretenimento e interação (hdr3)",
      usage: "!hdr3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "hitler",
      aliases: [],
      description: "Comando de entretenimento e interação (hitler)",
      usage: "!hitler",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "hkitsunevizu",
      aliases: [],
      description: "Calcula a porcentagem de hkitsunevizu da pessoa",
      usage: "!hkitsunevizu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*HKITSUNEVIZU*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de hkitsunevizu da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "hnekovizu",
      aliases: [],
      description: "Calcula a porcentagem de hnekovizu da pessoa",
      usage: "!hnekovizu",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*HNEKOVIZU*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de hnekovizu da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "holovizu",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (holovizu)",
      usage: "!holovizu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !holovizu em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (holovizu)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "horror",
      aliases: [],
      description: "Comando de entretenimento e interação (horror)",
      usage: "!horror",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "id",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (id)",
      usage: "!id",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !id em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (id)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "iddogrupo",
      aliases: [],
      description: "Comando de entretenimento e interação (iddogrupo)",
      usage: "!iddogrupo",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a pergunta!");
    }
  },
  {
    definition: {
      name: "idgrupo",
      aliases: [],
      description: "Comando de entretenimento e interação (idgrupo)",
      usage: "!idgrupo",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema sistemgold 1 está ativado.");
    }
  },
  {
    definition: {
      name: "ifunnyvideo",
      aliases: [],
      description: "Comando de entretenimento e interação (ifunnyvideo)",
      usage: "!ifunnyvideo",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Informe um tema para realizar a pesquisa de suas notícias!");
    }
  },
  {
    definition: {
      name: "ig",
      aliases: [],
      description: "Comando de entretenimento e interação (ig)",
      usage: "!ig",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o link fdp? Example : Url");
    }
  },
  {
    definition: {
      name: "igaudio",
      aliases: [],
      description: "Comando de entretenimento e interação (igaudio)",
      usage: "!igaudio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link");
    }
  },
  {
    definition: {
      name: "igdl",
      aliases: [],
      description: "Comando de entretenimento e interação (igdl)",
      usage: "!igdl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o link fdp? Example : Url");
    }
  },
  {
    definition: {
      name: "igreels",
      aliases: [],
      description: "Comando de entretenimento e interação (igreels)",
      usage: "!igreels",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o link fdp? Example : Url");
    }
  },
  {
    definition: {
      name: "igsh",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (igsh)",
      usage: "!igsh",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !igsh em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (igsh)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "igstalk",
      aliases: [],
      description: "Comando de entretenimento e interação (igstalk)",
      usage: "!igstalk",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cade o nome do user do insta, meu filho?");
    }
  },
  {
    definition: {
      name: "igstalker",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (igstalker)",
      usage: "!igstalker",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !igstalker em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (igstalker)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "igstory",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (igstory)",
      usage: "!igstory",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !igstory em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (igstory)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "igvideo",
      aliases: [],
      description: "Comando de entretenimento e interação (igvideo)",
      usage: "!igvideo",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o link fdp? Example : Url");
    }
  },
  {
    definition: {
      name: "imdb",
      aliases: [],
      description: "Comando de entretenimento e interação (imdb)",
      usage: "!imdb",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme. • Exemplo: *imdb Ação* – 🔍 Saber mais informações sobre o filme pesquisado");
    }
  },
  {
    definition: {
      name: "imdbinfo",
      aliases: [],
      description: "Comando de entretenimento e interação (imdbinfo)",
      usage: "!imdbinfo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o link do filme que você deseja puxar informações.");
    }
  },
  {
    definition: {
      name: "imgcr",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (imgcr)",
      usage: "!imgcr",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !imgcr em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (imgcr)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "imgpraanime",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (imgpraanime)",
      usage: "!imgpraanime",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "imgpragta",
      aliases: [],
      description: "Comando de entretenimento e interação (imgpragta)",
      usage: "!imgpragta",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "imgpralink2",
      aliases: [],
      description: "Comando de entretenimento e interação (imgpralink2)",
      usage: "!imgpralink2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❯❯AGUARDE...❮❮");
    }
  },
  {
    definition: {
      name: "imgprazombie",
      aliases: [],
      description: "Comando de entretenimento e interação (imgprazombie)",
      usage: "!imgprazombie",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "inativo",
      aliases: [],
      description: "Comando de entretenimento e interação (inativo)",
      usage: "!inativo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: 0 Isso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..");
    }
  },
  {
    definition: {
      name: "inativos",
      aliases: [],
      description: "Comando de entretenimento e interação (inativos)",
      usage: "!inativos",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: 0 Isso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..");
    }
  },
  {
    definition: {
      name: "index-bot",
      aliases: [],
      description: "Comando de entretenimento e interação (index-bot)",
      usage: "!index-bot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O arquivo");
    }
  },
];
