import type { CommandModule } from "../../core/types/command";

export const pack6Commands: CommandModule[] = [
  {
    definition: {
      name: "remini",
      aliases: [],
      description: "Comando de entretenimento e interação (remini)",
      usage: "!remini",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "remini2",
      aliases: [],
      description: "Comando de entretenimento e interação (remini2)",
      usage: "!remini2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "remini3",
      aliases: [],
      description: "Comando de entretenimento e interação (remini3)",
      usage: "!remini3",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI:");
    }
  },
  {
    definition: {
      name: "removeraluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (removeraluguel)",
      usage: "!removeraluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Utilize o comando: registrar");
    }
  },
  {
    definition: {
      name: "rename",
      aliases: [],
      description: "Comando de entretenimento e interação (rename)",
      usage: "!rename",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma figurinha...");
    }
  },
  {
    definition: {
      name: "renovar_aluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (renovar_aluguel)",
      usage: "!renovar_aluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este grupo não está na lista de aluguel, use: listaaluguel pra ver os grupos que estão registrado.");
    }
  },
  {
    definition: {
      name: "resetadsgp",
      aliases: [],
      description: "Comando de entretenimento e interação (resetadsgp)",
      usage: "!resetadsgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sistema resetado");
    }
  },
  {
    definition: {
      name: "resetaki",
      aliases: [],
      description: "Comando de entretenimento e interação (resetaki)",
      usage: "!resetaki",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não existe nenhuma sessão ainda em andamento no grupo.");
    }
  },
  {
    definition: {
      name: "resetarv",
      aliases: [],
      description: "Comando de entretenimento e interação (resetarv)",
      usage: "!resetarv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.");
    }
  },
  {
    definition: {
      name: "resetarvelha",
      aliases: [],
      description: "Minigame interativo de entretenimento (resetarvelha)",
      usage: "!resetarvelha",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.");
    }
  },
  {
    definition: {
      name: "resetav",
      aliases: [],
      description: "Comando de entretenimento e interação (resetav)",
      usage: "!resetav",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.");
    }
  },
  {
    definition: {
      name: "resetavelha",
      aliases: [],
      description: "Minigame interativo de entretenimento (resetavelha)",
      usage: "!resetavelha",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.");
    }
  },
  {
    definition: {
      name: "resetscbet",
      aliases: [],
      description: "Comando de entretenimento e interação (resetscbet)",
      usage: "!resetscbet",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Gráficos restaurados para todos os usuários do RPG");
    }
  },
  {
    definition: {
      name: "resetvelha",
      aliases: [],
      description: "Minigame interativo de entretenimento (resetvelha)",
      usage: "!resetvelha",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.");
    }
  },
  {
    definition: {
      name: "responda",
      aliases: [],
      description: "Comando de entretenimento e interação (responda)",
      usage: "!responda",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Preciso de um link e uma mensagem Exemplo: rch <link do canal> <mensagem> | <número da fonte> Exemplo: rch https://whatsapp.com/channel/abc123 Frost | 2");
    }
  },
  {
    definition: {
      name: "revelarenigma",
      aliases: [],
      description: "Comando de entretenimento e interação (revelarenigma)",
      usage: "!revelarenigma",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Somente adms podem ver a(s) resposta(s) do jogos!");
    }
  },
  {
    definition: {
      name: "revelargartic",
      aliases: [],
      description: "Comando de entretenimento e interação (revelargartic)",
      usage: "!revelargartic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Somente adms podem ver a(s) resposta(s) do jogos!");
    }
  },
  {
    definition: {
      name: "revenue",
      aliases: [],
      description: "Comando de entretenimento e interação (revenue)",
      usage: "!revenue",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("NaN, você esqueceu de digitar após o comando.");
    }
  },
  {
    definition: {
      name: "reviver",
      aliases: [],
      description: "Comando de entretenimento e interação (reviver)",
      usage: "!reviver",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma mensagem do alvo!");
    }
  },
  {
    definition: {
      name: "reviverqr",
      aliases: [],
      description: "Comando de entretenimento e interação (reviverqr)",
      usage: "!reviverqr",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Reiniciando...");
    }
  },
  {
    definition: {
      name: "revlinkgp",
      aliases: [],
      description: "Comando de entretenimento e interação (revlinkgp)",
      usage: "!revlinkgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Link de convite do grupo foi revogado com êxito!");
    }
  },
  {
    definition: {
      name: "revlinkgroup",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (revlinkgroup)",
      usage: "!revlinkgroup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !revlinkgroup em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (revlinkgroup)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "rf",
      aliases: [],
      description: "Comando de entretenimento e interação (rf)",
      usage: "!rf",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite a letra que deseja responder..");
    }
  },
  {
    definition: {
      name: "rg_aluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (rg_aluguel)",
      usage: "!rg_aluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você não ativou o sistema de aluguel para esse grupo, nem global.. Leia como utilizar em infoaluguel Boa sorte.");
    }
  },
  {
    definition: {
      name: "rgaluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (rgaluguel)",
      usage: "!rgaluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você não ativou o sistema de aluguel para esse grupo, nem global.. Leia como utilizar em infoaluguel Boa sorte.");
    }
  },
  {
    definition: {
      name: "rgrent",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (rgrent)",
      usage: "!rgrent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !rgrent em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (rgrent)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "rgtake",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (rgtake)",
      usage: "!rgtake",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você já registrou sua marca ďagua, não é possível usar esse comando novamente.");
    }
  },
  {
    definition: {
      name: "rgtinder",
      aliases: [],
      description: "Comando de entretenimento e interação (rgtinder)",
      usage: "!rgtinder",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Erro ao tentar acessar o seu registro em meu banco!");
    }
  },
  {
    definition: {
      name: "rgtm",
      aliases: [],
      description: "Comando de entretenimento e interação (rgtm)",
      usage: "!rgtm",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este grupo/usuário já está registrado na lista de transmissão");
    }
  },
  {
    definition: {
      name: "rm_aluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (rm_aluguel)",
      usage: "!rm_aluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use o comando Assim removerá este grupo da listaaluguel");
    }
  },
  {
    definition: {
      name: "rmads",
      aliases: [],
      description: "Comando de entretenimento e interação (rmads)",
      usage: "!rmads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Não há anúncios definidos neste grupo...");
    }
  },
  {
    definition: {
      name: "rmadv",
      aliases: [],
      description: "Comando de entretenimento e interação (rmadv)",
      usage: "!rmadv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você esqueceu de mencionar o alvo após o comando.");
    }
  },
  {
    definition: {
      name: "rmaluguel",
      aliases: [],
      description: "Comando de entretenimento e interação (rmaluguel)",
      usage: "!rmaluguel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use o comando Assim removerá este grupo da listaaluguel");
    }
  },
  {
    definition: {
      name: "rmfotogroup",
      aliases: [],
      description: "Comando de entretenimento e interação (rmfotogroup)",
      usage: "!rmfotogroup",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("A foto do grupo foi removida com sucesso.");
    }
  },
  {
    definition: {
      name: "rmlevel",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (rmlevel)",
      usage: "!rmlevel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !rmlevel em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (rmlevel)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "rmnota",
      aliases: [],
      description: "Comando de entretenimento e interação (rmnota)",
      usage: "!rmnota",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só em grupo pode utilizar este comando.");
    }
  },
  {
    definition: {
      name: "rmphotogp",
      aliases: [],
      description: "Comando de entretenimento e interação (rmphotogp)",
      usage: "!rmphotogp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("A foto do grupo foi removida com sucesso.");
    }
  },
  {
    definition: {
      name: "rmrent",
      aliases: [],
      description: "Comando de entretenimento e interação (rmrent)",
      usage: "!rmrent",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("ID inexistente");
    }
  },
  {
    definition: {
      name: "rmtimeads",
      aliases: [],
      description: "Comando de entretenimento e interação (rmtimeads)",
      usage: "!rmtimeads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Selecione agora o modo de tempo na qual você irá remover...");
    }
  },
  {
    definition: {
      name: "rmtinder",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (rmtinder)",
      usage: "!rmtinder",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !rmtinder em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (rmtinder)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "rmtmads",
      aliases: [],
      description: "Comando de entretenimento e interação (rmtmads)",
      usage: "!rmtmads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Selecione agora o modo de tempo na qual você irá remover...");
    }
  },
  {
    definition: {
      name: "rntake",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (rntake)",
      usage: "!rntake",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Como você quer renomear algo que você não tem registro?");
    }
  },
  {
    definition: {
      name: "roletarussa",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (roletarussa)",
      usage: "!roletarussa",
      category: "games" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !roletarussa em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (roletarussa)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "roll",
      aliases: [],
      description: "Comando de entretenimento e interação (roll)",
      usage: "!roll",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Quantidade de dados muito exagerado.");
    }
  },
  {
    definition: {
      name: "romantic",
      aliases: [],
      description: "Comando de entretenimento e interação (romantic)",
      usage: "!romantic",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "roubar",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (roubar)",
      usage: "!roubar",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Marque uma figurinha...");
    }
  },
  {
    definition: {
      name: "rv",
      aliases: [],
      description: "Comando de entretenimento e interação (rv)",
      usage: "!rv",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.");
    }
  },
  {
    definition: {
      name: "rvisu",
      aliases: [],
      description: "Comando de entretenimento e interação (rvisu)",
      usage: "!rvisu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, *mencione uma imagem ou video em visualização única* para executar o comando.");
    }
  },
  {
    definition: {
      name: "safado",
      aliases: [],
      description: "Calcula a porcentagem de safadeza da pessoa",
      usage: "!safado",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*SAFADO*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de safadeza da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "sairdogp",
      aliases: [],
      description: "Comando de entretenimento e interação (sairdogp)",
      usage: "!sairdogp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Irei sair do grupo, por ordem do meu dono, adeus...");
    }
  },
  {
    definition: {
      name: "sairgp",
      aliases: [],
      description: "Comando de entretenimento e interação (sairgp)",
      usage: "!sairgp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só o bot ou o dono pode executar..");
    }
  },
  {
    definition: {
      name: "sairtinder",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (sairtinder)",
      usage: "!sairtinder",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !sairtinder em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (sairtinder)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "samong",
      aliases: [],
      description: "Comando de entretenimento e interação (samong)",
      usage: "!samong",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Error stikamong:");
    }
  },
  {
    definition: {
      name: "sanime",
      aliases: [],
      description: "Envia imagens e conteúdos temáticos de anime (sanime)",
      usage: "!sanime",
      category: "anime" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você não digitou nenhuma palavra ao lado do comando.");
    }
  },
  {
    definition: {
      name: "sat",
      aliases: [],
      description: "Comando de entretenimento e interação (sat)",
      usage: "!sat",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Defina a quantidade de mensagens a serem enviadas no grupo ao usar o comando setadsgp Ex: 5");
    }
  },
  {
    definition: {
      name: "savegp",
      aliases: [],
      description: "Comando de entretenimento e interação (savegp)",
      usage: "!savegp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Grupo *");
    }
  },
  {
    definition: {
      name: "scdl",
      aliases: [],
      description: "Comando de entretenimento e interação (scdl)",
      usage: "!scdl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá faltando aí! Cadê o link da música no SoundCloud hein?");
    }
  },
  {
    definition: {
      name: "scep",
      aliases: [],
      description: "Consulta informações e dados sobre scep",
      usage: "!scep",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Cadê o cep?");
    }
  },
  {
    definition: {
      name: "screenshot",
      aliases: [],
      description: "Comando de entretenimento e interação (screenshot)",
      usage: "!screenshot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Retorne após o comando o link do site que você deseja capturar");
    }
  },
  {
    definition: {
      name: "screenshots",
      aliases: [],
      description: "Comando de entretenimento e interação (screenshots)",
      usage: "!screenshots",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Retorne após o comando o link do site que você deseja capturar");
    }
  },
  {
    definition: {
      name: "screenshotweb",
      aliases: [],
      description: "Comando de entretenimento e interação (screenshotweb)",
      usage: "!screenshotweb",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• *Site:*");
    }
  },
  {
    definition: {
      name: "semoji",
      aliases: [],
      description: "Comando de entretenimento e interação (semoji)",
      usage: "!semoji",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você está usando o comando de forma errada, use: * [emj]/[pltf]* — • *Plataformas disponíveis:* whatsapp, facebook, google, samsung, twitter, apple, microsoft, mesengger, joypixels");
    }
  },
  {
    definition: {
      name: "sender",
      aliases: [],
      description: "Calcula a porcentagem de sender da pessoa",
      usage: "!sender",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*SENDER*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de sender da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "seradm",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (seradm)",
      usage: "!seradm",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !seradm em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (seradm)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "sermembro",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (sermembro)",
      usage: "!sermembro",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !sermembro em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (sermembro)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "setads",
      aliases: [],
      description: "Comando de entretenimento e interação (setads)",
      usage: "!setads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Retorne após o comando a sua mensagem/anúncio... Ex: sua mensagem aqui");
    }
  },
  {
    definition: {
      name: "setadstime",
      aliases: [],
      description: "Comando de entretenimento e interação (setadstime)",
      usage: "!setadstime",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Defina a quantidade de mensagens a serem enviadas no grupo ao usar o comando setadsgp Ex: 5");
    }
  },
  {
    definition: {
      name: "setfotogp",
      aliases: [],
      description: "Comando de entretenimento e interação (setfotogp)",
      usage: "!setfotogp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use: <Marque uma foto>");
    }
  },
  {
    definition: {
      name: "setmeca",
      aliases: [],
      description: "Comando de entretenimento e interação (setmeca)",
      usage: "!setmeca",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SETADO COM SUCESSO");
    }
  },
  {
    definition: {
      name: "setpix",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (setpix)",
      usage: "!setpix",
      category: "rpg" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !setpix em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (setpix)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "setprefixs",
      aliases: [],
      description: "Comando de entretenimento e interação (setprefixs)",
      usage: "!setprefixs",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Sucesso, alterou o nome do grupo");
    }
  },
  {
    definition: {
      name: "sfundo",
      aliases: [],
      description: "Comando de entretenimento e interação (sfundo)",
      usage: "!sfundo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("So imagem amigo(a)!");
    }
  },
  {
    definition: {
      name: "shadow",
      aliases: [],
      description: "Comando de entretenimento e interação (shadow)",
      usage: "!shadow",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "shazam",
      aliases: [],
      description: "Comando de entretenimento e interação (shazam)",
      usage: "!shazam",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Envie o áudio para eu tentar detectar o nome da música!");
    }
  },
  {
    definition: {
      name: "shipo",
      aliases: [],
      description: "Calcula a porcentagem de shipo da pessoa",
      usage: "!shipo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*SHIPO*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de shipo da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "sigma",
      aliases: [],
      description: "Calcula a porcentagem de sigma da pessoa",
      usage: "!sigma",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*SIGMA*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de sigma da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "signo",
      aliases: [],
      description: "Comando de entretenimento e interação (signo)",
      usage: "!signo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite seu signo, exemplo: Virgem");
    }
  },
  {
    definition: {
      name: "simi",
      aliases: [],
      description: "Comando de entretenimento e interação (simi)",
      usage: "!simi",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Resposta não encontrada..");
    }
  },
  {
    definition: {
      name: "simih",
      aliases: [],
      description: "Comando de entretenimento e interação (simih)",
      usage: "!simih",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "simih2",
      aliases: [],
      description: "Comando de entretenimento e interação (simih2)",
      usage: "!simih2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("1 pra ligar / 0 pra desligar");
    }
  },
  {
    definition: {
      name: "sip",
      aliases: [],
      description: "Calcula a porcentagem de sip da pessoa",
      usage: "!sip",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const percent = Math.floor(Math.random() * 101);
      await context.replyWithMentions(`🎯 [*SIP*] @${targetNum} tem *${percent}%*!\nCalcula a porcentagem de sip da pessoa`, [target]);
    }
  },
  {
    definition: {
      name: "sistemgold",
      aliases: [],
      description: "Comando de entretenimento e interação (sistemgold)",
      usage: "!sistemgold",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("1 pra ligar / 0 pra desligar");
    }
  },
  {
    definition: {
      name: "slot",
      aliases: [],
      description: "Comando de entretenimento e interação (slot)",
      usage: "!slot",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando só pode ser utilizado quando o sistema modocoins está ativado no grupo.");
    }
  },
  {
    definition: {
      name: "slow",
      aliases: [],
      description: "Comando de entretenimento e interação (slow)",
      usage: "!slow",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.");
    }
  },
  {
    definition: {
      name: "slowvid",
      aliases: [],
      description: "Comando de entretenimento e interação (slowvid)",
      usage: "!slowvid",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Error:");
    }
  },
  {
    definition: {
      name: "smoke",
      aliases: [],
      description: "Comando de entretenimento e interação (smoke)",
      usage: "!smoke",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "so_adm",
      aliases: [],
      description: "Comando de entretenimento e interação (so_adm)",
      usage: "!so_adm",
      category: "admin" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: 1, caso seja desativar e só trocar o 1 pelo 0.");
    }
  },
  {
    definition: {
      name: "soco",
      aliases: [],
      description: "Dá um soco de brincadeira na pessoa",
      usage: "!soco",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !soco em @${targetNum}!\nDá um soco de brincadeira na pessoa`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "sopk",
      aliases: [],
      description: "Comando de entretenimento e interação (sopk)",
      usage: "!sopk",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só caminha");
    }
  },
  {
    definition: {
      name: "sortcoins",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (sortcoins)",
      usage: "!sortcoins",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !sortcoins em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (sortcoins)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "sorteio",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (sorteio)",
      usage: "!sorteio",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !sorteio em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (sorteio)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "sorteiocoins",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (sorteiocoins)",
      usage: "!sorteiocoins",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !sorteiocoins em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (sorteiocoins)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "sorteionumero",
      aliases: [],
      description: "Comando de entretenimento e interação (sorteionumero)",
      usage: "!sorteionumero",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque algo após o comando, por exemplo: *sorteio* _de 100 R$_");
    }
  },
  {
    definition: {
      name: "sorteionumeros",
      aliases: [],
      description: "Comando de entretenimento e interação (sorteionumeros)",
      usage: "!sorteionumeros",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque algo após o comando, por exemplo: *sorteio* _de 100 R$_");
    }
  },
  {
    definition: {
      name: "soundcloud",
      aliases: [],
      description: "Comando de entretenimento e interação (soundcloud)",
      usage: "!soundcloud",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Tá faltando aí! Cadê o link da música no SoundCloud hein?");
    }
  },
  {
    definition: {
      name: "space",
      aliases: [],
      description: "Comando de entretenimento e interação (space)",
      usage: "!space",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Bronxys|Aleatory");
    }
  },
  {
    definition: {
      name: "spotify",
      aliases: [],
      description: "Comando de entretenimento e interação (spotify)",
      usage: "!spotify",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O campo de texto está vazio. Por favor, insira do URL do Spotify, sendo .");
    }
  },
  {
    definition: {
      name: "springtrap",
      aliases: [],
      description: "Comando de entretenimento e interação (springtrap)",
      usage: "!springtrap",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Resposta não encontrada..");
    }
  },
  {
    definition: {
      name: "ssweb",
      aliases: [],
      description: "Comando de entretenimento e interação (ssweb)",
      usage: "!ssweb",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• *Site:*");
    }
  },
  {
    definition: {
      name: "stalkff",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (stalkff)",
      usage: "!stalkff",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !stalkff em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (stalkff)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "stalkig",
      aliases: [],
      description: "Comando de entretenimento e interação (stalkig)",
      usage: "!stalkig",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o usuário do Instagram Example: erlanrahmat_14");
    }
  },
  {
    definition: {
      name: "stalkml",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (stalkml)",
      usage: "!stalkml",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !stalkml em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (stalkml)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "stalktt",
      aliases: [],
      description: "Comando de entretenimento e interação (stalktt)",
      usage: "!stalktt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o usuário do Tiktok Example: betabotzz");
    }
  },
  {
    definition: {
      name: "stalkyt",
      aliases: [],
      description: "Comando de entretenimento e interação (stalkyt)",
      usage: "!stalkyt",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Coloque o usuário do Youtube example : jerofc");
    }
  },
  {
    definition: {
      name: "startads",
      aliases: [],
      description: "Comando de entretenimento e interação (startads)",
      usage: "!startads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❕ *ADs System desativado com sucesso* 🗯");
    }
  },
  {
    definition: {
      name: "steel",
      aliases: [],
      description: "Comando de entretenimento e interação (steel)",
      usage: "!steel",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Bronxys|Aleatory");
    }
  },
  {
    definition: {
      name: "stickerinfo",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (stickerinfo)",
      usage: "!stickerinfo",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Emojis: *${stickerMetadata?.emojis?.join(");
    }
  },
  {
    definition: {
      name: "stmetadata",
      aliases: [],
      description: "Comando de entretenimento e interação (stmetadata)",
      usage: "!stmetadata",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("• Emojis: *${stickerMetadata?.emojis?.join(");
    }
  },
  {
    definition: {
      name: "stone",
      aliases: [],
      description: "Comando de entretenimento e interação (stone)",
      usage: "!stone",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: Bronxys|Aleatory");
    }
  },
  {
    definition: {
      name: "style",
      aliases: [],
      description: "Comando de entretenimento e interação (style)",
      usage: "!style",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "substituir",
      aliases: [],
      description: "Comando de entretenimento e interação (substituir)",
      usage: "!substituir",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O arquivo foi substituído para outro local com sucesso.");
    }
  },
  {
    definition: {
      name: "sugestao",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (sugestao)",
      usage: "!sugestao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !sugestao em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (sugestao)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "sugestão",
      aliases: [],
      description: "Comando de entretenimento e interação (sugestão)",
      usage: "!sugestão",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aqui está o resultado de *sugestão*!");
    }
  },
  {
    definition: {
      name: "summerize",
      aliases: [],
      description: "Comando de entretenimento e interação (summerize)",
      usage: "!summerize",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Estou resumindo o texto solicitado. Isso pode levar alguns segundos...");
    }
  },
  {
    definition: {
      name: "superimg",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (superimg)",
      usage: "!superimg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !superimg em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (superimg)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "suporte-dono",
      aliases: [],
      description: "Comando de entretenimento e interação (suporte-dono)",
      usage: "!suporte-dono",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("O contato dele caso você use imune: https://wa.me/5511911942403");
    }
  },
  {
    definition: {
      name: "suruba",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (suruba)",
      usage: "!suruba",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !suruba em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (suruba)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "surubao",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (surubao)",
      usage: "!surubao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !surubao em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (surubao)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "tabela",
      aliases: [],
      description: "Comando de entretenimento e interação (tabela)",
      usage: "!tabela",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: tradutor pt|Dog");
    }
  },
  {
    definition: {
      name: "tabeladogp",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tabeladogp)",
      usage: "!tabeladogp",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tabeladogp em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tabeladogp)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "tabelinha",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tabelinha)",
      usage: "!tabelinha",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tabelinha em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tabelinha)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "take",
      aliases: [],
      description: "Gera figurinha estilizada ou recurso de sticker (take)",
      usage: "!take",
      category: "stickers" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Você usou de forma errada... Marque uma figurinha.");
    }
  },
  {
    definition: {
      name: "tempocmd",
      aliases: [],
      description: "Consulta informações e dados sobre tempocmd",
      usage: "!tempocmd",
      category: "search" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Exemplo: 120 60 = 1 minuto Exemplo que coloquei, com o : limitarcmd ativo, só podera usar comandos a cada 2 minutos Boa sorte.");
    }
  },
  {
    definition: {
      name: "tentacles",
      aliases: [],
      description: "Comando de entretenimento e interação (tentacles)",
      usage: "!tentacles",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "tentaclevizu",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tentaclevizu)",
      usage: "!tentaclevizu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tentaclevizu em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tentaclevizu)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "terabox",
      aliases: [],
      description: "Comando de entretenimento e interação (terabox)",
      usage: "!terabox",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Faltou o link no comando Exemplo : Url");
    }
  },
  {
    definition: {
      name: "terminar_namoro",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (terminar_namoro)",
      usage: "!terminar_namoro",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !terminar_namoro em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (terminar_namoro)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "terminar_votacao",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (terminar_votacao)",
      usage: "!terminar_votacao",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !terminar_votacao em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (terminar_votacao)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "teste",
      aliases: [],
      description: "Comando de entretenimento e interação (teste)",
      usage: "!teste",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("USANDO O V1");
    }
  },
  {
    definition: {
      name: "thdl",
      aliases: [],
      description: "Comando de entretenimento e interação (thdl)",
      usage: "!thdl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, adicione um link do Threads post/reel.");
    }
  },
  {
    definition: {
      name: "thighs",
      aliases: [],
      description: "Comando de entretenimento e interação (thighs)",
      usage: "!thighs",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("*Aqui está* 😳🔥");
    }
  },
  {
    definition: {
      name: "thighvizu",
      aliases: [],
      description: "Comando de entretenimento e interação (thighvizu)",
      usage: "!thighvizu",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Aqui o sua imagem de ótima qualidade 😈");
    }
  },
  {
    definition: {
      name: "threads",
      aliases: [],
      description: "Comando de entretenimento e interação (threads)",
      usage: "!threads",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Por favor, adicione um link do Threads post/reel.");
    }
  },
  {
    definition: {
      name: "thunder",
      aliases: [],
      description: "Comando de entretenimento e interação (thunder)",
      usage: "!thunder",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "thunderv2",
      aliases: [],
      description: "Comando de entretenimento e interação (thunderv2)",
      usage: "!thunderv2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Digite algo, Exemplo: bronxys");
    }
  },
  {
    definition: {
      name: "tiktok",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktok)",
      usage: "!tiktok",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("link do Tiktok");
    }
  },
  {
    definition: {
      name: "tiktok_audio",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktok_audio)",
      usage: "!tiktok_audio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("link do Tiktok");
    }
  },
  {
    definition: {
      name: "tiktok_video",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktok_video)",
      usage: "!tiktok_video",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("link do Tiktok");
    }
  },
  {
    definition: {
      name: "tiktok2",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktok2)",
      usage: "!tiktok2",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("link do Tiktok");
    }
  },
  {
    definition: {
      name: "tiktokaudio",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktokaudio)",
      usage: "!tiktokaudio",
      category: "downloads" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("link do Tiktok");
    }
  },
  {
    definition: {
      name: "tiktokimage",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktokimage)",
      usage: "!tiktokimage",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Utilize o comando: registrar");
    }
  },
  {
    definition: {
      name: "tiktokimg",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktokimg)",
      usage: "!tiktokimg",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Utilize o comando: registrar");
    }
  },
  {
    definition: {
      name: "tiktoksearch",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktoksearch)",
      usage: "!tiktoksearch",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("SUCESSO, SEU ARQUIVO AQUI: :");
    }
  },
  {
    definition: {
      name: "tiktokslide",
      aliases: [],
      description: "Comando de entretenimento e interação (tiktokslide)",
      usage: "!tiktokslide",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Limit kamu tidak cukup! Limit tersisa: Limit yang dibutuhkan:");
    }
  },
  {
    definition: {
      name: "tiktokstalker",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tiktokstalker)",
      usage: "!tiktokstalker",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tiktokstalker em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tiktokstalker)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "tinyurl",
      aliases: [],
      description: "Comando de entretenimento e interação (tinyurl)",
      usage: "!tinyurl",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("❌️ *Forma incorreta, use está como exemplo:* https://instagram.com/annabot.wpp");
    }
  },
  {
    definition: {
      name: "tirar_docnt",
      aliases: [],
      description: "Interage de forma divertida com a pessoa marcada (tirar_docnt)",
      usage: "!tirar_docnt",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      const target = context.mentions[0] || context.quotedSender || context.sender;
      const targetNum = target.split("@")[0] || target;
      const senderNum = context.sender.split("@")[0] || context.sender;
      await context.replyWithMentions(`✨ @${senderNum} usou !tirar_docnt em @${targetNum}!\nInterage de forma divertida com a pessoa marcada (tirar_docnt)`, [context.sender, target]);
    }
  },
  {
    definition: {
      name: "tirar_nota",
      aliases: [],
      description: "Comando de entretenimento e interação (tirar_nota)",
      usage: "!tirar_nota",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Só em grupo pode utilizar este comando.");
    }
  },
  {
    definition: {
      name: "tirar_prefixo",
      aliases: [],
      description: "Comando de entretenimento e interação (tirar_prefixo)",
      usage: "!tirar_prefixo",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Para usar este comando, você deve ativar o comando, multiprefix Exemplo: multiprefixo");
    }
  },
  {
    definition: {
      name: "tirarcmdpremium",
      aliases: [],
      description: "Comando de entretenimento e interação (tirarcmdpremium)",
      usage: "!tirarcmdpremium",
      category: "fun" as any,
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply("Este comando não é premium, não esta na lista para ser tirado.");
    }
  },
];
