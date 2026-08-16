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
- Python 3.9+ com o pacote `yt-dlp` instalado, ou o executável `yt-dlp` disponível no PATH
- conexão de rede para o Baileys e para as integrações de pesquisa/download
- FFmpeg disponível no PATH, usado pelo merge de streams do `play` e pelas transformações de mídia

## Instalacao

```bash
npm install
cp .env.example .env
```

No Android via Termux, instale os executáveis de mídia antes de iniciar o bot:

```bash
pkg update
pkg install nodejs python ffmpeg
python -m pip install -U yt-dlp
```

O Soul-List usa `YTDLP_PATH=yt-dlp` e `FFMPEG_PATH=ffmpeg` por padrão. Caso os executáveis estejam em caminhos diferentes, defina esses valores no `.env`.

Preencha ao menos:

- `BOT_OWNER_NAME`
- `BOT_OWNER_NUMBER`
- `BOT_OWNER_NUMBERS`
- `PREFIX` / `PREFIXES`
- opcionalmente `MENU_MEDIA_URL`, `IMAGE_GENERATION_MODEL`, `IMAGE_UPLOAD_URL`, `IMAGE_UPLOAD_TOKEN`, `MAX_REMOTE_DOWNLOAD_MB`, `REMOTE_DOWNLOAD_TIMEOUT_SECONDS`, `YOUTUBE_MAX_DOWNLOAD_MB` e `YOUTUBE_MAX_DURATION_SECONDS`

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

O banco usa `SQLite` via `@libsql/client-wasm` com schema Drizzle em [src/database/schema.ts](/r:/Soul-List/src/database/schema.ts). O cliente WASM evita dependências nativas incompatíveis com Android. No Termux, mantenha o `DATABASE_URL` na raiz do projeto, por exemplo `./soul-list.db`.

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

- `menu` ou `help`: abre a tela inicial interativa com botão para entrar nos menus
- `menu categorias`: lista as categorias em uma lista do WhatsApp
- `menu categoria <categoria>`: lista os comandos da categoria; tocar em um comando executa o handler normal
- `listacmd [filtro]`: fallback textual que lista os comandos
- `infocmd <comando>`: detalhes completos

Quando o cliente ou a versão do Baileys não renderiza listas/botões, o bot envia automaticamente uma versão textual equivalente. A imagem ou GIF da tela inicial é opcional e pode ser configurada com `MENU_MEDIA_URL`.

O comando `play` recebe um nome ou URL (`!play <nome ou URL>`), envia thumbnail, título, canal, duração e descrição curta e oferece as ações `ÁUDIO` e `VÍDEO`. A seleção fica associada ao usuário e ao chat por dez minutos. Os limites padrão são `YOUTUBE_MAX_DOWNLOAD_MB=64` e `YOUTUBE_MAX_DURATION_SECONDS=900`; ambos podem ser ajustados no `.env`.

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

- `totext`, `user` e `aiimg`: precisam de `OPENAI_API_KEY`; `aiimg` também usa `IMAGE_GENERATION_MODEL`
- `imgpralink`: precisa de `IMAGE_UPLOAD_URL` e opcionalmente `IMAGE_UPLOAD_TOKEN`
- `upload`: aceita somente URLs HTTP/HTTPS públicas dentro dos limites `MAX_REMOTE_DOWNLOAD_MB` e `REMOTE_DOWNLOAD_TIMEOUT_SECONDS`
- categoria sensivel: fica desativada por padrao por `ENABLE_SENSITIVE_CATEGORIES=false`

## Comandos base incluidos

- `menu`, `help`, `listacmd`, `infocmd`, `infobot`, `ping`
- `perfil`, `status`, `afk`, `rankativo`, `rankinativo`
- `buscar`, `wikipedia`, `noticias`, `clima`, `livro`, `filme`, `serie`, `traduzir`, `playstore`
- `play`, `printsite`, `sticker`, `totext`, `tomp3`, `videorapido`, `audiorapido`, `audiolento`, `audioreverso`, `bass`
- `admins`, `tagall`, `warn`, `ban`, `unban`, `mute`, `open`, `close`, `kick`, `promote`, `demote`, `linkgroup`, `revoke`
- `plugins`, `health`, `setpremium`, `fotomenu`
- utilidades novas: `aiimg`, `bin`, `cpf`, `cnpj`, `rg`, `enquete`, `upload`, `imgpralink`, `user`
- RPG/economia: `carteira`, `lojas`, `compras`, `parentes`, `wanted`, `wasted`
- grupo/stickers: `fotogp`, `fundobemvindo`, `fundosaiu`, `idgrupo`, `figurandom`, `get`, `figvideo`
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
