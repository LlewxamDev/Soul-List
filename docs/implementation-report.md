# Relatório técnico — evolução do Bot Soul-List

## Síntese

A branch `feat/reference-command-expansion` foi criada a partir do repositório privado `LlewxamDev/Soul-List`. O projeto foi auditado contra os dez arquivos enviados e recebeu a primeira evolução funcional sem incluir a categoria ou os comandos explicitamente +18.

O resultado preserva a arquitetura de plugins e o registro central de comandos do Soul-List. O menu textual anterior foi ampliado para uma navegação interativa por tela inicial, categorias, submenus e execução do comando selecionado, com fallback textual. O comando `play` agora é um fluxo único de pesquisa, prévia e seleção de áudio ou vídeo.

## Alterações implementadas

| Área | Implementação |
|---|---|
| Menu | `!menu` envia tela inicial com ação para abrir os menus; `!menu categorias` mostra as categorias; `!menu categoria <categoria>` mostra os comandos; a seleção de um comando dispara o handler normal. |
| Compatibilidade | O envio de listas e botões usa o formato interativo compatível com os bots de referência e cai para texto quando o envio interativo falha. |
| Conteúdo sensível | A categoria `sensitive` e comandos marcados como sensíveis permanecem ocultos quando `ENABLE_SENSITIVE_CATEGORIES=false`, inclusive nos builders textuais. |
| Play | `!play <nome ou URL>` pesquisa o vídeo, exibe thumbnail, título, canal, duração, visualizações e descrição curta, e oferece `ÁUDIO` e `VÍDEO`. A seleção expira em dez minutos e fica vinculada ao chat e ao usuário. |
| Download | A pesquisa usa `yt-search`; o download usa `yt-dlp` via `youtube-dl-exec`, com streams adaptivos e merge em MP4 para evitar o formato progressivo que retornou HTTP 403 no teste. O áudio é baixado e convertido para MP3 pelo FFmpeg. |
| Administração | Foram adicionados `kick`, `remove`, `banir`, `promote`, `promover`, `demote`, `rebaixar`, `linkgroup`, `linkgrupo`, `grupolink`, `revoke`, `revokelink` e `resetlink`. Todos exigem grupo e administração, conforme a ação. |
| Áudio | Foram adicionados `audiorapido`, `audiofast`, `audiovelocidade`, `audiolento`, `audioslow`, `audioreverso`, `audioreverse`, `audioinvertido`, `bass`, `grave` e `bassboost`. |
| Configuração | Foram adicionados `MENU_MEDIA_URL`, `YOUTUBE_MAX_DOWNLOAD_MB` e `YOUTUBE_MAX_DURATION_SECONDS`. |
| Documentação | O README foi atualizado e o catálogo completo ficou em `docs/comando-inventory.md` e `docs/comando-inventory.json`; comandos recorrentes entre referências estão em `docs/comandos-comuns.md`. |

## Catálogo das referências

A extração dos pontos de entrada encontrou **1.479 rótulos únicos de `case`**. Esse número inclui comandos, aliases, variações de grafia e alguns rótulos que só podem ser classificados por contexto. O catálogo não trata o nome isolado como prova de comportamento.

| Grupo | Quantidade | Decisão |
|---|---:|---|
| Sobreposição já presente no Soul-List | 37 | Integrada ou preservada no registry atual. |
| Candidatos de comportamento claro | 10 | Priorizados para adaptação inicial quando não havia conflito. |
| Requerem esclarecimento | 1.416 | Mantidos no inventário para análise de handler e perguntas por lote. |
| Explicitamente +18 excluídos | 16 | Não foram registrados no menu nem implementados. |

O inventário completo mantém, para cada rótulo, os bots de origem, número de ocorrências, arquivo e linha observados e decisão preliminar. A classificação foi deliberadamente conservadora: brincadeiras ou duplo sentido sem indicação explícita de conteúdo sexual não foram automaticamente excluídos.

## Validação realizada

| Verificação | Resultado |
|---|---|
| Instalação limpa de dependências | Concluída com `npm install --no-audit --no-fund`. |
| TypeScript | `npm run typecheck` concluído sem erros. |
| Build | `npm run build` concluído sem erros. |
| Banco local | `npm run db:migrate` inicializou `./data/soul-list.db`. |
| Integridade do diff | `git diff --check` concluído sem erros. |
| Busca real do YouTube | Retornou o vídeo `jNQXAC9IVRw` com título, duração e thumbnail. |
| Download real de áudio | Concluído no teste curto; aproximadamente 309 KB. |
| Download real de vídeo | Concluído no teste curto; aproximadamente 534 KB em MP4. |

O teste de mídia foi feito com um vídeo público curto e os arquivos temporários foram removidos ao final. A autenticação do WhatsApp não foi realizada porque exige o aparelho e a sessão do usuário.

## Configuração necessária

Para o menu iniciar com uma imagem ou GIF, preencha `MENU_MEDIA_URL` com uma URL pública de mídia. Se o valor permanecer vazio, a tela inicial funciona com texto e botão, sem imagem. O limite padrão do `play` é de 64 MB por arquivo e 900 segundos de duração; os valores podem ser alterados no `.env`.

O wrapper `youtube-dl-exec` instala o binário yt-dlp durante o `npm install`; a hospedagem precisa possuir Python 3.9 ou superior, acesso de rede e FFmpeg disponível ou utilizável pelo `ffmpeg-static`. O projeto não inclui cookies de contas, tokens de terceiros ou credenciais de APIs dos bots de referência.

## Limitações conhecidas

Mensagens legadas de botão e lista dependem do cliente WhatsApp e da versão do Baileys. Por isso, o código mantém rotas textuais equivalentes. Se a biblioteca aceitar o envio sem lançar erro, mas o cliente não renderizar a mensagem interativa, o fallback textual não será detectado automaticamente pelo Baileys; essa é uma limitação do protocolo legado e deve ser validada no aparelho de teste.

A lista de 1.416 comandos ambíguos não foi transformada em placeholders executáveis. Isso evita criar comandos com significado errado, chamar APIs desconhecidas ou incluir comportamentos que dependam de serviços abandonados. A próxima rodada deve comparar os handlers concretos e esclarecer os conflitos em lotes, começando por administração, downloads, mídia, jogos e brincadeiras.

A branch foi preparada e enviada ao repositório privado para revisão: `feat/reference-command-expansion`. A branch principal permaneceu intacta; nenhum pull request foi criado automaticamente.

## Referências técnicas

[1]: https://ytjs.dev/guide/getting-started.html "YouTube.js — Getting Started"
[2]: https://www.npmjs.com/package/youtube-dl-exec "youtube-dl-exec — npm"
[3]: https://github.com/yt-dlp/yt-dlp "yt-dlp — GitHub"
[4]: https://www.npmjs.com/package/yt-search "yt-search — npm"

O uso do interpretador e as limitações de download foram avaliados com base na documentação do YouTube.js [1]. A integração do wrapper, instalação automática do binário e requisito de Python foram verificados na documentação do `youtube-dl-exec` [2]. A seleção de streams adaptivos, merge em MP4 e requisitos atuais do yt-dlp foram comparados com a documentação do projeto [3]. A busca inicial e o modelo de resultado foram conferidos na documentação do `yt-search` [4].
