import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { Logger } from "pino";
import type { AppEnv } from "../../config/env";
import type { BotPlugin, PluginManifest } from "../types/plugin";
import { CommandRegistry } from "../registry/CommandRegistry";

interface RuntimePlugin {
  manifest: PluginManifest;
  plugin: BotPlugin;
  origin: "internal" | "external";
}

async function importModuleSafely(entry: string): Promise<{ default?: BotPlugin }> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require(entry);
    return mod?.default ? mod : { default: mod };
  } catch {
    const dynamicImport = new Function("url", "return import(url)");
    return (await dynamicImport(pathToFileURL(entry).href)) as { default?: BotPlugin };
  }
}

export class PluginRuntime {
  public readonly registry = new CommandRegistry();
  private readonly plugins: RuntimePlugin[] = [];

  public constructor(
    private readonly env: AppEnv,
    private readonly logger: Logger
  ) {}

  public async loadAll(): Promise<void> {
    const internalDirs = this.collectPluginDirectories(this.resolveInternalPluginRoot(), true);
    for (const pluginDir of internalDirs) {
      const plugin = await this.loadModulePlugin(pluginDir, "internal");
      this.registerPlugin(plugin);
    }

    const externalRoot = this.resolveExternalPluginRoot();
    if (existsSync(externalRoot)) {
      const pluginDirs = this.collectPluginDirectories(externalRoot, false);
      for (const pluginDir of pluginDirs) {
        const plugin = await this.loadManifestPlugin(pluginDir);
        if (!plugin) {
          continue;
        }
        this.registerPlugin(plugin);
      }
    }
  }

  public listPlugins(): PluginManifest[] {
    return this.plugins.map((plugin) => plugin.manifest);
  }

  private registerPlugin(runtimePlugin: RuntimePlugin): void {
    if (runtimePlugin.manifest.enabledByDefault === false) {
      this.logger.info({ plugin: runtimePlugin.manifest.id }, "Plugin carregado desativado por padrão.");
    }

    for (const command of runtimePlugin.plugin.commands ?? []) {
      this.registry.register(runtimePlugin.manifest.id, command);
    }

    this.plugins.push(runtimePlugin);
    this.logger.info(
      {
        plugin: runtimePlugin.manifest.id,
        origin: runtimePlugin.origin,
        commands: runtimePlugin.plugin.commands?.length ?? 0
      },
      "Plugin carregado."
    );
  }

  private collectPluginDirectories(root: string, requiresIndex: boolean): string[] {
    if (!existsSync(root)) {
      return [];
    }

    return readdirSync(root)
      .map((entry) => join(root, entry))
      .filter((entry) => statSync(entry).isDirectory())
      .filter((entry) => {
        if (!requiresIndex) {
          return true;
        }
        return (
          existsSync(join(entry, "index.ts")) ||
          existsSync(join(entry, "index.js")) ||
          existsSync(join(entry, "index.cjs"))
        );
      });
  }

  private resolveInternalPluginRoot(): string {
    const distRoot = resolve(process.cwd(), "dist", "src", "plugins");
    const sourceRoot = resolve(process.cwd(), "src", "plugins");
    return existsSync(distRoot) ? distRoot : sourceRoot;
  }

  private resolveExternalPluginRoot(): string {
    const distRoot = resolve(process.cwd(), "dist", "plugins");
    const sourceRoot = resolve(process.cwd(), "plugins");
    return existsSync(distRoot) ? distRoot : sourceRoot;
  }

  private async loadModulePlugin(directory: string, origin: "internal" | "external"): Promise<RuntimePlugin> {
    const entry = ["index.js", "index.cjs", "index.ts"]
      .map((candidate) => join(directory, candidate))
      .find((candidate) => existsSync(candidate));

    if (!entry) {
      throw new Error(`Plugin sem entry encontrado em ${directory}`);
    }

    const imported = await importModuleSafely(entry);
    const plugin = imported.default;
    if (!plugin) {
      throw new Error(`Plugin inválido em ${entry}`);
    }

    return {
      manifest: plugin.manifest,
      plugin,
      origin
    };
  }

  private async loadManifestPlugin(directory: string): Promise<RuntimePlugin | null> {
    const manifestPath = join(directory, "plugin.json");
    if (!existsSync(manifestPath)) {
      return null;
    }

    const manifest = JSON.parse(readFileSync(manifestPath, "utf-8")) as PluginManifest;
    const requestedEntry = manifest.entry ?? "./index.ts";
    const normalizedEntry = requestedEntry.replace(/^\.\//, "");
    const entryCandidates = [
      join(directory, normalizedEntry.replace(/\.ts$/, ".js")),
      join(directory, normalizedEntry.replace(/\.ts$/, ".cjs")),
      join(directory, normalizedEntry),
      join(directory, "index.js"),
      join(directory, "index.cjs"),
      join(directory, "index.ts")
    ];
    const entry = entryCandidates.find((candidate) => existsSync(candidate));

    if (!entry) {
      this.logger.warn({ plugin: manifest.id, directory }, "Plugin externo ignorado por falta de entry.");
      return null;
    }

    const imported = await importModuleSafely(entry);
    const plugin = imported.default;
    if (!plugin) {
      this.logger.warn({ plugin: manifest.id }, "Plugin externo inválido.");
      return null;
    }

    return {
      manifest: plugin.manifest,
      plugin,
      origin: "external"
    };
  }
}
