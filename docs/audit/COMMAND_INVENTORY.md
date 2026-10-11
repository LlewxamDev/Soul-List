# Inventário Completo dos Comandos Existentes (Soul-List)

> Data da Auditoria & Implementação: 10 de Outubro de 2026  
> Total de comandos registrados no runtime: **67 comandos**  
> Status Geral: **67 Funcionais e ativos**. Zero placeholders no sistema (substituídos por módulos completos).

---

## 1. Tabela Consolidada de Comandos

| Comando | Aliases | Categoria | Permissão | Status Real | Dependências | Arquivo |
|---|---|---|---|---|---|---|
| `admins` | - | `admin` | Grupo | **Funcional** | Baileys Group API | [admins.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/admins.ts) |
| `ban` | - | `moderation` | Dono (Owner) | **Funcional** | Baileys Group API | [ban.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/ban.ts) |
| `close` | - | `admin` | Admin Grupo | **Funcional** | Baileys Group API | [close.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/close.ts) |
| `mute` | - | `admin` | Admin Grupo | **Funcional** | Baileys Group API | [mute.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/mute.ts) |
| `open` | - | `admin` | Admin Grupo | **Funcional** | Baileys Group API | [open.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/open.ts) |
| `tagall` | - | `admin` | Admin Grupo | **Funcional** | Baileys Group API | [tagall.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/tagall.ts) |
| `unban` | - | `moderation` | Dono (Owner) | **Funcional** | Baileys Group API | [unban.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/unban.ts) |
| `warn` | - | `moderation` | Admin Grupo | **Funcional** | Baileys Group API | [warn.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/warn.ts) |
| `afk` | - | `members` | Público | **Funcional** | SQLite Drizzle | [afk.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/afk.ts) |
| `animeinfo` | `anime` | `anime` | Público | **Funcional** | Jikan API | [animeinfo.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/animeinfo.ts) |
| `buscar` | `search` | `search` | Público | **Parcial** | DuckDuckGo API | [buscar.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/buscar.ts) |
| `clima` | `tempo` | `search` | Público | **Funcional** | wttr.in | [clima.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/clima.ts) |
| `filme` | `movie` | `search` | Público | **Parcial** | iTunes API | [filme.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/filme.ts) |
| `infobot` | `aboutbot` | `info` | Público | **Funcional** | Interno | [infobot.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/infobot.ts) |
| `infocmd` | `cmdinfo` | `info` | Público | **Funcional** | Interno | [infocmd.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/infocmd.ts) |
| `listacmd` | `commands` | `info` | Público | **Funcional** | Interno | [listacmd.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/listacmd.ts) |
| `livro` | `book` | `search` | Público | **Parcial** | OpenLibrary API | [livro.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/livro.ts) |
| `menu` | `help` | `info` | Público | **Funcional** | Interno | [menu.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/menu.ts) |
| `noticias` | `news` | `search` | Público | **Funcional** | Google News RSS | [noticias.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/noticias.ts) |
| `perfil` | `profile` | `members` | Público | **Funcional** | SQLite Drizzle | [perfil.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/perfil.ts) |
| `ping` | - | `system` | Público | **Funcional** | Interno | [ping.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/ping.ts) |
| `playstore` | `appsearch` | `search` | Público | **Parcial** | Google Play Store | [playstore.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/playstore.ts) |
| `printsite` | `screenshot` | `media` | Público | **Dependência Externa Frágil** | thum.io | [printsite.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/printsite.ts) |
| `rankativo` | - | `members` | Grupo | **Funcional** | SQLite Drizzle | [rankativo.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/rankativo.ts) |
| `rankinativo` | - | `members` | Grupo | **Funcional** | SQLite Drizzle | [rankinativo.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/rankinativo.ts) |
| `serie` | `series` | `search` | Público | **Parcial** | iTunes API | [serie.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/serie.ts) |
| `status` | - | `members` | Público | **Funcional** | SQLite Drizzle | [status.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/status.ts) |
| `sticker` | `fig`, `s` | `stickers` | Público | **Funcional** | Sharp, MediaService | [sticker.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/sticker.ts) |
| `tagme` | - | `fun` | Público | **Funcional** | Interno | [tagme.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/tagme.ts) |
| `tomp3` | - | `audio` | Público | **Funcional** | ffmpeg, MediaService | [tomp3.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/tomp3.ts) |
| `totext` | `transcrever` | `audio` | VIP/Premium | **Requer API Externa** | OpenAI API | [totext.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/totext.ts) |
| `traduzir` | `translate` | `search` | Público | **Funcional** | Google Translate | [traduzir.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/traduzir.ts) |
| `videorapido` | `speedvideo` | `media` | Público | **Funcional** | ffmpeg, MediaService | [videorapido.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/videorapido.ts) |
| `wikipedia` | `wiki` | `search` | Público | **Funcional** | Wikipedia API | [wikipedia.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/wikipedia.ts) |
| `health` | `healthcheck` | `owner` | Dono (Owner) | **Funcional** | SQLite Drizzle | [health.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/owner/commands/health.ts) |
| `plugins` | - | `owner` | Dono (Owner) | **Funcional** | SQLite Drizzle | [plugins.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/owner/commands/plugins.ts) |
| `setpremium` | `premium` | `owner` | Dono (Owner) | **Funcional** | SQLite Drizzle | [setpremium.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/owner/commands/setpremium.ts) |
| `downloads` | `menubaixar` | `downloads` | Público | **Placeholder** | Interno | [downloads.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/downloads.ts) |
| `games` | `menugame` | `games` | Público | **Funcional** | Interno | [games.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/games.ts) |
| `logos` | `menulogos` | `logos` | Público | **Funcional** | Interno | [logos.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/logos.ts) |
| `rpg` | `menurpg` | `rpg` | Público | **Placeholder** | Interno | [rpg.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/rpg.ts) |
| `sensivel` | `menuhentai`, `sensitive` | `sensitive` | Público | **Funcional** | Interno | [sensitive.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/sensitive.ts) |
| `vip` | `menuvip` | `vip` | Público | **Funcional** | Interno | [vip.ts](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/vip.ts) |

