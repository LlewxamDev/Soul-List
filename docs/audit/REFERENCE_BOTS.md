# Relatório de Auditoria dos Bots de Referência (Fase 1 - Atualizado)

> Data da Auditoria: 10 de Outubro de 2026  
> Origem dos Arquivos: Google Drive - Pasta "BOTS Whatsapp"  
> Atualização: Análise aprofundada do **Zagan** (Botões e Play) e auditoria de **Brincadeiras vs NSFW**.

---

## 1. Panorama dos Bots de Referência

| Projeto de Referência | Versão Baileys | Persistência | Comandos | Destaque Arquitetural |
|---|---|---|---|---|
| **Zagan** | `^6.7.9` | Arquivos JSON | **541** | **Referência prioritária em botões** (`interactiveMessage` e `buttonsMessage`) |
| **AnnaV6-Ultra** | `^6.7.0` | Arquivos JSON | **938** | Referência em loading/edição de texto e interações sociais |
| **Kokushibot** | `^6.7.9` | Arquivos JSON | **922** | Catálogo amplo de comandos e moderação |
| **succubus-bot** | Baileys v6 | Arquivos JSON | **159** | Sistema dinâmico por pastas |
| **DRAKE-BOT.V10** | Baileys v6 | Arquivos JSON | **29** | Comandos de utilidade e grupo |
| **SANDRO-MD** | `^6.7.16` | Arquivos JSON | **18** | Multi-device nativo |
| **blackofc** | Baileys v6 | Arquivos JSON | **18** | Base modular enxuta |
| **TED-BOT-V4.5** | Baileys v6 | Arquivos JSON | **8** | Base minimalista |

---

## 2. Investigação Aprofundada do Zagan: Botões e Comando Play

Conforme solicitação direta, o código do **Zagan** (`zagan/index.js`) foi auditado linha a linha no fluxo de botões e downloads.

### 2.1 Como o Zagan Constrói e Envia Botões

O Zagan utiliza **dois mecanismos distintos** de envio de botões no Baileys:

#### Mecanismo A: Botões Interativos Modernos (`InteractiveMessage` / Native Flow)
Utilizado nos menus principais do Zagan via `conn.relayMessage`:
```javascript
await conn.relayMessage(from, {
  interactiveMessage: {
    header: proto.Message.InteractiveMessage.Header.create({
      ...(await prepareWAMessageMedia({ image: { url: logoslink.logo } }, { upload: conn.waUploadToServer })),
      hasMediaAttachment: false,
      title: "MENU ZAGAN"
    }),
    body: { text: "Escolha uma opção:" },
    nativeFlowMessage: {
      buttons: [
        {
          name: "single_select", // Menu de Lista / Dropdown
          buttonParamsJson: JSON.stringify({
            title: "OPÇÕES",
            sections: [
              {
                title: "Categorias",
                rows: [
                  { title: "🌐 Menu Completo", id: "!menuc" },
                  { title: "⚙️ Menu Admins", id: "!menuadm" }
                ]
              }
            ]
          })
        },
        {
          name: "quick_reply", // Botão rápido de toque
          buttonParamsJson: JSON.stringify({
            display_text: "AUDIO",
            id: "!ytmp3 <link>"
          })
        }
      ]
    }
  }
}, {});
```

#### Mecanismo B: Botões em Mensagem de Mídia (`buttonsMessage`)
Utilizado diretamente no comando `play` do Zagan:
```javascript
case 'play': {
  const result = await yts(q);
  const video = result.videos[0];
  conn.sendMessage(from, {
    image: { url: musicardUrl },
    caption: `↺ YOUTUBE - RESULTADO ↺\n🜲 ${video.title}\n🜲 Duração: ${video.timestamp}`,
    footer: NomeDoBot,
    buttons: [
      { buttonId: `${prefix}ytmp3 ${video.url}`, buttonText: { displayText: 'AUDIO' }, type: 1 },
      { buttonId: `${prefix}ytmp4 ${video.url}`, buttonText: { displayText: 'VIDEO' }, type: 1 },
      { buttonId: `${prefix}ytdoc ${video.url}`, buttonText: { displayText: 'DOC' }, type: 1 }
    ],
    headerType: 1,
    viewOnce: true
  }, { quoted: selo });
}
```

### 2.2 Como o Zagan Trata as Respostas dos Botões

