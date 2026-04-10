import type { CommandModule } from "../../../core/types/command";

export const seriesCommand: CommandModule = {
  definition: {
    name: "serie",
    aliases: ["series"],
    description: "Busca informações básicas de uma série.",
    usage: "!serie <nome>",
    category: "search",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe o nome da série.");
      return;
    }
    const result = await context.services.movies.searchSeries(context.argString);
    if (!result) {
      await context.reply("Nenhuma série encontrada.");
      return;
    }
    await context.reply(
      [
        `Série: ${result.trackName ?? context.argString}`,
        `Produtora: ${result.artistName ?? "N/D"}`,
        `Gênero: ${result.primaryGenreName ?? "N/D"}`,
        `Lançamento: ${result.releaseDate?.slice(0, 10) ?? "N/D"}`,
        result.longDescription ?? "Sem descrição."
      ].join("\n")
    );
  }
};
