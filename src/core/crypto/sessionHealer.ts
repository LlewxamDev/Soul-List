import { readdirSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";
import { jidDecode } from "@whiskeysockets/baileys";
import type { Logger } from "pino";

const PURGE_COOLDOWN = new Map<string, number>();

let keyStoreClearCallback: (() => void) | null = null;

export function registerKeyStoreClearCallback(cb: () => void): void {
  keyStoreClearCallback = cb;
}

export function purgeCorruptedSession(
  sessionDir: string,
  jidOrLid: string,
  groupJid?: string,
  logger?: Logger
): void {
  if (!existsSync(sessionDir) || !jidOrLid) return;

  const now = Date.now();
  const lastPurge = PURGE_COOLDOWN.get(jidOrLid) ?? 0;
  if (now - lastPurge < 3000) {
    return; // Debounce de 3s
  }
  PURGE_COOLDOWN.set(jidOrLid, now);

  const decoded = jidDecode(jidOrLid);
  const user = decoded?.user || jidOrLid.replace(/[:@].*$/, "");
  if (!user || user === "creds") return;

  try {
    const files = readdirSync(sessionDir);
    let deletedCount = 0;

    for (const file of files) {
      if (file === "creds.json") continue; // NUNCA apagar creds.json

      const isUserSession = file.startsWith("session-") && file.includes(user);
      const isUserSenderKey = file.startsWith("sender-key-") && file.includes(user);
      const isGroupSenderKey = groupJid && file.startsWith(`sender-key-${groupJid}`);

      if (isUserSession || isUserSenderKey || isGroupSenderKey) {
        try {
          unlinkSync(join(sessionDir, file));
          deletedCount++;
        } catch {}
      }
    }

    if (keyStoreClearCallback) {
      try {
        keyStoreClearCallback();
      } catch {}
    }

    if (deletedCount > 0 && logger) {
      logger.warn(
        { user, deletedCount, groupJid },
        "Auto-healing: Sessão corrompida / Sender-Key removido para forçar novo handshake Signal."
      );
    }
  } catch (err) {
    if (logger) {
      logger.error({ err, user }, "Erro ao executar auto-healing de sessão.");
    }
  }
}
