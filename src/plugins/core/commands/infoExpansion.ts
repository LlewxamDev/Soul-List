import type { CommandContext } from "../../../core/types/context";
import type { CommandModule } from "../../../core/types/command";

function publicInfoCommand(
  name: string,
  aliases: string[],
  description: string,
  buildText: (context: CommandContext) => Promise<string> | string
): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description,
      usage: `!${name}`,
      category: "info",
      cooldownSeconds: 3
    },
    async execute(context) {
      await context.reply(await buildText(context));
    }
  };
}

export const runtimeInfoCommand = publicInfoCommand(
  "runtime",
  ["uptime", "tempoativo", "tempobot", "online", "up"],
  "Mostra há quanto tempo o processo do bot está ativo.",
  () => {
    const totalSeconds = Math.floor(process.uptime());
    const days = Math.floor(totalSeconds / 86_400);
    const hours = Math.floor((totalSeconds % 86_400) / 3_600);
    const minutes = Math.floor((totalSeconds % 3_600) / 60);
    const seconds = totalSeconds % 60;
    return `⏱️ *Tempo ativo*\n${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
);

export const versionInfoCommand = publicInfoCommand(
  "version",
  ["versao", "versão", "versao-bot", "versãobot", "vbot", "build"],
  "Mostra a versão e informações básicas do projeto.",
  (context) => `🧩 *${context.env.botName}*\nVersão do projeto: *0.1.0*\nRuntime: *Node.js ${process.versions.node}*\nBranch de expansão: *feat/reference-command-expansion*`
);

export const prefixInfoCommand = publicInfoCommand(
  "prefixo",
  ["prefix", "prefixos", "meuprefixo", "qualprefixo", "comando-prefixo"],
  "Mostra os prefixos configurados no bot.",
  (context) => `⌨️ Prefixos ativos: *${context.env.prefixes.join(" ") || context.env.defaultPrefix}*`
);

export const languageInfoCommand = publicInfoCommand(
  "idioma",
  ["language", "lang", "lingua", "língua", "idiomabot"],
  "Mostra o idioma padrão do bot.",
  (context) => `🌐 Idioma padrão: *${context.env.defaultLanguage}*\nFuso horário: *${context.env.timezone}*`
);

export const rulesCommand: CommandModule = {
  definition: {
    name: "regras",
    aliases: ["rules", "regrasgp", "regrasgrupo", "regra", "normas", "normasgp"],
    description: "Mostra as regras configuradas para o grupo.",
    usage: "!regras",
    category: "info",
    cooldownSeconds: 4,
    groupOnly: true
  },
  async execute(context) {
    const configured = await context.repositories.settings.get(`group:${context.from}:rules`);
    await context.reply(configured || "📜 *Regras do grupo*\n1. Respeite os participantes.\n2. Evite spam e conteúdo ilegal.\n3. Siga as orientações dos administradores.\n\nO administrador pode configurar uma versão personalizada quando essa função estiver disponível.");
  }
};

export const repositoryInfoCommand = publicInfoCommand(
  "repo",
  ["github", "source", "codigo", "código", "codigofonte", "projeto", "linkbot", "repositorio", "repositório"],
  "Mostra o repositório público configurado para divulgação.",
  () => "🔗 Repositório do Soul-List:\nhttps://github.com/LlewxamDev/Soul-List"
);

export const ownerInfoCommand = publicInfoCommand(
  "dono",
  ["owner", "criador", "criadora", "contato", "admindono", "donobot"],
  "Mostra o nome público configurado do proprietário.",
  (context) => `👑 Proprietário: *${context.env.ownerName}*\nContato configurado: *${context.env.ownerNumbers.length > 0 ? "disponível no ambiente do bot" : "não informado"}*`
);

export const donationInfoCommand = publicInfoCommand(
  "doacao",
  ["doação", "donate", "apoie", "apoio", "pix", "contribuir", "contribuicao", "contribuição"],
  "Mostra a mensagem configurada de apoio ao projeto.",
  () => "💛 O projeto é mantido pelo proprietário. Se houver uma chave de apoio configurada, ela pode ser divulgada nesta mensagem sem expor dados internos do ambiente."
);

export const chatIdentityCommand: CommandModule = {
  definition: {
    name: "idchat",
    aliases: ["chatid", "idconversa", "idconversa", "jidchat", "meuid"],
    description: "Mostra o identificador técnico da conversa atual.",
    usage: "!idchat",
    category: "info",
    cooldownSeconds: 4
  },
  async execute(context) {
    await context.reply(`🆔 Identificador desta conversa:\n*${context.from}*`);
  }
};

export const aboutCommand = publicInfoCommand(
  "sobre",
  ["about", "sobrebot", "aboutbot", "oquefaz", "ajudabot", "faqbot"],
  "Mostra uma descrição curta do Soul-List.",
  (context) => `🤖 *${context.env.botName}* é um bot modular de WhatsApp com menus interativos, administração de grupos, mídia, economia, jogos e RPG.\n\nUse *${context.env.defaultPrefix}menu* para navegar pelas categorias.`
);

export const infoExpansionCommands: CommandModule[] = [
  runtimeInfoCommand,
  versionInfoCommand,
  prefixInfoCommand,
  languageInfoCommand,
  rulesCommand,
  repositoryInfoCommand,
  ownerInfoCommand,
  donationInfoCommand,
  chatIdentityCommand,
  aboutCommand
];
