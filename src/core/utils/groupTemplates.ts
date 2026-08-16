import type { MessageMediaKind } from "./messageMedia";

export interface GroupTemplate {
  text: string;
  media?: {
    kind: "image" | "video";
    dataBase64: string;
    mimetype: string;
  };
}

export function templateKey(groupId: string, type: "welcome" | "leave"): string {
  return `group:${groupId}:${type}-template`;
}

export function renderGroupTemplate(template: GroupTemplate | null, names: string, subject: string, fallback: string): string {
  const source = template?.text || fallback;
  return source
    .replace(/\{\{nome\}\}/gi, names)
    .replace(/\{\{menção\}\}/gi, names)
    .replace(/\{\{mencao\}\}/gi, names)
    .replace(/\{\{grupo\}\}/gi, subject);
}

export function isTemplateMediaKind(kind: MessageMediaKind): kind is "image" | "video" {
  return kind === "image" || kind === "video";
}
