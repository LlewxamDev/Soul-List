const PROCESSED_MESSAGE_IDS = new Set<string>();
const MAX_TRACKED_IDS = 10000;
const BOT_START_TIME = Math.floor(Date.now() / 1000);

/**
 * Retorna o timestamp Unix em segundos de quando o processo do bot iniciou.
 */
export function getBotStartTime(): number {
  return BOT_START_TIME;
}

/**
 * Verifica se uma mensagem já foi processada ou enviada pelo bot.
 */
export function isMessageProcessed(id: string): boolean {
  if (!id) return false;
  return PROCESSED_MESSAGE_IDS.has(id);
}

/**
 * Registra um ID de mensagem como processado, mantendo o tamanho do cache limitado.
 */
export function markMessageProcessed(id: string): void {
  if (!id) return;
  PROCESSED_MESSAGE_IDS.add(id);
  if (PROCESSED_MESSAGE_IDS.size > MAX_TRACKED_IDS) {
    const first = PROCESSED_MESSAGE_IDS.values().next().value;
    if (first) {
      PROCESSED_MESSAGE_IDS.delete(first);
    }
  }
}
