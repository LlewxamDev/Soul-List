import pino from "pino";
import { env } from "../src/config/env";
import { PluginRuntime } from "../src/core/runtime/PluginRuntime";

async function main(): Promise<void> {
  const runtime = new PluginRuntime(env, pino({ level: "silent" }));
  await runtime.loadAll();
  const commands = runtime.registry.all();
  const canonical = new Set(commands.map((command) => command.name));
  const aliases = new Set(commands.flatMap((command) => command.aliases));
  const allNames = new Set([...canonical, ...aliases]);
  console.log(JSON.stringify({ canonical: canonical.size, aliases: aliases.size, totalNames: allNames.size }, null, 2));
}

void main();
