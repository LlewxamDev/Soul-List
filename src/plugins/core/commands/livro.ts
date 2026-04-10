import type { CommandModule } from "../../../core/types/command";

export const bookCommand: CommandModule = {
  definition: {
    name: "livro",
    aliases: ["book"],
    description: "Busca um livro na Open Library.",
    usage: "!livro <nome>",
    category: "search",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe o nome do livro.");
      return;
    }
    const result = await context.services.books.search(context.argString);
    await context.reply(
      [`Livro: ${result.title}`, `Autores: ${result.authors}`, `Primeira publicação: ${result.firstPublishYear}`].join("\n")
    );
  }
};
