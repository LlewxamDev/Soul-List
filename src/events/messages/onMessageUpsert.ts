import type { BaileysEventMap, WAMessage, WASocket } from "@whiskeysockets/baileys";
import type { AppRuntime } from "../../core/runtime/AppRuntime";
import { createCommandContext } from "../../core/context/createCommandContext";
import { parseIncomingMessage } from "../../core/parser/messageParser";

async function resolveAdminStatus(socket: WASocket, chatId: string, sender: string): Promise<boolean> {
  if (!chatId.endsWith("@g.us")) {
    return false;
  }

  try {
    const metadata = await socket.groupMetadata(chatId);
    return metadata.participants.some((participant) => participant.id === sender && participant.admin !== null);
  } catch {
    return false;
  }
}

export async function onMessageUpsert(
  socket: WASocket,
  runtime: AppRuntime,
  event: BaileysEventMap["messages.upsert"]
): Promise<void> {
  if (event.type !== "notify") {
    return;
  }

  for (const message of event.messages) {
    await handleMessage(socket, runtime, message);
  }
}

async function handleMessage(socket: WASocket, runtime: AppRuntime, message: WAMessage): Promise<void> {
  if (!message.message || message.key.fromMe) {
    return;
  }

  const parsed = parseIncomingMessage(message, runtime.env);
  if (!parsed.sender || !parsed.from) {
    return;
  }

  await runtime.repositories.users.ensure(parsed.sender, parsed.pushName);
  if (parsed.isGroup) {
    try {
      const metadata = await socket.groupMetadata(parsed.from);
      await runtime.repositories.groups.ensure(parsed.from, metadata.subject);
    } catch {
      await runtime.repositories.groups.ensure(parsed.from, "Grupo");
    }
  }
  await runtime.repositories.activity.touch(parsed.from, parsed.sender);

  const senderRecord = await runtime.repositories.users.findById(parsed.sender);
  if (senderRecord?.isBanned) {
    return;
  }

  const existingAfk = await runtime.repositories.afk.get(parsed.sender);
  if (existingAfk && parsed.commandName !== "afk") {
    await runtime.repositories.afk.clear(parsed.sender);
    await socket.sendMessage(parsed.from, {
      text: `Bem-vindo de volta, ${parsed.pushName}. Seu AFK foi removido.`
    });
  }

  if (!parsed.commandName || !runtime.plugins.registry.has(parsed.commandName)) {
    return;
  }

  const command = runtime.plugins.registry.get(parsed.commandName);
  const isOwner = runtime.env.ownerNumbers.includes(parsed.sender.replace(/\D/g, ""));
  const isPremium = await runtime.repositories.premium.isPremium(parsed.sender);
  const isAdmin = await resolveAdminStatus(socket, parsed.from, parsed.sender);

  if (parsed.isGroup) {
    const groupRecord = await runtime.repositories.groups.findById(parsed.from);
    if (groupRecord?.isMuted && !isAdmin && !isOwner && parsed.commandName !== "mute") {
      return;
    }
  }

  const context = createCommandContext({
    env: runtime.env,
    socket,
    rawMessage: message,
    parsedMessage: parsed,
    logger: runtime.logger,
    services: runtime.services,
    repositories: runtime.repositories,
    registry: runtime.plugins.registry,
    command,
    isAdmin,
    isOwner,
    isPremium
  });

  const permission = runtime.permissions.evaluate(context);
  if (!permission.allowed) {
    await context.reply(permission.reason ?? "Você não pode usar esse comando.");
    return;
  }

  try {
    await command.execute(context);
  } catch (error) {
    runtime.logger.error({ error, command: command.name }, "Erro ao executar comando.");
    await context.reply("Algo deu errado ao executar o comando.");
  }
}
