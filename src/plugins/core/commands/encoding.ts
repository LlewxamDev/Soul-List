import type { CommandModule } from "../../../core/types/command";

const MAX_INPUT_BYTES = 8 * 1024;

export const binaryCommand: CommandModule = {
  definition: {
    name: "bin",
    aliases: ["binary", "binario", "binário"],
    description: "Converte texto para representação binária em arquivo.",
    usage: "!bin <texto>",
    category: "system",
    cooldownSeconds: 4
  },
  async execute(context) {
    const input = context.argString;
    if (!input) {
      await context.reply("Informe o texto que deseja converter. Exemplo: !bin Olá mundo");
      return;
    }
    const source = Buffer.from(input, "utf8");
    if (source.length > MAX_INPUT_BYTES) {
      await context.reply("O texto deve ter no máximo 8 KiB para gerar o arquivo binário.");
      return;
    }
    const bits = [...source].map((value) => value.toString(2).padStart(8, "0")).join(" ");
    const output = Buffer.from(`# Representação binária UTF-8\n# Bytes: ${source.length}\n\n${bits}\n`, "utf8");
    await context.sendDocument(output, "representacao-binaria.txt", "text/plain", "Representação binária gerada com segurança.");
  }
};
