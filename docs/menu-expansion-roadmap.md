# Roadmap de expansão do Soul-List por menus

## Objetivo e métrica

A expansão foi executada por etapas, com cada etapa concentrada em um menu ou grupo de menus relacionado. A métrica principal é o número de **nomes executáveis registrados no menu**, contando comandos canônicos e aliases como entradas distintas para o usuário, mas mantendo um único handler por família. Essa abordagem permitiu ultrapassar 1.000 entradas sem criar cópias de código.

Cada etapa foi validada com registry, permissões, typecheck e build. Comandos adultos/NSFW continuam fora do catálogo público, e nomes removidos pelo proprietário não foram reintroduzidos.

## Etapas executadas

| Etapa | Menu ou grupo | Resultado | Situação |
|---:|---|---|---|
| 1 | Informações e utilidades públicas | Consultas de runtime, versão, prefixo, idioma, regras, repositório, dono, doação, identidade e busca. | Concluída |
| 2 | `menuadm` | Mute por participante, lista negra, abertura/fechamento, convites, avisos, marcações, sorteios, tabela e toggles. | Concluída |
| 3 | Downloads e YouTube | `ytmp3`, `ytmp4`, `ytdoc` e aliases sobre o mesmo `YouTubeService`. | Concluída |
| 4 | Áudio e vídeo | Velocidade, lentidão, reversão, graves, vídeo sem áudio e conversões. | Concluída |
| 5 | Stickers e efeitos | Stickers de texto/emoji, emoji-mix, metadata, conversões e efeitos visuais. | Concluída |
| 6 | Logos e criação | Logos estilizados, banners, capas, thumbnails, pôsteres, cartões, badges e avatars. | Concluída |
| 7 | Brincadeiras e jogos | Jokenpô, dados, quiz, adivinhação, forca, times, desafios e verdade. | Concluída |
| 8 | RPG medieval | Prisão, libertação, fiança, celas, cargos, hierarquia, leis e `track` ficcional. | Concluída |
| 9 | Dono, VIP, sistema e moderação | Estatísticas do bot, status premium/VIP, manutenção, configurações e enforcement administrativo. | Concluída |
| 10 | Groq, Flows e upload | Groq opcional para texto/visão, fallback local de mídia, servidor `media:serve` e listas como fallback seguro de Flows. | Concluída |
| 11 | Auditoria | Catálogo final, contagem deduplicada, validação de aliases e verificação de nomes removidos. | Concluída |

## Contagem validada

| Métrica | Quantidade |
|---|---:|
| Comandos canônicos | 232 |
| Aliases | 920 |
| Nomes totais deduplicados | **1.150** |
| Meta mínima | 1.000 |
| Margem acima da meta | **150 nomes** |
| Comandos desconhecidos ativos | 0 |

## Decisões de segurança e compatibilidade

O menu adulto não foi implementado. Os nomes que o proprietário decidiu remover foram retirados do registry, do menu, dos catálogos ativos e do teste de presença. `jail` foi implementado posteriormente como sistema medieval fictício; `track` foi implementado como consulta de status RPG, sem rastreamento real de pessoas.

Cada família reutiliza factories, serviços ou repositórios compartilhados. Aliases não possuem handlers duplicados. Funcionalidades externas ficam atrás de configuração no `.env.example`, com chave Groq vazia. Como a versão atual do Baileys não expõe uma API oficial documentada para WhatsApp Flows, o bot mantém listas e botões com fallback textual, sem alterar protobufs internos de forma insegura.
