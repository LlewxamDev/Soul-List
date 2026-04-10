import type { WASocket } from "@whiskeysockets/baileys";
import type { AppRuntime } from "../core/runtime/AppRuntime";
import { onConnectionUpdate } from "../events/connection/onConnectionUpdate";
import { onCall } from "../events/calls/onCall";
import { onMessageUpsert } from "../events/messages/onMessageUpsert";
import { onParticipantsUpdate } from "../events/participants/onParticipantsUpdate";

export function registerEvents(
  socket: WASocket,
  runtime: AppRuntime,
  saveCreds: () => Promise<void>,
  restart: () => Promise<void>
): void {
  socket.ev.on("creds.update", saveCreds);
  socket.ev.on("messages.upsert", (event) => {
    void onMessageUpsert(socket, runtime, event);
  });
  socket.ev.on("connection.update", (update) => {
    onConnectionUpdate(runtime.logger, update, restart);
  });
  socket.ev.on("group-participants.update", (update) => {
    onParticipantsUpdate(runtime.logger, update);
  });
  socket.ev.on("call", (calls) => {
    onCall(runtime.logger, calls);
  });
}
