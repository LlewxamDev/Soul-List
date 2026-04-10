import type { RegisteredCommand } from "../../core/types/command";

export class CommandInfoBuilder {
  public build(command: RegisteredCommand): string {
    return [
      `╭─ ${command.name}`,
      `├ Descrição: ${command.description}`,
      `├ Uso: ${command.usage}`,
      `├ Categoria: ${command.category}`,
      `├ Aliases: ${command.aliases.join(", ") || "nenhum"}`,
      `├ Cooldown: ${command.cooldownSeconds}s`,
      `├ Plugin: ${command.pluginId}`,
      `╰ Restrições: ${this.describeRestrictions(command)}`
    ].join("\n");
  }

  private describeRestrictions(command: RegisteredCommand): string {
    const restrictions = [
      command.ownerOnly ? "owner" : "",
      command.adminOnly ? "admin" : "",
      command.groupOnly ? "group" : "",
      command.privateOnly ? "private" : "",
      command.premiumOnly ? "premium" : "",
      command.sensitive ? "sensitive" : ""
    ].filter(Boolean);
    return restrictions.join(", ") || "nenhuma";
  }
}
