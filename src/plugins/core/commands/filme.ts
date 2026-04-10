import type { CommandModule } from "../../../core/types/command";

export const movieCommand: CommandModule = {
  definition: {
    name: "filme",
    aliases: ["movie"],
    description: "Busca informações básicas de um filme.",
    usage: "!filme <nome>",
    category: "search",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe o nome do filme.");
      return;
    }
    const result = await context.services.movies.searchMovie(context.argString);
    if (!result) {
      await context.reply("Nenhum filme encontrado.");
      return;
    }
    await context.reply(
      [
        `Filme: ${result.trackName ?? context.argString}`,
        `Artista/Estúdio: ${result.artistName ?? "N/D"}`,
        `Gênero: ${result.primaryGenreName ?? "N/D"}`,
        `Lançamento: ${result.releaseDate?.slice(0, 10) ?? "N/D"}`,
        result.longDescription ?? "Sem descrição."
      ].join("\n")
    );
  }
};
