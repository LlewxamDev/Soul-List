import type { CommandModule } from "../../../core/types/command";

type ToggleSpec = {
  name: string;
  aliases: string[];
  feature: string;
  label: string;
  category?: "admin" | "moderation";
};

function toggleCommand(spec: ToggleSpec): CommandModule {
  return {
    definition: {
      name: spec.name,
      aliases: spec.aliases,
      description: `Ativa ou desativa ${spec.label} neste grupo.`,
      usage: `!${spec.name}`,
      category: spec.category ?? "moderation",
      cooldownSeconds: 5,
      groupOnly: true,
      adminOnly: true
    },
    async execute(context) {
      const enabled = await context.repositories.features.isEnabled(spec.feature, context.from);
      const next = !enabled;
      await context.repositories.features.setEnabled(spec.feature, context.from, next);
      await context.reply(`${spec.label} ${next ? "ativado" : "desativado"} neste grupo.`);
    }
  };
}

export const groupFeatureCommands: CommandModule[] = [
  toggleCommand({ name: "antilink", aliases: ["antilinkhard"], feature: "antilink", label: "Anti-link" }),
  toggleCommand({ name: "antilinkgp", aliases: [], feature: "antilink", label: "Anti-link de grupo" }),
  toggleCommand({ name: "antiimg", aliases: [], feature: "anti-image", label: "Anti-imagem" }),
  toggleCommand({ name: "antivideo", aliases: [], feature: "anti-video", label: "Anti-vídeo" }),
  toggleCommand({ name: "antiaudio", aliases: [], feature: "anti-audio", label: "Anti-áudio" }),
  toggleCommand({ name: "antisticker", aliases: [], feature: "anti-sticker", label: "Anti-sticker" }),
  toggleCommand({ name: "antidoc", aliases: ["antidocumento"], feature: "anti-document", label: "Anti-documento" }),
  toggleCommand({ name: "anticontato", aliases: ["antictt"], feature: "anti-contact", label: "Anti-contato" }),
  toggleCommand({ name: "antifake", aliases: [], feature: "anti-fake", label: "Anti-fake" }),
  toggleCommand({ name: "antiloc", aliases: [], feature: "anti-location", label: "Anti-localização" }),
  toggleCommand({ name: "antinotas", aliases: [], feature: "anti-notes", label: "Anti-notas" }),
  toggleCommand({ name: "anticatalogo", aliases: ["anticatalg"], feature: "anti-catalog", label: "Anti-catálogo" }),
  toggleCommand({ name: "antipalavrao", aliases: ["antipalavra", "antipalavrão"], feature: "anti-bad-words", label: "Anti-palavrão" }),
  toggleCommand({ name: "bemvindo", aliases: ["welcome"], feature: "welcome", label: "Boas-vindas" }),
  toggleCommand({ name: "bemvindo2", aliases: [], feature: "welcome-text", label: "Boas-vindas em texto" }),
  toggleCommand({ name: "autosticker", aliases: ["autofigu"], feature: "auto-sticker", label: "Sticker automático" })
];
