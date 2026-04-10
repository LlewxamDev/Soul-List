import type { AppEnv } from "../../config/env";
import { permissionConfig } from "../../config/permissions";
import type { CommandContext } from "../types/context";

export class PermissionService {
  private readonly cooldowns = new Map<string, number>();

  public constructor(private readonly env: AppEnv) {}

  public evaluate(context: CommandContext): { allowed: boolean; reason?: string } {
    const command = context.command;
    if (!command) {
      return { allowed: false, reason: "Comando inválido." };
    }

    if (command.ownerOnly && !context.isOwner) {
      return { allowed: false, reason: permissionConfig.ownerFailure };
    }
    if (command.adminOnly && !context.isAdmin) {
      return { allowed: false, reason: permissionConfig.adminFailure };
    }
    if (command.groupOnly && !context.isGroup) {
      return { allowed: false, reason: permissionConfig.groupFailure };
    }
    if (command.privateOnly && context.isGroup) {
      return { allowed: false, reason: permissionConfig.privateFailure };
    }
    if (command.premiumOnly && !context.isPremium) {
      return { allowed: false, reason: permissionConfig.premiumFailure };
    }
    if (command.sensitive && !this.env.enableSensitiveCategories) {
      return { allowed: false, reason: permissionConfig.sensitiveFailure };
    }

    const rateLimit = context.services.rateLimit.check(`${context.sender}:${context.command?.name ?? "unknown"}`);
    if (!rateLimit.allowed) {
      return {
        allowed: false,
        reason: `${permissionConfig.cooldownFailure} (${Math.ceil(rateLimit.retryAfterMs / 1000)}s)`
      };
    }

    const cooldownKey = `${context.sender}:${command.name}`;
    const until = this.cooldowns.get(cooldownKey) ?? 0;
    if (until > Date.now()) {
      return {
        allowed: false,
        reason: `${permissionConfig.cooldownFailure} (${Math.ceil((until - Date.now()) / 1000)}s)`
      };
    }

    this.cooldowns.set(cooldownKey, Date.now() + command.cooldownSeconds * 1000);
    return { allowed: true };
  }
}
