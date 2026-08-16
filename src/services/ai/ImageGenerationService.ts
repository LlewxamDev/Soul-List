import OpenAI from "openai";

export interface GeneratedImage {
  data: Buffer;
  mimeType: "image/png" | "image/jpeg" | "image/webp";
}

export class ImageGenerationService {
  private readonly client: OpenAI | null;

  public constructor(
    apiKey: string,
    private readonly model: string
  ) {
    this.client = apiKey ? new OpenAI({ apiKey }) : null;
  }

  public async generate(prompt: string): Promise<GeneratedImage> {
    if (!this.client) {
      throw new Error("OPENAI_API_KEY não configurada para geração de imagens.");
    }

    const request = this.model === "gpt-image-1"
      ? { model: this.model, prompt, n: 1, size: "1024x1024" as const, output_format: "png" as const }
      : { model: this.model, prompt, n: 1, size: "1024x1024" as const, response_format: "b64_json" as const };
    const response = await this.client.images.generate(request);
    const image = response.data?.[0];
    if (!image?.b64_json) {
      throw new Error("O provedor de imagens não retornou uma imagem em base64.");
    }

    return {
      data: Buffer.from(image.b64_json, "base64"),
      mimeType: "image/png"
    };
  }
}
