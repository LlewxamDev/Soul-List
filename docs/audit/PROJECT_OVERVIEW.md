# Diagnóstico e Visão Geral do Projeto (Fase 0)

> Data da Auditoria: 10 de Outubro de 2026  
> Auditor: Engenheiro de Software / Antigravity AI  
> Repositório: LlewxamDev/Soul-List (Privado)  
> Branch: main | Commit: 3f3c507  

---

## 1. Identificação do Ambiente e do Projeto

- **Local de Trabalho Principal:** `c:\Users\Evandro\Documents\antigravity\gallant-oppenheimer\Soul-List`
- **Ambiente Operacional:** Windows 10/11 x64, PowerShell, Node.js 20+
- **Status do Git:** Branch `main`, sem modificações locais não rastreadas dentro do repositório, histórico preservado.
- **Cliente WhatsApp Desktop:** Processo `WhatsApp.Root` (PID 11872) detectado em execução na máquina do usuário.
- **Armazenamento de Referências:** 9 arquivos ZIP de bots de referência obtidos legitimamente da pasta do Google Drive (`https://drive.google.com/drive/folders/1SqcdGf_j9-axh2fPo3Ql-PU3fDVrHRZj`) e inspecionados em `reference_bots/extracted/` sem execução arbitrária de código desconhecido.

---

## 2. Stack Tecnológica Atual do Soul-List

| Componente | Tecnologia / Versão | Observações |
|---|---|---|
| **Linguagem** | TypeScript 5.7.3 | Tipagem estrita em `tsconfig.json`, build via `tsc` |
| **WhatsApp Engine** | `@whiskeysockets/baileys ^6.7.18` | Versão moderna do Baileys v6 |
| **Banco de Dados** | SQLite (`@libsql/client ^0.14.0`) + Drizzle ORM `^0.39.1` | Tabelas criadas em `schema.ts`, migrations via `drizzle-kit` |
| **Mídia e Imagem** | `sharp ^0.33.5`, `fluent-ffmpeg ^2.1.3`, `ffmpeg-static ^5.2.0` | Processamento local de stickers e áudio/vídeo |
| **IA & Speech** | `openai ^4.86.2` | Usado no serviço `SpeechService` (Whisper) e `AIService` |
| **Parser XML / Tradução** | `fast-xml-parser ^4.5.1`, `@vitalets/google-translate-api ^9.2.1` | Para feeds Google News RSS e tradução |
| **Logging** | `pino ^9.6.0`, `pino-pretty ^13.0.0` | Logger estruturado, porém sem correlação de recibos de envio |

---

## 3. Arquitetura do Soul-List

A arquitetura do `Soul-List` é modular e separada por responsabilidades:

```text
Soul-List/
├── src/
│   ├── bootstrap/          # Ciclo de vida: createSocket, registerEvents, startBot
│   ├── config/             # Validação tipada via Zod (env.ts), bot config
│   ├── core/
│   │   ├── context/        # createCommandContext (interface do handler)
│   │   ├── parser/         # messageParser (prefixos, argumentos, quote)
│   │   ├── registry/       # CommandRegistry (catálogo em memória)
│   │   ├── runtime/        # AppRuntime (orquestrador de plugins e serviços)
│   │   ├── permissions/    # PermissionEvaluator (owner, admin, premium, group)
│   │   └── utils/          # http, fs, time, whatsapp
│   ├── database/           # schema Drizzle (SQLite) e client
│   ├── events/             # handlers: messages, connection, calls, participants
│   ├── menu/               # builders de menu dinâmico (MenuBuilder, CategoryMenuBuilder)
│   ├── plugins/            # plugins internos (core, admin, owner, placeholders)
│   ├── repositories/       # repositórios de acesso a dados (users, groups, afk, etc.)
│   └── services/           # integrações isoladas (search, weather, media, ffmpeg)
├── data/                   # banco sqlite local (soul-list.db)
└── sessions/               # credenciais multi-file do Baileys
```

---

## 4. Diagnóstico das Lacunas Críticas Identificadas

1. **Ausência do comando Play:** A categoria de downloads possui apenas um arquivo de placeholder (`downloads.ts`) que emite texto estático. Não existe o comando `play`, nem suporte a busca com thumbnail, seleção de áudio/vídeo, detecção de formato/qualidade via `yt-dlp` ou download seguro.
2. **Ausência do Sistema de Progresso Visual (GIF / Reticências Animadas):** Não há helpers para envio ou edição de mensagens de progresso no `createCommandContext`. As funções de envio (`sendText`, `sendImage`, etc.) descartam o retorno do Baileys (`void`), impedindo a captura da `key` da mensagem para edição (`{ text, edit: key }`).
3. **Falta de Observabilidade de Recibos no WhatsApp:** O Baileys emite o evento `messages.update` com status de entrega e leitura, mas o arquivo `registerEvents.ts` não escuta este evento. Portanto, o bot não registra se mensagens foram aceitas, entregues ou lidas.
4. **RPG e Família não implementados:** Apesar de o schema possuir a tabela `familyTable` e `economyTable`, inexiste `FamilyRepository`, comandos de família/casamento, e `EconomyRepository` possui apenas `ensure` e `get` (sem transações atômicas, sem transferências, sem histórico e sem daily).
5. **Comandos Parciais e Frágeis:** `buscar` depende do DuckDuckGo Instant Answer (geralmente vazio para pt-BR), `printsite` usa serviço público de terceiros com risco de quebra, e `totext` falha silenciosamente caso não haja `OPENAI_API_KEY`.
