import type { CommandCategory } from "../constants/categories";
import type { CommandContext } from "./context";

export interface PermissionPolicy {
  ownerOnly?: boolean;
  adminOnly?: boolean;
  groupOnly?: boolean;
  privateOnly?: boolean;
  premiumOnly?: boolean;
  sensitive?: boolean;
}

export interface CommandDefinition extends PermissionPolicy {
  name: string;
  aliases: string[];
  description: string;
  usage: string;
  category: CommandCategory;
  cooldownSeconds: number;
  hidden?: boolean;
  pluginId: string;
}

export interface CommandModule {
  definition: Omit<CommandDefinition, "pluginId">;
  execute(context: CommandContext): Promise<void>;
}

export interface RegisteredCommand extends CommandDefinition {
  execute(context: CommandContext): Promise<void>;
}
