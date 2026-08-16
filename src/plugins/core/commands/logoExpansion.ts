import type { CommandModule } from "../../../core/types/command";
import type { TextVisualStyle } from "../../../services/image-effects/ImageEffectsService";

function logoCommand(name: string, aliases: string[], style: TextVisualStyle, description: string): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description,
      usage: `!${name} <texto>`,
      category: "logos",
      cooldownSeconds: 8
    },
    async execute(context) {
      const text = context.argString.trim();
      if (!text) {
        await context.reply("Informe o texto que será usado na arte.");
        return;
      }
      const image = await context.services.imageEffects.renderText(text, style);
      await context.sendImage(image, `Arte ${name} criada para: ${text}`);
    }
  };
}

export const neonLogoCommand = logoCommand("neon", ["neonlogo", "logoneon", "brilhante", "glow"], "neon", "Cria um logo textual com estilo neon.");
export const goldLogoCommand = logoCommand("gold", ["goldlogo", "logodourado", "dourado", "3dgold", "ouro"], "gold", "Cria um logo textual dourado.");
export const stoneLogoCommand = logoCommand("stone", ["stonelogo", "logopedra", "pedra", "3dstone"], "stone", "Cria um logo textual com estilo de pedra.");
export const fireLogoCommand = logoCommand("firelogo", ["fogo", "logofogo", "flame", "chamas"], "fire", "Cria um logo textual com estilo de fogo.");
export const iceLogoCommand = logoCommand("icelogo", ["gelo", "logoice", "ice", "congelado"], "ice", "Cria um logo textual com estilo de gelo.");
export const matrixLogoCommand = logoCommand("matrix", ["logomatrix", "hackerlogo", "hacker"], "matrix", "Cria um logo textual com estilo matrix.");
export const glitchLogoCommand = logoCommand("glitch", ["glitchlogo", "falha", "digital"], "glitch", "Cria um logo textual com estilo glitch.");
export const minimalLogoCommand = logoCommand("logo", ["logotipo", "logotexto", "textologo", "minimalista"], "minimal", "Cria um logo textual minimalista.");
export const bannerCommand = logoCommand("banner", ["faixada", "faixa", "bannercustom", "bannertexto"], "neon", "Cria um banner textual para divulgação.");
export const coverCommand = logoCommand("capa", ["cover", "capaperfil", "capa grupo", "capa-gp"], "ice", "Cria uma capa textual para perfil ou grupo.");
export const thumbnailCommand = logoCommand("thumbnail", ["thumb", "miniatura", "thumbvideo", "capavideo"], "glitch", "Cria uma miniatura textual para vídeo.");
export const posterCommand = logoCommand("poster", ["cartaz", "postertexto", "flyer", "divulgacao", "divulgação"], "fire", "Cria um cartaz textual de divulgação.");
export const cardCommand = logoCommand("card", ["cartao", "cartão", "cardtexto", "ficha"], "gold", "Cria um cartão textual.");
export const badgeCommand = logoCommand("badge", ["distintivo", "emblema", "selo", "tagvisual"], "stone", "Cria um emblema textual.");
export const avatarCommand = logoCommand("avatar", ["avatartexto", "fotoavatar", "perfiltexto", "iconeperfil"], "matrix", "Cria um avatar textual.");

export const logoExpansionCommands: CommandModule[] = [
  neonLogoCommand,
  goldLogoCommand,
  stoneLogoCommand,
  fireLogoCommand,
  iceLogoCommand,
  matrixLogoCommand,
  glitchLogoCommand,
  minimalLogoCommand,
  bannerCommand,
  coverCommand,
  thumbnailCommand,
  posterCommand,
  cardCommand,
  badgeCommand,
  avatarCommand
];
