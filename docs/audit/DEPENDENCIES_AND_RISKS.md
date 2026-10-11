# Análise de Dependências, Riscos e Segurança (Fase 1)

> Data da Auditoria: 10 de Outubro de 2026  
> Objetivo: Mapear vulnerabilidades, gargalos técnicos e planos de mitigação para o bot Soul-List.

---

## 1. Riscos de Conexão e Sessão (Baileys)

| Risco | Severidade | Impacto | Estratégia de Mitigação |
|---|---|---|---|
| **Exclusão Acidental de Sessão** | **Crítica (P0)** | Perda de autenticação, necessidade de novo escaneamento de QR Code | Proteger o diretório `sessions/` contra limpeza automática; nunca apagar credenciais em tentativas genéricas de retry. |
| **Reconexões em Loop / Flood** | **Alta (P1)** | Bloqueio temporário do socket pelo servidor do WhatsApp | Implementar Exponential Backoff com Jitter; distinguir status 515 (restart necessário imediato) de 401 (logout definitivo). |
| **Conexões Concorrentes** | **Alta (P1)** | Conflito de sessão e desconexão do socket | Garantir singleton da instância do socket no runtime, fechando sockets órfãos antes de reabrir. |

---

## 2. Riscos na Pipeline de Mídia e Downloads (`Play`)

| Risco | Severidade | Impacto | Estratégia de Mitigação |
|---|---|---|---|
| **Esgotamento de Disco por Temporários** | **Alta (P1)** | Queda do servidor por falta de espaço em disco | Wrapper de tarefas assíncronas com bloco `finally` garantindo a exclusão de arquivos baixados e convertidos. |
| **Ataque de SSRF via URLs do Usuário** | **Crítica (P0)** | Acesso a serviços internos de rede ou arquivos locais (`file://`) | Validação estrita de URLs permitidas (apenas domínios confiáveis do YouTube/mídia); bloqueio de IPs locais (`127.0.0.1`, redes privadas). |
| **Download de Arquivos Excessivamente Grandes** | **Média (P2)** | O WhatsApp rejeita vídeos com mais de 64MB em formato padrão | Limitar a duração máxima de vídeos no `yt-dlp` e compactar via `ffmpeg` quando necessário; enviar como documento se exceder o limite de vídeo convencional. |
| **Injeção de Argumentos de Shell** | **Crítica (P0)** | Execução remota de comandos no servidor | Não montar comandos como strings brutas de terminal (`exec("yt-dlp " + url)`); usar `execFile` / `spawn` passando argumentos como array seguro. |

---

## 3. Riscos na Economia e RPG Persistente

| Risco | Severidade | Impacto | Estratégia de Mitigação |
|---|---|---|---|
| **Duplo Gasto / Race Condition** | **Alta (P1)** | Jogadores transferirem ou gastarem o mesmo saldo simultaneamente | Utilizar transações ACID nativas do SQLite/Drizzle com trava de saldo (`CHECK (balance >= 0)`) e chave de idempotência na transação. |
| **Daily Cooldown Bypass** | **Média (P2)** | Jogadores receberem recompensa diária repetidamente | Validação de timestamp persistida no banco, não em memória volátil. |
| **Perda de Dados por Falha de Processo** | **Alta (P1)** | Corrupção de arquivos JSON (como observado nas referências) | Não usar arquivos JSON soltos; persistir tudo no banco SQLite com WAL mode ativado (`PRAGMA journal_mode=WAL`). |

---

## 4. Riscos de Privacidade e Logs

| Risco | Severidade | Impacto | Estratégia de Mitigação |
|---|---|---|---|
| **Vazamento de Mensagens Pessoais nos Logs** | **Alta (P1)** | Violação de privacidade e retenção de dados sensíveis | Configurar redaction de campos no Pino; registrar apenas metadados (`chatId`, `commandName`, `duration`, `status`). |
| **Exposição de Chaves de API e Sessão no Git** | **Crítica (P0)** | Comprometimento de credenciais da OpenAI, WhatsApp e banco | Verificar `.gitignore` para garantir que `.env`, `sessions/`, `data/*.db` e temporários jamais sejam rastreados. |
