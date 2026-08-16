import sharp from "sharp";

function escapeXml(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] ?? character);
}

function textCanvas(text: string, background: string, foreground: string, fontSize: number): Buffer {
  const safeText = escapeXml(text.slice(0, 180));
  const svg = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg"><rect width="512" height="512" rx="48" fill="${background}"/><text x="256" y="256" text-anchor="middle" dominant-baseline="middle" font-family="Noto Sans, sans-serif" font-size="${fontSize}" fill="${foreground}">${safeText}</text></svg>`;
  return Buffer.from(svg);
}

export class StickerService {
  public async fromImage(input: Buffer): Promise<Buffer> {
    return sharp(input)
      .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90 })
      .toBuffer();
  }

  public async fromText(text: string, animated = false): Promise<Buffer> {
    const canvas = textCanvas(text, animated ? "#1b1b2f" : "#ffffff", animated ? "#f9f871" : "#111111", text.length > 35 ? 30 : 44);
    return sharp(canvas).webp({ quality: 90 }).toBuffer();
  }

  public async fromEmoji(emojis: string): Promise<Buffer> {
    const canvas = textCanvas(emojis, "#fff4cc", "#171717", emojis.length > 4 ? 86 : 128);
    return sharp(canvas).webp({ quality: 90 }).toBuffer();
  }

  public async toImage(input: Buffer): Promise<Buffer> {
    return sharp(input).png().toBuffer();
  }

  public async withMetadata(input: Buffer, description: string): Promise<Buffer> {
    return sharp(input)
      .withMetadata({ exif: { IFD0: { ImageDescription: description } } })
      .webp({ quality: 90 })
      .toBuffer();
  }
}
