import { CATEGORY_LABELS, CATEGORY_ORDER } from "../../../core/constants/categories";
import { CategoryMenuBuilder } from "../../../menu/builders/CategoryMenuBuilder";
import { MenuBuilder } from "../../../menu/builders/MenuBuilder";
import type { CommandModule } from "../../../core/types/command";

const menuBuilder = new MenuBuilder();
const categoryBuilder = new CategoryMenuBuilder();

const CATEGORY_ALIASES: Record<string, (typeof CATEGORY_ORDER)[number]> = {
  infos: "info",
  informacoes: "info",
  pesquisa: "search",
  busca: "search",
  midia: "media",
  audio: "audio",
  musica: "audio",
  membros: "members",
  admin: "admin",
  administracao: "admin",
  adm: "admin",
  dono: "owner",
  criador: "owner",
  anime: "anime",
  games: "games",
  jogos: "games",
  vip: "vip",
  rpg: "rpg",
  downloads: "downloads",
  download: "downloads",
  baixar: "downloads",
  figurinhas: "stickers",
  stickers: "stickers",
  fig: "stickers",
  logos: "logos",
  logo: "logos",
  brincadeiras: "fun",
  diversao: "fun",
  fun: "fun",
  moderacao: "moderation",
  sistema: "system",
  "+18": "sensitive",
  nsfw: "sensitive",
  hentai: "sensitive"
};

const PROMOTED_COMMANDS: Record<string, string[]> = {
  info: ["menu", "ping", "botinfo", "perfil", "uptime", "regras", "infocmd"],
  downloads: ["play", "ytmp3", "ytmp4", "faceplay", "instaplay", "ytdoc", "tiktok", "instagram", "facebook", "twitter"],
  stickers: ["figu", "s", "toimg", "tovideo", "attp", "ttp", "roubar", "qc", "figuwm"],
  fun: ["beijar", "abracar", "tapa", "chutar", "cafune", "morder", "ship", "corno", "gay", "gado", "dado", "roleta", "piada", "charada", "cantada", "8ball", "coinflip"],
  admin: ["ban", "kick", "warn", "mute", "unmute", "tagall", "totag", "abrir", "fechar", "antilink", "admins", "linkgp"],
  search: ["google", "wiki", "clima", "noticias", "letra", "traduzir", "cep", "dolar", "playstore"],
  economy: ["daily", "saldo", "pix", "pagar", "trabalhar", "crime", "cassino", "roleta", "ranking", "banco", "comprarvip"],
  games: ["forca", "velha", "quiz", "adivinhar", "dado", "caraoucoroa", "charada"],
  anime: ["animeinfo", "waifu", "neko", "shikimori", "shinobu", "megumin", "cosplay", "animeimg"],
  owner: ["desligarbot", "ligarbot", "setprefix", "setpremium", "health", "plugins"]
};

