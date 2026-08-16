import OpenAI from "openai";

interface GroqMessage {
  role: "user" | "system";
  content: string | Array<{ type: "text" | "image_url"; text?: string; image_url?: { url: string } }>;
}

interface GroqResponseShape {
  choices?: Array<{
    message?: {
      content?: unknown;
    };
  }>;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function extractText(payload: unknown): string | null {
  if (!isRecord(payload) || !Array.isArray(payload.choices)) {
    return null;
  }
  const first = payload.choices[0];
  if (!isRecord(first) || !isRecord(first.message)) {
    return null;
  }
  const content = first.message.content;
  if (typeof content === "string") {
    return content.trim() || null;
  }
  if (!Array.isArray(content)) {
    return null;
  }
  const text = content
    .filter((part): part is Record<string, unknown> => isRecord(part))
    .map((part) => typeof part.text === "string" ? part.text : "")
    .join("")
    .trim();
  return text || null;
}

export class AIService {
  private readonly openAiClient: OpenAI | null;

  public constructor(
    openAiApiKey: string,
    private readonly openAiModel: string,
    private readonly groqApiKey: string,
    private readonly groqModel: string,
    private readonly groqVisionModel: string
  ) {
    this.openAiClient = openAiApiKey ? new OpenAI({ apiKey: openAiApiKey }) : null;
  }

  public async ask(prompt: string): Promise<string> {
    if (this.groqApiKey) {
      return this.askGroq([{ role: "user", content: prompt }], this.groqModel);
    }
    if (this.openAiClient) {
      const response = await this.openAiClient.responses.create({
        model: this.openAiModel,
        input: prompt
      });
      return response.output_text || "Sem resposta do modelo.";
    }
    throw new Error("GROQ_API_KEY ou OPENAI_API_KEY precisa ser configurada para comandos de IA.");
  }

  public async describeImage(prompt: string, image: Buffer, mimeType: string): Promise<string> {
    if (!this.groqApiKey) {
      throw new Error("GROQ_API_KEY não configurada para análise de imagens.");
    }
    const dataUrl = `data:${mimeType};base64,${image.toString("base64")}`;
    return this.askGroq([
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          { type: "image_url", image_url: { url: dataUrl } }
        ]
      }
    ], this.groqVisionModel);
  }

  private async askGroq(messages: GroqMessage[], model: string): Promise<string> {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.groqApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_completion_tokens: 1200,
        stream: false
      })
    });
    const payload: unknown = await response.json();
    if (!response.ok) {
      const message = isRecord(payload) && typeof payload.error === "string" ? payload.error : "resposta HTTP inválida";
      throw new Error(`Groq retornou ${response.status}: ${message}`);
    }
    const text = extractText(payload as GroqResponseShape);
    if (!text) {
      throw new Error("Groq não retornou conteúdo textual.");
    }
    return text;
  }
}
