import type { WASocket } from "@whiskeysockets/baileys";
import type { AppRuntime } from "../core/runtime/AppRuntime";
import { onConnectionUpdate } from "../events/connection/onConnectionUpdate";
import { onCall } from "../events/calls/onCall";
import { onMessageUpsert } from "../events/messages/onMessageUpsert";
import { onMessageUpdate } from "../events/messages/onMessageUpdate";
import { onParticipantsUpdate } from "../events/participants/onParticipantsUpdate";
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";

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
  socket.ev.on("messages.update", (updates) => {
    onMessageUpdate(socket, runtime, updates);
  });
  socket.ev.on("connection.update", async (update) => {
    onConnectionUpdate(runtime.logger, update, restart);
    if (update.connection === "open") {
      try {
        const groups = await socket.groupFetchAllParticipating();
        const groupList = Object.values(groups).map((g) => ({ id: g.id, subject: g.subject }));
        writeFileSync("./data/participating_groups.json", JSON.stringify(groupList, null, 2), "utf-8");
        runtime.logger.info({ count: groupList.length }, "Grupos participantes salvos em participating_groups.json");
      } catch (err) {
        runtime.logger.warn({ err }, "Não foi possível buscar grupos participantes.");
      }
    }
  });
  socket.ev.on("group-participants.update", (update) => {
    onParticipantsUpdate(runtime.logger, update);
  });
  socket.ev.on("call", (calls) => {
    onCall(runtime.logger, calls);
  });

  // Listener de IPC para envio de comandos via terminal
  const outgoingPath = "./data/outgoing_cmd.json";
  setInterval(async () => {
    if (existsSync(outgoingPath)) {
      try {
        const raw = readFileSync(outgoingPath, "utf-8");
        unlinkSync(outgoingPath);
        const data = JSON.parse(raw);
        if (data.target && data.text) {
          runtime.logger.info({ target: data.target, text: data.text }, "Enviando comando do terminal.");
          await socket.sendMessage(data.target, { text: data.text });
        } else if (data.target && data.poll) {
          runtime.logger.info({ target: data.target, poll: data.poll }, "Enviando enquete do terminal.");
          await socket.sendMessage(data.target, { poll: data.poll });
        }
      } catch (err) {
        runtime.logger.error({ err }, "Erro ao processar outgoing_cmd.json.");
      }
    }
  }, 500);
}
