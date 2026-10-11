import type { CommandModule } from "../../core/types/command";

export const pack4Commands: CommandModule[] = [
  {
    definition: {
      name: "indian",
      aliases: [],
      description: "Calcula a porcentagem de indian da pessoa",
      usage: "!indian",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*INDIAN*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de indian da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "info",
      aliases: [],
      description: "Comando de entretenimento e interação (info)",
      usage: "!info",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: play");
    }
  },
  {
    definition: {
      name: "infobancarac",
      aliases: [],
      description: "Comando de entretenimento e interação (infobancarac)",
      usage: "!infobancarac",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "infocmd_del",
      aliases: [],
      description: "Comando de entretenimento e interação (infocmd_del)",
      usage: "!infocmd_del",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("A informação sobre o comando foi removida com sucesso...");
    }
  },
  {
    definition: {
      name: "infoforca",
      aliases: [],
      description: "Minigame interativo de entretenimento (infoforca)",
      usage: "!infoforca",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("como adicionar palavras no comando forca. Exemplo: addpalavras_forca gato|Animal|Ele mia Exemplo para tirar a palavra do comando forca, é só usar: rmpalavra_forca gato boa sorte.");
    }
  },
  {
    definition: {
      name: "infolistanegra",
      aliases: [],
      description: "Comando de entretenimento e interação (infolistanegra)",
      usage: "!infolistanegra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "infopalavrao",
      aliases: [],
      description: "Comando de entretenimento e interação (infopalavrao)",
      usage: "!infopalavrao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "infopalavrão",
      aliases: [],
      description: "Comando de entretenimento e interação (infopalavrão)",
      usage: "!infopalavrão",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "infopremium",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (infopremium)",
      usage: "!infopremium",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !infopremium em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (infopremium)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "infotransmitir",
      aliases: [],
      description: "Comando de entretenimento e interação (infotransmitir)",
      usage: "!infotransmitir",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "iniciar_forca",
      aliases: [],
      description: "Minigame interativo de entretenimento (iniciar_forca)",
      usage: "!iniciar_forca",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a letra que deseja responder..");
    }
  },
  {
    definition: {
      name: "iniciar_o_jogo",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (iniciar_o_jogo)",
      usage: "!iniciar_o_jogo",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !iniciar_o_jogo em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (iniciar_o_jogo)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "insta_audio",
      aliases: [],
      description: "Comando de entretenimento e interação (insta_audio)",
      usage: "!insta_audio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link");
    }
  },
  {
    definition: {
      name: "instaaudio",
      aliases: [],
      description: "Comando de entretenimento e interação (instaaudio)",
      usage: "!instaaudio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link");
    }
  },
  {
    definition: {
      name: "instagram",
      aliases: [],
      description: "Comando de entretenimento e interação (instagram)",
      usage: "!instagram",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: o link");
    }
  },
  {
    definition: {
      name: "instastalk",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (instastalk)",
      usage: "!instastalk",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !instastalk em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (instastalk)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "instastalker",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (instastalker)",
      usage: "!instastalker",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !instastalker em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (instastalker)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "instastory",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (instastory)",
      usage: "!instastory",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !instastory em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (instastory)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "instastorys",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (instastorys)",
      usage: "!instastorys",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !instastorys em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (instastorys)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "jahy",
      aliases: [],
      description: "Comando de entretenimento e interação (jahy)",
      usage: "!jahy",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "jeans",
      aliases: [],
      description: "Comando de entretenimento e interação (jeans)",
      usage: "!jeans",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "jogo",
      aliases: [],
      description: "Minigame interativo de entretenimento (jogo)",
      usage: "!jogo",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar o nome do jogo após o comando.");
    }
  },
  {
    definition: {
      name: "jogodaforca",
      aliases: [],
      description: "Minigame interativo de entretenimento (jogodaforca)",
      usage: "!jogodaforca",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a letra que deseja responder..");
    }
  },
  {
    definition: {
      name: "jogodavelha",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (jogodavelha)",
      usage: "!jogodavelha",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !jogodavelha em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (jogodavelha)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "jogos",
      aliases: [],
      description: "Minigame interativo de entretenimento (jogos)",
      usage: "!jogos",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar o nome do jogo após o comando.");
    }
  },
  {
    definition: {
      name: "join",
      aliases: [],
      description: "Comando de entretenimento e interação (join)",
      usage: "!join",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Insira um link de convite ao lado do comando.");
    }
  },
  {
    definition: {
      name: "jokerlogo",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito JOKERLOGO",
      usage: "!jokerlogo",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "kannavizu",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (kannavizu)",
      usage: "!kannavizu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !kannavizu em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (kannavizu)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "kasedaiki",
      aliases: [],
      description: "Calcula a porcentagem de kasedaiki da pessoa",
      usage: "!kasedaiki",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*KASEDAIKI*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de kasedaiki da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "ke",
      aliases: [],
      description: "Comando de entretenimento e interação (ke)",
      usage: "!ke",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Oi eu sou o Nenhum número fake encontrado no grupo 🕵️‍♂️📵");
    }
  },
  {
    definition: {
      name: "kwai",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (kwai)",
      usage: "!kwai",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !kwai em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (kwai)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "lapis",
      aliases: [],
      description: "Comando de entretenimento e interação (lapis)",
      usage: "!lapis",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "lastrent",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (lastrent)",
      usage: "!lastrent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !lastrent em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (lastrent)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "lava",
      aliases: [],
      description: "Comando de entretenimento e interação (lava)",
      usage: "!lava",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "legenda",
      aliases: [],
      description: "Comando de entretenimento e interação (legenda)",
      usage: "!legenda",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cade a / mano? Exemplo: Sad/Demais");
    }
  },
  {
    definition: {
      name: "legenda_documento",
      aliases: [],
      description: "Comando de entretenimento e interação (legenda_documento)",
      usage: "!legenda_documento",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Escreva a mensagem de remoção no antidoc*");
    }
  },
  {
    definition: {
      name: "legenda_estrangeiro",
      aliases: [],
      description: "Comando de entretenimento e interação (legenda_estrangeiro)",
      usage: "!legenda_estrangeiro",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Escreva a mensagem de remoção de estrangeiros*");
    }
  },
  {
    definition: {
      name: "legenda_estrangeiros",
      aliases: [],
      description: "Comando de entretenimento e interação (legenda_estrangeiros)",
      usage: "!legenda_estrangeiros",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Escreva a mensagem de remoção de estrangeiros*");
    }
  },
  {
    definition: {
      name: "legenda_imagem",
      aliases: [],
      description: "Comando de entretenimento e interação (legenda_imagem)",
      usage: "!legenda_imagem",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Escreva a mensagem de remoção no antiimg*");
    }
  },
  {
    definition: {
      name: "legenda_video",
      aliases: [],
      description: "Comando de entretenimento e interação (legenda_video)",
      usage: "!legenda_video",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Escreva a mensagem de remoção no antivideo*");
    }
  },
  {
    definition: {
      name: "legendabv",
      aliases: [],
      description: "Comando de entretenimento e interação (legendabv)",
      usage: "!legendabv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Escreva a mensagem de boas-vindas*");
    }
  },
  {
    definition: {
      name: "legendabv2",
      aliases: [],
      description: "Comando de entretenimento e interação (legendabv2)",
      usage: "!legendabv2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Escreva a mensagem de boas-vindas*");
    }
  },
  {
    definition: {
      name: "legendasaiu",
      aliases: [],
      description: "Comando de entretenimento e interação (legendasaiu)",
      usage: "!legendasaiu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Escreva a mensagem de saída ou para desativar, use: 0");
    }
  },
  {
    definition: {
      name: "legendasaiu2",
      aliases: [],
      description: "Comando de entretenimento e interação (legendasaiu2)",
      usage: "!legendasaiu2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Escreva a mensagem de saída ou para desativar, use: 0");
    }
  },
  {
    definition: {
      name: "ler",
      aliases: [],
      description: "Comando de entretenimento e interação (ler)",
      usage: "!ler",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Mencione uma imagem, por favor!");
    }
  },
  {
    definition: {
      name: "lerfoto",
      aliases: [],
      description: "Comando de entretenimento e interação (lerfoto)",
      usage: "!lerfoto",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Mencione uma imagem, por favor!");
    }
  },
  {
    definition: {
      name: "lesbica",
      aliases: [],
      description: "Calcula a porcentagem de lesbica da pessoa",
      usage: "!lesbica",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*LESBICA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de lesbica da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "lesbico",
      aliases: [],
      description: "Calcula a porcentagem de lesbico da pessoa",
      usage: "!lesbico",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*LESBICO*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de lesbico da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "letra",
      aliases: [],
      description: "Consulta informações e dados sobre letra",
      usage: "!letra",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Ela me traiu");
    }
  },
  {
    definition: {
      name: "letra2",
      aliases: [],
      description: "Consulta informações e dados sobre letra2",
      usage: "!letra2",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("É o nome da música? Exemplo: the perfect girl");
    }
  },
  {
    definition: {
      name: "letram",
      aliases: [],
      description: "Consulta informações e dados sobre letram",
      usage: "!letram",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Ela me traiu");
    }
  },
  {
    definition: {
      name: "letramusic",
      aliases: [],
      description: "Consulta informações e dados sobre letramusic",
      usage: "!letramusic",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Ela me traiu");
    }
  },
  {
    definition: {
      name: "letramusic2",
      aliases: [],
      description: "Consulta informações e dados sobre letramusic2",
      usage: "!letramusic2",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("É o nome da música? Exemplo: the perfect girl");
    }
  },
  {
    definition: {
      name: "letramusica",
      aliases: [],
      description: "Consulta informações e dados sobre letramusica",
      usage: "!letramusica",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar após o comando o nome da música...");
    }
  },
  {
    definition: {
      name: "level",
      aliases: [],
      description: "Comando de entretenimento e interação (level)",
      usage: "!level",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level. • Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: leveling");
    }
  },
  {
    definition: {
      name: "leveling",
      aliases: [],
      description: "Comando de entretenimento e interação (leveling)",
      usage: "!leveling",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "limitarcmd",
      aliases: [],
      description: "Comando de entretenimento e interação (limitarcmd)",
      usage: "!limitarcmd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: 120 60 = 1 minuto Exemplo que coloquei, com o : limitarcmd ativo, só podera usar comandos a cada 2 minutos Boa sorte.");
    }
  },
  {
    definition: {
      name: "limitarcomando",
      aliases: [],
      description: "Comando de entretenimento e interação (limitarcomando)",
      usage: "!limitarcomando",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: 120 60 = 1 minuto Exemplo que coloquei, com o : limitarcmd ativo, só podera usar comandos a cada 2 minutos Boa sorte.");
    }
  },
  {
    definition: {
      name: "limitec",
      aliases: [],
      description: "Comando de entretenimento e interação (limitec)",
      usage: "!limitec",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ative este recurso primeiro limiteflood 1");
    }
  },
  {
    definition: {
      name: "limitec_global",
      aliases: [],
      description: "Comando de entretenimento e interação (limitec_global)",
      usage: "!limitec_global",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ative este recurso primeiro limiteflood 1");
    }
  },
  {
    definition: {
      name: "limitecaracteres",
      aliases: [],
      description: "Comando de entretenimento e interação (limitecaracteres)",
      usage: "!limitecaracteres",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "limitecmd",
      aliases: [],
      description: "Comando de entretenimento e interação (limitecmd)",
      usage: "!limitecmd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: 120 60 = 1 minuto Exemplo que coloquei, com o : limitarcmd ativo, só podera usar comandos a cada 2 minutos Boa sorte.");
    }
  },
  {
    definition: {
      name: "limpar_mortos-cnt",
      aliases: [],
      description: "Comando de entretenimento e interação (limpar_mortos-cnt)",
      usage: "!limpar_mortos-cnt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..");
    }
  },
  {
    definition: {
      name: "limpardb",
      aliases: [],
      description: "Comando de entretenimento e interação (limpardb)",
      usage: "!limpardb",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Todos os ghosts da data base já foram deletados...*");
    }
  },
  {
    definition: {
      name: "lindo",
      aliases: [],
      description: "Calcula o nível de beleza e charme da pessoa",
      usage: "!lindo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*LINDO*] @${targetNum} tem *${percent}%*!\nCalcula o nível de beleza e charme da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "linkdogp_revelar",
      aliases: [],
      description: "Comando de entretenimento e interação (linkdogp_revelar)",
      usage: "!linkdogp_revelar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Pesquisa realizada: Sobre grupos de WhatsApp");
    }
  },
  {
    definition: {
      name: "linkgp",
      aliases: [],
      description: "Comando de entretenimento e interação (linkgp)",
      usage: "!linkgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("https://chat.whatsapp.com/");
    }
  },
  {
    definition: {
      name: "linkgroup",
      aliases: [],
      description: "Comando de entretenimento e interação (linkgroup)",
      usage: "!linkgroup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("https://chat.whatsapp.com/");
    }
  },
  {
    definition: {
      name: "lirik",
      aliases: [],
      description: "Comando de entretenimento e interação (lirik)",
      usage: "!lirik",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o nome da música Example : União Flasco");
    }
  },
  {
    definition: {
      name: "liryc",
      aliases: [],
      description: "Comando de entretenimento e interação (liryc)",
      usage: "!liryc",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Ela me traiu");
    }
  },
  {
    definition: {
      name: "lista_aluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (lista_aluguel)",
      usage: "!lista_aluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não contém nenhum usuario/grupo na lista de aluguel...");
    }
  },
  {
    definition: {
      name: "listaadmins",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listaadmins)",
      usage: "!listaadmins",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listaadmins em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listaadmins)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listaaluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (listaaluguel)",
      usage: "!listaaluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não contém nenhum usuario/grupo na lista de aluguel...");
    }
  },
  {
    definition: {
      name: "listabr",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listabr)",
      usage: "!listabr",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listabr em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listabr)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listacmdprem",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listacmdprem)",
      usage: "!listacmdprem",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listacmdprem em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listacmdprem)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listacmdvip",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listacmdvip)",
      usage: "!listacmdvip",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listacmdvip em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listacmdvip)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listacomandos",
      aliases: [],
      description: "Comando de entretenimento e interação (listacomandos)",
      usage: "!listacomandos",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Máximo 400 caracteres");
    }
  },
  {
    definition: {
      name: "listaddd",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listaddd)",
      usage: "!listaddd",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listaddd em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listaddd)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listaddi",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listaddi)",
      usage: "!listaddi",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listaddi em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listaddi)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listadmins",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listadmins)",
      usage: "!listadmins",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listadmins em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listadmins)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listads",
      aliases: [],
      description: "Comando de entretenimento e interação (listads)",
      usage: "!listads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não há anúncios definidos neste grupo...");
    }
  },
  {
    definition: {
      name: "listafake",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listafake)",
      usage: "!listafake",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listafake em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listafake)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listafakes",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listafakes)",
      usage: "!listafakes",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listafakes em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listafakes)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listagrupos",
      aliases: [],
      description: "Comando de entretenimento e interação (listagrupos)",
      usage: "!listagrupos",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando é restrito aos donos do bot.");
    }
  },
  {
    definition: {
      name: "listamutados",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listamutados)",
      usage: "!listamutados",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listamutados em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listamutados)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listanegra",
      aliases: [],
      description: "Comando de entretenimento e interação (listanegra)",
      usage: "!listanegra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Precisa ser Dono ou Adm");
    }
  },
  {
    definition: {
      name: "listanegrag",
      aliases: [],
      description: "Comando de entretenimento e interação (listanegrag)",
      usage: "!listanegrag",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..");
    }
  },
  {
    definition: {
      name: "listapalavra",
      aliases: [],
      description: "Comando de entretenimento e interação (listapalavra)",
      usage: "!listapalavra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Anti palavrão desativado!");
    }
  },
  {
    definition: {
      name: "listapalavrão",
      aliases: [],
      description: "Comando de entretenimento e interação (listapalavrão)",
      usage: "!listapalavrão",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Anti palavrão desativado!");
    }
  },
  {
    definition: {
      name: "listatm",
      aliases: [],
      description: "Comando de entretenimento e interação (listatm)",
      usage: "!listatm",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não contém nenhum registro de transmissão, utilize rgtm no grupo que deseja que ele receba as transmissões do bot..");
    }
  },
  {
    definition: {
      name: "listban",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (listban)",
      usage: "!listban",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !listban em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (listban)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "listbcmdglobal",
      aliases: [],
      description: "Comando de entretenimento e interação (listbcmdglobal)",
      usage: "!listbcmdglobal",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não existe nenhum *comando bloqueado* na lista.");
    }
  },
  {
    definition: {
      name: "listbcmdgp",
      aliases: [],
      description: "Comando de entretenimento e interação (listbcmdgp)",
      usage: "!listbcmdgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
    }
  },
  {
    definition: {
      name: "listblockcmdgp",
      aliases: [],
      description: "Comando de entretenimento e interação (listblockcmdgp)",
      usage: "!listblockcmdgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
    }
  },
  {
    definition: {
      name: "listpalavra",
      aliases: [],
      description: "Comando de entretenimento e interação (listpalavra)",
      usage: "!listpalavra",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Anti palavrão desativado!");
    }
  },
  {
    definition: {
      name: "lixo",
      aliases: [],
      description: "Comando de entretenimento e interação (lixo)",
      usage: "!lixo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "lobometal",
      aliases: [],
      description: "Comando de entretenimento e interação (lobometal)",
      usage: "!lobometal",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "logogame",
      aliases: [],
      description: "Minigame interativo de entretenimento (logogame)",
      usage: "!logogame",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "logos1",
      aliases: [],
      description: "Cria logo com texto personalizado em efeito LOGOS1",
      usage: "!logos1",
      category: "logos" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Aleatory");
    }
  },
  {
    definition: {
      name: "loli",
      aliases: [],
      description: "Comando de entretenimento e interação (loli)",
      usage: "!loli",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "louca",
      aliases: [],
      description: "Calcula a porcentagem de louca da pessoa",
      usage: "!louca",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*LOUCA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de louca da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "louco",
      aliases: [],
      description: "Calcula a porcentagem de louco da pessoa",
      usage: "!louco",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*LOUCO*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de louco da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "lovemsg",
      aliases: [],
      description: "Comando de entretenimento e interação (lovemsg)",
      usage: "!lovemsg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "lovemsg2",
      aliases: [],
      description: "Comando de entretenimento e interação (lovemsg2)",
      usage: "!lovemsg2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "lovemsg3",
      aliases: [],
      description: "Comando de entretenimento e interação (lovemsg3)",
      usage: "!lovemsg3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "luxury",
      aliases: [],
      description: "Comando de entretenimento e interação (luxury)",
      usage: "!luxury",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "lyrics",
      aliases: [],
      description: "Comando de entretenimento e interação (lyrics)",
      usage: "!lyrics",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar após o comando o nome da música...");
    }
  },
  {
    definition: {
      name: "lyrics2",
      aliases: [],
      description: "Comando de entretenimento e interação (lyrics2)",
      usage: "!lyrics2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("É o nome da música? Exemplo: the perfect girl");
    }
  },
  {
    definition: {
      name: "macaca",
      aliases: [],
      description: "Calcula a porcentagem de macaca da pessoa",
      usage: "!macaca",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*MACACA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de macaca da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "macaco",
      aliases: [],
      description: "Calcula a porcentagem de macaco da pessoa",
      usage: "!macaco",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*MACACO*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de macaco da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "madeira",
      aliases: [],
      description: "Comando de entretenimento e interação (madeira)",
      usage: "!madeira",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "marcar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (marcar)",
      usage: "!marcar",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !marcar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (marcar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "marcar2",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (marcar2)",
      usage: "!marcar2",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !marcar2 em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (marcar2)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "marcarwa",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (marcarwa)",
      usage: "!marcarwa",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !marcarwa em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (marcarwa)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "marvel",
      aliases: [],
      description: "Comando de entretenimento e interação (marvel)",
      usage: "!marvel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Bronxys|Aleatory");
    }
  },
  {
    definition: {
      name: "mascotegame",
      aliases: [],
      description: "Minigame interativo de entretenimento (mascotegame)",
      usage: "!mascotegame",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "mata",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (mata)",
      usage: "!mata",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !mata em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (mata)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "matar",
      aliases: [],
      description: "Elimina a pessoa de brincadeira",
      usage: "!matar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !matar em @${targetNum}!\nElimina a pessoa de brincadeira`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "matrix",
      aliases: [],
      description: "Comando de entretenimento e interação (matrix)",
      usage: "!matrix",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "mediafire",
      aliases: [],
      description: "Comando de entretenimento e interação (mediafire)",
      usage: "!mediafire",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faltando o link do mediafire para download do arquivo, cade?");
    }
  },
  {
    definition: {
      name: "megadl",
      aliases: [],
      description: "Comando de entretenimento e interação (megadl)",
      usage: "!megadl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de colocar um link do *mega.nz* após o comando.");
    }
  },
  {
    definition: {
      name: "mek",
      aliases: [],
      description: "Comando de entretenimento e interação (mek)",
      usage: "!mek",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("CPF gerado com sucesso:");
    }
  },
  {
    definition: {
      name: "memesvid",
      aliases: [],
      description: "Comando de entretenimento e interação (memesvid)",
      usage: "!memesvid",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Informe um tema para realizar a pesquisa de suas notícias!");
    }
  },
  {
    definition: {
      name: "mencionar",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (mencionar)",
      usage: "!mencionar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !mencionar em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (mencionar)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "menucoins",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (menucoins)",
      usage: "!menucoins",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !menucoins em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (menucoins)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "menucompleto",
      aliases: [],
      description: "Comando de entretenimento e interação (menucompleto)",
      usage: "!menucompleto",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("💋 𝐒𝐔𝐂𝐂𝐔𝐁𝐔𝐒 𝐉𝐎𝐆𝐎𝐒");
    }
  },
  {
    definition: {
      name: "menujogos",
      aliases: [],
      description: "Minigame interativo de entretenimento (menujogos)",
      usage: "!menujogos",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("💋 𝑺𝑼𝑪𝑪𝑼𝑩𝑼𝑺 𝑴𝑬𝑵𝑼 2");
    }
  },
  {
    definition: {
      name: "menuvip",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (menuvip)",
      usage: "!menuvip",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !menuvip em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (menuvip)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "merda",
      aliases: [],
      description: "Comando de entretenimento e interação (merda)",
      usage: "!merda",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Realizando ação..");
    }
  },
  {
    definition: {
      name: "metadinha",
      aliases: [],
      description: "Comando de entretenimento e interação (metadinha)",
      usage: "!metadinha",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Perfil Masculino");
    }
  },
  {
    definition: {
      name: "metalblue",
      aliases: [],
      description: "Comando de entretenimento e interação (metalblue)",
      usage: "!metalblue",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "metalfire",
      aliases: [],
      description: "Comando de entretenimento e interação (metalfire)",
      usage: "!metalfire",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "metalgold",
      aliases: [],
      description: "Comando de entretenimento e interação (metalgold)",
      usage: "!metalgold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "meubanco",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (meubanco)",
      usage: "!meubanco",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !meubanco em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (meubanco)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "minareset",
      aliases: [],
      description: "Comando de entretenimento e interação (minareset)",
      usage: "!minareset",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não existe nenhuma partida ainda em andamento no grupo.");
    }
  },
  {
    definition: {
      name: "minatips",
      aliases: [],
      description: "Comando de entretenimento e interação (minatips)",
      usage: "!minatips",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("- Nenhuma partida foi iniciada no grupo atualmente!");
    }
  },
  {
    definition: {
      name: "minerar",
      aliases: [],
      description: "Comando de entretenimento e interação (minerar)",
      usage: "!minerar",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "minerar_gold",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (minerar_gold)",
      usage: "!minerar_gold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !minerar_gold em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (minerar_gold)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "minerar_golds",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (minerar_golds)",
      usage: "!minerar_golds",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !minerar_golds em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (minerar_golds)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "minerarcoins",
      aliases: [],
      description: "Comando de entretenimento e interação (minerarcoins)",
      usage: "!minerarcoins",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "mineshelp",
      aliases: [],
      description: "Comando de entretenimento e interação (mineshelp)",
      usage: "!mineshelp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("- Nenhuma partida foi iniciada no grupo atualmente!");
    }
  },
  {
    definition: {
      name: "minhacarteira",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (minhacarteira)",
      usage: "!minhacarteira",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !minhacarteira em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (minhacarteira)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "minhacity",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (minhacity)",
      usage: "!minhacity",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !minhacity em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (minhacity)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "minhadupla",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (minhadupla)",
      usage: "!minhadupla",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !minhadupla em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (minhadupla)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "mlstalk",
      aliases: [],
      description: "Comando de entretenimento e interação (mlstalk)",
      usage: "!mlstalk",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*[ STALK ML ]* > NICKNAME : > ID : > SERVER :");
    }
  },
  {
    definition: {
      name: "modoaluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (modoaluguel)",
      usage: "!modoaluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aviso: 1 para ativar, 0 para desativar este recurso de forma global.");
    }
  },
  {
    definition: {
      name: "modobrincadeira",
      aliases: [],
      description: "Comando de entretenimento e interação (modobrincadeira)",
      usage: "!modobrincadeira",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "modobrincadeiras",
      aliases: [],
      description: "Comando de entretenimento e interação (modobrincadeiras)",
      usage: "!modobrincadeiras",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "modobutton",
      aliases: [],
      description: "Comando de entretenimento e interação (modobutton)",
      usage: "!modobutton",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O modo do botão foi alterado com sucesso para: > Reiniciando para salvar alterações");
    }
  },
  {
    definition: {
      name: "modocoins",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (modocoins)",
      usage: "!modocoins",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !modocoins em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (modocoins)`, [context.sender, target]);
    }
  },
];
