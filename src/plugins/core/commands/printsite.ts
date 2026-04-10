import type { CommandModule } from "../../../core/types/command";

export const printSiteCommand: CommandModule = {
  definition: {
    name: "printsite",
    aliases: ["screenshot"],
    description: "Gera uma miniatura do site informado.",
    usage: "!printsite <url>",
    category: "media",
    cooldownSeconds: 6
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe uma URL válida.");
      return;
    }
    const url = context.argString.startsWith("http") ? context.argString : `https://${context.argString}`;
    await context.sendImage(context.services.media.buildScreenshotUrl(url), `Preview de ${url}`);
  }
};
