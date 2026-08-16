import { extractTargetJid, formatPhone } from "../../../core/utils/whatsapp";
import type { CommandContext } from "../../../core/types/context";
import type { CommandModule } from "../../../core/types/command";

type PercentageSpec = {
  name: string;
  aliases?: string[];
  label: string;
  emoji: string;
  rangeMessages?: [string, string, string];
};

type TargetInteractionSpec = {
  name: string;
  aliases?: string[];
  action: string;
  emoji: string;
};

function mentionTarget(context: CommandContext): string | null {
  return extractTargetJid(context.rawMessage) ?? context.sender;
}

function percentageCommand(spec: PercentageSpec): CommandModule {
  return {
    definition: {
      name: spec.name,
      aliases: spec.aliases ?? [],
      description: `Calcula uma porcentagem de brincadeira sobre ${spec.label}.`,
      usage: `!${spec.name} [menção opcional]`,
      category: "fun",
      groupOnly: true,
      cooldownSeconds: 4
    },
    async execute(context) {
      const target = mentionTarget(context);
      if (!target) {
        await context.reply(`Marque alguém ou use !${spec.name} para consultar você mesmo.`);
        return;
      }
      const percentage = Math.floor(Math.random() * 101);
      const name = formatPhone(target);
      const rangeMessages = spec.rangeMessages ?? [
        "A brincadeira ficou bem baixa.",
        "Resultado intermediário para entrar na zoeira.",
        "Resultado alto; aproveite a brincadeira."
      ];
      const rangeMessage = percentage < 34 ? rangeMessages[0] : percentage < 67 ? rangeMessages[1] : rangeMessages[2];
      const text = `${spec.emoji} @${name} tem *${percentage}%* de ${spec.label}.\n_${rangeMessage}_\n\nResultado aleatório de brincadeira; não é uma avaliação real.`;
      if ((spec.name === "atraente" || spec.name === "lindo") && context.env.menuMediaUrl) {
        await context.sendImage(context.env.menuMediaUrl, text, [target]);
      } else {
        await context.sendMentionedText(text, [target]);
      }
    }
  };
}

function targetInteractionCommand(spec: TargetInteractionSpec): CommandModule {
  return {
    definition: {
      name: spec.name,
      aliases: spec.aliases ?? [],
      description: `Envia uma brincadeira de ${spec.action} para uma pessoa mencionada.`,
      usage: `!${spec.name} @pessoa`,
      category: "fun",
      groupOnly: true,
      cooldownSeconds: 4
    },
    async execute(context) {
      const target = extractTargetJid(context.rawMessage);
      if (!target) {
        await context.reply(`Marque a pessoa que você quer ${spec.action}.`);
        return;
      }
      const name = formatPhone(target);
      await context.sendMentionedText(`${spec.emoji} @${name}, você recebeu um ${spec.action} de @${formatPhone(context.sender)}.`, [target, context.sender]);
    }
  };
}

export const percentageInteractionCommands: CommandModule[] = [
  percentageCommand({ name: "gay", label: "gay", emoji: "🏳️‍🌈" }),
  percentageCommand({ name: "feio", label: "feio", emoji: "🙈" }),
  percentageCommand({ name: "corno", label: "corno", emoji: "🐃" }),
  percentageCommand({ name: "vesgo", label: "vesgo", emoji: "👀" }),
  percentageCommand({ name: "bebado", label: "bêbado", emoji: "🍻" }),
  percentageCommand({ name: "gado", label: "gado", emoji: "🐂" }),
  percentageCommand({ name: "gostoso", label: "gostoso", emoji: "😏" }),
  percentageCommand({ name: "gostosa", label: "gostosa", emoji: "😏" }),
  percentageCommand({ name: "sigma", label: "sigma", emoji: "🗿" }),
  percentageCommand({ name: "beta", label: "beta", emoji: "🧩" }),
  percentageCommand({ name: "baiano", label: "baiano", emoji: "🌴" }),
  percentageCommand({ name: "baiana", label: "baiana", emoji: "🌴" }),
  percentageCommand({ name: "carioca", label: "carioca", emoji: "🌊" }),
  percentageCommand({ name: "louco", label: "louco", emoji: "🤪" }),
  percentageCommand({ name: "louca", label: "louca", emoji: "🤪" }),
  percentageCommand({ name: "macaco", label: "macaco", emoji: "🐒" }),
  percentageCommand({ name: "macaca", label: "macaca", emoji: "🐒" }),
  percentageCommand({ name: "nazista", label: "nazista", emoji: "⚠️" }),
  percentageCommand({
    name: "atraente",
    label: "atraente",
    emoji: "✨",
    rangeMessages: ["A beleza ficou tímida hoje.", "Um resultado equilibrado.", "O personagem bonito do grupo apareceu."]
  }),
  percentageCommand({
    name: "lindo",
    label: "lindo",
    emoji: "🌟",
    rangeMessages: ["Hoje é dia de melhorar o visual.", "Tem charme, mas sem exagerar.", "Resultado de protagonista de anime."]
  }),
  percentageCommand({
    name: "fiel",
    label: "fiel",
    emoji: "💍",
    rangeMessages: ["A zoeira levantou suspeitas fictícias.", "O resultado ficou inconclusivo.", "A brincadeira deu um voto de confiança."]
  }),
  percentageCommand({
    name: "lesbica",
    aliases: ["lesbico"],
    label: "lésbica",
    emoji: "🏳️‍🌈",
    rangeMessages: ["Resultado baixo, sempre no campo da brincadeira.", "A porcentagem ficou no meio-termo.", "Resultado alto, sem qualquer valor sobre a vida real."]
  })
];

export const targetInteractionCommands: CommandModule[] = [
  targetInteractionCommand({ name: "beijo", aliases: ["beijar"], action: "beijo", emoji: "💋" }),
  targetInteractionCommand({ name: "tapa", action: "tapa", emoji: "🫳" }),
  targetInteractionCommand({ name: "chute", aliases: ["chutar"], action: "chute", emoji: "🦶" }),
  targetInteractionCommand({ name: "matar", aliases: ["mata"], action: "matar", emoji: "💥" }),
  targetInteractionCommand({ name: "dogolpe", action: "golpe", emoji: "☠️" })
];

export const interactionCommands = [...percentageInteractionCommands, ...targetInteractionCommands];
