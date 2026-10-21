<p align="center">
  <img src="./assets/header-animated.svg" width="100%" alt="Soul-List Animated Banner" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20%2B-10b981?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js 20+" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-1d889b?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/WhatsApp-Baileys_Multi--Device-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Baileys" />
  <img src="https://img.shields.io/badge/Comandos-1.400%2B-ef0574?style=for-the-badge" alt="1400+ Comandos" />
  <img src="https://img.shields.io/badge/Database-SQLite_%2B_Drizzle-bc2035?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite + Drizzle" />
</p>

<table align="center">
  <tr>
    <td width="220" align="center">
      <img src="./assets/soul-list-cover.jpg" width="200" style="border-radius: 12px;" alt="Soul-List Cover" />
    </td>
    <td>
      <h3>🔥 Sobre o Soul-List</h3>
      <p>
        O <strong>Soul-List</strong> é um bot completo de alta performance para <strong>WhatsApp</strong> construído em <code>TypeScript</code> sobre <code>@whiskeysockets/baileys</code>.
        Conta com mais de <strong>1.400 comandos indexados</strong>, auto-recuperação de sessão Signal (proteção contra <em>Bad MAC</em>), banco de dados local <code>SQLite + Drizzle ORM</code> e arquitetura modular de plugins.
      </p>
    </td>
  </tr>
</table>

---

## ⚙️ Pré-requisitos

- **Node.js** `v20.0.0` ou superior
- **npm** (incluído com o Node.js)
- **FFmpeg** *(opcional, mas recomendado para conversão de áudio/vídeo e figurinhas animadas)*

---

## 🚀 Como Inicializar o Bot (Passo a Passo)

### 1. Clonar o repositório e instalar as dependências

```bash
git clone https://github.com/LlewxamDev/Soul-List.git
cd Soul-List
npm install
```

### 2. Configurar o arquivo `.env`

Copie o arquivo de exemplo para criar o seu `.env`:

```bash
cp .env.example .env
```

No Windows (PowerShell):

```powershell
Copy-Item .env.example .env
```

Edite o arquivo `.env` com os seus dados principais:

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `BOT_NAME` | Nome exibido nos menus do bot | `Soul-List` |
| `BOT_OWNER_NAME` | Seu nome / apelido de dono | `Llewxam` |
| `BOT_OWNER_NUMBER` | Número do dono (apenas dígitos, com DDI + DDD) | `5511999999999` |
| `PREFIX` | Prefixo principal de comandos | `%` |
| `PREFIXES` | Lista de todos os prefixos aceitos pelo bot | `%,!,/,.,#,$` |
| `PAIRING_NUMBER` | *(Opcional)* Número para conectar via **Código de Pareamento** em vez de QR Code | `5511999999999` |

### 3. Inicializar o Banco de Dados

Crie e aplique as tabelas locais do `SQLite` antes da primeira execução:

```bash
npm run db:migrate
```

### 4. Ligar o Bot

- **Modo Desenvolvimento** (com recarregamento rápido via `tsx`):
  ```bash
  npm run dev
  ```

- **Modo Produção** (compilado em `dist/`):
  ```bash
  npm run build
  npm start
  ```

---

## 📱 Como Conectar ao WhatsApp

Você pode autenticar o bot de **duas formas**:

1. **Via QR Code no Terminal *(Padrão)***
   - Deixe `PAIRING_NUMBER=` vazio no `.env`.
   - Execute `npm run dev` (ou `npm start`).
   - Escaneie o QR Code exibido no terminal em **WhatsApp > Aparelhos conectados > Conectar um aparelho**.

2. **Via Código de Pareamento *(Pairing Code — Sem câmera)***
   - Preencha `PAIRING_NUMBER=5511999999999` no `.env` com o número da conta do bot.
   - Inicie o bot e digite o código de 8 caracteres exibido no terminal diretamente na notificação do WhatsApp.

> 💡 **Sessão persistente:** As credenciais ficam salvas automaticamente na pasta `./sessions` e contam com sistema de *auto-healing* caso alguma chave Signal de grupo precise ser renovada.

---

## 🎮 Como Usar o Bot no WhatsApp

O Soul-List aceita múltiplos prefixos (`%`, `!`, `/`, `.`, `#`, `$`). Por padrão, o prefixo principal é **`%`**.

### Comandos Essenciais

| Comando | O que faz |
| :--- | :--- |
| `%menu` ou `%help` | Abre o menu principal interativo do bot |
| `%menu <categoria>` | Abre os comandos de uma categoria específica (ex.: `%menu downloads`) |
| `%listacmd [busca]` | Lista ou pesquisa comandos disponíveis no catálogo |
| `%infocmd <comando>` | Mostra explicação detalhada, aliases e exemplo de uso de um comando |
| `%ping` / `%infobot` | Verifica a latência, tempo online (uptime) e status do sistema |
| `%sticker` | Transforma a imagem ou vídeo respondido em figurinha |
| `%perfil` / `%status` | Exibe seu perfil, nível, XP e estatísticas no grupo |

### Categorias Disponíveis (`%menu <categoria>`)

| Categoria | Foco Principal |
| :--- | :--- |
| `downloads` | Download de músicas, vídeos (`play`, `instaplay`, `faceplay`, MP3/MP4) |
| `stickers` | Criação de figurinhas estáticas, animadas e manipulação de pacotes |
| `media` & `audio` | Edição de imagem, efeitos de áudio, conversão `tomp3`, `videorapido` e `totext` |
| `admin` & `moderation` | Gestão de grupos (`ban`, `warn`, `mute`, `tagall`, `open`, `close`, `antilink`) |
| `games` & `rpg` | Jogos interativos de grupo, economia, ranking e sistema de RPG |
| `search` & `info` | Pesquisas rápidas (`buscar`, `wikipedia`, `clima`, `noticias`, `traduzir`, `filme`) |
| `members` & `fun` | Perfil, `afk`, `rankativo`, comandos de entretenimento e interação |
| `owner` & `system` | Gerenciamento de plugins, `health`, `setpremium` e controle interno |

---

## 🛠️ Scripts Úteis

```bash
npm run dev          # Inicia o bot diretamente em modo desenvolvimento (tsx)
npm run build        # Compila o TypeScript e copia os assets para dist/
npm start            # Executa a versão compilada de produção (node dist/src/index.js)
npm run db:migrate   # Cria/atualiza as tabelas do banco SQLite local
npm run typecheck    # Valida a tipagem TypeScript sem gerar arquivos
npm test             # Executa a suíte de validação dos comandos e economia
```

---

<p align="center">
  Feito por <strong>Evandro Silva Amorim (<a href="https://github.com/LlewxamDev">@LlewxamDev</a>)</strong>
</p>
