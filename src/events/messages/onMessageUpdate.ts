import type { WAMessageUpdate, WASocket } from "@whiskeysockets/baileys";
import type { AppRuntime } from "../../core/runtime/AppRuntime";
import { InteractivePollService } from "../../services/interactive/InteractivePollService";

export function onMessageUpdate(
  socket: WASocket,
  runtime: AppRuntime,
  updates: WAMessageUpdate[]
): void {
  void InteractivePollService.getInstance().handlePollUpdatesFromUpdates(socket, runtime, updates);
  for (const item of updates) {
    const messageId = item.key?.id;
    const remoteJid = item.key?.remoteJid;
    const status = item.update?.status;

    if (!messageId || status === undefined) {
      continue;
    }

    let statusLabel = "UNKNOWN";
    switch (status) {
      case 1:
        statusLabel = "PENDING";
        break;
      case 2:
        statusLabel = "ACCEPTED";
        break;
      case 3:
        statusLabel = "DELIVERED";
        break;
      case 4:
        statusLabel = "READ";
        break;
      case 5:
        statusLabel = "PLAYED";
        break;
    }

    runtime.logger.debug(
      {
        event: "message_receipt_update",
        messageId,
        remoteJid,
        status: statusLabel,
        rawStatus: status
      },
      `Recibo WhatsApp: mensagem ${messageId} -> ${statusLabel}`
    );
  }
}
