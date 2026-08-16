# Relatório técnico — evolução do Bot Soul-List

## Síntese

A implementação foi continuada na branch privada `feat/reference-command-expansion` do repositório `LlewxamDev/Soul-List`. Os handlers dos bots de referência foram reanalisados e, em seguida, as decisões finais do proprietário foram aplicadas sem criar uma segunda carteira, uma segunda árvore familiar ou aliases apontando para implementações duplicadas.

O menu adulto/sensível e os comandos de origem explicitamente sensível continuam fora do catálogo público. As brincadeiras não explícitas foram mantidas e receberam avisos claros quando poderiam ser confundidas com afirmações reais.

## Implementações desta rodada

| Área | Implementação |
|---|---|
| IA e perfil | `aiimg` usa `ImageGenerationService`, com provedor/modelo configuráveis; `user` consulta metadata pública disponível pelo Baileys e separa explicitamente a descrição opcional gerada por IA. |
| Brincadeiras | `atraente`, `fiel`, `lesbica`, `lesbico` e `lindo` reutilizam a factory de porcentagens; o resultado é aleatório, com mensagens por faixa e aviso de que não representa análise real de aparência ou orientação. |
| Arquivos e identificadores | `bin` gera um arquivo de texto UTF-8 com limite de 8 KiB; `cpf`, `cnpj` e `rg` geram somente valores sintéticos com indicação explícita de que não são documentos reais. |
| WhatsApp nativo | `enquete` envia poll nativa pelo payload do Baileys, aceitando `pergunta | opção 1, opção 2` e usando `Sim/Não` quando nenhuma opção é informada. |
| Stickers | `figurandom` consulta o banco persistido em `stickers:random`; `get` reutiliza Sharp para escrever descrição EXIF no sticker; `figvideo` virou alias do conversor existente `togif`. |
| Economia e RPG | `carteira` é alias do saldo econômico central `coins`; `lojas` usa o catálogo RPG compartilhado; `compras` lê o carrinho persistido; `parentes` consulta a tabela `family`; `wanted` e `wasted` usam o repositório RPG persistente. |
| Mídia pública | `upload` implementa download remoto com limite, timeout, redirects limitados, validação de host público, proteção contra SSRF e limpeza por buffers; `imgpralink` usa o endpoint de storage configurável. |
| Administração | `fotogp` exige grupo e administrador; `fundobemvindo` e `fundosaiu` persistem templates textuais ou mídia por grupo e integram o evento existente de participantes; `idgrupo` retorna o JID atual. |
| Menu | `fotomenu` é exclusivo do dono e persiste imagem ou vídeo/GIF na configuração; o menu tenta usar essa mídia e mantém `MENU_MEDIA_URL` como fallback. |

## Integrações e aliases, sem duplicação

A carteira `carteira` aponta para o handler de `coins`, preservando balance, XP e nível no mesmo sistema econômico. O comando `grave` já era alias de `bass` e não recebeu pipeline paralelo. Da mesma forma, `figvideo` aponta para `togif`, que já convertia mídia animada em vídeo/GIF. O alias `iddogrupo` aponta para `idgrupo`, e `lesbico` aponta para a mesma factory de porcentagens de `lesbica`.

O fluxo de boas-vindas e saída não foi duplicado. O evento `onParticipantsUpdate` passou a ler templates persistidos em `settings`, renderizar `{{nome}}`, `{{menção}}`, `{{mencao}}` e `{{grupo}}`, e enviar texto, imagem ou vídeo com menções. Os toggles canônicos `welcome` e `welcome-text`, já usados por `bemvindo` e `bemvindo2`, continuam sendo a fonte de ativação.

## Comandos removidos por decisão do proprietário

Os seguintes nomes não foram registrados, não aparecem no menu e foram excluídos da lista genérica de desconhecidos: `artist`, `beneficios`, `enviar`, `figuanime2`, `figucoreanas2`, `figumemes2`, `fundolevel`, `fundomenu`, `igdl`, `lojadecavalos`, `lojadegalos`, `mostrar_forca`, `score` e `trash`.

## Pendências deliberadas

> `jail` permanece como `PENDING_PRODUCT_DECISION` e não foi implementado.

A implementação de `jail` foi deixada para a definição futura do sistema de prisão, cargos, hierarquia e crimes do RPG. O nome não aparece no registry, no menu ou na lista genérica de desconhecidos. A decisão está registrada em [`pending-product-decision.md`](./pending-product-decision.md).

> `track` permanece como `INTERESTING_UNKNOWN`.

