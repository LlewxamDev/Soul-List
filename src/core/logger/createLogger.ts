import pino, { type Logger } from "pino";
import type { AppEnv } from "../../config/env";

export function createLogger(env: AppEnv): Logger {
  const options = {
    level: env.logLevel,
    ...(process.env.NODE_ENV === "production"
      ? {}
      : {
          transport: {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: "SYS:standard"
            }
          }
        })
  };

  return pino(options);
}
