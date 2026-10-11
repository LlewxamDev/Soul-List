import type { CommandModule } from "../../core/types/command";

export const pack1Commands: CommandModule[] = [
  {
    definition: {
      name: "3dgold",
      aliases: [],
      description: "Comando de entretenimento e interação (3dgold)",
      usage: "!3dgold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "3dstone",
      aliases: [],
      description: "Comando de entretenimento e interação (3dstone)",
      usage: "!3dstone",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "4kvizu",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (4kvizu)",
      usage: "!4kvizu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !4kvizu em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (4kvizu)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "add",
      aliases: [],
      description: "Comando de entretenimento e interação (add)",
      usage: "!add",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.");
    }
  },
  {
    definition: {
      name: "add_prefixo",
      aliases: [],
      description: "Comando de entretenimento e interação (add_prefixo)",
      usage: "!add_prefixo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar este comando, você deve ativar o comando, multiprefix Exemplo: multiprefixo");
    }
  },
  {
    definition: {
      name: "addads",
      aliases: [],
      description: "Comando de entretenimento e interação (addads)",
      usage: "!addads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Retorne após o comando a sua mensagem/anúncio... Ex: sua mensagem aqui");
    }
  },
  {
    definition: {
      name: "addautoban",
      aliases: [],
      description: "Comando de entretenimento e interação (addautoban)",
      usage: "!addautoban",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "addautorm",
      aliases: [],
      description: "Comando de entretenimento e interação (addautorm)",
      usage: "!addautorm",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "addcase",
      aliases: [],
      description: "Comando de entretenimento e interação (addcase)",
      usage: "!addcase",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("apenas meu dono");
    }
  },
  {
    definition: {
      name: "addcmdprem",
      aliases: [],
      description: "Comando de entretenimento e interação (addcmdprem)",
      usage: "!addcmdprem",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco? Não tem como adicionar o mesmo comando.");
    }
  },
  {
    definition: {
      name: "addcmdpremium",
      aliases: [],
      description: "Comando de entretenimento e interação (addcmdpremium)",
      usage: "!addcmdpremium",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando já se encontra na lista premium.");
    }
  },
  {
    definition: {
      name: "addcmdvip",
      aliases: [],
      description: "Comando de entretenimento e interação (addcmdvip)",
      usage: "!addcmdvip",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco? Não tem como adicionar o mesmo comando.");
    }
  },
  {
    definition: {
      name: "addgold",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (addgold)",
      usage: "!addgold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !addgold em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (addgold)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "addlevel",
      aliases: [],
      description: "Comando de entretenimento e interação (addlevel)",
      usage: "!addlevel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a quantidade de level que deseja adicionar...");
    }
  },
  {
    definition: {
      name: "addpalavra",
      aliases: [],
      description: "Comando de entretenimento e interação (addpalavra)",
      usage: "!addpalavra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Anti palavrão desativado!");
    }
  },
  {
    definition: {
      name: "addpix",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (addpix)",
      usage: "!addpix",
      category: "rpg" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !addpix em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (addpix)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "addrent",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (addrent)",
      usage: "!addrent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !addrent em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (addrent)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "addxp",
      aliases: [],
      description: "Comando de entretenimento e interação (addxp)",
      usage: "!addxp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a quantidade de XP que deseja adicionar");
    }
  },
  {
    definition: {
      name: "adolesc",
      aliases: [],
      description: "Comando de entretenimento e interação (adolesc)",
      usage: "!adolesc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "adverter",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (adverter)",
      usage: "!adverter",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !adverter em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (adverter)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "advertir",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (advertir)",
      usage: "!advertir",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !advertir em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (advertir)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "ahegao",
      aliases: [],
      description: "Comando de entretenimento e interação (ahegao)",
      usage: "!ahegao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "ai",
      aliases: [],
      description: "Comando de entretenimento e interação (ai)",
      usage: "!ai",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tu n vai falar nada é jumento?");
    }
  },
  {
    definition: {
      name: "aiimg",
      aliases: [],
      description: "Comando de entretenimento e interação (aiimg)",
      usage: "!aiimg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faz o comando direito, cadê a porra da mensagem pro chat Bot?");
    }
  },
  {
    definition: {
      name: "ailogic",
      aliases: [],
      description: "Comando de entretenimento e interação (ailogic)",
      usage: "!ailogic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faz o comando direito, cadê a porra da mensagem pro chat Bot?");
    }
  },
  {
    definition: {
      name: "akinator",
      aliases: [],
      description: "Comando de entretenimento e interação (akinator)",
      usage: "!akinator",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Volte mais tarde...");
    }
  },
  {
    definition: {
      name: "alugarbot",
      aliases: [],
      description: "Comando de entretenimento e interação (alugarbot)",
      usage: "!alugarbot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite *dono* para entrar em contato com meu proprietário e liberar o acesso em seu grupo. • Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.");
    }
  },
  {
    definition: {
      name: "alugargp",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (alugargp)",
      usage: "!alugargp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !alugargp em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (alugargp)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "alugueis",
      aliases: [],
      description: "Comando de entretenimento e interação (alugueis)",
      usage: "!alugueis",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite *dono* para entrar em contato com meu proprietário e liberar o acesso em seu grupo. • Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.");
    }
  },
  {
    definition: {
      name: "aluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (aluguel)",
      usage: "!aluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite *dono* para entrar em contato com meu proprietário e liberar o acesso em seu grupo. • Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.");
    }
  },
  {
    definition: {
      name: "aluguel_global",
      aliases: [],
      description: "Comando de entretenimento e interação (aluguel_global)",
      usage: "!aluguel_global",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este grupo não está na lista de aluguel, use: listaaluguel pra ver os grupos que estão registrado.");
    }
  },
  {
    definition: {
      name: "amazon",
      aliases: [],
      description: "Comando de entretenimento e interação (amazon)",
      usage: "!amazon",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("> 𝐀𝐦𝐚𝐳𝐨𝐧 - 𝐒𝐭𝐨𝐫𝐞 –");
    }
  },
  {
    definition: {
      name: "amazonsearch",
      aliases: [],
      description: "Comando de entretenimento e interação (amazonsearch)",
      usage: "!amazonsearch",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("> 𝐀𝐦𝐚𝐳𝐨𝐧 - 𝐒𝐭𝐨𝐫𝐞 –");
    }
  },
  {
    definition: {
      name: "america",
      aliases: [],
      description: "Comando de entretenimento e interação (america)",
      usage: "!america",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Bronxys|Aleatory");
    }
  },
  {
    definition: {
      name: "anagrama",
      aliases: [],
      description: "Comando de entretenimento e interação (anagrama)",
      usage: "!anagrama",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "angelglx",
      aliases: [],
      description: "Comando de entretenimento e interação (angelglx)",
      usage: "!angelglx",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "angelwing",
      aliases: [],
      description: "Comando de entretenimento e interação (angelwing)",
      usage: "!angelwing",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "anime1",
      aliases: [],
      description: "Calcula a porcentagem de anime1 da pessoa",
      usage: "!anime1",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*ANIME1*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de anime1 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "anime2",
      aliases: [],
      description: "Calcula a porcentagem de anime2 da pessoa",
      usage: "!anime2",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*ANIME2*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de anime2 da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "animeia",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (animeia)",
      usage: "!animeia",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "animetv",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (animetv)",
      usage: "!animetv",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você não digitou nenhuma palavra ao lado do comando.");
    }
  },
  {
    definition: {
      name: "anotacao",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (anotacao)",
      usage: "!anotacao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !anotacao em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (anotacao)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "anotacoes",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (anotacoes)",
      usage: "!anotacoes",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !anotacoes em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (anotacoes)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "anotar",
      aliases: [],
      description: "Comando de entretenimento e interação (anotar)",
      usage: "!anotar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só em grupo pode utilizar este comando.");
    }
  },
  {
    definition: {
      name: "anti_ddd",
      aliases: [],
      description: "Comando de entretenimento e interação (anti_ddd)",
      usage: "!anti_ddd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "anti-ddd",
      aliases: [],
      description: "Comando de entretenimento e interação (anti-ddd)",
      usage: "!anti-ddd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antiaudio",
      aliases: [],
      description: "Comando de entretenimento e interação (antiaudio)",
      usage: "!antiaudio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "anticatalg",
      aliases: [],
      description: "Comando de entretenimento e interação (anticatalg)",
      usage: "!anticatalg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "anticatalogo",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito ANTICATALOGO",
      usage: "!anticatalogo",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "anticontato",
      aliases: [],
      description: "Comando de entretenimento e interação (anticontato)",
      usage: "!anticontato",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antictt",
      aliases: [],
      description: "Comando de entretenimento e interação (antictt)",
      usage: "!antictt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antiddd",
      aliases: [],
      description: "Comando de entretenimento e interação (antiddd)",
      usage: "!antiddd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antidoc",
      aliases: [],
      description: "Comando de entretenimento e interação (antidoc)",
      usage: "!antidoc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antidocumento",
      aliases: [],
      description: "Comando de entretenimento e interação (antidocumento)",
      usage: "!antidocumento",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antifake",
      aliases: [],
      description: "Comando de entretenimento e interação (antifake)",
      usage: "!antifake",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antiimg",
      aliases: [],
      description: "Comando de entretenimento e interação (antiimg)",
      usage: "!antiimg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antiligacao",
      aliases: [],
      description: "Comando de entretenimento e interação (antiligacao)",
      usage: "!antiligacao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.");
    }
  },
  {
    definition: {
      name: "antiligação",
      aliases: [],
      description: "Comando de entretenimento e interação (antiligação)",
      usage: "!antiligação",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.");
    }
  },
  {
    definition: {
      name: "antiligar",
      aliases: [],
      description: "Comando de entretenimento e interação (antiligar)",
      usage: "!antiligar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.");
    }
  },
  {
    definition: {
      name: "antilinkeasy",
      aliases: [],
      description: "Comando de entretenimento e interação (antilinkeasy)",
      usage: "!antilinkeasy",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antilinkgp",
      aliases: [],
      description: "Comando de entretenimento e interação (antilinkgp)",
      usage: "!antilinkgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antilinkhard",
      aliases: [],
      description: "Comando de entretenimento e interação (antilinkhard)",
      usage: "!antilinkhard",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antiloc",
      aliases: [],
      description: "Comando de entretenimento e interação (antiloc)",
      usage: "!antiloc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antinotas",
      aliases: [],
      description: "Comando de entretenimento e interação (antinotas)",
      usage: "!antinotas",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antipalavra",
      aliases: [],
      description: "Comando de entretenimento e interação (antipalavra)",
      usage: "!antipalavra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antipalavrao",
      aliases: [],
      description: "Comando de entretenimento e interação (antipalavrao)",
      usage: "!antipalavrao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antipalavrão",
      aliases: [],
      description: "Comando de entretenimento e interação (antipalavrão)",
      usage: "!antipalavrão",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antipv",
      aliases: [],
      description: "Comando de entretenimento e interação (antipv)",
      usage: "!antipv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!");
    }
  },
  {
    definition: {
      name: "antipv2",
      aliases: [],
      description: "Comando de entretenimento e interação (antipv2)",
      usage: "!antipv2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando..");
    }
  },
  {
    definition: {
      name: "antipv3",
      aliases: [],
      description: "Comando de entretenimento e interação (antipv3)",
      usage: "!antipv3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários vip..");
    }
  },
  {
    definition: {
      name: "antisticker",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (antisticker)",
      usage: "!antisticker",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "antivideo",
      aliases: [],
      description: "Comando de entretenimento e interação (antivideo)",
      usage: "!antivideo",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "ap",
      aliases: [],
      description: "Comando de entretenimento e interação (ap)",
      usage: "!ap",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("1 pra ligar / 0 pra desligar");
    }
  },
  {
    definition: {
      name: "apresentar",
      aliases: [],
      description: "Comando de entretenimento e interação (apresentar)",
      usage: "!apresentar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("1 pra ligar / 0 pra desligar");
    }
  },
  {
    definition: {
      name: "aptoide",
      aliases: [],
      description: "Comando de entretenimento e interação (aptoide)",
      usage: "!aptoide",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o nome do app? *Use como exemplo:* WhatsApp.");
    }
  },
  {
    definition: {
      name: "areia",
      aliases: [],
      description: "Comando de entretenimento e interação (areia)",
      usage: "!areia",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "arquivargp",
      aliases: [],
      description: "Comando de entretenimento e interação (arquivargp)",
      usage: "!arquivargp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "asfalto",
      aliases: [],
      description: "Comando de entretenimento e interação (asfalto)",
      usage: "!asfalto",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "ativo",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (ativo)",
      usage: "!ativo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !ativo em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (ativo)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "atraente",
      aliases: [],
      description: "Calcula a porcentagem de atraente da pessoa",
      usage: "!atraente",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*ATRAENTE*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de atraente da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "attp",
      aliases: [],
      description: "Cria figurinha com texto animado (attp)",
      usage: "!attp",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o texto que você quiser após o comando, por exemplo: ** _Eu me amo_");
    }
  },
  {
    definition: {
      name: "attp2",
      aliases: [],
      description: "Cria figurinha com texto animado (attp2)",
      usage: "!attp2",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "audio-menu",
      aliases: [],
      description: "Comando de entretenimento e interação (audio-menu)",
      usage: "!audio-menu",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...");
    }
  },
  {
    definition: {
      name: "audiolento",
      aliases: [],
      description: "Comando de entretenimento e interação (audiolento)",
      usage: "!audiolento",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "audiomeme",
      aliases: [],
      description: "Comando de entretenimento e interação (audiomeme)",
      usage: "!audiomeme",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("NaN, você não digitou nada... Exemplo: * Lula*");
    }
  },
  {
    definition: {
      name: "audiomeme2",
      aliases: [],
      description: "Comando de entretenimento e interação (audiomeme2)",
      usage: "!audiomeme2",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("NaN, você não digitou nada... Exemplo: * Lula*");
    }
  },
  {
    definition: {
      name: "audiorapido",
      aliases: [],
      description: "Comando de entretenimento e interação (audiorapido)",
      usage: "!audiorapido",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "ausente",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (ausente)",
      usage: "!ausente",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !ausente em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (ausente)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "autobang",
      aliases: [],
      description: "Comando de entretenimento e interação (autobang)",
      usage: "!autobang",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..");
    }
  },
  {
    definition: {
      name: "autodown",
      aliases: [],
      description: "Comando de entretenimento e interação (autodown)",
      usage: "!autodown",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("1 pra ligar / 0 pra desligar");
    }
  },
  {
    definition: {
      name: "autofigu",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (autofigu)",
      usage: "!autofigu",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "autorepo",
      aliases: [],
      description: "Comando de entretenimento e interação (autorepo)",
      usage: "!autorepo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "autoriza",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (autoriza)",
      usage: "!autoriza",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !autoriza em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (autoriza)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "autorizar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (autorizar)",
      usage: "!autorizar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !autorizar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (autorizar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "autosticker",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (autosticker)",
      usage: "!autosticker",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "avadakedavra",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (avadakedavra)",
      usage: "!avadakedavra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !avadakedavra em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (avadakedavra)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "avalie",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (avalie)",
      usage: "!avalie",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !avalie em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (avalie)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "baiana",
      aliases: [],
      description: "Calcula a porcentagem de baiana da pessoa",
      usage: "!baiana",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*BAIANA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de baiana da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "baiano",
      aliases: [],
      description: "Calcula a porcentagem de baiano da pessoa",
      usage: "!baiano",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*BAIANO*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de baiano da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "band",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (band)",
      usage: "!band",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !band em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (band)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "banfake",
      aliases: [],
      description: "Comando de entretenimento e interação (banfake)",
      usage: "!banfake",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não há números fake presentes neste grupo...");
    }
  },
  {
    definition: {
      name: "banfakes",
      aliases: [],
      description: "Comando de entretenimento e interação (banfakes)",
      usage: "!banfakes",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não há números fake presentes neste grupo...");
    }
  },
  {
    definition: {
      name: "banghost",
      aliases: [],
      description: "Comando de entretenimento e interação (banghost)",
      usage: "!banghost",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo). Exemplo: 0");
    }
  },
  {
    definition: {
      name: "bangp",
      aliases: [],
      description: "Comando de entretenimento e interação (bangp)",
      usage: "!bangp",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este grupo já está banido.");
    }
  },
  {
    definition: {
      name: "banir",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (banir)",
      usage: "!banir",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !banir em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (banir)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bann",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (bann)",
      usage: "!bann",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !bann em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (bann)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bard",
      aliases: [],
      description: "Comando de entretenimento e interação (bard)",
      usage: "!bard",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou processando sua pergunta, isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "bardai",
      aliases: [],
      description: "Comando de entretenimento e interação (bardai)",
      usage: "!bardai",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faz o comando direito, cadê a porra da mensagem pro chat Bot?");
    }
  },
  {
    definition: {
      name: "bater",
      aliases: [],
      description: "Calcula a porcentagem de bater da pessoa",
      usage: "!bater",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*BATER*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de bater da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "bc",
      aliases: [],
      description: "Comando de entretenimento e interação (bc)",
      usage: "!bc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Texto onde? Exemplo : Hasta la vista baby");
    }
  },
  {
    definition: {
      name: "bcgc",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (bcgc)",
      usage: "!bcgc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !bcgc em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (bcgc)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bcgp",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (bcgp)",
      usage: "!bcgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !bcgp em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (bcgp)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bcgroup",
      aliases: [],
      description: "Comando de entretenimento e interação (bcgroup)",
      usage: "!bcgroup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Texto onde? Exemplo : Hasta la vista baby");
    }
  },
  {
    definition: {
      name: "bdsm",
      aliases: [],
      description: "Comando de entretenimento e interação (bdsm)",
      usage: "!bdsm",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "bebado",
      aliases: [],
      description: "Calcula o teor de álcool no sangue da pessoa",
      usage: "!bebado",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*BEBADO*] @${targetNum} tem *${percent}%*!\nCalcula o teor de álcool no sangue da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "beijo",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (beijo)",
      usage: "!beijo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !beijo em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (beijo)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bemvindo",
      aliases: [],
      description: "Comando de entretenimento e interação (bemvindo)",
      usage: "!bemvindo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "bemvindo2",
      aliases: [],
      description: "Comando de entretenimento e interação (bemvindo2)",
      usage: "!bemvindo2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite da forma correta: Comando: 1 para ativar");
    }
  },
  {
    definition: {
      name: "berry",
      aliases: [],
      description: "Comando de entretenimento e interação (berry)",
      usage: "!berry",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "beta",
      aliases: [],
      description: "Calcula a porcentagem de beta da pessoa",
      usage: "!beta",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*BETA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de beta da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "bingchat",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (bingchat)",
      usage: "!bingchat",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !bingchat em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (bingchat)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bingimg",
      aliases: [],
      description: "Comando de entretenimento e interação (bingimg)",
      usage: "!bingimg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O que tu quer que ele gere seu jumento? Example : Um gato voador");
    }
  },
  {
    definition: {
      name: "biografia",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (biografia)",
      usage: "!biografia",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !biografia em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (biografia)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bitly",
      aliases: [],
      description: "Comando de entretenimento e interação (bitly)",
      usage: "!bitly",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❌️ *Forma incorreta, use está como exemplo:* https://instagram.com/annabot.wpp");
    }
  },
  {
    definition: {
      name: "blackpink",
      aliases: [],
      description: "Comando de entretenimento e interação (blackpink)",
      usage: "!blackpink",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "block",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (block)",
      usage: "!block",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !block em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (block)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "blockcmd",
      aliases: [],
      description: "Comando de entretenimento e interação (blockcmd)",
      usage: "!blockcmd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco?, Quer banir o comando de bloquear comando?");
    }
  },
  {
    definition: {
      name: "blockcmdg",
      aliases: [],
      description: "Comando de entretenimento e interação (blockcmdg)",
      usage: "!blockcmdg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco? Não tem como adicionar o mesmo comando.");
    }
  },
  {
    definition: {
      name: "blockcmdgp",
      aliases: [],
      description: "Comando de entretenimento e interação (blockcmdgp)",
      usage: "!blockcmdgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco?, Quer banir o comando de bloquear comando?");
    }
  },
  {
    definition: {
      name: "blocklevel",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (blocklevel)",
      usage: "!blocklevel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !blocklevel em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (blocklevel)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "blocklevel-list",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (blocklevel-list)",
      usage: "!blocklevel-list",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !blocklevel-list em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (blocklevel-list)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "blocklevellist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (blocklevellist)",
      usage: "!blocklevellist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !blocklevellist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (blocklevellist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "blocklist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (blocklist)",
      usage: "!blocklist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !blocklist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (blocklist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "blockuser",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (blockuser)",
      usage: "!blockuser",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !blockuser em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (blockuser)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "blood",
      aliases: [],
      description: "Comando de entretenimento e interação (blood)",
      usage: "!blood",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "book",
      aliases: [],
      description: "Comando de entretenimento e interação (book)",
      usage: "!book",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Exemplo:* Nome do Livro");
    }
  },
  {
    definition: {
      name: "borrar",
      aliases: [],
      description: "Comando de entretenimento e interação (borrar)",
      usage: "!borrar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "botoff",
      aliases: [],
      description: "Comando de entretenimento e interação (botoff)",
      usage: "!botoff",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Desativando funções e parando a execução de comandos por membros com sucesso...");
    }
  },
  {
    definition: {
      name: "boton",
      aliases: [],
      description: "Comando de entretenimento e interação (boton)",
      usage: "!boton",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Desativando funções e parando a execução de comandos por membros com sucesso...");
    }
  },
  {
    definition: {
      name: "br",
      aliases: [],
      description: "Comando de entretenimento e interação (br)",
      usage: "!br",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só dono..");
    }
  },
  {
    definition: {
      name: "brasileirao",
      aliases: [],
      description: "Comando de entretenimento e interação (brasileirao)",
      usage: "!brasileirao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("⚽️📊 *Tabela Brasileirão:* – ${ABC.resultado.map((v, index) =>");
    }
  },
  {
    definition: {
      name: "break",
      aliases: [],
      description: "Comando de entretenimento e interação (break)",
      usage: "!break",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "brincadeira",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (brincadeira)",
      usage: "!brincadeira",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !brincadeira em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (brincadeira)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "brincadeiras",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (brincadeiras)",
      usage: "!brincadeiras",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !brincadeiras em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (brincadeiras)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "brlist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (brlist)",
      usage: "!brlist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !brlist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (brlist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "bt",
      aliases: [],
      description: "Comando de entretenimento e interação (bt)",
      usage: "!bt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("_* acho que você errou o comando, use menu é tente novamente*_");
    }
  },
  {
    definition: {
      name: "buscarsabcity",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (buscarsabcity)",
      usage: "!buscarsabcity",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !buscarsabcity em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (buscarsabcity)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "buscarsc",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (buscarsc)",
      usage: "!buscarsc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !buscarsc em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (buscarsc)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "button",
      aliases: [],
      description: "Comando de entretenimento e interação (button)",
      usage: "!button",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("_* acho que você errou o comando, use menu é tente novamente*_");
    }
  },
  {
    definition: {
      name: "calc",
      aliases: [],
      description: "Consulta informações e dados sobre calc",
      usage: "!calc",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sucesso, alterou o nome do grupo.");
    }
  },
];
