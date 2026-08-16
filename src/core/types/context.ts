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
  media: MediaSummary;
}

export interface InteractiveButton {
  id: string;
  text: string;
}

export interface InteractiveButtonOptions {
  text: string;
  footer?: string;
  image?: Buffer | string;
  video?: Buffer | string;
  buttons: InteractiveButton[];
}

export interface InteractiveListRow {
  id: string;
  title: string;
  description?: string;
}

export interface InteractiveListSection {
  title: string;
  rows: InteractiveListRow[];
}

export interface InteractiveListOptions {
  title: string;
  description: string;
  footer?: string;
  buttonText: string;
  sections: InteractiveListSection[];
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
  reply(text: string): Promise<void>;
  react(emoji: string): Promise<void>;
  sendText(text: string): Promise<void>;
  deleteMessage(message: WAMessage): Promise<void>;
  sendMentionedText(text: string, mentions: string[]): Promise<void>;
  sendImage(input: Buffer | string, caption?: string, mentions?: string[]): Promise<void>;
  sendAudio(input: Buffer | string, ptt?: boolean): Promise<void>;
  sendVideo(input: Buffer | string, caption?: string, mentions?: string[]): Promise<void>;
  sendAnimation(input: Buffer | string, caption: string, mentions: string[]): Promise<void>;
  sendSticker(input: Buffer): Promise<void>;
  sendDocument(input: Buffer | string, fileName: string, mimetype?: string, caption?: string): Promise<void>;
  sendPoll(name: string, values: string[], selectableCount?: number): Promise<void>;
  sendButtons(options: InteractiveButtonOptions): Promise<void>;
  sendList(options: InteractiveListOptions): Promise<void>;
  downloadMedia(): Promise<Buffer | null>;
}
