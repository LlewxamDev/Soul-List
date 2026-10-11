import type { CommandModule } from "../../core/types/command";

export const pack2Commands: CommandModule[] = [
  {
    definition: {
      name: "calculadora",
      aliases: [],
      description: "Consulta informações e dados sobre calculadora",
      usage: "!calculadora",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sucesso, alterou o nome do grupo.");
    }
  },
  {
    definition: {
      name: "calcular",
      aliases: [],
      description: "Consulta informações e dados sobre calcular",
      usage: "!calcular",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sucesso, alterou o nome do grupo.");
    }
  },
  {
    definition: {
      name: "cancel_voting",
      aliases: [],
      description: "Comando de entretenimento e interação (cancel_voting)",
      usage: "!cancel_voting",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Apenas o administrador do grupo pode realizar a ação..");
    }
  },
  {
    definition: {
      name: "cancelarpedido",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (cancelarpedido)",
      usage: "!cancelarpedido",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !cancelarpedido em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (cancelarpedido)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "capcut",
      aliases: [],
      description: "Comando de entretenimento e interação (capcut)",
      usage: "!capcut",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o link? Example : Url");
    }
  },
  {
    definition: {
      name: "caracoroa",
      aliases: [],
      description: "Comando de entretenimento e interação (caracoroa)",
      usage: "!caracoroa",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("usuário(a), novo(a) por aqui? Use *rgcity* para se registrar na Kokushibot City.");
    }
  },
  {
    definition: {
      name: "carbon",
      aliases: [],
      description: "Comando de entretenimento e interação (carbon)",
      usage: "!carbon",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "carioca",
      aliases: [],
      description: "Calcula a porcentagem de carioca da pessoa",
      usage: "!carioca",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*CARIOCA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de carioca da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "carteira",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (carteira)",
      usage: "!carteira",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !carteira em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (carteira)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "cases",
      aliases: [],
      description: "Comando de entretenimento e interação (cases)",
      usage: "!cases",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Nenhuma case encontrada.");
    }
  },
  {
    definition: {
      name: "cattxt",
      aliases: [],
      description: "Comando de entretenimento e interação (cattxt)",
      usage: "!cattxt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "cekidff",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (cekidff)",
      usage: "!cekidff",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !cekidff em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (cekidff)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "celular",
      aliases: [],
      description: "Comando de entretenimento e interação (celular)",
      usage: "!celular",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: galaxy a9 2018");
    }
  },
  {
    definition: {
      name: "cemiterio",
      aliases: [],
      description: "Comando de entretenimento e interação (cemiterio)",
      usage: "!cemiterio",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "chance",
      aliases: [],
      description: "Calcula a porcentagem de chance da pessoa",
      usage: "!chance",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*CHANCE*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de chance da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "changegroup",
      aliases: [],
      description: "Comando de entretenimento e interação (changegroup)",
      usage: "!changegroup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm!");
    }
  },
  {
    definition: {
      name: "chatgpt",
      aliases: [],
      description: "Comando de entretenimento e interação (chatgpt)",
      usage: "!chatgpt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua pergunta, isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "chatgpt-3.5",
      aliases: [],
      description: "Comando de entretenimento e interação (chatgpt-3.5)",
      usage: "!chatgpt-3.5",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua pergunta, isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "chatgptlogic",
      aliases: [],
      description: "Comando de entretenimento e interação (chatgptlogic)",
      usage: "!chatgptlogic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faz o comando direito, cadê a porra da mensagem pro chat Bot?");
    }
  },
  {
    definition: {
      name: "checkativo",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (checkativo)",
      usage: "!checkativo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !checkativo em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (checkativo)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "chufuyu",
      aliases: [],
      description: "Calcula a porcentagem de chufuyu da pessoa",
      usage: "!chufuyu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*CHUFUYU*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de chufuyu da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "chutar",
      aliases: [],
      description: "Dá um chute bem dado na pessoa marcada",
      usage: "!chutar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !chutar em @${targetNum}!\nDá um chute bem dado na pessoa marcada`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "chute",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (chute)",
      usage: "!chute",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !chute em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (chute)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "circulo",
      aliases: [],
      description: "Comando de entretenimento e interação (circulo)",
      usage: "!circulo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem no WhatsApp...");
    }
  },
  {
    definition: {
      name: "clonar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (clonar)",
      usage: "!clonar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !clonar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (clonar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "cmdpremium",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (cmdpremium)",
      usage: "!cmdpremium",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !cmdpremium em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (cmdpremium)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "cmdviplist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (cmdviplist)",
      usage: "!cmdviplist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !cmdviplist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (cmdviplist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "codelistrent",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (codelistrent)",
      usage: "!codelistrent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !codelistrent em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (codelistrent)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "coffecup",
      aliases: [],
      description: "Comando de entretenimento e interação (coffecup)",
      usage: "!coffecup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "coffecup2",
      aliases: [],
      description: "Comando de entretenimento e interação (coffecup2)",
      usage: "!coffecup2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "coins",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (coins)",
      usage: "!coins",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !coins em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (coins)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "colaq",
      aliases: [],
      description: "Comando de entretenimento e interação (colaq)",
      usage: "!colaq",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "como_votar",
      aliases: [],
      description: "Comando de entretenimento e interação (como_votar)",
      usage: "!como_votar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para votar no primeiro usario: Use o comando: votar_duelo / Para votar no segundo usuario: Use o comando: votar_duelo /");
    }
  },
  {
    definition: {
      name: "config_gp",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (config_gp)",
      usage: "!config_gp",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm!");
    }
  },
  {
    definition: {
      name: "config-group",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (config-group)",
      usage: "!config-group",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm!");
    }
  },
  {
    definition: {
      name: "console",
      aliases: [],
      description: "Comando de entretenimento e interação (console)",
      usage: "!console",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("- O comando de tirar o console foi ativado _- COM SUCESSO - _ Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar ba");
    }
  },
  {
    definition: {
      name: "contardias",
      aliases: [],
      description: "Comando de entretenimento e interação (contardias)",
      usage: "!contardias",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*");
    }
  },
  {
    definition: {
      name: "convite",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (convite)",
      usage: "!convite",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !convite em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (convite)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "correio",
      aliases: [],
      description: "Comando de entretenimento e interação (correio)",
      usage: "!correio",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Cadê o número do destinatário?*");
    }
  },
  {
    definition: {
      name: "corretor",
      aliases: [],
      description: "Comando de entretenimento e interação (corretor)",
      usage: "!corretor",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Verificando os erros ortográficos em seu texto ou palavra... *Aguarde!*");
    }
  },
  {
    definition: {
      name: "cortesia24",
      aliases: [],
      description: "Comando de entretenimento e interação (cortesia24)",
      usage: "!cortesia24",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Grupo já registrado...");
    }
  },
  {
    definition: {
      name: "cotacao",
      aliases: [],
      description: "Comando de entretenimento e interação (cotacao)",
      usage: "!cotacao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("A moeda está inexistente em meu banco de dados! *Disponíveis:* dolar, euro, bitcoin, libra, ethereum *Observação:* Use letras minúsculas para não ocorrer erros!");
    }
  },
  {
    definition: {
      name: "countdays",
      aliases: [],
      description: "Comando de entretenimento e interação (countdays)",
      usage: "!countdays",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*");
    }
  },
  {
    definition: {
      name: "cria",
      aliases: [],
      description: "Comando de entretenimento e interação (cria)",
      usage: "!cria",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cade o texto ?");
    }
  },
  {
    definition: {
      name: "criador",
      aliases: [],
      description: "Comando de entretenimento e interação (criador)",
      usage: "!criador",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O contato dele caso você use imune: https://wa.me/5511911942403");
    }
  },
  {
    definition: {
      name: "criartab",
      aliases: [],
      description: "Comando de entretenimento e interação (criartab)",
      usage: "!criartab",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só adm ou dono pode utilizar este comando.");
    }
  },
  {
    definition: {
      name: "criartabela",
      aliases: [],
      description: "Comando de entretenimento e interação (criartabela)",
      usage: "!criartabela",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só adm ou dono pode utilizar este comando.");
    }
  },
  {
    definition: {
      name: "criartbl",
      aliases: [],
      description: "Comando de entretenimento e interação (criartbl)",
      usage: "!criartbl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só adm ou dono pode utilizar este comando.");
    }
  },
  {
    definition: {
      name: "crimg",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (crimg)",
      usage: "!crimg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !crimg em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (crimg)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "cuckold",
      aliases: [],
      description: "Comando de entretenimento e interação (cuckold)",
      usage: "!cuckold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "cum",
      aliases: [],
      description: "Comando de entretenimento e interação (cum)",
      usage: "!cum",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "cup",
      aliases: [],
      description: "Comando de entretenimento e interação (cup)",
      usage: "!cup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "cuttly",
      aliases: [],
      description: "Comando de entretenimento e interação (cuttly)",
      usage: "!cuttly",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❌️ *Forma incorreta, use está como exemplo:* https://instagram.com/annabot.wpp");
    }
  },
  {
    definition: {
      name: "d",
      aliases: [],
      description: "Comando de entretenimento e interação (d)",
      usage: "!d",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.");
    }
  },
  {
    definition: {
      name: "d_",
      aliases: [],
      description: "Comando de entretenimento e interação (d_)",
      usage: "!d_",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Somente em grupos!");
    }
  },
  {
    definition: {
      name: "dadoapostado",
      aliases: [],
      description: "Minigame interativo de entretenimento (dadoapostado)",
      usage: "!dadoapostado",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "dados_koku",
      aliases: [],
      description: "Minigame interativo de entretenimento (dados_koku)",
      usage: "!dados_koku",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("ID do usuário não encontrado ou inexistente...");
    }
  },
  {
    definition: {
      name: "dddlist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (dddlist)",
      usage: "!dddlist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !dddlist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (dddlist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "ddilist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (ddilist)",
      usage: "!ddilist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !ddilist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (ddilist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "de",
      aliases: [],
      description: "Comando de entretenimento e interação (de)",
      usage: "!de",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: astro");
    }
  },
  {
    definition: {
      name: "death",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (death)",
      usage: "!death",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !death em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (death)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "dehaze",
      aliases: [],
      description: "Comando de entretenimento e interação (dehaze)",
      usage: "!dehaze",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Mencione uma imagem para atribuir o efeito a foto.");
    }
  },
  {
    definition: {
      name: "del",
      aliases: [],
      description: "Comando de entretenimento e interação (del)",
      usage: "!del",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.");
    }
  },
  {
    definition: {
      name: "del_infocmd",
      aliases: [],
      description: "Comando de entretenimento e interação (del_infocmd)",
      usage: "!del_infocmd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("A informação sobre o comando foi removida com sucesso...");
    }
  },
  {
    definition: {
      name: "delautoban",
      aliases: [],
      description: "Comando de entretenimento e interação (delautoban)",
      usage: "!delautoban",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..");
    }
  },
  {
    definition: {
      name: "delautorm",
      aliases: [],
      description: "Comando de entretenimento e interação (delautorm)",
      usage: "!delautorm",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..");
    }
  },
  {
    definition: {
      name: "delcmdprem",
      aliases: [],
      description: "Comando de entretenimento e interação (delcmdprem)",
      usage: "!delcmdprem",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco? Não tem como deletar o mesmo comando.");
    }
  },
  {
    definition: {
      name: "delcmdvip",
      aliases: [],
      description: "Comando de entretenimento e interação (delcmdvip)",
      usage: "!delcmdvip",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco? Não tem como deletar o mesmo comando.");
    }
  },
  {
    definition: {
      name: "delcodegp",
      aliases: [],
      description: "Comando de entretenimento e interação (delcodegp)",
      usage: "!delcodegp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não há keys registradas");
    }
  },
  {
    definition: {
      name: "delcoderent",
      aliases: [],
      description: "Comando de entretenimento e interação (delcoderent)",
      usage: "!delcoderent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não há chaves registradas.");
    }
  },
  {
    definition: {
      name: "deletar",
      aliases: [],
      description: "Comando de entretenimento e interação (deletar)",
      usage: "!deletar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.");
    }
  },
  {
    definition: {
      name: "delete",
      aliases: [],
      description: "Comando de entretenimento e interação (delete)",
      usage: "!delete",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.");
    }
  },
  {
    definition: {
      name: "deletechat",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (deletechat)",
      usage: "!deletechat",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !deletechat em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (deletechat)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "deletem",
      aliases: [],
      description: "Comando de entretenimento e interação (deletem)",
      usage: "!deletem",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "delgf",
      aliases: [],
      description: "Comando de entretenimento e interação (delgf)",
      usage: "!delgf",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite o código que deseja remover do RPG");
    }
  },
  {
    definition: {
      name: "delpalavra",
      aliases: [],
      description: "Comando de entretenimento e interação (delpalavra)",
      usage: "!delpalavra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Anti palavrão desativado!");
    }
  },
  {
    definition: {
      name: "delpix",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (delpix)",
      usage: "!delpix",
      category: "rpg" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !delpix em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (delpix)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "delpremium",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (delpremium)",
      usage: "!delpremium",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !delpremium em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (delpremium)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "delptmbcity",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (delptmbcity)",
      usage: "!delptmbcity",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !delptmbcity em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (delptmbcity)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "delremover",
      aliases: [],
      description: "Comando de entretenimento e interação (delremover)",
      usage: "!delremover",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..");
    }
  },
  {
    definition: {
      name: "delrent",
      aliases: [],
      description: "Comando de entretenimento e interação (delrent)",
      usage: "!delrent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("ID inexistente");
    }
  },
  {
    definition: {
      name: "delsc",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (delsc)",
      usage: "!delsc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !delsc em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (delsc)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "delvip",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (delvip)",
      usage: "!delvip",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !delvip em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (delvip)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "demonfire",
      aliases: [],
      description: "Comando de entretenimento e interação (demonfire)",
      usage: "!demonfire",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "demongreen",
      aliases: [],
      description: "Comando de entretenimento e interação (demongreen)",
      usage: "!demongreen",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "descgp",
      aliases: [],
      description: "Comando de entretenimento e interação (descgp)",
      usage: "!descgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sucesso, alterou a descrição do grupo");
    }
  },
  {
    definition: {
      name: "descriçãogp",
      aliases: [],
      description: "Comando de entretenimento e interação (descriçãogp)",
      usage: "!descriçãogp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sucesso, alterou a descrição do grupo");
    }
  },
  {
    definition: {
      name: "desmutar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (desmutar)",
      usage: "!desmutar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !desmutar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (desmutar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "desmute",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (desmute)",
      usage: "!desmute",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !desmute em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (desmute)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "diff",
      aliases: [],
      description: "Comando de entretenimento e interação (diff)",
      usage: "!diff",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faz o comando direito, cadê a porra da mensagem pro chat Bot?");
    }
  },
  {
    definition: {
      name: "dinextenso",
      aliases: [],
      description: "Comando de entretenimento e interação (dinextenso)",
      usage: "!dinextenso",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso. Por exemplo: *dinextenso 500.00 ou 756.50*, tudo que você colocar os valores");
    }
  },
  {
    definition: {
      name: "dl",
      aliases: [],
      description: "Comando de entretenimento e interação (dl)",
      usage: "!dl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Manda o link de qualquer um, seja o tiktok, youtube, ig, twiter, facebook, likee, snackvideo, dll exemplo : https://vt.tiktok.com/ZSYS43UoK/");
    }
  },
  {
    definition: {
      name: "doc",
      aliases: [],
      description: "Comando de entretenimento e interação (doc)",
      usage: "!doc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("exemplo500apk - Os tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png");
    }
  },
  {
    definition: {
      name: "docfake",
      aliases: [],
      description: "Comando de entretenimento e interação (docfake)",
      usage: "!docfake",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("exemplo500apk - Os tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png");
    }
  },
  {
    definition: {
      name: "dogolpe",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (dogolpe)",
      usage: "!dogolpe",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !dogolpe em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (dogolpe)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "dono1",
      aliases: [],
      description: "Comando de entretenimento e interação (dono1)",
      usage: "!dono1",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um segundo dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono10",
      aliases: [],
      description: "Comando de entretenimento e interação (dono10)",
      usage: "!dono10",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um 10° (décimo) dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono2",
      aliases: [],
      description: "Comando de entretenimento e interação (dono2)",
      usage: "!dono2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um segundo dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono3",
      aliases: [],
      description: "Comando de entretenimento e interação (dono3)",
      usage: "!dono3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um terceiro dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono4",
      aliases: [],
      description: "Comando de entretenimento e interação (dono4)",
      usage: "!dono4",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um quarto dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono5",
      aliases: [],
      description: "Comando de entretenimento e interação (dono5)",
      usage: "!dono5",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um quinto dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono6",
      aliases: [],
      description: "Comando de entretenimento e interação (dono6)",
      usage: "!dono6",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um quinto dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono7",
      aliases: [],
      description: "Comando de entretenimento e interação (dono7)",
      usage: "!dono7",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um 7° (sétimo) dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono8",
      aliases: [],
      description: "Comando de entretenimento e interação (dono8)",
      usage: "!dono8",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um 8° (oitavo) dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "dono9",
      aliases: [],
      description: "Comando de entretenimento e interação (dono9)",
      usage: "!dono9",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um 9° (nono) dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "donos",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (donos)",
      usage: "!donos",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !donos em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (donos)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "download-link",
      aliases: [],
      description: "Comando de entretenimento e interação (download-link)",
      usage: "!download-link",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Erro, visualize se este link é válido...");
    }
  },
  {
    definition: {
      name: "dragonred",
      aliases: [],
      description: "Calcula a porcentagem de dragonred da pessoa",
      usage: "!dragonred",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*DRAGONRED*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de dragonred da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "duelo",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (duelo)",
      usage: "!duelo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !duelo em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (duelo)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "dupla",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (dupla)",
      usage: "!dupla",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !dupla em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (dupla)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "efeitoneon",
      aliases: [],
      description: "Comando de entretenimento e interação (efeitoneon)",
      usage: "!efeitoneon",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "emoji",
      aliases: [],
      description: "Comando de entretenimento e interação (emoji)",
      usage: "!emoji",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você está usando o comando de forma errada, use: * [emj]/[pltf]* — • *Plataformas disponíveis:* whatsapp, facebook, google, samsung, twitter, apple, microsoft, mesengger, joypixels");
    }
  },
  {
    definition: {
      name: "emoji-bot",
      aliases: [],
      description: "Comando de entretenimento e interação (emoji-bot)",
      usage: "!emoji-bot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O emoji foi alterado para com sucesso..");
    }
  },
  {
    definition: {
      name: "emoji-mix",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (emoji-mix)",
      usage: "!emoji-mix",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !emoji-mix em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (emoji-mix)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "emojimix",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (emojimix)",
      usage: "!emojimix",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !emojimix em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (emojimix)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "encurtalink",
      aliases: [],
      description: "Comando de entretenimento e interação (encurtalink)",
      usage: "!encurtalink",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❌️ *Forma incorreta, use está como exemplo:* https://instagram.com/annabot.wpp");
    }
  },
  {
    definition: {
      name: "encurtarlink2",
      aliases: [],
      description: "Comando de entretenimento e interação (encurtarlink2)",
      usage: "!encurtarlink2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❌️ *Forma incorreta, use está como exemplo:* https://instagram.com/annabot.wpp");
    }
  },
  {
    definition: {
      name: "encurtarlink3",
      aliases: [],
      description: "Comando de entretenimento e interação (encurtarlink3)",
      usage: "!encurtarlink3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❌️ *Forma incorreta, use está como exemplo:* https://instagram.com/annabot.wpp");
    }
  },
  {
    definition: {
      name: "endads",
      aliases: [],
      description: "Comando de entretenimento e interação (endads)",
      usage: "!endads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❕ *ADs System desativado com sucesso* 🗯");
    }
  },
  {
    definition: {
      name: "enhance",
      aliases: [],
      description: "Comando de entretenimento e interação (enhance)",
      usage: "!enhance",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Mencione uma imagem para atribuir o efeito a foto.");
    }
  },
  {
    definition: {
      name: "enigma",
      aliases: [],
      description: "Comando de entretenimento e interação (enigma)",
      usage: "!enigma",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Somente adms!");
    }
  },
  {
    definition: {
      name: "entardecer",
      aliases: [],
      description: "Calcula a porcentagem de entardecer da pessoa",
      usage: "!entardecer",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*ENTARDECER*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de entardecer da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "entrar",
      aliases: [],
      description: "Comando de entretenimento e interação (entrar)",
      usage: "!entrar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira um link de convite ao lado do comando.");
    }
  },
  {
    definition: {
      name: "envmsg",
      aliases: [],
      description: "Comando de entretenimento e interação (envmsg)",
      usage: "!envmsg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Agora contem um segundo dono(a) alterado com sucesso para:");
    }
  },
  {
    definition: {
      name: "envpv",
      aliases: [],
      description: "Comando de entretenimento e interação (envpv)",
      usage: "!envpv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Somente em grupos!");
    }
  },
  {
    definition: {
      name: "ephemeral",
      aliases: [],
      description: "Comando de entretenimento e interação (ephemeral)",
      usage: "!ephemeral",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("As mensagens temporárias no grupo foram ativadas com sucesso.");
    }
  },
  {
    definition: {
      name: "equipemascote",
      aliases: [],
      description: "Comando de entretenimento e interação (equipemascote)",
      usage: "!equipemascote",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "ero",
      aliases: [],
      description: "Comando de entretenimento e interação (ero)",
      usage: "!ero",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "espnoticia",
      aliases: [],
      description: "Consulta informações e dados sobre espnoticia",
      usage: "!espnoticia",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "espnoticias",
      aliases: [],
      description: "Consulta informações e dados sobre espnoticias",
      usage: "!espnoticias",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "esporte_news",
      aliases: [],
      description: "Comando de entretenimento e interação (esporte_news)",
      usage: "!esporte_news",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _ *--help*_");
    }
  },
  {
    definition: {
      name: "esporte_noticia",
      aliases: [],
      description: "Consulta informações e dados sobre esporte_noticia",
      usage: "!esporte_noticia",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "esporte_noticias",
      aliases: [],
      description: "Consulta informações e dados sobre esporte_noticias",
      usage: "!esporte_noticias",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "esporte-noticia",
      aliases: [],
      description: "Consulta informações e dados sobre esporte-noticia",
      usage: "!esporte-noticia",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "esporte-noticias",
      aliases: [],
      description: "Consulta informações e dados sobre esporte-noticias",
      usage: "!esporte-noticias",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "esportenews",
      aliases: [],
      description: "Comando de entretenimento e interação (esportenews)",
      usage: "!esportenews",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _ *--help*_");
    }
  },
  {
    definition: {
      name: "esportenoticia",
      aliases: [],
      description: "Consulta informações e dados sobre esportenoticia",
      usage: "!esportenoticia",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aguarde, realizando ação..");
    }
  },
  {
    definition: {
      name: "esportenoticias",
      aliases: [],
      description: "Consulta informações e dados sobre esportenoticias",
      usage: "!esportenoticias",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _ *--help*_");
    }
  },
  {
    definition: {
      name: "esquilo",
      aliases: [],
      description: "Comando de entretenimento e interação (esquilo)",
      usage: "!esquilo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "estatisticas",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (estatisticas)",
      usage: "!estatisticas",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !estatisticas em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (estatisticas)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "estilizar",
      aliases: [],
      description: "Comando de entretenimento e interação (estilizar)",
      usage: "!estilizar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
    }
  },
  {
    definition: {
      name: "estourar",
      aliases: [],
      description: "Comando de entretenimento e interação (estourar)",
      usage: "!estourar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "excluir",
      aliases: [],
      description: "Comando de entretenimento e interação (excluir)",
      usage: "!excluir",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, forneça um número de usuário válido.");
    }
  },
  {
    definition: {
      name: "exec",
      aliases: [],
      description: "Comando de entretenimento e interação (exec)",
      usage: "!exec",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🏃🏻‍♀️");
    }
  },
  {
    definition: {
      name: "face_audio",
      aliases: [],
      description: "Comando de entretenimento e interação (face_audio)",
      usage: "!face_audio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link do Facebook");
    }
  },
  {
    definition: {
      name: "face_video",
      aliases: [],
      description: "Comando de entretenimento e interação (face_video)",
      usage: "!face_video",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link do Facebook");
    }
  },
  {
    definition: {
      name: "facebook",
      aliases: [],
      description: "Comando de entretenimento e interação (facebook)",
      usage: "!facebook",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Limit kamu tidak cukup! Limit tersisa: Limit yang dibutuhkan:");
    }
  },
  {
    definition: {
      name: "fast",
      aliases: [],
      description: "Comando de entretenimento e interação (fast)",
      usage: "!fast",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "fazernick",
      aliases: [],
      description: "Comando de entretenimento e interação (fazernick)",
      usage: "!fazernick",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
    }
  },
  {
    definition: {
      name: "fazertm",
      aliases: [],
      description: "Comando de entretenimento e interação (fazertm)",
      usage: "!fazertm",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não contém nenhum grupo registrado para realizar transmissão");
    }
  },
];
