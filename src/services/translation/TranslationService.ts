import { translate } from "@vitalets/google-translate-api";

export class TranslationService {
  public async translateText(text: string, to: string) {
    const result = await translate(text, { to });
    return result.text;
  }
}
