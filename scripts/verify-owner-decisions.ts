import pino from "pino";
import { env } from "../src/config/env";
import { PluginRuntime } from "../src/core/runtime/PluginRuntime";

const expected = [
  "aiimg", "atraente", "bin", "carteira", "cnpj", "compras", "cpf", "enquete", "fiel",
  "figurandom", "figvideo", "fotogp", "fotomenu", "fundobemvindo", "fundosaiu", "get", "grave",
  "idgrupo", "imgpralink", "lesbica", "lindo", "lojas", "parentes", "rg", "upload", "user", "wanted", "wasted"
];
const forbidden = [
  "artist", "beneficios", "enviar", "figuanime2", "figucoreanas2", "figumemes2", "fundolevel", "fundomenu",
  "igdl", "lojadecavalos", "lojadegalos", "mostrar_forca", "score", "trash", "jail", "track"
];

async function main(): Promise<void> {
  const runtime = new PluginRuntime(env, pino({ level: "silent" }));
  await runtime.loadAll();
  const missing = expected.filter((name) => !runtime.registry.has(name));
  const presentForbidden = forbidden.filter((name) => runtime.registry.has(name));
  const aliasTargets = {
    grave: runtime.registry.get("grave").name,
    figvideo: runtime.registry.get("figvideo").name,
    carteira: runtime.registry.get("carteira").name,
    fundobv: runtime.registry.get("fundobv").name
  };
  if (missing.length > 0 || presentForbidden.length > 0) {
    throw new Error(JSON.stringify({ missing, presentForbidden, aliasTargets }));
  }
  console.log(JSON.stringify({ registered: runtime.registry.all().length, aliasTargets }, null, 2));
}

void main();
