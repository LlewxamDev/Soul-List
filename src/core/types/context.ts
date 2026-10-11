import type { WAMessage, WASocket } from "@whiskeysockets/baileys";
import type { Logger } from "pino";
import type { RegisteredCommand } from "./command";
import type { BotRepositories } from "./repositories";
import type { BotServices } from "./services";
import type { AppEnv } from "../../config/env";
import type { CommandRegistry } from "../registry/CommandRegistry";

export interface MediaSummary {
  hasImage: boolean;
  hasVideo: boolean;
  hasAudio: boolean;
  hasSticker: boolean;
}

export interface ParsedIncomingMessage {
  text: string;
  normalizedText: string;
  prefix: string | null;
  commandName: string | null;
  args: string[];
  argString: string;
  from: string;
  sender: string;
  pushName: string;
  isGroup: boolean;
  quotedMessage?: WAMessage;
  quotedSender?: string;
  mentions: string[];
  media: MediaSummary;
}

export interface InteractiveButtonRow {
  title: string;
  description?: string;
  id: string;
}

export interface InteractiveButtonSection {
  title: string;
  rows: InteractiveButtonRow[];
}

export interface InteractiveButtonsPayload {
  title?: string;
  body: string;
  footer?: string;
  imageUrl?: string;
  buttons?: Array<{
    type: "quick_reply" | "url" | "call";
    displayText: string;
    idOrUrl: string;
  }>;
  menuTitle?: string;
  sections?: InteractiveButtonSection[];
}

export interface ProgressController {
  key: WAMessage["key"];
  update(text: string): Promise<void>;
}

export interface CommandContext extends ParsedIncomingMessage {
  env: AppEnv;
  socket: WASocket;
  rawMessage: WAMessage;
  logger: Logger;
  services: BotServices;
  repositories: BotRepositories;
  registry: CommandRegistry;
  command: RegisteredCommand;
  isAdmin: boolean;
  isOwner: boolean;
  isPremium: boolean;
  reply(text: string, options?: { mentions?: string[] }): Promise<WAMessage | undefined>;
  replyWithMentions(text: string, mentions: string[]): Promise<WAMessage | undefined>;
  react(emoji: string): Promise<void>;
  sendText(text: string): Promise<WAMessage | undefined>;
  editText(key: WAMessage["key"], newText: string): Promise<WAMessage | undefined>;
  sendProgress(initialText: string): Promise<ProgressController | undefined>;
  sendInteractiveButtons(payload: InteractiveButtonsPayload): Promise<WAMessage | undefined>;
  sendImage(input: Buffer | string, caption?: string): Promise<WAMessage | undefined>;
  sendAudio(input: Buffer | string, ptt?: boolean): Promise<WAMessage | undefined>;
  sendVideo(input: Buffer | string, caption?: string): Promise<WAMessage | undefined>;
  sendSticker(input: Buffer): Promise<WAMessage | undefined>;
  downloadMedia(): Promise<Buffer | null>;
}
