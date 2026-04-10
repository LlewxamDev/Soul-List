import OpenAI from "openai";

export class SpeechService {
  private readonly client: OpenAI | null;

  public constructor(apiKey: string) {
    this.client = apiKey ? new OpenAI({ apiKey }) : null;
  }

  public async transcribeAudio(buffer: Buffer): Promise<string> {
    if (!this.client) {
      throw new Error("OPENAI_API_KEY não configurada para transcrição.");
    }

    const file = await OpenAI.toFile(buffer, "audio.mp3");
    const result = await this.client.audio.transcriptions.create({
      file,
      model: "whisper-1"
    });
    return result.text;
  }
}