Nenhum comportamento arbitrário foi criado para `track`, e o nome não foi removido definitivamente. Os handlers encontrados continuam preservados no inventário; a classificação separada está em [`interesting-unknown.md`](./interesting-unknown.md).

## Catálogo atualizado

A auditoria original rastreou **1.479 nomes de comandos e aliases** nos projetos de referência. Após esta rodada, a extração do código identifica **328 nomes de comando/alias** no Soul-List, correspondendo a **155 comandos canônicos no registry carregado**. Permanecem **43 nomes em 42 famílias** na lista genérica de comandos cujo comportamento ainda não pôde ser determinado com segurança.

| Item | Quantidade | Decisão |
|---|---:|---|
| Nomes rastreados nas referências | 1.479 | Mantidos no inventário com origem, arquivo e linha. |
| Nomes de comando/alias identificados no código | 329 | Incluem nomes canônicos e aliases encontrados nos módulos. |
| Comandos canônicos carregados no registry | 155 | Verificados por teste de carregamento do runtime. |
| Comandos desconhecidos genéricos | 40 | Organizados em 39 famílias no anexo enxuto. |
| Pendência de produto | 1 | `jail`, mantido separado como `PENDING_PRODUCT_DECISION`. |
| Desconhecido interessante | 1 | `track`, mantido separado como `INTERESTING_UNKNOWN`. |
| Nomes removidos por decisão | 13 | Não entram no registry, menu ou desconhecidos. |
| Nomes de origem sensível excluídos | 92 | Não aparecem como desconhecidos e não entram no menu público. |

A lista enxuta [`unknown-commands-only.md`](./unknown-commands-only.md) contém somente os **40 nomes em 39 famílias** que ainda necessitam de esclarecimento. Ela não inclui `jail`, `track`, comandos removidos ou comandos sensíveis.

## Validações realizadas

A branch passa por `npm run typecheck`, `npm run build`, `npm run db:migrate` e `git diff --check`. Um teste dedicado de registry confirmou a presença dos comandos decididos, a resolução de `grave → bass`, `figvideo → togif`, `carteira → coins` e `fundobv → fundobemvindo`, além da ausência de comandos removidos, `jail` e `track`.

Os downloads curtos de áudio e vídeo do `play` também haviam sido validados anteriormente. A autenticação do WhatsApp não foi realizada, pois exige o aparelho e a sessão do proprietário.

## Limitações técnicas reais

O código atual não expõe uma abstração de WhatsApp Flows no contexto de comandos. Por isso, `lojas` usa a mesma interface interativa de listas já existente, com fallback textual; a troca para Flows nativos pode ser feita quando a camada modificada de Flows for disponibilizada ao projeto.

O banco original não possuía um catálogo de stickers aleatórios, carrinho, registros de procurados ou estatísticas de mortes implementados como repositórios. Foi criado um único `RpgRepository` persistente, baseado na tabela de configurações, como ponto de integração para esses sistemas; ele não cria uma carteira paralela nem inventa registros de mortes. Sem dados cadastrados, `compras` informa carrinho vazio e `wasted` informa que não há estatísticas.

`aiimg` depende de `OPENAI_API_KEY` e `IMAGE_GENERATION_MODEL`. `imgpralink` depende de `IMAGE_UPLOAD_URL` e aceita opcionalmente `IMAGE_UPLOAD_TOKEN`. `figurandom` depende da lista JSON `stickers:random`. Sem essas configurações, os comandos retornam mensagens de configuração ausente em vez de falhar silenciosamente.

## Arquivos de decisão

O resumo categorizado está em [`owner-decisions.json`](./owner-decisions.json), os removidos em [`removed-by-owner.md`](./removed-by-owner.md), a pendência em [`pending-product-decision.md`](./pending-product-decision.md), e o desconhecido interessante em [`interesting-unknown.md`](./interesting-unknown.md).

A branch principal permaneceu intacta. Nenhum pull request foi criado automaticamente.

## Referências técnicas

[1]: https://ytjs.dev/guide/getting-started.html "YouTube.js — Getting Started"
[2]: https://www.npmjs.com/package/youtube-dl-exec "youtube-dl-exec — npm"
[3]: https://github.com/yt-dlp/yt-dlp "yt-dlp — GitHub"
[4]: https://www.npmjs.com/package/yt-search "yt-search — npm"
[5]: https://github.com/WhiskeySockets/Baileys "Baileys — GitHub"

A integração de busca e download do `play` foi conferida com a documentação do YouTube.js [1], `youtube-dl-exec` [2], yt-dlp [3] e yt-search [4]. Os payloads de enquete e mídia usam os tipos disponíveis na versão do Baileys instalada [5].
