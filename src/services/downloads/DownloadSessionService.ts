export interface VideoDownloadSession {
  id: string;
  userId: string;
  chatId: string;
  videoUrl: string;
  videoTitle: string;
  thumbnail: string;
  status: "AWAITING_RESOLUTION" | "PROCESSING" | "COMPLETED" | "EXPIRED";
  availableResolutions: number[];
  createdAt: number;
  expiresAt: number;
}

export class DownloadSessionService {
  private static instance: DownloadSessionService;
  private readonly sessions = new Map<string, VideoDownloadSession>();
  private readonly sessionTtlMs = 5 * 60 * 1000; // 5 minutos de validade

  private constructor() {
    // Limpeza periódica de sessões expiradas a cada 2 minutos
    setInterval(() => this.cleanupExpired(), 2 * 60 * 1000).unref();
  }

  public static getInstance(): DownloadSessionService {
    if (!DownloadSessionService.instance) {
      DownloadSessionService.instance = new DownloadSessionService();
    }
    return DownloadSessionService.instance;
  }

  public createSession(data: {
    userId: string;
    chatId: string;
    videoUrl: string;
    videoTitle: string;
    thumbnail: string;
    availableResolutions: number[];
  }): VideoDownloadSession {
    const id = `dl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const now = Date.now();

    const session: VideoDownloadSession = {
      id,
      userId: data.userId,
      chatId: data.chatId,
      videoUrl: data.videoUrl,
      videoTitle: data.videoTitle,
      thumbnail: data.thumbnail,
      status: "AWAITING_RESOLUTION",
      availableResolutions: data.availableResolutions,
      createdAt: now,
      expiresAt: now + this.sessionTtlMs
    };

    this.sessions.set(id, session);
    return session;
  }

  public getSession(id: string): VideoDownloadSession | null {
    const session = this.sessions.get(id);
    if (!session) return null;
    if (Date.now() > session.expiresAt) {
      this.sessions.delete(id);
      return null;
    }
    return session;
  }

  /**
   * Reserva atomicamente a execução da sessão para evitar downloads duplicados
   */
  public lockSession(
    id: string,
    senderId: string
  ): { success: boolean; error?: string; session?: VideoDownloadSession } {
    const session = this.getSession(id);
    if (!session) {
      return {
        success: false,
        error: "⚠️ Esta sessão de download expirou ou não existe. Use !play novamente."
      };
    }

    // Normaliza JIDs (remove domínio ou sufixo se necessário)
    const normalizedSender = senderId.split("@")[0] || senderId;
    const normalizedOwner = session.userId.split("@")[0] || session.userId;

    if (normalizedSender !== normalizedOwner) {
      return {
        success: false,
        error: `⚠️ Apenas @${normalizedOwner} (quem pediu a música/vídeo) pode escolher a resolução!`
      };
    }

    if (session.status === "PROCESSING") {
      return {
        success: false,
        error: "⏳ Já existe um download desta solicitação em andamento. Por favor, aguarde o envio do vídeo!"
      };
    }

    if (session.status === "COMPLETED") {
      return {
        success: false,
        error: "✅ Este vídeo já foi baixado e entregue!"
      };
    }

    // Trava atômica
    session.status = "PROCESSING";
    return { success: true, session };
  }

  public completeSession(id: string): void {
    const session = this.sessions.get(id);
    if (session) {
      session.status = "COMPLETED";
    }
  }

  public failSession(id: string): void {
    const session = this.sessions.get(id);
    if (session) {
      session.status = "AWAITING_RESOLUTION"; // Permite que o usuário tente novamente se falhar
    }
  }

  private cleanupExpired(): void {
    const now = Date.now();
    for (const [id, session] of this.sessions.entries()) {
      if (now > session.expiresAt) {
        this.sessions.delete(id);
      }
    }
  }
}
