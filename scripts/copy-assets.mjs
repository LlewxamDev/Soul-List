import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const assetsToCopy = [
  ["plugins", "dist/plugins"],
  ["src/assets", "dist/src/assets"]
];

for (const [from, to] of assetsToCopy) {
  const source = resolve(projectRoot, from);
  const target = resolve(projectRoot, to);
  if (!existsSync(source)) {
    continue;
  }

  mkdirSync(target, { recursive: true });
  cpSync(source, target, {
    recursive: true,
    filter: (path) => !path.includes("node_modules")
  });
}
