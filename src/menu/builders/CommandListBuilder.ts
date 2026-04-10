import type { CommandContext } from "../../core/types/context";

export class CommandListBuilder {
  public build(context: CommandContext, filter?: string): string {
    const commands = context.registry
      .all()
      .filter((command) => !command.hidden)
      .filter((command) => {
        if (!filter) {
          return true;
        }
        const search = filter.toLowerCase();
        return (
          command.name.includes(search) ||
          command.category.includes(search) ||
          command.aliases.some((alias) => alias.includes(search))
        );
      });

    if (commands.length === 0) {
      return "Nenhum comando encontrado para esse filtro.";
    }

    return [
      "╭─ Lista de comandos",
      ...commands.map((command) => `├ ${command.name} [${command.category}]`),
      `╰ Total: ${commands.length}`
    ].join("\n");
  }
}
