import sharp from "sharp";

export type ImageEffect = "bnw" | "beautiful" | "blur" | "affect" | "circle" | "dither" | "invert" | "magik" | "rotate" | "pixelate" | "sepia";
export type TextVisualStyle = "neon" | "gold" | "stone" | "fire" | "ice" | "matrix" | "glitch" | "minimal";

function escapeXml(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] ?? character);
}

function wrapText(value: string): string[] {
  const words = value.slice(0, 240).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > 24) {
      if (current) {
        lines.push(current);
      }
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines.slice(0, 5);
}

const styles: Record<TextVisualStyle, { background: string; foreground: string; accent: string }> = {
  neon: { background: "#0b1020", foreground: "#f9f871", accent: "#ff4ecd" },
  gold: { background: "#201205", foreground: "#ffe28a", accent: "#b87900" },
  stone: { background: "#2b2b2b", foreground: "#eeeeee", accent: "#858585" },
  fire: { background: "#310b05", foreground: "#ffd166", accent: "#ef476f" },
  ice: { background: "#071c2e", foreground: "#d7f9ff", accent: "#4cc9f0" },
  matrix: { background: "#001b0b", foreground: "#b7ffb0", accent: "#00ff66" },
  glitch: { background: "#141414", foreground: "#ffffff", accent: "#00ffff" },
  minimal: { background: "#ffffff", foreground: "#111111", accent: "#666666" }
};

export class ImageEffectsService {
  public async apply(input: Buffer, effect: ImageEffect): Promise<Buffer> {
    let image = sharp(input).resize(768, 768, { fit: "inside", withoutEnlargement: false });
    switch (effect) {
      case "bnw":
      case "dither":
        image = image.grayscale();
        break;
      case "beautiful":
      case "affect":
        image = image.modulate({ saturation: 1.25, brightness: 1.05 }).sharpen();
        break;
      case "blur":
        image = image.blur(8);
        break;
      case "invert":
        image = image.negate();
        break;
      case "magik":
        image = image.resize(700, 700, { fit: "fill" }).modulate({ saturation: 1.35 });
        break;
      case "rotate":
        image = image.rotate(90);
        break;
      case "pixelate":
        image = image.resize(48, 48, { fit: "cover" }).resize(768, 768, { fit: "fill", kernel: "nearest" });
        break;
      case "sepia":
        image = image.modulate({ saturation: 0.4 }).tint({ r: 112, g: 66, b: 20 });
        break;
      case "circle":
        image = image.resize(768, 768, { fit: "cover" }).composite([
          {
            input: Buffer.from('<svg width="768" height="768"><circle cx="384" cy="384" r="384" fill="white"/></svg>'),
            blend: "dest-in"
          }
        ]);
        break;
    }
    return image.png().toBuffer();
  }

  public async renderText(text: string, style: TextVisualStyle): Promise<Buffer> {
    const selected = styles[style];
    const lines = wrapText(text);
    const lineElements = lines.map((line, index) => `<text x="384" y="${190 + index * 64}" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="48" font-weight="700" fill="${selected.foreground}">${escapeXml(line)}</text>`).join("");
    const svg = `<svg width="768" height="450" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="${selected.background}"/><stop offset="1" stop-color="${selected.accent}"/></linearGradient></defs><rect width="768" height="450" rx="36" fill="url(#g)"/><rect x="24" y="24" width="720" height="402" rx="28" fill="none" stroke="${selected.foreground}" stroke-opacity="0.35" stroke-width="4"/>${lineElements}<text x="384" y="392" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="18" fill="${selected.foreground}" opacity="0.75">SOUL-LIST</text></svg>`;
    return sharp(Buffer.from(svg)).png().toBuffer();
  }
}
