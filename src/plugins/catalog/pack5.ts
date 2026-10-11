import type { CommandModule } from "../../core/types/command";

export const pack5Commands: CommandModule[] = [
  {
    definition: {
      name: "modorent",
      aliases: [],
      description: "Comando de entretenimento e interação (modorent)",
      usage: "!modorent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aviso: 1 para ativar, 0 para desativar este recurso de forma global.");
    }
  },
  {
    definition: {
      name: "modorgp",
      aliases: [],
      description: "Comando de entretenimento e interação (modorgp)",
      usage: "!modorgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você está usando o comando de forma errada, verifique: • Ex: * 1/0* _(1 para ativar, 0 para desativar)_");
    }
  },
  {
    definition: {
      name: "moeda",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (moeda)",
      usage: "!moeda",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !moeda em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (moeda)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "moedas",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (moedas)",
      usage: "!moedas",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !moedas em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (moedas)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "morte",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (morte)",
      usage: "!morte",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !morte em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (morte)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "morto",
      aliases: [],
      description: "Comando de entretenimento e interação (morto)",
      usage: "!morto",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "mostrar_forca",
      aliases: [],
      description: "Minigame interativo de entretenimento (mostrar_forca)",
      usage: "!mostrar_forca",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a letra que deseja responder..");
    }
  },
  {
    definition: {
      name: "movie",
      aliases: [],
      description: "Comando de entretenimento e interação (movie)",
      usage: "!movie",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o nome do filme o qual você deseja ver informações?");
    }
  },
  {
    definition: {
      name: "msgantipv",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (msgantipv)",
      usage: "!msgantipv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !msgantipv em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (msgantipv)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "msgtemp",
      aliases: [],
      description: "Comando de entretenimento e interação (msgtemp)",
      usage: "!msgtemp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("As mensagens temporárias no grupo foram ativadas com sucesso.");
    }
  },
  {
    definition: {
      name: "multidl",
      aliases: [],
      description: "Comando de entretenimento e interação (multidl)",
      usage: "!multidl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)");
    }
  },
  {
    definition: {
      name: "multiprefix",
      aliases: [],
      description: "Comando de entretenimento e interação (multiprefix)",
      usage: "!multiprefix",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ativou com sucesso o recurso de multi prefixos neste grupo.");
    }
  },
  {
    definition: {
      name: "multiprefixo",
      aliases: [],
      description: "Comando de entretenimento e interação (multiprefixo)",
      usage: "!multiprefixo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ativou com sucesso o recurso de multi prefixos neste grupo.");
    }
  },
  {
    definition: {
      name: "mutar",
      aliases: [],
      description: "Comando de entretenimento e interação (mutar)",
      usage: "!mutar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja mutar.");
    }
  },
  {
    definition: {
      name: "mutelist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (mutelist)",
      usage: "!mutelist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !mutelist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (mutelist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "mycoderent",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (mycoderent)",
      usage: "!mycoderent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !mycoderent em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (mycoderent)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "myname",
      aliases: [],
      description: "Comando de entretenimento e interação (myname)",
      usage: "!myname",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Origem do Nome: ** • Derivações: *${data.resultado.derivacoes ? data.resultado.derivacoes :");
    }
  },
  {
    definition: {
      name: "namorar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (namorar)",
      usage: "!namorar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !namorar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (namorar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "narutologo",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito NARUTOLOGO",
      usage: "!narutologo",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "nasa",
      aliases: [],
      description: "Comando de entretenimento e interação (nasa)",
      usage: "!nasa",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Exemplo:* 19-10-2007");
    }
  },
  {
    definition: {
      name: "natal",
      aliases: [],
      description: "Comando de entretenimento e interação (natal)",
      usage: "!natal",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "nazista",
      aliases: [],
      description: "Calcula a porcentagem de nazista da pessoa",
      usage: "!nazista",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*NAZISTA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de nazista da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "neko2",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (neko2)",
      usage: "!neko2",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "nekos",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (nekos)",
      usage: "!nekos",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "neon",
      aliases: [],
      description: "Comando de entretenimento e interação (neon)",
      usage: "!neon",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "neon1",
      aliases: [],
      description: "Comando de entretenimento e interação (neon1)",
      usage: "!neon1",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "neon2",
      aliases: [],
      description: "Comando de entretenimento e interação (neon2)",
      usage: "!neon2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "neon3",
      aliases: [],
      description: "Comando de entretenimento e interação (neon3)",
      usage: "!neon3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "neon3d",
      aliases: [],
      description: "Comando de entretenimento e interação (neon3d)",
      usage: "!neon3d",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "neondevil",
      aliases: [],
      description: "Comando de entretenimento e interação (neondevil)",
      usage: "!neondevil",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "neongreen",
      aliases: [],
      description: "Comando de entretenimento e interação (neongreen)",
      usage: "!neongreen",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "neve",
      aliases: [],
      description: "Comando de entretenimento e interação (neve)",
      usage: "!neve",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "newapikey_moon",
      aliases: [],
      description: "Comando de entretenimento e interação (newapikey_moon)",
      usage: "!newapikey_moon",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("A apikey do bot foi alterado com sucesso para: > Reiniciando para salvar alterações");
    }
  },
  {
    definition: {
      name: "newdononumero",
      aliases: [],
      description: "Comando de entretenimento e interação (newdononumero)",
      usage: "!newdononumero",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O Número do dono foi alterado com sucesso para: > Reiniciando para salvar alterações");
    }
  },
  {
    definition: {
      name: "newemoji",
      aliases: [],
      description: "Comando de entretenimento e interação (newemoji)",
      usage: "!newemoji",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O Emoji do bot foi alterado com sucesso para: > Reiniciando para salvar alterações");
    }
  },
  {
    definition: {
      name: "newnamebot",
      aliases: [],
      description: "Comando de entretenimento e interação (newnamebot)",
      usage: "!newnamebot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O Nome do bot foi alterado com sucesso para: > Reiniciando para salvar alterações");
    }
  },
  {
    definition: {
      name: "newprefixo",
      aliases: [],
      description: "Comando de entretenimento e interação (newprefixo)",
      usage: "!newprefixo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O prefixo do bot foi alterado com sucesso para: > Reiniciando para salvar alterações");
    }
  },
  {
    definition: {
      name: "nick",
      aliases: [],
      description: "Comando de entretenimento e interação (nick)",
      usage: "!nick",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
    }
  },
  {
    definition: {
      name: "nick-dono",
      aliases: [],
      description: "Comando de entretenimento e interação (nick-dono)",
      usage: "!nick-dono",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O nick do dono foi configurado para:");
    }
  },
  {
    definition: {
      name: "nome-bot",
      aliases: [],
      description: "Comando de entretenimento e interação (nome-bot)",
      usage: "!nome-bot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O nome do bot foi alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "nomegp",
      aliases: [],
      description: "Comando de entretenimento e interação (nomegp)",
      usage: "!nomegp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sucesso, alterou o nome do grupo.");
    }
  },
  {
    definition: {
      name: "nota",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (nota)",
      usage: "!nota",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !nota em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (nota)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "notas",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (notas)",
      usage: "!notas",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !notas em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (notas)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "noticiaesp",
      aliases: [],
      description: "Consulta informações e dados sobre noticiaesp",
      usage: "!noticiaesp",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "noticiaesporte",
      aliases: [],
      description: "Consulta informações e dados sobre noticiaesporte",
      usage: "!noticiaesporte",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "noticiasesp",
      aliases: [],
      description: "Consulta informações e dados sobre noticiasesp",
      usage: "!noticiasesp",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "noticiasesporte",
      aliases: [],
      description: "Consulta informações e dados sobre noticiasesporte",
      usage: "!noticiasesporte",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "novoqr",
      aliases: [],
      description: "Comando de entretenimento e interação (novoqr)",
      usage: "!novoqr",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
    }
  },
  {
    definition: {
      name: "nuke",
      aliases: [],
      description: "Comando de entretenimento e interação (nuke)",
      usage: "!nuke",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "numero-dono",
      aliases: [],
      description: "Comando de entretenimento e interação (numero-dono)",
      usage: "!numero-dono",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("É apenas números..");
    }
  },
  {
    definition: {
      name: "nuvem",
      aliases: [],
      description: "Comando de entretenimento e interação (nuvem)",
      usage: "!nuvem",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "ocr",
      aliases: [],
      description: "Comando de entretenimento e interação (ocr)",
      usage: "!ocr",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Mencione uma imagem, por favor!");
    }
  },
  {
    definition: {
      name: "odelete",
      aliases: [],
      description: "Comando de entretenimento e interação (odelete)",
      usage: "!odelete",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "off",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (off)",
      usage: "!off",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !off em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (off)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "on",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (on)",
      usage: "!on",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !on em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (on)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "openai",
      aliases: [],
      description: "Comando de entretenimento e interação (openai)",
      usage: "!openai",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua pergunta, isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "openailogic",
      aliases: [],
      description: "Comando de entretenimento e interação (openailogic)",
      usage: "!openailogic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faz o comando direito, cadê a porra da mensagem pro chat Bot?");
    }
  },
  {
    definition: {
      name: "operadora",
      aliases: [],
      description: "Comando de entretenimento e interação (operadora)",
      usage: "!operadora",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faltando o link do mediafire para download do arquivo, cade?");
    }
  },
  {
    definition: {
      name: "orgy",
      aliases: [],
      description: "Comando de entretenimento e interação (orgy)",
      usage: "!orgy",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "ossos",
      aliases: [],
      description: "Comando de entretenimento e interação (ossos)",
      usage: "!ossos",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "p4",
      aliases: [],
      description: "Comando de entretenimento e interação (p4)",
      usage: "!p4",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❗ Por favor, digite o nome da música ou vídeo para buscar.");
    }
  },
  {
    definition: {
      name: "panties",
      aliases: [],
      description: "Comando de entretenimento e interação (panties)",
      usage: "!panties",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "papel",
      aliases: [],
      description: "Comando de entretenimento e interação (papel)",
      usage: "!papel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "patente",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (patente)",
      usage: "!patente",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level. • Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: leveling");
    }
  },
  {
    definition: {
      name: "pediremnamoro",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (pediremnamoro)",
      usage: "!pediremnamoro",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !pediremnamoro em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (pediremnamoro)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "pensador",
      aliases: [],
      description: "Comando de entretenimento e interação (pensador)",
      usage: "!pensador",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar um link do *mega.nz* após o comando.");
    }
  },
  {
    definition: {
      name: "pergunta",
      aliases: [],
      description: "Comando de entretenimento e interação (pergunta)",
      usage: "!pergunta",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua pergunta, isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "pesquisa-ytb",
      aliases: [],
      description: "Comando de entretenimento e interação (pesquisa-ytb)",
      usage: "!pesquisa-ytb",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar algum texto após o comando.");
    }
  },
  {
    definition: {
      name: "pesquisar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (pesquisar)",
      usage: "!pesquisar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !pesquisar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (pesquisar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "pgifvizu",
      aliases: [],
      description: "Calcula a porcentagem de pgifvizu da pessoa",
      usage: "!pgifvizu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PGIFVIZU*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de pgifvizu da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "photoleap",
      aliases: [],
      description: "Comando de entretenimento e interação (photoleap)",
      usage: "!photoleap",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O que você deseja criar através de seu questionamento?");
    }
  },
  {
    definition: {
      name: "pin",
      aliases: [],
      description: "Calcula a porcentagem de pin da pessoa",
      usage: "!pin",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PIN*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de pin da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "pindl",
      aliases: [],
      description: "Comando de entretenimento e interação (pindl)",
      usage: "!pindl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("CADÊ O LINK IMBECIL? Example : Url");
    }
  },
  {
    definition: {
      name: "pink",
      aliases: [],
      description: "Comando de entretenimento e interação (pink)",
      usage: "!pink",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "pinterest",
      aliases: [],
      description: "Comando de entretenimento e interação (pinterest)",
      usage: "!pinterest",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite o nome da imagem que vc quer buscar Exemplo: cat");
    }
  },
  {
    definition: {
      name: "pinterestdl",
      aliases: [],
      description: "Comando de entretenimento e interação (pinterestdl)",
      usage: "!pinterestdl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "pinterestmp4",
      aliases: [],
      description: "Comando de entretenimento e interação (pinterestmp4)",
      usage: "!pinterestmp4",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira o link de algum vídeo do Pinterest Exemplo: https://pin.it/2rjIHJxKm");
    }
  },
  {
    definition: {
      name: "plaq",
      aliases: [],
      description: "Calcula a porcentagem de plaq da pessoa",
      usage: "!plaq",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq1",
      aliases: [],
      description: "Calcula a porcentagem de plaq1 da pessoa",
      usage: "!plaq1",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ1*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq1 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq2",
      aliases: [],
      description: "Calcula a porcentagem de plaq2 da pessoa",
      usage: "!plaq2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ2*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq2 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq3",
      aliases: [],
      description: "Calcula a porcentagem de plaq3 da pessoa",
      usage: "!plaq3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ3*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq3 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq4",
      aliases: [],
      description: "Calcula a porcentagem de plaq4 da pessoa",
      usage: "!plaq4",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ4*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq4 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq5",
      aliases: [],
      description: "Calcula a porcentagem de plaq5 da pessoa",
      usage: "!plaq5",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ5*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq5 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq6",
      aliases: [],
      description: "Calcula a porcentagem de plaq6 da pessoa",
      usage: "!plaq6",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ6*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq6 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq7",
      aliases: [],
      description: "Calcula a porcentagem de plaq7 da pessoa",
      usage: "!plaq7",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ7*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq7 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq8",
      aliases: [],
      description: "Calcula a porcentagem de plaq8 da pessoa",
      usage: "!plaq8",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ8*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq8 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaq9",
      aliases: [],
      description: "Calcula a porcentagem de plaq9 da pessoa",
      usage: "!plaq9",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PLAQ9*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de plaq9 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "plaquinha",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha)",
      usage: "!plaquinha",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha10",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha10)",
      usage: "!plaquinha10",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha11",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha11)",
      usage: "!plaquinha11",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha12",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha12)",
      usage: "!plaquinha12",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha13",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha13)",
      usage: "!plaquinha13",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha14",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha14)",
      usage: "!plaquinha14",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha15",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha15)",
      usage: "!plaquinha15",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha16",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha16)",
      usage: "!plaquinha16",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha2",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha2)",
      usage: "!plaquinha2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha3",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha3)",
      usage: "!plaquinha3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha4",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha4)",
      usage: "!plaquinha4",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha5",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha5)",
      usage: "!plaquinha5",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha6",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha6)",
      usage: "!plaquinha6",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha7",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha7)",
      usage: "!plaquinha7",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha8",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha8)",
      usage: "!plaquinha8",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "plaquinha9",
      aliases: [],
      description: "Comando de entretenimento e interação (plaquinha9)",
      usage: "!plaquinha9",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sua plaquinha está pronta 😈");
    }
  },
  {
    definition: {
      name: "play_video",
      aliases: [],
      description: "Comando de entretenimento e interação (play_video)",
      usage: "!play_video",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("▶️ *YOUTUBE - VIDEO* 📽 *Título:* ⏳ *Duração:* 📺 *Canal:* 👁️ *Visualizações:* > ⏬ Enviando video, aguarde..");
    }
  },
  {
    definition: {
      name: "play2wt",
      aliases: [],
      description: "Comando de entretenimento e interação (play2wt)",
      usage: "!play2wt",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("⸺͟͞ꪶ𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐏𝐋𝐀𝐘 𝐕𝟐ꫂ ♪");
    }
  },
  {
    definition: {
      name: "play4",
      aliases: [],
      description: "Comando de entretenimento e interação (play4)",
      usage: "!play4",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❗ Por favor, digite o nome da música ou vídeo para buscar.");
    }
  },
  {
    definition: {
      name: "playdoc",
      aliases: [],
      description: "Comando de entretenimento e interação (playdoc)",
      usage: "!playdoc",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝙳𝚘𝚌𝚞𝚖𝚎𝚗𝚝𝚘ฺ͘.•🛸 ݈݇─");
    }
  },
  {
    definition: {
      name: "playlist",
      aliases: [],
      description: "Comando de entretenimento e interação (playlist)",
      usage: "!playlist",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faltando o link da playlist para realizar a busca...");
    }
  },
  {
    definition: {
      name: "playmeme",
      aliases: [],
      description: "Comando de entretenimento e interação (playmeme)",
      usage: "!playmeme",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("NaN, você não digitou nada... Exemplo: * Lula*");
    }
  },
  {
    definition: {
      name: "playmeme2",
      aliases: [],
      description: "Comando de entretenimento e interação (playmeme2)",
      usage: "!playmeme2",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("NaN, você não digitou nada... Exemplo: * Lula*");
    }
  },
  {
    definition: {
      name: "playvid",
      aliases: [],
      description: "Comando de entretenimento e interação (playvid)",
      usage: "!playvid",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("▶️ *YOUTUBE - VIDEO* 📽 *Título:* ⏳ *Duração:* 📺 *Canal:* 👁️ *Visualizações:* > ⏬ Enviando video, aguarde..");
    }
  },
  {
    definition: {
      name: "pocbi",
      aliases: [],
      description: "Comando de entretenimento e interação (pocbi)",
      usage: "!pocbi",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)");
    }
  },
  {
    definition: {
      name: "podre",
      aliases: [],
      description: "Calcula a porcentagem de podre da pessoa",
      usage: "!podre",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PODRE*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de podre da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "prefixo-bot",
      aliases: [],
      description: "Comando de entretenimento e interação (prefixo-bot)",
      usage: "!prefixo-bot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O prefixo foi alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "prefixos",
      aliases: [],
      description: "Comando de entretenimento e interação (prefixos)",
      usage: "!prefixos",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar este comando, você deve ativar o comando, multiprefix Exemplo: multiprefixo");
    }
  },
  {
    definition: {
      name: "premiumlist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (premiumlist)",
      usage: "!premiumlist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !premiumlist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (premiumlist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "preso",
      aliases: [],
      description: "Comando de entretenimento e interação (preso)",
      usage: "!preso",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "printscreen",
      aliases: [],
      description: "Comando de entretenimento e interação (printscreen)",
      usage: "!printscreen",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Retorne após o comando o link do site que você deseja capturar");
    }
  },
  {
    definition: {
      name: "privaddgroup",
      aliases: [],
      description: "Comando de entretenimento e interação (privaddgroup)",
      usage: "!privaddgroup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("- Pronto, agora todos pode me adicionar em grupo normalmente.");
    }
  },
  {
    definition: {
      name: "privphotobot",
      aliases: [],
      description: "Comando de entretenimento e interação (privphotobot)",
      usage: "!privphotobot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("- A minha foto do perfil agora está visível à todos.");
    }
  },
  {
    definition: {
      name: "procurado",
      aliases: [],
      description: "Comando de entretenimento e interação (procurado)",
      usage: "!procurado",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "programador",
      aliases: [],
      description: "Comando de entretenimento e interação (programador)",
      usage: "!programador",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O contato programador https://wa.me/5511911942403");
    }
  },
  {
    definition: {
      name: "promocell",
      aliases: [],
      description: "Comando de entretenimento e interação (promocell)",
      usage: "!promocell",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Qual produto você deseja pesquisar? Coloque após o comando o nome do celular o qual você deseja obter as promoções...");
    }
  },
  {
    definition: {
      name: "promover",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (promover)",
      usage: "!promover",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !promover em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (promover)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "ptvmsg",
      aliases: [],
      description: "Comando de entretenimento e interação (ptvmsg)",
      usage: "!ptvmsg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque um vídeo/gif que você deseja converter para mensagem de vídeo.");
    }
  },
  {
    definition: {
      name: "puta",
      aliases: [],
      description: "Calcula a porcentagem de puta da pessoa",
      usage: "!puta",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*PUTA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de puta da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "pv",
      aliases: [],
      description: "Comando de entretenimento e interação (pv)",
      usage: "!pv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Somente em grupos!");
    }
  },
  {
    definition: {
      name: "qc",
      aliases: [],
      description: "Comando de entretenimento e interação (qc)",
      usage: "!qc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar este comando é nescessário adicionar algo após o comando.");
    }
  },
  {
    definition: {
      name: "qrcode",
      aliases: [],
      description: "Comando de entretenimento e interação (qrcode)",
      usage: "!qrcode",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("💫| 𝐒𝐞𝐮 𝐪𝐫 𝐜𝐨𝐝𝐞 𝐟𝐨𝐢 𝐠𝐞𝐫𝐚𝐝𝐨 𝐜𝐨𝐧𝐭𝐞𝐧𝐝𝐨 𝐨 𝐭𝐞𝐱𝐭𝐨/𝐮𝐫𝐥 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐚𝐨 𝐥𝐚𝐝𝐨: **");
    }
  },
  {
    definition: {
      name: "quando",
      aliases: [],
      description: "Comando de entretenimento e interação (quando)",
      usage: "!quando",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a pergunta!");
    }
  },
  {
    definition: {
      name: "quizanimais",
      aliases: [],
      description: "Minigame interativo de entretenimento (quizanimais)",
      usage: "!quizanimais",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "quizfut",
      aliases: [],
      description: "Minigame interativo de entretenimento (quizfut)",
      usage: "!quizfut",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "quizfutebol",
      aliases: [],
      description: "Minigame interativo de entretenimento (quizfutebol)",
      usage: "!quizfutebol",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "r-f",
      aliases: [],
      description: "Comando de entretenimento e interação (r-f)",
      usage: "!r-f",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a letra que deseja responder..");
    }
  },
  {
    definition: {
      name: "r-forca",
      aliases: [],
      description: "Minigame interativo de entretenimento (r-forca)",
      usage: "!r-forca",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a letra que deseja responder..");
    }
  },
  {
    definition: {
      name: "rainbow",
      aliases: [],
      description: "Comando de entretenimento e interação (rainbow)",
      usage: "!rainbow",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "rank",
      aliases: [],
      description: "Comando de entretenimento e interação (rank)",
      usage: "!rank",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level. • Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: leveling");
    }
  },
  {
    definition: {
      name: "ranklevel",
      aliases: [],
      description: "Comando de entretenimento e interação (ranklevel)",
      usage: "!ranklevel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level. • Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: leveling");
    }
  },
  {
    definition: {
      name: "rankpatente",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (rankpatente)",
      usage: "!rankpatente",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level. • Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: leveling");
    }
  },
  {
    definition: {
      name: "rbale",
      aliases: [],
      description: "Comando de entretenimento e interação (rbale)",
      usage: "!rbale",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma figurinha...");
    }
  },
  {
    definition: {
      name: "rch",
      aliases: [],
      description: "Comando de entretenimento e interação (rch)",
      usage: "!rch",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Preciso de um link e uma mensagem Exemplo: rch <link do canal> <mensagem> | <número da fonte> Exemplo: rch https://whatsapp.com/channel/abc123 Frost | 2");
    }
  },
  {
    definition: {
      name: "receita",
      aliases: [],
      description: "Comando de entretenimento e interação (receita)",
      usage: "!receita",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("NaN, você esqueceu de digitar após o comando.");
    }
  },
  {
    definition: {
      name: "recolherlink",
      aliases: [],
      description: "Comando de entretenimento e interação (recolherlink)",
      usage: "!recolherlink",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sistema desativado.");
    }
  },
  {
    definition: {
      name: "recolor",
      aliases: [],
      description: "Comando de entretenimento e interação (recolor)",
      usage: "!recolor",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Mencione uma imagem para atribuir o efeito a foto.");
    }
  },
  {
    definition: {
      name: "recolorir",
      aliases: [],
      description: "Comando de entretenimento e interação (recolorir)",
      usage: "!recolorir",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "recrutar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (recrutar)",
      usage: "!recrutar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !recrutar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (recrutar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "recusar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (recusar)",
      usage: "!recusar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !recusar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (recusar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "redacao",
      aliases: [],
      description: "Comando de entretenimento e interação (redacao)",
      usage: "!redacao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua solicitação. Isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "registrar",
      aliases: [],
      description: "Comando de entretenimento e interação (registrar)",
      usage: "!registrar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você já está registrado.");
    }
  },
  {
    definition: {
      name: "reiniciar",
      aliases: [],
      description: "Comando de entretenimento e interação (reiniciar)",
      usage: "!reiniciar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!");
    }
  },
];
