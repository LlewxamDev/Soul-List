import type { BaileysEventMap, WAMessage, WASocket } from "@whiskeysockets/baileys";
import type { AppRuntime } from "../../core/runtime/AppRuntime";
import { createCommandContext } from "../../core/context/createCommandContext";
import { parseIncomingMessage } from "../../core/parser/messageParser";
import { InteractivePollService } from "../../services/interactive/InteractivePollService";
import {
  getBotStartTime,
  isMessageProcessed,
  markMessageProcessed
} from "../../core/messages/messageTracker";
import { purgeCorruptedSession } from "../../core/crypto/sessionHealer";

const USER_COOLDOWNS = new Map<string, number>();

function getMessageTimestamp(message: WAMessage): number {
  const ts = message.messageTimestamp;
  if (typeof ts === "number") return ts;
  if (ts && typeof (ts as any).low === "number") return (ts as any).low;
  if (ts && typeof (ts as any).toNumber === "function") return (ts as any).toNumber();
  return 0;
}

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
  // Processa apenas eventos em tempo real ("notify") para evitar repetição em massa de histórico offline
  if (event.type !== "notify") {
    return;
  }

  for (const message of event.messages) {
    await handleMessage(socket, runtime, message);
  }
}

export async function handleMessage(socket: WASocket, runtime: AppRuntime, message: WAMessage): Promise<void> {
  if (!message.message) {
    return;
  }

  // 1. Deduplicação estrita de ID de mensagem (evita mensagens reprocessadas ou loops)
  const messageId = message.key.id;
  if (!messageId || isMessageProcessed(messageId)) {
    return;
  }

  // Descarte de histórico offline ou mensagens muito antigas (tolerância de 5 minutos)
  const ts = getMessageTimestamp(message);
  const now = Math.floor(Date.now() / 1000);
  if (ts > 0 && (ts < getBotStartTime() - 30 || now - ts > 300)) {
    return;
  }

  // 2. Bloqueio estrito de mensagens fromMe em conversas privadas com amigos/terceiros
  if (message.key.fromMe) {
    const isGroup = Boolean(message.key.remoteJid?.endsWith("@g.us"));
    const botUserNum = ((socket.user?.id || runtime.env.botOwnerNumber || "").split(":")[0] || "").replace(/\D/g, "");
    const isSelfChat = Boolean(message.key.remoteJid && botUserNum && message.key.remoteJid.includes(botUserNum));

    // Se o dono estiver conversando no privado com um amigo, o bot nunca deve intervir
    if (!isGroup && !isSelfChat) {
      return;
    }
  }

  // 3. Trata votos de enquete interativa
  if (message.message.pollUpdateMessage) {
    markMessageProcessed(messageId);
    const handled = await InteractivePollService.getInstance().handlePollUpdate(socket, runtime, message);
    if (handled) {
      return;
    }
  }

  const parsed = parseIncomingMessage(message, runtime.env);
  if (!parsed.sender || !parsed.from) {
    return;
  }

  // 4. Se a mensagem for enviada pela própria conta conectada (fromMe), só processamos se for um comando com prefixo
  if (message.key.fromMe && !parsed.commandName) {
    return;
  }

  if (!parsed.commandName) {
    return;
  }
  const command = runtime.plugins.registry.get(parsed.commandName);
  if (!command) {
    return;
  }

  // Marca como processada para não executar o mesmo ID duas vezes
  markMessageProcessed(messageId);

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

  const senderNumber = parsed.sender.replace(/\D/g, "");
  const botNumber = (socket.user?.id || runtime.env.botOwnerNumber || "").split(":")[0]?.replace(/\D/g, "") || "";
  const botLid = socket.user?.lid?.split(":")[0] || "";
  const isOwner = Boolean(
    message.key.fromMe ||
    runtime.env.ownerNumbers.includes(senderNumber) ||
    (botNumber && senderNumber.endsWith(botNumber)) ||
    (botLid && parsed.sender.includes(botLid))
  );

  // 4. Cooldown / Rate Limiting por usuário (exceto dono)
  if (!isOwner) {
    const lastExec = USER_COOLDOWNS.get(parsed.sender) ?? 0;
    const cooldownMs = (runtime.env.commandCooldownSeconds || 2) * 1000;
    if (Date.now() - lastExec < cooldownMs) {
      return;
    }
    USER_COOLDOWNS.set(parsed.sender, Date.now());
    if (USER_COOLDOWNS.size > 5000) {
      const expiredCutoff = Date.now() - 60000;
      for (const [key, time] of USER_COOLDOWNS.entries()) {
        if (time < expiredCutoff) USER_COOLDOWNS.delete(key);
      }
    }
  }

  const isMaintenance = (await runtime.repositories.settings.get("bot_maintenance")) === "true";
  if (isMaintenance && !isOwner) {
    await socket.sendMessage(parsed.from, {
      text: "🔒 *O bot está atualmente em modo de manutenção e acessível apenas pelo dono.*\nAguarde a liberação dos comandos!"
    });
    return;
  }

  const isPremium = await runtime.repositories.premium.isPremium(parsed.sender);
  const isAdmin = await resolveAdminStatus(socket, parsed.from, parsed.sender);

  if (parsed.isGroup) {
    const groupRecord = await runtime.repositories.groups.findById(parsed.from);
    if (groupRecord?.isMuted && !isAdmin && !isOwner && parsed.commandName !== "mute") {
      return;
    }
  }

  runtime.logger.info(
    {
      command: command.name,
      sender: parsed.sender,
      from: parsed.from,
      isGroup: parsed.isGroup,
      fromMe: message.key.fromMe
    },
    `Executando comando: ${parsed.prefix || ""}${command.name}`
  );

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
