import sharp from "sharp";

export type ImageEffect = "bnw" | "beautiful" | "blur" | "affect" | "circle" | "dither" | "invert" | "magik" | "rotate" | "pixelate" | "sepia";

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
}