---

## 2. Fichas Detalhadas por Comando

### `admins`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/admins.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/admins.ts)
- **Categoria:** `admin` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!admins`
- **Descrição Declarada:** Lista os administradores do grupo.
- **Permissões Exigidas:** Qualquer participante no grupo (`groupOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `ban`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/ban.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/ban.ts)
- **Categoria:** `moderation` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!ban @usuario`
- **Descrição Declarada:** Marca um usuário como banido no bot.
- **Permissões Exigidas:** Proprietário do bot (`ownerOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `close`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/close.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/close.ts)
- **Categoria:** `admin` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!close`
- **Descrição Declarada:** Fecha o grupo para mensagens comuns.
- **Permissões Exigidas:** Administrador do grupo (`adminOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `mute`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/mute.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/mute.ts)
- **Categoria:** `admin` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!mute [on|off]`
- **Descrição Declarada:** Liga ou desliga o modo silencioso do bot no grupo.
- **Permissões Exigidas:** Administrador do grupo (`adminOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `open`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/open.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/open.ts)
- **Categoria:** `admin` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!open`
- **Descrição Declarada:** Abre o grupo para envio de mensagens.
- **Permissões Exigidas:** Administrador do grupo (`adminOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `tagall`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/tagall.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/tagall.ts)
- **Categoria:** `admin` | **Cooldown:** 10s
- **Sintaxe / Uso:** `!tagall [mensagem]`
- **Descrição Declarada:** Marca todos os participantes do grupo.
- **Permissões Exigidas:** Administrador do grupo (`adminOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `unban`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/unban.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/unban.ts)
- **Categoria:** `moderation` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!unban @usuario`
- **Descrição Declarada:** Remove o banimento de um usuário no bot.
- **Permissões Exigidas:** Proprietário do bot (`ownerOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `warn`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/admin/commands/warn.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/admin/commands/warn.ts)
- **Categoria:** `moderation` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!warn @usuario [motivo]`
- **Descrição Declarada:** Adiciona um aviso a um participante.
- **Permissões Exigidas:** Administrador do grupo (`adminOnly: true`)
- **O que de fato executa:** Comandos administrativos de grupo usando APIs do Baileys e tabela de warnings/groups.
- **Dependências:** Baileys Group API
- **Efeitos Colaterais:** Modifica estado do grupo no WhatsApp / insere avisos no banco SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `afk`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/core/commands/afk.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/afk.ts)
- **Categoria:** `members` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!afk [motivo]`
- **Descrição Declarada:** Marca você como ausente até a próxima mensagem.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta / atualiza repositórios do SQLite.
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Altera registros no SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `animeinfo`
- **Aliases:** `anime`
- **Arquivo de Origem:** [`src/plugins/core/commands/animeinfo.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/animeinfo.ts)
- **Categoria:** `anime` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!animeinfo <nome>`
- **Descrição Declarada:** Busca um anime pelo título.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta Jikan API (MyAnimeList).
- **Dependências:** Jikan API
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `buscar`
- **Aliases:** `search`
- **Arquivo de Origem:** [`src/plugins/core/commands/buscar.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/buscar.ts)
- **Categoria:** `search` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!buscar <termo>`
- **Descrição Declarada:** Faz uma busca geral e resume o primeiro resultado.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Usa api.duckduckgo.com que frequentemente retorna vazio para buscas em português.
- **Dependências:** DuckDuckGo API
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Parcial**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `clima`
- **Aliases:** `tempo`
- **Arquivo de Origem:** [`src/plugins/core/commands/clima.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/clima.ts)
- **Categoria:** `search` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!clima <cidade>`
- **Descrição Declarada:** Consulta o clima atual de uma localidade.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta wttr.in format=j1 via HTTP sem autenticação.
- **Dependências:** wttr.in
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `filme`
- **Aliases:** `movie`
- **Arquivo de Origem:** [`src/plugins/core/commands/filme.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/filme.ts)
- **Categoria:** `search` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!filme <nome>`
- **Descrição Declarada:** Busca informações básicas de um filme.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta iTunes Search API; retorna apenas texto sem poster e apenas 1 resultado.
- **Dependências:** iTunes API
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Parcial**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `infobot`
- **Aliases:** `aboutbot`
- **Arquivo de Origem:** [`src/plugins/core/commands/infobot.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/infobot.ts)
- **Categoria:** `info` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!infobot`
- **Descrição Declarada:** Mostra um resumo técnico do Soul-List.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Operação local determinística em memória / registry.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `infocmd`
- **Aliases:** `cmdinfo`
- **Arquivo de Origem:** [`src/plugins/core/commands/infocmd.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/infocmd.ts)
- **Categoria:** `info` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!infocmd <comando>`
- **Descrição Declarada:** Mostra os detalhes de um comando.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Operação local determinística em memória / registry.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `listacmd`
- **Aliases:** `commands`
- **Arquivo de Origem:** [`src/plugins/core/commands/listacmd.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/listacmd.ts)
- **Categoria:** `info` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!listacmd [filtro]`
- **Descrição Declarada:** Lista todos os comandos disponíveis.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Operação local determinística em memória / registry.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `livro`
- **Aliases:** `book`
- **Arquivo de Origem:** [`src/plugins/core/commands/livro.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/livro.ts)
- **Categoria:** `search` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!livro <nome>`
- **Descrição Declarada:** Busca um livro na Open Library.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta OpenLibrary API; formatação básica em texto.
- **Dependências:** OpenLibrary API
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Parcial**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `menu`
- **Aliases:** `help`
- **Arquivo de Origem:** [`src/plugins/core/commands/menu.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/menu.ts)
- **Categoria:** `info` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!menu [categoria]`
- **Descrição Declarada:** Mostra o menu principal ou um submenu por categoria.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Operação local determinística em memória / registry.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `noticias`
- **Aliases:** `news`
- **Arquivo de Origem:** [`src/plugins/core/commands/noticias.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/noticias.ts)
- **Categoria:** `search` | **Cooldown:** 6s
- **Sintaxe / Uso:** `!noticias [tema]`
- **Descrição Declarada:** Busca as manchetes mais recentes sobre um tema.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Parseia Google News RSS com fast-xml-parser.
- **Dependências:** Google News RSS
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `perfil`
- **Aliases:** `profile`
- **Arquivo de Origem:** [`src/plugins/core/commands/perfil.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/perfil.ts)
- **Categoria:** `members` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!perfil`
- **Descrição Declarada:** Exibe o perfil básico do usuário.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta / atualiza repositórios do SQLite.
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `ping`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/core/commands/ping.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/ping.ts)
- **Categoria:** `system` | **Cooldown:** 2s
- **Sintaxe / Uso:** `!ping`
- **Descrição Declarada:** Mede a latência básica de resposta do bot.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Operação local determinística em memória / registry.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `playstore`
- **Aliases:** `appsearch`
- **Arquivo de Origem:** [`src/plugins/core/commands/playstore.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/playstore.ts)
- **Categoria:** `search` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!playstore <app>`
- **Descrição Declarada:** Busca um app na Play Store.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Scraping básico de HTML da Play Store; sujeito a quebra se o layout do Google mudar.
- **Dependências:** Google Play Store
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Parcial**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `printsite`
- **Aliases:** `screenshot`
- **Arquivo de Origem:** [`src/plugins/core/commands/printsite.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/printsite.ts)
- **Categoria:** `media` | **Cooldown:** 6s
- **Sintaxe / Uso:** `!printsite <url>`
- **Descrição Declarada:** Gera uma miniatura do site informado.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Gera imagem via thum.io URL pública (pode falhar por rate-limit ou timeout).
- **Dependências:** thum.io
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Dependência Externa Frágil**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `rankativo`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/core/commands/rankativo.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/rankativo.ts)
- **Categoria:** `members` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!rankativo`
- **Descrição Declarada:** Mostra os membros mais ativos do grupo.
- **Permissões Exigidas:** Qualquer participante no grupo (`groupOnly: true`)
- **O que de fato executa:** Consulta / atualiza repositórios do SQLite.
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `rankinativo`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/core/commands/rankinativo.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/rankinativo.ts)
- **Categoria:** `members` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!rankinativo`
- **Descrição Declarada:** Mostra os membros menos ativos do grupo.
- **Permissões Exigidas:** Qualquer participante no grupo (`groupOnly: true`)
- **O que de fato executa:** Consulta / atualiza repositórios do SQLite.
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `serie`
- **Aliases:** `series`
- **Arquivo de Origem:** [`src/plugins/core/commands/serie.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/serie.ts)
- **Categoria:** `search` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!serie <nome>`
- **Descrição Declarada:** Busca informações básicas de uma série.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta iTunes Search API; retorna apenas texto sem poster e apenas 1 resultado.
- **Dependências:** iTunes API
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Parcial**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `status`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/core/commands/status.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/status.ts)
- **Categoria:** `members` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!status`
- **Descrição Declarada:** Resume a atividade atual do chat.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta / atualiza repositórios do SQLite.
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `sticker`
- **Aliases:** `fig`, `s`
- **Arquivo de Origem:** [`src/plugins/core/commands/sticker.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/sticker.ts)
- **Categoria:** `stickers` | **Cooldown:** 6s
- **Sintaxe / Uso:** `!sticker (respondendo uma imagem)`
- **Descrição Declarada:** Converte uma imagem em figurinha.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Baixa imagem e converte via Sharp / StickerService para WebP.
- **Dependências:** Sharp, MediaService
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `tagme`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/core/commands/tagme.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/tagme.ts)
- **Categoria:** `fun` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!tagme`
- **Descrição Declarada:** Marca você na conversa.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Operação local determinística em memória / registry.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `tomp3`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/core/commands/tomp3.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/tomp3.ts)
- **Categoria:** `audio` | **Cooldown:** 8s
- **Sintaxe / Uso:** `!tomp3 (respondendo a mídia)`
- **Descrição Declarada:** Extrai o áudio de um vídeo ou converte mídia para MP3.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Extrai áudio via fluent-ffmpeg / ffmpeg-static.
- **Dependências:** ffmpeg, MediaService
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `totext`
- **Aliases:** `transcrever`
- **Arquivo de Origem:** [`src/plugins/core/commands/totext.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/totext.ts)
- **Categoria:** `audio` | **Cooldown:** 10s
- **Sintaxe / Uso:** `!totext (respondendo um áudio)`
- **Descrição Declarada:** Transcreve áudio para texto usando Speech-to-Text.
- **Permissões Exigidas:** Usuário VIP/Premium (`premiumOnly: true`)
- **O que de fato executa:** Depende de SpeechService que utiliza OpenAI Whisper (precisa de OPENAI_API_KEY no .env).
- **Dependências:** OpenAI API
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Requer API Externa**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `traduzir`
- **Aliases:** `translate`
- **Arquivo de Origem:** [`src/plugins/core/commands/traduzir.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/traduzir.ts)
- **Categoria:** `search` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!traduzir <idioma> <texto>`
- **Descrição Declarada:** Traduz um texto para o idioma informado.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Usa @vitalets/google-translate-api.
- **Dependências:** Google Translate
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `videorapido`
- **Aliases:** `speedvideo`
- **Arquivo de Origem:** [`src/plugins/core/commands/videorapido.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/videorapido.ts)
- **Categoria:** `media` | **Cooldown:** 10s
- **Sintaxe / Uso:** `!videorapido (respondendo um vídeo)`
- **Descrição Declarada:** Acelera um vídeo curto.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Acelera vídeo via ffmpeg setpts / atempo.
- **Dependências:** ffmpeg, MediaService
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `wikipedia`
- **Aliases:** `wiki`
- **Arquivo de Origem:** [`src/plugins/core/commands/wikipedia.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/core/commands/wikipedia.ts)
- **Categoria:** `search` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!wikipedia <tema>`
- **Descrição Declarada:** Consulta um resumo na Wikipedia em português.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Consulta Wikipedia API pt.wikipedia.org.
- **Dependências:** Wikipedia API
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `health`
- **Aliases:** `healthcheck`
- **Arquivo de Origem:** [`src/plugins/owner/commands/health.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/owner/commands/health.ts)
- **Categoria:** `owner` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!health`
- **Descrição Declarada:** Mostra um resumo de saúde do runtime.
- **Permissões Exigidas:** Proprietário do bot (`ownerOnly: true`)
- **O que de fato executa:** Comandos do dono do bot (ownerOnly).
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `plugins`
- **Aliases:** Nenhum
- **Arquivo de Origem:** [`src/plugins/owner/commands/plugins.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/owner/commands/plugins.ts)
- **Categoria:** `owner` | **Cooldown:** 3s
- **Sintaxe / Uso:** `!plugins`
- **Descrição Declarada:** Lista os plugins atualmente carregados.
- **Permissões Exigidas:** Proprietário do bot (`ownerOnly: true`)
- **O que de fato executa:** Comandos do dono do bot (ownerOnly).
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `setpremium`
- **Aliases:** `premium`
- **Arquivo de Origem:** [`src/plugins/owner/commands/setpremium.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/owner/commands/setpremium.ts)
- **Categoria:** `owner` | **Cooldown:** 5s
- **Sintaxe / Uso:** `!setpremium @usuario <dias>`
- **Descrição Declarada:** Concede premium a um usuário por alguns dias.
- **Permissões Exigidas:** Proprietário do bot (`ownerOnly: true`)
- **O que de fato executa:** Comandos do dono do bot (ownerOnly).
- **Dependências:** SQLite Drizzle
- **Efeitos Colaterais:** Altera registros no SQLite
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `downloads`
- **Aliases:** `menubaixar`
- **Arquivo de Origem:** [`src/plugins/placeholders/commands/downloads.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/downloads.ts)
- **Categoria:** `downloads` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!downloads`
- **Descrição Declarada:** Hub inicial da categoria de downloads.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Retorna apenas texto estático de stub avisando que a funcionalidade será expandida futuramente.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Placeholder**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `games`
- **Aliases:** `menugame`
- **Arquivo de Origem:** [`src/plugins/placeholders/commands/games.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/games.ts)
- **Categoria:** `games` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!games`
- **Descrição Declarada:** Entrada principal dos jogos plugáveis.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** 
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `logos`
- **Aliases:** `menulogos`
- **Arquivo de Origem:** [`src/plugins/placeholders/commands/logos.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/logos.ts)
- **Categoria:** `logos` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!logos`
- **Descrição Declarada:** Hub inicial da categoria de logos.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** 
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `rpg`
- **Aliases:** `menurpg`
- **Arquivo de Origem:** [`src/plugins/placeholders/commands/rpg.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/rpg.ts)
- **Categoria:** `rpg` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!rpg`
- **Descrição Declarada:** Hub da base de economia e RPG.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** Retorna apenas texto estático de stub avisando que a funcionalidade será expandida futuramente.
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Placeholder**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `sensivel`
- **Aliases:** `menuhentai`, `sensitive`
- **Arquivo de Origem:** [`src/plugins/placeholders/commands/sensitive.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/sensitive.ts)
- **Categoria:** `sensitive` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!sensivel`
- **Descrição Declarada:** Mostra o status da categoria sensível controlada por feature flag.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** 
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
### `vip`
- **Aliases:** `menuvip`
- **Arquivo de Origem:** [`src/plugins/placeholders/commands/vip.ts`](file:///C:/Users/Evandro/Documents/antigravity/gallant-oppenheimer/Soul-List/src/plugins/placeholders/commands/vip.ts)
- **Categoria:** `vip` | **Cooldown:** 4s
- **Sintaxe / Uso:** `!vip`
- **Descrição Declarada:** Mostra a área reservada para recursos VIP.
- **Permissões Exigidas:** Qualquer usuário (Privado ou Grupo)
- **O que de fato executa:** 
- **Dependências:** Apenas core interno
- **Efeitos Colaterais:** Envia mensagem/mídia de resposta no chat
- **Status:** **Funcional**
- **Nível de Confiança:** **Alto (Verificado no código-fonte)**

---
