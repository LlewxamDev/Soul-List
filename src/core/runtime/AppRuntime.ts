import type { Logger } from "pino";
import type { AppEnv } from "../../config/env";
import type { BotRepositories } from "../types/repositories";
import type { BotServices } from "../types/services";
import { PermissionService } from "../permissions/PermissionService";
import { PluginRuntime } from "./PluginRuntime";

export class AppRuntime {
  public readonly plugins: PluginRuntime;
  public readonly permissions: PermissionService;

  public constructor(
    public readonly env: AppEnv,
    public readonly logger: Logger,
    public readonly services: BotServices,
    public readonly repositories: BotRepositories
  ) {
    this.plugins = new PluginRuntime(env, logger);
    this.permissions = new PermissionService(env);
  }

  public async initialize(): Promise<void> {
    await this.plugins.loadAll();
    const savedPrefix = await this.repositories.settings.get("bot_prefix");
    if (savedPrefix) {
      this.env.prefixes = [savedPrefix];
      this.env.defaultPrefix = savedPrefix;
    }
  }
}