export const menuCommand: CommandModule = {
  definition: {
    name: "menu",
    aliases: ["help", "painel"],
    description: "Mostra o menu principal com lista interativa de categorias ou busca comandos.",
    usage: "!menu [categoria | termo]",
    category: "info",
    cooldownSeconds: 3
  },
  async execute(context) {
    const rawArg = context.args[0]?.toLowerCase();
    const category =
      CATEGORY_ORDER.find((entry) => entry === rawArg) ??
      (rawArg ? CATEGORY_ALIASES[rawArg] : undefined);

    // 1. Submenu de Categoria com Ranking dos Mais Usados e Paginação Estável
    if (category) {
      await context.react("📂");
      const allCommands = context.registry.listByCategory(category);
      const promotedNames = PROMOTED_COMMANDS[category] || [];
      const promotedSet = new Set(promotedNames);

      const promotedList = promotedNames
        .map((p) => allCommands.find((c) => c.name.toLowerCase() === p))
        .filter(Boolean) as typeof allCommands;

      const otherList = allCommands
        .filter((c) => !promotedSet.has(c.name.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));

      const orderedCommands = [...promotedList, ...otherList];

      const pageArg = Number(context.args[1]) || 1;
      const pageSize = 25; // Otimizado para renderização no mobile
      const totalPages = Math.ceil(orderedCommands.length / pageSize) || 1;
      const currentPage = Math.max(1, Math.min(pageArg, totalPages));
      const startIdx = (currentPage - 1) * pageSize;
      const pageCommands = orderedCommands.slice(startIdx, startIdx + pageSize);

      const catText = categoryBuilder.build(context, category, currentPage, totalPages);
      const sections: Array<{ title: string; rows: Array<{ id: string; title: string; description: string }> }> = [];

      // Na página 1, se houver destaques, agrupa na seção superior
      if (currentPage === 1 && promotedList.length > 0) {
        sections.push({
          title: `⭐ MAIS USADOS / DESTAQUES`,
          rows: promotedList.map((cmd) => ({
            id: `${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
            title: `⭐ ${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
            description: cmd.description ? cmd.description.slice(0, 60) : "Comando popular em destaque"
          }))
        });

        const remainingOnPage = pageCommands.filter((c) => !promotedSet.has(c.name.toLowerCase()));
        if (remainingOnPage.length > 0) {
          sections.push({
            title: `⚡ COMANDOS (${CATEGORY_LABELS[category].toUpperCase()})`,
            rows: remainingOnPage.map((cmd) => ({
              id: `${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
              title: `⚡ ${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
              description: cmd.description ? cmd.description.slice(0, 60) : ""
            }))
          });
        }
      } else {
        sections.push({
          title: `⚡ COMANDOS (${CATEGORY_LABELS[category].toUpperCase()}) - PÁG. ${currentPage}/${totalPages}`,
          rows: pageCommands.map((cmd) => ({
            id: `${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
            title: `⚡ ${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
            description: cmd.description ? cmd.description.slice(0, 60) : ""
          }))
        });
      }

      // Seção de navegação
      const navRows: Array<{ id: string; title: string; description: string }> = [];
      if (currentPage < totalPages) {
        navRows.push({
          id: `${context.prefix ?? context.env.defaultPrefix}menu ${category} ${currentPage + 1}`,
          title: `➡️ Próxima Página (${currentPage + 1}/${totalPages})`,
          description: "Ver mais comandos desta categoria"
        });
      }
      if (currentPage > 1) {
        navRows.push({
          id: `${context.prefix ?? context.env.defaultPrefix}menu ${category} ${currentPage - 1}`,
          title: `⬅️ Página Anterior (${currentPage - 1}/${totalPages})`,
          description: "Voltar para a página anterior"
        });
      }
      navRows.push(
        {
          id: `${context.prefix ?? context.env.defaultPrefix}menu`,
          title: "🏠 Menu Principal",
          description: "Voltar ao painel geral de categorias"
        },
        {
          id: `${context.prefix ?? context.env.defaultPrefix}listacmd`,
          title: "📜 Todos os Comandos",
          description: "Ver o índice geral completo"
        }
      );

      sections.push({
        title: "📂 NAVEGAÇÃO",
        rows: navRows
      });

      await context.sendInteractiveButtons({
        title: `📂 CATEGORIA: ${CATEGORY_LABELS[category] || category}`,
        body: catText,
        footer: `${context.env.botName} • Toque no botão para abrir a lista`,
        menuTitle: "📑 ABRIR LISTA DE COMANDOS",
        sections
      });
      return;
    }

    // 2. Busca Inteligente de Comandos (ex: !menu beijar, !menu figu, !buscar play)
    const searchQuery = context.args.join(" ").trim().toLowerCase();
    if (searchQuery) {
      await context.react("🔍");
      const allCommands = context.registry.all().filter((c) => !c.hidden);

      const scored = allCommands
        .map((cmd) => {
          let score = 0;
          const nameLower = cmd.name.toLowerCase();
          if (nameLower === searchQuery) score += 100;
          else if (nameLower.startsWith(searchQuery)) score += 60;
          else if (nameLower.includes(searchQuery)) score += 40;

          if (cmd.aliases.some((a) => a.toLowerCase() === searchQuery)) score += 50;
          else if (cmd.aliases.some((a) => a.toLowerCase().startsWith(searchQuery))) score += 30;
          else if (cmd.aliases.some((a) => a.toLowerCase().includes(searchQuery))) score += 20;

          if (cmd.description.toLowerCase().includes(searchQuery)) score += 15;
          if (cmd.category.toLowerCase().includes(searchQuery)) score += 15;

          return { cmd, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);

      if (scored.length === 0) {
        await context.reply(
          `🔍 Nenhum comando encontrado para *"${searchQuery}"*.\n` +
          `Digite *${context.prefix ?? context.env.defaultPrefix}menu* para ver todas as categorias disponíveis.`
        );
        return;
      }

      const matchRows = scored.slice(0, 25).map(({ cmd }) => ({
        id: `${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
        title: `⚡ ${context.prefix ?? context.env.defaultPrefix}${cmd.name}`,
        description: cmd.description ? cmd.description.slice(0, 50) : `${(CATEGORY_LABELS as Record<string, string>)[cmd.category] || cmd.category}`
      }));

      await context.sendInteractiveButtons({
        title: `🔍 BUSCA: "${searchQuery.toUpperCase()}"`,
        body: [
          `╭─ 🔍 *BUSCA DE COMANDOS*`,
          `├ 🔎 Termo: *"${searchQuery}"*`,
          `├ 📊 Encontrados: *${scored.length}* comando(s)`,
          `├ ⚡ *Prefixo:* [ ${context.prefix ?? context.env.defaultPrefix} ]`,
          `╰─────────────────────`,
          `O comando desejado está no topo da lista abaixo. Toque para abrir:`
        ].join("\n"),
        footer: `${context.env.botName} • Resultados da pesquisa`,
        menuTitle: "📑 VER COMANDOS ENCONTRADOS",
        sections: [
          {
            title: `🎯 RESULTADOS DA PESQUISA (${scored.length})`,
            rows: matchRows
          },
          {
            title: "📂 NAVEGAÇÃO",
            rows: [
              {
                id: `${context.prefix ?? context.env.defaultPrefix}menu`,
                title: "🏠 Menu Principal",
                description: "Voltar para o menu principal"
              }
            ]
          }
        ]
      });
      return;
    }

    // 3. Menu Principal com Seção de Mais Usados e Categorias Organizadas
    await context.react("📑");

    const categories = context.registry.categories();
    const bodyText = menuBuilder.build(context);
    const catSet = new Set(categories);

    const sections = [
      {
        title: "⭐ MAIS USADOS (TOP RANKING)",
        rows: [
          {
            id: `${context.prefix ?? context.env.defaultPrefix}play`,
            title: "🎵 !play",
            description: "Buscar e baixar músicas ou vídeos do YouTube"
          },
          {
            id: `${context.prefix ?? context.env.defaultPrefix}figu`,
            title: "🖼️ !figu",
            description: "Criar figurinhas estáticas ou animadas"
          },
          {
            id: `${context.prefix ?? context.env.defaultPrefix}daily`,
            title: "🎁 !daily",
            description: "Coletar recompensa diária de moedas e XP"
          },
          {
            id: `${context.prefix ?? context.env.defaultPrefix}saldo`,
            title: "💰 !saldo",
            description: "Ver saldo na carteira e no banco"
          },
          {
            id: `${context.prefix ?? context.env.defaultPrefix}perfil`,
            title: "👤 !perfil",
            description: "Ver seu perfil, nível, XP e casamento"
          }
        ]
      },
      {
        title: "ℹ️ INFORMAÇÕES & UTILIDADES",
        rows: [
          catSet.has("info") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu info`,
            title: "📁 Infos",
            description: "Status do bot, regras e ping"
          },
          catSet.has("search") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu search`,
            title: "📁 Pesquisa",
            description: "Google, Wikipedia, clima e consultas"
          },
          catSet.has("members") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu members`,
            title: "📁 Membros",
            description: "Perfil, casamento, rank e estatísticas"
          },
          catSet.has("system") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu system`,
            title: "📁 Sistema",
            description: "Informações e controle técnico do bot"
          }
        ].filter(Boolean) as Array<{ id: string; title: string; description: string }>
      },
      {
        title: "📥 DOWNLOADS & MÍDIA",
        rows: [
          catSet.has("downloads") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu downloads`,
            title: "📁 Downloads",
            description: "Músicas e vídeos do YouTube (MP3/MP4)"
          },
          catSet.has("stickers") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu stickers`,
            title: "📁 Figurinhas",
            description: "Criar stickers, editar e converter"
          },
          catSet.has("media") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu media`,
            title: "📁 Mídia",
            description: "Processamento de imagens, áudio e vídeo"
          },
          catSet.has("audio") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu audio`,
            title: "📁 Áudio",
            description: "Efeitos e modificadores de áudio"
          },
          catSet.has("logos") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu logos`,
            title: "📁 Logos",
            description: "Gerador de texto estilizado e logos 3D"
          }
        ].filter(Boolean) as Array<{ id: string; title: string; description: string }>
      },
      {
        title: "🎮 JOGOS, RPG & ENTRETENIMENTO",
        rows: [
          catSet.has("games") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu games`,
            title: "📁 Games",
            description: "Jogos interativos e desafios no chat"
          },
          catSet.has("anime") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu anime`,
            title: "📁 Anime",
            description: "Fotos de anime, waifus e curiosidades"
          },
          catSet.has("rpg") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu rpg`,
            title: "📁 RPG",
            description: "Aventuras e batalhas em grupo"
          },
          catSet.has("fun") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu fun`,
            title: "📁 Brincadeiras",
            description: "Ações com membros, beijos, tapas e zoeira"
          }
        ].filter(Boolean) as Array<{ id: string; title: string; description: string }>
      },
      {
        title: "🛡️ ADMINISTRAÇÃO & DONO",
        rows: [
          catSet.has("admin") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu admin`,
            title: "📁 Admin",
            description: "Moderação do grupo, ban, kick e avisos"
          },
          catSet.has("moderation") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu moderation`,
            title: "📁 Moderação",
            description: "Filtros de links e segurança de grupos"
          },
          catSet.has("owner") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu owner`,
            title: "📁 Dono",
            description: "Manutenção, prefixo e controle do bot"
          },
          catSet.has("vip") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu vip`,
            title: "📁 VIP",
            description: "Vantagens e comandos exclusivos para VIPs"
          },
          catSet.has("sensitive") && {
            id: `${context.prefix ?? context.env.defaultPrefix}menu sensitive`,
            title: "📁 +18",
            description: "Conteúdos adultos com trava de segurança"
          }
        ].filter(Boolean) as Array<{ id: string; title: string; description: string }>
      }
    ].filter((s) => s.rows.length > 0);

    await context.sendInteractiveButtons({
      title: `🤖 MENU PRINCIPAL - ${context.env.botName.toUpperCase()}`,
      body: bodyText,
      footer: `${context.env.botName} • Toque no botão para abrir a lista`,
      menuTitle: "📑 ABRIR LISTA DE COMANDOS",
      sections
    });
  }
};
