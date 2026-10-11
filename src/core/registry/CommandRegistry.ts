import { CATEGORY_ORDER, type CommandCategory } from "../constants/categories";
import { CommandNotFoundError } from "../errors/BotError";
import type { CommandModule, RegisteredCommand } from "../types/command";

export class CommandRegistry {
  private readonly commands = new Map<string, RegisteredCommand>();
  private readonly aliases = new Map<string, string>();

  public register(pluginId: string, module: CommandModule): void {
    const name = module.definition.name.toLowerCase();
    const existing = this.commands.get(name);

    // Prioridade: plugins nativos sempre têm precedência sobre o plugin 'catalog'
    const isNewCatalog = pluginId === "catalog";
    const isExistingCatalog = existing?.pluginId === "catalog";

    if (existing && isNewCatalog && !isExistingCatalog) {
      // Ignora tentativa do catálogo de sobrescrever comando nativo
      return;
    }

    const command: RegisteredCommand = {
      ...module.definition,
      pluginId,
      aliases: [...module.definition.aliases],
      execute: module.execute
    };

    this.commands.set(name, command);

    for (const rawAlias of command.aliases) {
      const alias = rawAlias.toLowerCase();
      // Um alias não pode sobrescrever um comando principal já existente
      if (this.commands.has(alias) && this.commands.get(alias)?.name.toLowerCase() === alias) {
        continue;
      }
      const existingAliasTarget = this.aliases.get(alias);
      if (existingAliasTarget) {
        const existingTargetCmd = this.commands.get(existingAliasTarget);
        if (existingTargetCmd && existingTargetCmd.pluginId !== "catalog" && isNewCatalog) {
          continue;
        }
      }
      this.aliases.set(alias, name);
    }
  }

  public get(nameOrAlias: string): RegisteredCommand {
    const key = nameOrAlias.toLowerCase();
    const commandName = this.aliases.get(key) ?? key;
    const command = this.commands.get(commandName);
    if (!command) {
      throw new CommandNotFoundError(nameOrAlias);
    }
    return command;
  }

  public has(nameOrAlias: string): boolean {
    try {
      this.get(nameOrAlias);
      return true;
    } catch {
      return false;
    }
  }

  public all(): RegisteredCommand[] {
    return [...this.commands.values()].sort((left, right) => left.name.localeCompare(right.name));
  }

  public listByCategory(category: CommandCategory): RegisteredCommand[] {
    return this.all().filter((command) => command.category === category && !command.hidden);
  }

  public categories(): CommandCategory[] {
    return CATEGORY_ORDER.filter((category) => this.listByCategory(category).length > 0);
  }
}
