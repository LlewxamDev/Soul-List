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
  // Desativado: o Signal gerencia suas próprias retransmissões via retry receipt
  return;
}
