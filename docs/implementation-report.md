# Relatório técnico — evolução do Bot Soul-List

## Síntese

A branch `feat/reference-command-expansion` foi criada a partir do repositório privado `LlewxamDev/Soul-List`. Nesta rodada, os handlers reais dos dez bots enviados foram reabertos, aliases foram agrupados por família e os comportamentos que puderam ser determinados com segurança foram implementados em módulos TypeScript do Soul-List.

O menu adulto/sensível e os comandos cuja origem foi explicitamente identificada nesse menu continuam excluídos. Brincadeiras não explícitas e de duplo sentido não foram removidas automaticamente apenas pelo nome.

## Alterações desta rodada

| Área | Implementação |
|---|---|
| Menu | Atalhos não sensíveis de menus antigos foram encaminhados ao novo menu hierárquico; `menu18` e `menu8` permaneceram fora. |
| Administração | Foram implementados `del`, `delete`, `deletar`, `nomegp`, `descgp`, `hidetag`, `totag`, `grupoinfo`, `add`, `join`, `advertir`, `adverter` e `rmadv`, além dos comandos administrativos já existentes. |
| Grupo | Toggles persistentes para anti-link, anti-imagem, anti-vídeo, anti-áudio, anti-sticker, anti-documento, anti-contato, anti-fake, boas-vindas, auto-sticker e outros anti-* identificados. Anti-link e anti-mídia são aplicados no fluxo central de mensagens; boas-vindas, saída e anti-fake são aplicados no evento de participantes. |
| Notas | `anotar`, `tirar_nota`, `rmnota`, `nota`, `anotacao`, `notas` e `anotacoes` usam o repositório SQLite do projeto. |
| Interações | Porcentagens e brincadeiras de grupo determinadas pelos handlers foram implementadas como família modular, incluindo `gay`, `feio`, `corno`, `gado`, `gostoso`, `gostosa`, `beijo`, `tapa`, `chute`, `matar` e aliases. |
| Utilidades | `calc`, `calcular`, `chance`, `caraoucoroa`, `sorteio`, `conselho`, `conselhobiblico`, `cep` e `signo` foram implementados. O cálculo usa parser aritmético restrito, sem `eval`. |
| Economia | `coins`, `saldo`, `estatisticas`, `cassino` e `slot` usam a persistência de moedas existente. |
| Mídia | `toimg`, `togif`, `bnw`, `beautiful`, `blur`, `affect`, `circle`, `dither`, `invert`, `magik`, `rotate`, `pixelate`, `sepia` e aliases confirmados foram implementados com Sharp/FFmpeg. `fastvid`, `fast`, `slow`, `bass2` e `bass3` foram associados aos transformadores já existentes quando o handler confirmou a equivalência. |
| IA | `gpt`, `chatgpt` e `pergunta` usam o AIService configurado e informam quando a chave não está disponível. |

## Catálogo revisado

A auditoria rastreou **1.479 nomes de comandos/aliases** nos dez projetos. Depois da implementação desta rodada, o registro do Soul-List contém **266 nomes de comando/alias**. Restaram **87 nomes em 86 famílias** cuja finalidade não pôde ser determinada com segurança suficiente. Eles estão exclusivamente em [`unknown-commands.md`](./unknown-commands.md) e [`unknown-commands.json`](./unknown-commands.json).

| Item | Quantidade | Decisão |
|---|---:|---|
| Nomes rastreados nas referências | 1.479 | Mantidos no inventário com origem, arquivo e linha. |
| Nomes registrados no Soul-List | 266 | Implementados ou já existentes no projeto. |
| Nomes ainda desconhecidos | 87 | Enviados somente na lista final para esclarecimento do proprietário. |
| Famílias ainda desconhecidas | 86 | Aliases deduplicados quando o handler compartilhado permitiu. |
| Nomes de origem sensível excluídos | 92 | Não aparecem como desconhecidos e não entram no menu público. |

A classificação final não usa o nome isolado como prova de comportamento. Ela considera o handler completo, aliases compartilhados, operações observáveis, bot de origem e origem do menu.

## Validação realizada

A branch passa por `npm run typecheck`, `npm run build`, `npm run db:migrate` e `git diff --check`. A busca e os downloads curtos de áudio e vídeo do `play` também foram validados anteriormente no serviço integrado. A autenticação do WhatsApp não foi realizada porque exige o aparelho e a sessão do usuário.

## Configuração e limitações

Os toggles de grupo são persistidos na tabela `feature_toggles`. O menu continua aceitando `MENU_MEDIA_URL` opcional; sem a variável, usa texto e botão. Os limites do `play` permanecem configuráveis por `YOUTUBE_MAX_DOWNLOAD_MB` e `YOUTUBE_MAX_DURATION_SECONDS`.

Mensagens legadas de lista e botão dependem do cliente WhatsApp e da versão do Baileys. Por isso, o código mantém fallbacks textuais. A mídia opcional dos comandos de interação pode ser refinada posteriormente com os assets específicos que o proprietário escolher.

A branch foi preparada para revisão no repositório privado. A branch principal permaneceu intacta e nenhum pull request foi criado automaticamente.

## Referências técnicas

[1]: https://ytjs.dev/guide/getting-started.html "YouTube.js — Getting Started"
[2]: https://www.npmjs.com/package/youtube-dl-exec "youtube-dl-exec — npm"
[3]: https://github.com/yt-dlp/yt-dlp "yt-dlp — GitHub"
[4]: https://www.npmjs.com/package/yt-search "yt-search — npm"

A integração de busca e download do `play` foi conferida com a documentação do YouTube.js [1], `youtube-dl-exec` [2], yt-dlp [3] e yt-search [4].
