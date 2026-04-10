import type { CommandModule } from "../../../core/types/command";

export const animeInfoCommand: CommandModule = {
  definition: {
    name: "animeinfo",
    aliases: ["anime"],
    description: "Busca um anime pelo título.",
    usage: "!animeinfo <nome>",
    category: "anime",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe o nome do anime.");
      return;
    }
    const result = await context.services.anime.search(context.argString);
    if (!result) {
      await context.reply("Nenhum anime encontrado.");
      return;
    }
    await context.reply(
      [
        `Anime: ${result.title ?? context.argString}`,
        `Status: ${result.status ?? "N/D"}`,
        `Episódios: ${result.episodes ?? "N/D"}`,
        result.synopsis ?? "Sem sinopse."
      ].join("\n")
    );
  }
};
