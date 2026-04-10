import OpenAI from "openai";

export class AIService {
  private readonly client: OpenAI | null;

  public constructor(
    apiKey: string,
    private readonly model: string
  ) {
    this.client = apiKey ? new OpenAI({ apiKey }) : null;
  }

  public async ask(prompt: string): Promise<string> {
    if (!this.client) {
      throw new Error("OPENAI_API_KEY não configurada para comandos de IA.");
    }

    const response = await this.client.responses.create({
      model: this.model,
      input: prompt
    });
    return response.output_text || "Sem resposta do modelo.";
  }
}