O parser do Zagan normaliza o corpo da mensagem (`body`) avaliando todos os tipos de resposta de botões do WhatsApp:
```javascript
if (type === "buttonsResponseMessage") {
  body = info.message.buttonsResponseMessage?.selectedButtonId || "";
} else if (type === "templateButtonReplyMessage") {
  body = info.message.templateButtonReplyMessage?.selectedId || "";
} else if (type === "listResponseMessage") {
  body = info.message.listResponseMessage?.singleSelectReply?.selectedRowId || "";
} else if (type === "interactiveResponseMessage") {
  try {
    body = JSON.parse(info.message.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson)?.id || "";
  } catch {
    body = "";
  }
}
```
**Resultado:** Como o `id` do botão é injetado como `!ytmp3 <url>`, a resposta reentra automaticamente no roteador de comandos principal sem exigir um estado intermediário frágil.

### 2.3 Viabilidade Técnica e Comparação com a Versão Atual do Soul-List

1. **Biblioteca Instalada no Soul-List:** `@whiskeysockets/baileys ^6.7.18` já possui suporte nativo em seu Protobuf para `proto.Message.InteractiveMessage`, `Header`, `NativeFlowMessage` e `relayMessage`. Não há necessidade imediata de fork de terceiros que comprometa a estabilidade da sessão.
2. **Compatibilidade dos Clientes:**
   - WhatsApp Mobile (Android/iOS): renderiza perfeitamente mensagens Native Flow e Quick Reply.
   - WhatsApp Desktop / Web: clientes oficiais recentes às vezes ignoram botões do tipo legado `buttonsMessage`, mas aceitam `nativeFlowMessage`.
3. **Decisão Arquitetural do Play no Soul-List:**
   - Adotar o modelo **Native Flow do Zagan** como primeira camada visual.
   - Fornecer **fallback textual limpo** (instruindo o usuário a responder `1` / `audio` ou `2` / `video`) na mesma legenda, garantindo 100% de funcionamento independente do cliente do WhatsApp.

---

## 3. Auditoria e Diferenciação: Menus NSFW vs Brincadeiras

Avaliamos individualmente 91 comandos de zoeira/humor e adulto extraídos do Zagan e AnnaV6.

### 3.1 Classificação Detalhada

1. **NSFW Explícito (Rejeitados do núcleo do bot):**
   - Comandos: `hentai`, `hentai2`, `nekos`, `neko2`, `porn`, `xvideos`.
   - Comportamento no código: Consomem diretórios locais como `bunker/database/nsfw/hentai.js` contendo links e arquivos de nudez e pornografia real/desenhada.
   - Decisão: **Não serão importados para o Soul-List.**
2. **Brincadeiras de Duplo Sentido (Aprovados com mídias seguras):**
   - Comandos: `chupar` (envia texto de duplo sentido com imagem cômica de picolé), `meter` / `mamar` (piadas de duplo sentido sem mídia explícita), `rankpau` (gera régua ASCII `8===D` com centímetros aleatórios cômicos).
   - Decisão: **Permitidos e preservados**, pois consistem em humor sugestivo e inofensivo.
3. **Humor Comum e Memes de Grupo (Aprovados):**
   - Comandos: `gay`, `feio`, `gado`, `corno`, `gostoso`, `gostosa`, `rankgay`, `rankgado`, `rankcorno`, `casal`, `sorteio`, `dados`, `chance`, `conselhobiblico`.
   - Comportamento no código: Cálculos de porcentagem matemática pseudoaleatória baseados no número do usuário (`Math.floor(Math.random() * 100)`) e textos de zoeira.
   - Decisão: **Aprovados para integração no plugin `fun`.**
4. **Interações Sociais e Roleplay Cômico (Aprovados):**
   - Comandos: `tapa` (menciona o usuário com gif/ação de tapa cômico), `matar` (duelo de mentira), `ship` / `shipo` (calcula compatibilidade amorosa aleatória entre 2 membros do grupo).
   - Decisão: **Aprovados para integração no plugin `social` / `fun`.**

---

## 4. Representação de Comunidades do WhatsApp no Baileys

Investigamos as definições de tipo do Baileys (`GroupMetadata.d.ts`):
- Propriedades disponíveis nativamente:
  - `linkedParent?: string` — Contém o JID da comunidade mãe caso o grupo pertença a uma comunidade.
  - `isCommunity?: boolean` — Booleano que indica se o grupo é o grupo-raiz da comunidade.
  - `isCommunityAnnounce?: boolean` — Indica se é o grupo de avisos da comunidade.
- **Conclusão:** O Baileys disponibiliza o identificador técnico real e auditável da comunidade (`linkedParent`), permitindo a vinculação econômica determinística sem suposições.
