# Relatório técnico — expansão por menus do Soul-List

## Síntese

A expansão foi continuada na branch privada `feat/reference-command-expansion` do repositório `LlewxamDev/Soul-List`. O trabalho foi reorganizado por etapas de menu para preservar a arquitetura plugin-first, compartilhar factories e garantir que aliases apontem para os mesmos handlers. A branch principal permaneceu intacta.

O catálogo carregado pelo runtime agora possui **232 comandos canônicos, 920 aliases e 1.150 nomes totais aceitos**. A meta operacional de pelo menos 1.000 nomes foi ultrapassada sem incluir menus adultos, NSFW ou comandos explicitamente removidos pelo proprietário.

## Etapas concluídas

| Etapa | Área | Resultado principal |
|---|---|---|
| 1 | Roadmap | Roadmap versionado por menus, com contagens do inventário e meta de nomes. |
| 2 | Informações e utilidades | Runtime, versão, prefixos, idioma, regras, repositório, dono, doação, identidade de chat e sobre o bot. |
| 3 | `menuadm` | Mute por participante, lista negra, mute global renomeado para `botsilencio`, abertura/fechamento, links, avisos, tabelas, marcações e toggles persistentes. |
| 4 | Downloads | `ytmp3`, `ytmp4` e `ytdoc` reutilizando pesquisa, limites e yt-dlp do `YouTubeService`. |
| 5 | Áudio, vídeo e stickers | Transformações de vídeo, texto em sticker, emoji, emoji-mix, metadata EXIF e aliases compartilhados. |
| 6 | Logos e criação visual | Logos neon, gold, stone, fire, ice, matrix, glitch, minimalista, banners, capas, thumbnails, pôsteres, cartões, badges e avatars textuais. |
| 7 | Brincadeiras e jogos | Jokenpô, dados, quiz persistente, adivinhação, forca, times, desafios e verdade. |
| 8 | RPG medieval | Prisão, libertação, lista de presos, cela, fiança, cargos, hierarquia, leis do reino e rastreamento ficcional de status. |
| 9 | Dono, sistema e VIP | Estatísticas do bot, status premium/VIP e modo manutenção restrito ao dono. |
| 10 | Infraestrutura de IA e mídia | Groq opcional para texto/visão, fallback local de upload e servidor `media:serve`; Flows avaliados com fallback seguro para listas. |
| 11 | Auditoria | Catálogo de 1.150 nomes, verificação de aliases, build, typecheck, migração e checagem de whitespace. |

## RPG medieval

O sistema de prisão foi implementado como uma mecânica de mundo medieval fictício. `jail/prender` cria uma sentença por dias, motivo, cela e valor de fiança; `unjail/libertar` remove a sentença; `presos` lista as celas; `cela` mostra o status do próprio personagem; e `fianca` usa o saldo econômico central para permitir libertação antecipada.

A hierarquia usa os cargos `citizen`, `guard`, `judge` e `warden`, apresentados em português como cidadão, guarda, juiz e carcereiro-mor. O comando `cargo` permite consulta e nomeação conforme as permissões, enquanto `hierarquia` e `regrasrpg` explicam o funcionamento. O comando `track` foi definido como **rastreamento ficcional dentro do RPG**: ele consulta somente estado de procurado, prisão e cargo. Não consulta GPS, localização, presença, atividade ou qualquer dado real de uma pessoa.

As prisões e cargos são persistidos pelo `RpgRepository` no repositório de configurações existente. Não foi criada uma carteira econômica paralela.

## IA e Groq

O `AIService` passou a priorizar `GROQ_API_KEY` usando a API compatível com OpenAI de Chat Completions. Os modelos são configuráveis por `GROQ_MODEL` e `GROQ_VISION_MODEL`, com defaults `llama-3.3-70b-versatile` e `qwen/qwen3.6-27b`. A chave permanece vazia no `.env.example`, conforme solicitado.

`gpt/chatgpt/pergunta` pode usar Groq para texto; `descreverimg` e `ocr` usam o modelo de visão Groq quando a chave estiver configurada. O `aiimg` continua separado porque a documentação oficial da Groq descreve visão e entendimento de imagens, não um endpoint nativo de texto-para-imagem. Para gerar imagens, permanece necessário configurar um provedor de imagens compatível no `ImageGenerationService`.

## WhatsApp Flows

