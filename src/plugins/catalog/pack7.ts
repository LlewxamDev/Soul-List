import type { CommandModule } from "../../core/types/command";

export const pack7Commands: CommandModule[] = [
  {
    definition: {
      name: "tirardalista",
      aliases: [],
      description: "Comando de entretenimento e interação (tirardalista)",
      usage: "!tirardalista",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..");
    }
  },
  {
    definition: {
      name: "tirardalistag",
      aliases: [],
      description: "Comando de entretenimento e interação (tirardalistag)",
      usage: "!tirardalistag",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..");
    }
  },
  {
    definition: {
      name: "tirardatm",
      aliases: [],
      description: "Comando de entretenimento e interação (tirardatm)",
      usage: "!tirardatm",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este grupo/usuário não está registrado para ser tirado da lista de transmissão");
    }
  },
  {
    definition: {
      name: "tirargold",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tirargold)",
      usage: "!tirargold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tirargold em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tirargold)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "tirarlevel",
      aliases: [],
      description: "Comando de entretenimento e interação (tirarlevel)",
      usage: "!tirarlevel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a quantidade de level que deseja remover");
    }
  },
  {
    definition: {
      name: "tirarrent",
      aliases: [],
      description: "Comando de entretenimento e interação (tirarrent)",
      usage: "!tirarrent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Apenas números.");
    }
  },
  {
    definition: {
      name: "tirarxp",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tirarxp)",
      usage: "!tirarxp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tirarxp em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tirarxp)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "tksh",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tksh)",
      usage: "!tksh",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tksh em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tksh)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "toanime",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (toanime)",
      usage: "!toanime",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "togif",
      aliases: [],
      description: "Comando de entretenimento e interação (togif)",
      usage: "!togif",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif.");
    }
  },
  {
    definition: {
      name: "togta",
      aliases: [],
      description: "Comando de entretenimento e interação (togta)",
      usage: "!togta",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "toimg",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (toimg)",
      usage: "!toimg",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Perfil Masculino");
    }
  },
  {
    definition: {
      name: "token_gpt",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (token_gpt)",
      usage: "!token_gpt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !token_gpt em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (token_gpt)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "tomp3url",
      aliases: [],
      description: "Comando de entretenimento e interação (tomp3url)",
      usage: "!tomp3url",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o áudio?");
    }
  },
  {
    definition: {
      name: "tomp4url",
      aliases: [],
      description: "Comando de entretenimento e interação (tomp4url)",
      usage: "!tomp4url",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("E o vídeo?");
    }
  },
  {
    definition: {
      name: "totalcmd",
      aliases: [],
      description: "Comando de entretenimento e interação (totalcmd)",
      usage: "!totalcmd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("tem: comandos lista completa a baixo: •");
    }
  },
  {
    definition: {
      name: "totalcomando",
      aliases: [],
      description: "Comando de entretenimento e interação (totalcomando)",
      usage: "!totalcomando",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Olá * EU TENHO: COMANDOS ✅ LISTA ABAIXO:");
    }
  },
  {
    definition: {
      name: "tourl",
      aliases: [],
      description: "Comando de entretenimento e interação (tourl)",
      usage: "!tourl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("E a foto?");
    }
  },
  {
    definition: {
      name: "toxic",
      aliases: [],
      description: "Comando de entretenimento e interação (toxic)",
      usage: "!toxic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "tozombie",
      aliases: [],
      description: "Comando de entretenimento e interação (tozombie)",
      usage: "!tozombie",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
  {
    definition: {
      name: "tradutor",
      aliases: [],
      description: "Comando de entretenimento e interação (tradutor)",
      usage: "!tradutor",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: tradutor pt|Dog");
    }
  },
  {
    definition: {
      name: "transformer",
      aliases: [],
      description: "Comando de entretenimento e interação (transformer)",
      usage: "!transformer",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "transmissão",
      aliases: [],
      description: "Comando de entretenimento e interação (transmissão)",
      usage: "!transmissão",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Texto onde? Exemplo : Hasta la vista baby");
    }
  },
  {
    definition: {
      name: "transmitir",
      aliases: [],
      description: "Comando de entretenimento e interação (transmitir)",
      usage: "!transmitir",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Texto onde? Exemplo : Hasta la vista baby");
    }
  },
  {
    definition: {
      name: "trap",
      aliases: [],
      description: "Comando de entretenimento e interação (trap)",
      usage: "!trap",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "triggered",
      aliases: [],
      description: "Comando de entretenimento e interação (triggered)",
      usage: "!triggered",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma imagem no WhatsApp...");
    }
  },
  {
    definition: {
      name: "tt",
      aliases: [],
      description: "Comando de entretenimento e interação (tt)",
      usage: "!tt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Limit kamu tidak cukup! Limit tersisa: Limit yang dibutuhkan:");
    }
  },
  {
    definition: {
      name: "ttkaudio",
      aliases: [],
      description: "Comando de entretenimento e interação (ttkaudio)",
      usage: "!ttkaudio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("link do Tiktok");
    }
  },
  {
    definition: {
      name: "ttp",
      aliases: [],
      description: "Cria figurinha com texto animado (ttp)",
      usage: "!ttp",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o texto que você quiser! - *Por exemplo:* Eu me amo");
    }
  },
  {
    definition: {
      name: "ttsearch",
      aliases: [],
      description: "Comando de entretenimento e interação (ttsearch)",
      usage: "!ttsearch",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI: :");
    }
  },
  {
    definition: {
      name: "ttstalk",
      aliases: [],
      description: "Comando de entretenimento e interação (ttstalk)",
      usage: "!ttstalk",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o usuário do Tiktok Example: betabotzz");
    }
  },
  {
    definition: {
      name: "twitter",
      aliases: [],
      description: "Comando de entretenimento e interação (twitter)",
      usage: "!twitter",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, adicione um link do Threads post/reel.");
    }
  },
  {
    definition: {
      name: "twitter_audio",
      aliases: [],
      description: "Comando de entretenimento e interação (twitter_audio)",
      usage: "!twitter_audio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link do Twitter");
    }
  },
  {
    definition: {
      name: "twitter_video",
      aliases: [],
      description: "Comando de entretenimento e interação (twitter_video)",
      usage: "!twitter_video",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link do Twitter");
    }
  },
  {
    definition: {
      name: "twtdl",
      aliases: [],
      description: "Comando de entretenimento e interação (twtdl)",
      usage: "!twtdl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, adicione um link do Threads post/reel.");
    }
  },
  {
    definition: {
      name: "txt2img",
      aliases: [],
      description: "Comando de entretenimento e interação (txt2img)",
      usage: "!txt2img",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faz o comando direito, cadê a porra da mensagem pro chat Bot?");
    }
  },
  {
    definition: {
      name: "txtborboleta",
      aliases: [],
      description: "Comando de entretenimento e interação (txtborboleta)",
      usage: "!txtborboleta",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "txtquadrinhos",
      aliases: [],
      description: "Comando de entretenimento e interação (txtquadrinhos)",
      usage: "!txtquadrinhos",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "unbangp",
      aliases: [],
      description: "Comando de entretenimento e interação (unbangp)",
      usage: "!unbangp",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este grupo já está banido.");
    }
  },
  {
    definition: {
      name: "unblock",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (unblock)",
      usage: "!unblock",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !unblock em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (unblock)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "unblockcmd",
      aliases: [],
      description: "Comando de entretenimento e interação (unblockcmd)",
      usage: "!unblockcmd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco?, Quer banir o comando de desbloquear comando?");
    }
  },
  {
    definition: {
      name: "unblockcmdg",
      aliases: [],
      description: "Comando de entretenimento e interação (unblockcmdg)",
      usage: "!unblockcmdg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco? Não tem como desbloquear o mesmo comando.");
    }
  },
  {
    definition: {
      name: "unblockcmdgp",
      aliases: [],
      description: "Comando de entretenimento e interação (unblockcmdgp)",
      usage: "!unblockcmdgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá louco maluco?, Quer banir o comando de desbloquear comando?");
    }
  },
  {
    definition: {
      name: "unblocklevel",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (unblocklevel)",
      usage: "!unblocklevel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !unblocklevel em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (unblocklevel)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "unblockuser",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (unblockuser)",
      usage: "!unblockuser",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !unblockuser em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (unblockuser)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "unkick",
      aliases: [],
      description: "Comando de entretenimento e interação (unkick)",
      usage: "!unkick",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.");
    }
  },
  {
    definition: {
      name: "uprest",
      aliases: [],
      description: "Comando de entretenimento e interação (uprest)",
      usage: "!uprest",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Example : Pesan Terakhir - Speed Up");
    }
  },
  {
    definition: {
      name: "users",
      aliases: [],
      description: "Comando de entretenimento e interação (users)",
      usage: "!users",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, forneça um número de usuário válido.");
    }
  },
  {
    definition: {
      name: "validarcnpj",
      aliases: [],
      description: "Comando de entretenimento e interação (validarcnpj)",
      usage: "!validarcnpj",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite um CPF para realizar a verificação se é válido ou inválido...");
    }
  },
  {
    definition: {
      name: "ver_forca",
      aliases: [],
      description: "Minigame interativo de entretenimento (ver_forca)",
      usage: "!ver_forca",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a letra que deseja responder..");
    }
  },
  {
    definition: {
      name: "verificado-global",
      aliases: [],
      description: "Comando de entretenimento e interação (verificado-global)",
      usage: "!verificado-global",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*");
    }
  },
  {
    definition: {
      name: "vesgo",
      aliases: [],
      description: "Calcula a porcentagem de vesgo da pessoa",
      usage: "!vesgo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*VESGO*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de vesgo da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "videolento",
      aliases: [],
      description: "Comando de entretenimento e interação (videolento)",
      usage: "!videolento",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Error:");
    }
  },
  {
    definition: {
      name: "vidro",
      aliases: [],
      description: "Comando de entretenimento e interação (vidro)",
      usage: "!vidro",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "viplist",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (viplist)",
      usage: "!viplist",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !viplist em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (viplist)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "visualizarmsg",
      aliases: [],
      description: "Comando de entretenimento e interação (visualizarmsg)",
      usage: "!visualizarmsg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.");
    }
  },
  {
    definition: {
      name: "voltei",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (voltei)",
      usage: "!voltei",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !voltei em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (voltei)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "votacao",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (votacao)",
      usage: "!votacao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !votacao em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (votacao)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "votar",
      aliases: [],
      description: "Comando de entretenimento e interação (votar)",
      usage: "!votar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para votar no primeiro usario: Use o comando: votar_duelo / Para votar no segundo usuario: Use o comando: votar_duelo /");
    }
  },
  {
    definition: {
      name: "votar_combate",
      aliases: [],
      description: "Comando de entretenimento e interação (votar_combate)",
      usage: "!votar_combate",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só deve ser utilizado em privado após a votação ser iniciada em algum grupo, lá terá o exemplo..");
    }
  },
  {
    definition: {
      name: "votar_duelo",
      aliases: [],
      description: "Comando de entretenimento e interação (votar_duelo)",
      usage: "!votar_duelo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só deve ser utilizado em privado após a votação ser iniciada em algum grupo, lá terá o exemplo..");
    }
  },
  {
    definition: {
      name: "voting",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (voting)",
      usage: "!voting",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !voting em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (voting)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "vozmenino",
      aliases: [],
      description: "Comando de entretenimento e interação (vozmenino)",
      usage: "!vozmenino",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "welcome",
      aliases: [],
      description: "Comando de entretenimento e interação (welcome)",
      usage: "!welcome",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "whatmusic",
      aliases: [],
      description: "Comando de entretenimento e interação (whatmusic)",
      usage: "!whatmusic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "wiki",
      aliases: [],
      description: "Consulta informações e dados sobre wiki",
      usage: "!wiki",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: JavaScript");
    }
  },
  {
    definition: {
      name: "wingeffect",
      aliases: [],
      description: "Comando de entretenimento e interação (wingeffect)",
      usage: "!wingeffect",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "wolf",
      aliases: [],
      description: "Calcula a porcentagem de wolf da pessoa",
      usage: "!wolf",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*WOLF*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de wolf da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "wprivacygp",
      aliases: [],
      description: "Comando de entretenimento e interação (wprivacygp)",
      usage: "!wprivacygp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _wprivacygp *--help*_");
    }
  },
  {
    definition: {
      name: "wprivacyph",
      aliases: [],
      description: "Comando de entretenimento e interação (wprivacyph)",
      usage: "!wprivacyph",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("🤔 Hmm, você parece que está usando de forma errada senhor(a)! - Saiba o uso detalhado, através do argumento: _wprivacyph *--help*_");
    }
  },
  {
    definition: {
      name: "x9",
      aliases: [],
      description: "Comando de entretenimento e interação (x9)",
      usage: "!x9",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "x9visuunica",
      aliases: [],
      description: "Comando de entretenimento e interação (x9visuunica)",
      usage: "!x9visuunica",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "ytdoc",
      aliases: [],
      description: "Comando de entretenimento e interação (ytdoc)",
      usage: "!ytdoc",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝙳𝚘𝚌𝚞𝚖𝚎𝚗𝚝𝚘ฺ͘.•🛸 ݈݇─");
    }
  },
  {
    definition: {
      name: "ytplay",
      aliases: [],
      description: "Comando de entretenimento e interação (ytplay)",
      usage: "!ytplay",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Example : Pesan Terakhir - Speed Up");
    }
  },
  {
    definition: {
      name: "ytplaylist",
      aliases: [],
      description: "Comando de entretenimento e interação (ytplaylist)",
      usage: "!ytplaylist",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faltando o link da playlist para realizar a busca...");
    }
  },
  {
    definition: {
      name: "ytsearch",
      aliases: [],
      description: "Comando de entretenimento e interação (ytsearch)",
      usage: "!ytsearch",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar algum texto após o comando.");
    }
  },
  {
    definition: {
      name: "ytstalk",
      aliases: [],
      description: "Comando de entretenimento e interação (ytstalk)",
      usage: "!ytstalk",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o usuário do Youtube example : jerofc");
    }
  },
  {
    definition: {
      name: "yuri",
      aliases: [],
      description: "Comando de entretenimento e interação (yuri)",
      usage: "!yuri",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "zerar_combate",
      aliases: [],
      description: "Comando de entretenimento e interação (zerar_combate)",
      usage: "!zerar_combate",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Apenas administrador..");
    }
  },
  {
    definition: {
      name: "zerar_duelo",
      aliases: [],
      description: "Comando de entretenimento e interação (zerar_duelo)",
      usage: "!zerar_duelo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Apenas administrador..");
    }
  },
  {
    definition: {
      name: "zerar_votacao",
      aliases: [],
      description: "Comando de entretenimento e interação (zerar_votacao)",
      usage: "!zerar_votacao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Apenas o administrador do grupo pode realizar a ação..");
    }
  },
  {
    definition: {
      name: "zerarsc",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (zerarsc)",
      usage: "!zerarsc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !zerarsc em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (zerarsc)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "zettai",
      aliases: [],
      description: "Comando de entretenimento e interação (zettai)",
      usage: "!zettai",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "zombieai",
      aliases: [],
      description: "Comando de entretenimento e interação (zombieai)",
      usage: "!zombieai",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️");
    }
  },
];
