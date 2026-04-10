import sharp from "sharp";

export class StickerService {
  public async fromImage(input: Buffer): Promise<Buffer> {
    return sharp(input)
      .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90 })
      .toBuffer();
  }
}
