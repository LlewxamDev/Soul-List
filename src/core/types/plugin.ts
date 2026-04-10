import type { Logger } from "pino";
import type { CommandModule } from "./command";
import type { AppEnv } from "../../config/env";

export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  enabledByDefault: boolean;
  description?: string;
  categories?: string[];
  entry?: string;
  env?: string[];
}

export interface PluginContext {
  env: AppEnv;
  logger: Logger;
}

export interface BotPlugin {
  manifest: PluginManifest;
  commands?: CommandModule[];
}
