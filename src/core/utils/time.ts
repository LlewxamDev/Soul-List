import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import type { AppEnv } from "../../config/env";

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDateTime(env: AppEnv): string {
  return dayjs().tz(env.timezone).format("DD/MM/YYYY HH:mm");
}

export function getGreeting(env: AppEnv): string {
  const hour = dayjs().tz(env.timezone).hour();
  if (hour < 12) {
    return "Bom dia";
  }
  if (hour < 18) {
    return "Boa tarde";
  }
  return "Boa noite";
}
