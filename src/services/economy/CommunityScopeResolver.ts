import type { WASocket } from "@whiskeysockets/baileys";

export interface EconomicScope {
  scopeId: string;
  scopeType: "community" | "group" | "dm";
  scopeLabel: string;
}

export class CommunityScopeResolver {
  public static async resolve(socket: WASocket, chatId: string): Promise<EconomicScope> {
    if (!chatId.endsWith("@g.us")) {
      return {
        scopeId: chatId,
        scopeType: "dm",
        scopeLabel: "Privado"
      };
    }

    try {
      const metadata = await socket.groupMetadata(chatId);
      if (metadata.linkedParent) {
        return {
          scopeId: metadata.linkedParent,
          scopeType: "community",
          scopeLabel: "Comunidade"
        };
      }

      if (metadata.isCommunity) {
        return {
          scopeId: chatId,
          scopeType: "community",
          scopeLabel: metadata.subject || "Comunidade"
        };
      }

      return {
        scopeId: chatId,
        scopeType: "group",
        scopeLabel: metadata.subject || "Grupo"
      };
    } catch {
      // Fallback seguro em caso de indisponibilidade de metadata
      return {
        scopeId: chatId,
        scopeType: "group",
        scopeLabel: "Grupo"
      };
    }
  }
}
