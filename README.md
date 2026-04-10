# Feito por Llewxam Evandrin idias

Soul-List e um bot de WhatsApp em `TypeScript` com `@whiskeysockets/baileys`, arquitetura modular e sistema de plugins.

## Destaques

- Core tipado e separado por dominio
- Runtime de plugins com carregamento dinamico
- Registry de comandos sem `switch-case`
- Menu gerado por metadata
- Persistencia com `SQLite + Drizzle`
- Base pronta para crescer para centenas ou milhares de comandos
- Comandos centrais reais para menu, busca, perfil, audio, figurinha e administracao

## Estrutura

```text
src/
  bootstrap/      ciclo de vida do Baileys
  config/         env, bot, menu e permissoes
  core/           tipos, parser, registry, runtime, utilitarios
  database/       schema e client Drizzle
  events/         handlers de mensagens e conexao
  menu/           builders de menu dinamico
  plugins/        plugins internos do projeto
  repositories/   acesso aos dados
  services/       integracoes externas e media
plugins/          plugins locais externos
scripts/          build auxiliar e migracao
```

## Requisitos

- Node.js 20+
- npm
- FFmpeg opcional para comandos de midia mais pesados

## Instalacao

```bash
npm install
cp .env.example .env
```

Preencha ao menos:

- `BOT_OWNER_NAME`
- `BOT_OWNER_NUMBER`
- `BOT_OWNER_NUMBERS`
- `PREFIX` / `PREFIXES`

## Desenvolvimento

```bash
npm run db:migrate
npm run dev
```

## Build e producao

```bash
npm run typecheck
npm run build
npm start
```

O build gera:

- `dist/src`: core compilado
- `dist/plugins`: plugins externos compilados
- copia automatica de assets e manifestos de plugin

## Pareamento com WhatsApp

Por padrao o Baileys mostrara QR no terminal. Se quiser pairing code:

- defina `PAIRING_NUMBER` no `.env`
- inicie o bot
- o codigo sera logado no terminal

As credenciais ficam em `SESSION_DIR`.

## Banco e persistencia

O banco usa `SQLite` via `@libsql/client` com schema Drizzle em [src/database/schema.ts](/r:/Soul-List/src/database/schema.ts).

Entidades base:

- usuarios
- grupos
- premium
- AFK
- avisos
- atividade
- notas
- economia
- sessoes de jogo
- cache
- toggles de feature

## Como o menu funciona

O menu nao e hardcoded. Ele usa a `CommandRegistry` e os metadados de cada comando.

- `menu` ou `help`: visao geral
- `menu <categoria>`: submenu da categoria
- `listacmd [filtro]`: lista de comandos
- `infocmd <comando>`: detalhes completos

Categorias equivalentes ao bot de referencia foram preservadas como capacidade arquitetural:

- `info`
- `search`
- `media`
- `audio`
- `members`
- `admin`
- `owner`
- `anime`
- `games`
- `vip`
- `rpg`
- `downloads`
- `stickers`
- `logos`
- `fun`
- `moderation`
- `system`
- `sensitive`

## Plugins

O Soul-List e plugin-first. O core nao conhece comandos concretos.

### Plugins internos

Ficam em `src/plugins/<plugin>/index.ts`.

Cada plugin exporta:

```ts
import type { BotPlugin } from "../../core/types/plugin";

const plugin: BotPlugin = {
  manifest: {
    id: "meu-plugin",
    name: "Meu Plugin",
    version: "1.0.0",
    enabledByDefault: true
  },
  commands: []
};

export default plugin;
```

### Plugins externos

Ficam em `plugins/<plugin-id>/`.

Estrutura recomendada:

```text
plugins/meu-plugin/
  plugin.json
  index.ts
  commands/
    meu-comando.ts
```

Exemplo real:

- [plugins/example-echo/plugin.json](/r:/Soul-List/plugins/example-echo/plugin.json)
- [plugins/example-echo/index.ts](/r:/Soul-List/plugins/example-echo/index.ts)

## Como adicionar um novo comando

1. Crie um arquivo em `src/plugins/<plugin>/commands/`.
2. Exporte um `CommandModule`.
3. Registre o comando no `commands` do plugin.

Exemplo:

```ts
import type { CommandModule } from "../../../core/types/command";

export const olaCommand: CommandModule = {
  definition: {
    name: "ola",
    aliases: [],
    description: "Exemplo simples",
    usage: "!ola",
    category: "fun",
    cooldownSeconds: 2
  },
  async execute(context) {
    await context.reply("Ola!");
  }
};
```

## Como adicionar um servico

1. Crie o servico em `src/services/...`
2. Exponha no factory [createServices.ts](/r:/Soul-List/src/services/createServices.ts)
3. Consuma pelo `context.services`

Isso evita HTTP espalhado em comando.

## Recursos que dependem de API

- `totext`: precisa de `OPENAI_API_KEY`
- comandos de IA futuros: precisam de `OPENAI_API_KEY`
- categoria sensivel: fica desativada por padrao por `ENABLE_SENSITIVE_CATEGORIES=false`

## Comandos base incluidos

- `menu`, `help`, `listacmd`, `infocmd`, `infobot`, `ping`
- `perfil`, `status`, `afk`, `rankativo`, `rankinativo`
- `buscar`, `wikipedia`, `noticias`, `clima`, `livro`, `filme`, `serie`, `traduzir`, `playstore`
- `printsite`, `sticker`, `totext`, `tomp3`, `videorapido`
- `admins`, `tagall`, `warn`, `ban`, `unban`, `mute`, `open`, `close`
- `plugins`, `health`, `setpremium`
- placeholders de `downloads`, `logos`, `vip`, `rpg`, `games`, `sensitive`

## Validacao ja executada

- `npm install`
- `npm run typecheck`
- `npm run build`
- smoke test do runtime de plugins
- `npm run db:migrate`

## Observacoes

- A conexao real com WhatsApp nao foi autenticada aqui porque isso depende do seu aparelho/conta.
- A categoria sensivel existe como capacidade arquitetural, mas fica desativada por padrao.
- O projeto esta pronto para crescer via novos plugins e novas categorias sem alterar o core.