A documentação da Meta descreve Flows como uma superfície de Business Messaging baseada em Flow JSON e REST API. A documentação pública do Baileys usado pelo projeto não expõe uma API oficial para publicar e enviar Flows. Por segurança, não foram alterados protobufs internos nem enviados payloads `nativeFlowMessage` sem suporte tipado.

O menu hierárquico continua usando listas e botões com fallback textual. A estrutura permite adicionar um adaptador oficial de Flows futuramente sem mudar os comandos ou o catálogo. `lojas` e os demais menus permanecem funcionais na interface atual de listas.

## Upload público e execução pelo terminal

`MediaService.uploadPublic` continua priorizando `IMAGE_UPLOAD_URL` e `IMAGE_UPLOAD_TOKEN` quando um serviço externo estiver configurado. Sem endpoint externo, ele grava o arquivo em `PUBLIC_MEDIA_DIR`, gera um nome seguro e retorna uma URL baseada em `PUBLIC_MEDIA_BASE_URL` quando esta variável estiver preenchida. Sem base pública, retorna um caminho `file://` e informa que o arquivo ainda precisa ser exposto.

O servidor local pode ser iniciado com:

```bash
npm run media:serve
```

Para obter um link acessível externamente, o usuário deve expor a porta configurada por domínio, túnel ou servidor próprio e preencher `PUBLIC_MEDIA_BASE_URL`. O bot não inventa um domínio inexistente.

## Nomes removidos e desconhecidos

Os 40 nomes que constavam na lista anterior de desconhecidos foram retirados por decisão do proprietário. Os 13 nomes removidos anteriormente também permanecem fora do registry. `jail` e `track` receberam decisões posteriores e foram implementados, portanto não estão na lista de remoções.

A lista [`unknown-commands-only.md`](./unknown-commands-only.md) agora informa que não existem comandos desconhecidos ativos. O registro detalhado de remoções está em [`removed-by-owner.md`](./removed-by-owner.md). Menus adultos e comandos de origem sensível continuam excluídos do catálogo público.

## Contagem final do registry

| Item | Quantidade | Observação |
|---|---:|---|
| Nomes rastreados nas referências | 1.479 | Inventário original dos bots enviados. |
| Comandos canônicos carregados | 232 | Verificados pelo runtime. |
| Aliases carregados | 920 | Associados a handlers compartilhados. |
| Nomes totais aceitos | **1.150** | Soma deduplicada de canônicos e aliases. |
| Desconhecidos ativos | 0 | A lista anterior foi removida por decisão do proprietário. |
| Nomes removidos por decisão | 53 | 40 da lista anterior mais 13 remoções anteriores. |
| Origem sensível excluída | 92 | Fora do menu e do catálogo público. |

## Validações

Foram executados com sucesso `npm run typecheck`, `npm run build`, `npm run db:migrate`, `./node_modules/.bin/tsx scripts/verify-owner-decisions.ts`, `./node_modules/.bin/tsx scripts/count-registry-names.ts` e `git diff --check`. O contador final confirmou 232 comandos canônicos, 920 aliases e 1.150 nomes totais.

O teste de registry confirmou as decisões de aliases principais, incluindo `grave → bass`, `figvideo → togif`, `carteira → coins` e `fundobv → fundobemvindo`, além da ausência dos nomes removidos. A autenticação do WhatsApp não foi realizada, pois depende do aparelho e da sessão do proprietário.

## Referências técnicas

[1]: https://console.groq.com/docs/vision "Groq — Images and Vision"
[2]: https://console.groq.com/docs/models "Groq — Supported Models"
[3]: https://console.groq.com/docs/api-reference "Groq — API Reference"
[4]: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows "Meta — WhatsApp Flows"
[5]: https://github.com/WhiskeySockets/Baileys "WhiskeySockets — Baileys"
[6]: https://baileys.wiki/ "Baileys Wiki"
[7]: https://github.com/yt-dlp/yt-dlp "yt-dlp — GitHub"
[8]: https://www.npmjs.com/package/youtube-dl-exec "youtube-dl-exec — npm"

As conclusões sobre Groq, visão e modelos foram conferidas nas fontes oficiais [1] [2] [3]. A decisão de manter listas como fallback de Flows foi baseada na documentação da Meta [4] e na superfície pública documentada do Baileys [5] [6]. O pipeline de downloads continua baseado em yt-dlp por meio de `youtube-dl-exec` [7] [8].
