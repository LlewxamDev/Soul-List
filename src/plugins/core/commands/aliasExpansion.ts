import type { CommandModule } from "../../../core/types/command";

interface AliasSpec {
  command: string;
  aliases: string[];
}

const aliasSpecs: AliasSpec[] = [
  { command: "listacmd", aliases: ["comandos", "listacomandos", "lista-comandos", "listadecomandos", "todoscomandos", "commandslist", "commandlist", "menucomandos", "comandolist", "cmds", "lista-cmd", "helpcommands"] },
  { command: "buscar", aliases: ["pesquisar", "pesquisa", "searchweb", "websearch", "buscador", "buscarweb", "procurar", "consulta", "consultar", "searchengine"] },
  { command: "tomp3", aliases: ["mp3", "toaudio", "audio", "convertmp3", "convertermp3", "extractaudio", "extrairaudio", "audiofromvideo", "audiovideo", "mp3audio"] },
  { command: "totext", aliases: ["transcricao", "transcrição", "speechtext", "audio2text", "stt", "voztexto", "textodaudio", "ditado", "transcreva"] },
  { command: "play", aliases: ["ytplay", "playyoutube", "pesquisayoutube", "ytsearchplay", "youtubeplay", "musicplay"] },
  { command: "wikipedia", aliases: ["wikip", "wikibusca", "enciclopedia", "enciclopédia", "wikipediabr", "resumowiki"] },
  { command: "noticias", aliases: ["noticia", "notícia", "manchetes", "jornal", "ultimasnoticias", "últimasnotícias", "newspaper", "newsbr"] },
  { command: "filme", aliases: ["filmes", "cinema", "movieinfo", "buscarfilme", "consultafilme", "filmsearch"] },
  { command: "livro", aliases: ["livros", "books", "buscarlivro", "openlibrary", "booksearch", "livroinfo"] },
  { command: "serie", aliases: ["seriados", "buscarserie", "buscarseries", "serieinfo", "tvseries", "showinfo"] },
  { command: "status", aliases: ["statuschat", "chatstatus", "infostatus", "situacao", "situação", "resumochat", "infochat"] },
  { command: "perfil", aliases: ["meuperfil", "profileme", "fichausuario", "dadosperfil", "perfiluser", "conta"] },
  { command: "ping", aliases: ["p", "pong", "latencia", "latência", "testabot", "teste", "alive"] },
  { command: "clima", aliases: ["previsao", "previsão", "climatempo", "temperatura", "weatherinfo", "climahoje", "tempoagora"] },
  { command: "traduzir", aliases: ["traducao", "tradução", "translator", "traduzirtexto", "idiomas", "translateit", "linguagem"] },
  { command: "gpt", aliases: ["ia", "assistente", "askai", "ask", "chatia", "ai", "responderia"] },
  { command: "enquete", aliases: ["votar", "votacao", "votação", "poll", "enquetegrupo", "perguntagp", "votepoll"] },
  { command: "sticker", aliases: ["figurinhas", "figu", "figurinha", "stick", "make-sticker", "criarsticker", "stickerimg"] },
  { command: "toimg", aliases: ["png", "imagemsticker", "convertimagem", "stickerpng", "unstick", "imgsticker"] },
  { command: "togif", aliases: ["gifsticker", "videogif", "sticker-video", "animarsticker", "animacao", "animação"] },
  { command: "audiorapido", aliases: ["rapidoaudio", "speedaudio", "aceleraraudio", "fastaudio", "rapidomp3"] },
  { command: "audiolento", aliases: ["lentoaudio", "slowaudio", "desaceleraraudio", "slowmp3", "audiolenta"] },
  { command: "audioreverso", aliases: ["reverseaudio", "audioinvert", "inverteraudio", "reversomp3", "mp3reverso"] },
  { command: "bass", aliases: ["bassboostaudio", "graveaudio", "graves", "graveboost", "bassboost2", "bassmp3"] },
  { command: "videorapido", aliases: ["speedvid", "acelerarvideo", "fastmp4", "videovelocidade"] },
  { command: "videolento", aliases: ["slowmp4", "desacelerarvideo", "lentomp4", "videoslowmotion"] },
  { command: "videoreverso", aliases: ["reversevideo", "invertervideo", "reversomp4", "video-invertido"] },
  { command: "videosemaudio", aliases: ["removeaudio", "tiraraudio", "sem som", "mp4mudo", "videoquieto"] },
  { command: "calc", aliases: ["calculo", "cálculo", "math", "matematica", "matemática", "conta"] },
  { command: "chance", aliases: ["chancealeatoria", "percentual", "prob", "probabilidadealeatoria", "qualachance"] },
  { command: "caraoucoroa", aliases: ["moedinha", "flipcoin", "jogarcoin", "moedajogo", "headsor tails"] },
  { command: "sorteio", aliases: ["sortearopcao", "randomchoice", "escolher", "escolhaaleatoria", "tirarnomedo", "sorteioopcoes"] },
  { command: "conselho", aliases: ["dica", "dicas", "conselhoaleatorio", "sabedoria", "fraseconselho"] },
  { command: "conselhobiblico", aliases: ["versiculo", "versículo", "biblia", "bíblia", "palavrabiblica", "conselhodefe"] },
  { command: "signo", aliases: ["horoscopo", "horóscopo", "zodiaco", "zodíaco", "astrologia", "meusigno"] },
  { command: "cep", aliases: ["buscarcep", "consultacep", "enderecocep", "endereçoc ep", "viacep"] },
  { command: "coins", aliases: ["money", "dinheiro", "saldoeco", "economia", "ncoins", "n-coins", "goldrpg", "ouroeco"] },
  { command: "cassino", aliases: ["slotmachine", "slots", "maquininha", "jogarcassino", "casino"] },
  { command: "jokenpo", aliases: ["pedrapapeltesoura", "pedrapapel", "tesoura", "rockpaperscissors", "rps"] },
  { command: "dado", aliases: ["rolardado", "rolardados", "dicegame", "dadosrpg", "dado-rpg", "rolagem"] },
  { command: "quiz", aliases: ["quizgame", "triviaquiz", "perguntasrpg", "desafioquiz", "perguntasjogo"] },
  { command: "adivinhar", aliases: ["adivinhe", "palpitegame", "guessnumber", "numeroaleatorio", "jogonumeros"] },
  { command: "forca", aliases: ["hangmanpt", "jogopalavras", "palavrasecreta", "forcajogo", "adivinharpalavra"] },
  { command: "times", aliases: ["team", "teams", "divisaoequipes", "divisãotimes", "sorteartimes", "sorteequipes"] },
  { command: "desafio", aliases: ["desafiojogo", "missaojogo", "missãojogo", "tarefadesafio", "desafioleve"] },
  { command: "verdade", aliases: ["verdadegame", "truthgame", "perguntaleve", "verdadeou", "perguntaverdadeiro"] },
  { command: "jail", aliases: ["prisao", "prisão", "prisaorpg", "calabouco", "calabouço", "encarceramentorpg"] },
  { command: "unjail", aliases: ["libertarrpg", "soltarrpg", "liberarcela", "liberdade", "perdao"] },
  { command: "presos", aliases: ["listadepresos", "presosrpg", "celas", "listacelas", "prisaolist"] },
  { command: "cela", aliases: ["celarpg", "minhaprisao", "minhaprisão", "statuscela", "situacaocela"] },
  { command: "fianca", aliases: ["fiançarpg", "fiançarpg", "bailrpg", "pagarbail", "pagarcela"] },
  { command: "cargo", aliases: ["cargodopersonagem", "classe", "cargoreino", "hierarquiapessoa", "papelrpg"] },
  { command: "hierarquia", aliases: ["hierarquiadojogo", "cargosdojogo", "ordemrpg", "patentes", "autoridadesrpg"] },
  { command: "regrasrpg", aliases: ["leis", "leisdojogo", "regulamentorpg", "manualrpg", "manualdoreino"] },
  { command: "track", aliases: ["rpgtrack", "rastreiogame", "localizarrpg", "statusalvo", "seguiralvo"] },
  { command: "aiimg", aliases: ["gerarimagem", "criartimagem", "imagemia", "iaimagem", "text2image", "textoimagem"] },
  { command: "descreverimg", aliases: ["descreverimagem", "analisarexemplo", "visionimg", "visaoimagem", "imagemdescricao"] },
  { command: "ocr", aliases: ["ocrimagem", "lertexto", "extrairimagem", "imagemocr", "textscan"] },
  { command: "neon", aliases: ["neontext", "neonart", "artebrilhante", "logobrilho", "luzlogo"] },
  { command: "gold", aliases: ["goldtext", "goldart", "logouro", "douradologo", "artedourada"] },
  { command: "stone", aliases: ["stonetext", "stoneart", "pedralogo", "artedepedra", "rocha"] },
  { command: "firelogo", aliases: ["firetext", "fireart", "logoflame", "artedefogo", "fogonologo"] },
  { command: "icelogo", aliases: ["icetext", "iceart", "logogelo", "artedegelo", "frioart"] },
  { command: "matrix", aliases: ["matrixtext", "matrixart", "codigologo", "greenlogo", "terminalart"] },
  { command: "glitch", aliases: ["glitchtext", "glitchart", "errologo", "digitalart", "pixelartlogo"] },
  { command: "logo", aliases: ["logoart", "logocustom", "criarl logo", "simplelogo", "textart"] },
  { command: "banner", aliases: ["bannerart", "faixalogo", "bannerpersonalizado", "artebanner", "publicidade"] },
  { command: "capa", aliases: ["capaart", "capaimagem", "capapersonalizada", "coverart", "capatxt"] },
  { command: "thumbnail", aliases: ["thumbnailvideo", "thumbart", "thumbcustom", "miniaturavideo", "artethumb"] },
  { command: "poster", aliases: ["posterart", "cartazart", "flyerart", "cartazcustom", "arteposter"] },
  { command: "card", aliases: ["cardart", "cardcustom", "cartaoart", "fichacustom", "cartaoimagem"] },
  { command: "badge", aliases: ["badgeart", "seloart", "emblemaart", "distintivoart", "insignia"] },
  { command: "avatar", aliases: ["avatarart", "avatarcustom", "fotoperfilart", "iconeart", "perfilart"] },
  { command: "ytmp3", aliases: ["baixaryoutubeaudio", "downloadytmp3", "youtubeaudio", "audioyoutube", "baixaryt"] },
  { command: "ytmp4", aliases: ["baixaryoutubevideo", "downloadytmp4", "youtubevideo", "videoyoutube", "baixarvideo"] },
  { command: "ytdoc", aliases: ["baixardocumentoyt", "documentoyoutube", "ytarquivo", "arquivoyoutube"] },
  { command: "fotomenu", aliases: ["menumedia", "midiamenu", "imagemmenu", "capamenu"] },
  { command: "fotogp", aliases: ["fotogrupo", "avatargrupo", "imagempgrupo", "capagrupo", "groupfoto"] },
  { command: "fundobemvindo", aliases: ["boasvindasconfig", "welcomeconfigmedia", "entrada", "mensagementrada", "configentrada"] },
  { command: "fundosaiu", aliases: ["despedida", "saidagrupo", "mensagemsaida", "configsaida", "leaveconfigmedia"] },
  { command: "botsilencio", aliases: ["silenciobot", "mutebot", "botmute", "silenciargpbot"] },
  { command: "mutelist", aliases: ["listamutados", "mutados", "usuariosmute", "muteusers"] },
  { command: "listanegra", aliases: ["blacklistgp", "lista-negra", "adicionarlista", "banlist"] },
  { command: "listban", aliases: ["verlista", "listabanidos", "banlistgp", "blacklistlist"] },
  { command: "marcar2", aliases: ["marcarlista", "marcarnumerado", "taglist", "mencionarlista", "tagallnumerado"] },
  { command: "criartabela", aliases: ["tabelagrupo", "tabeladegrupo", "criarlista", "rankingtabela", "tabelarpg"] },
  { command: "botstats", aliases: ["stats", "diagnosticobot", "infotecnica", "informacoesbot", "informaçõesbot"] },
  { command: "premiumstatus", aliases: ["vip", "vipme", "premium", "assinatura", "assinaturastatus"] }
];

export function applyAliasExpansion(modules: CommandModule[]): void {
  const byName = new Map(modules.map((module) => [module.definition.name.toLowerCase(), module]));
  const reserved = new Set<string>();
  for (const module of modules) {
    reserved.add(module.definition.name.toLowerCase());
    for (const alias of module.definition.aliases) {
      reserved.add(alias.toLowerCase());
    }
  }
  for (const spec of aliasSpecs) {
    const module = byName.get(spec.command.toLowerCase());
    if (!module) {
      continue;
    }
    for (const alias of spec.aliases) {
      const key = alias.toLowerCase();
      if (!key || key.includes(" ") || reserved.has(key)) {
        continue;
      }
      module.definition.aliases.push(alias);
      reserved.add(key);
    }
  }
}
