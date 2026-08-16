import type { CommandModule } from "../../../core/types/command";
import type { ImageEffect } from "../../../services/image-effects/ImageEffectsService";

type EffectSpec = { name: ImageEffect; aliases: string[]; description: string };

function effectCommand(spec: EffectSpec): CommandModule {
  return {
    definition: {
      name: spec.name,
      aliases: spec.aliases,
      description: spec.description,
      usage: `!${spec.name} (respondendo a uma imagem)`,
      category: "media",
      cooldownSeconds: 10
    },
    async execute(context) {
      const media = await context.downloadMedia();
      if (!media) {
        await context.reply("Responda a uma imagem para aplicar este efeito.");
        return;
      }
      try {
        const output = await context.services.imageEffects.apply(media, spec.name);
        await context.sendImage(output);
      } catch {
        await context.reply("Não consegui aplicar o efeito nessa imagem.");
      }
    }
  };
}

export const imageEffectCommands: CommandModule[] = [
  effectCommand({ name: "bnw", aliases: ["pretoebranco", "pb"], description: "Converte a imagem para preto e branco." }),
  effectCommand({ name: "beautiful", aliases: [], description: "Aplica um realce de cor e nitidez." }),
  effectCommand({ name: "blur", aliases: [], description: "Aplica desfoque à imagem." }),
  effectCommand({ name: "affect", aliases: [], description: "Aplica um realce de cor à imagem." }),
  effectCommand({ name: "circle", aliases: [], description: "Recorta a imagem em formato circular." }),
  effectCommand({ name: "dither", aliases: [], description: "Aplica uma conversão monocromática pontilhada simples." }),
  effectCommand({ name: "invert", aliases: [], description: "Inverte as cores da imagem." }),
  effectCommand({ name: "magik", aliases: [], description: "Aplica uma distorção visual leve e saturação." }),
  effectCommand({ name: "rotate", aliases: [], description: "Gira a imagem em 90 graus." }),
  effectCommand({ name: "pixelate", aliases: [], description: "Pixeliza a imagem." }),
  effectCommand({ name: "sepia", aliases: [], description: "Aplica tonalidade sépia." })
];
