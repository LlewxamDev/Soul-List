import { createBotConfig } from "../config/bot";
import { env } from "../config/env";
import { createLogger } from "../core/logger/createLogger";
import { ensureRuntimeDirs } from "../core/utils/fs";
import { createDatabase } from "../database/client";
import { createRepositories } from "../repositories/createRepositories";
import { createServices } from "../services/createServices";
import { createSocket } from "./createSocket";
import { registerEvents } from "./registerEvents";
import { AppRuntime } from "../core/runtime/AppRuntime";

export async function startBot(): Promise<void> {
  ensureRuntimeDirs(env);
  const logger = createLogger(env);
  const config = createBotConfig(env);
  logger.info({ bot: config.name, owner: config.ownerName }, "Inicializando Soul-List.");

  const database = createDatabase(env.databaseUrl);
  const repositories = createRepositories(database);
  const services = createServices(env);
  const runtime = new AppRuntime(env, logger, services, repositories);
  await runtime.initialize();

  const launch = async (): Promise<void> => {
    const { socket, saveCreds } = await createSocket(env, logger);
    registerEvents(socket, runtime, saveCreds, launch);
  };

  await launch();

  process.on("SIGINT", () => {
    logger.info("Encerrando Soul-List.");
    database.close();
    process.exit(0);
  });
}
