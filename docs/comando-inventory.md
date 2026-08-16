# Catálogo consolidado de comandos — Soul-List

> Documento gerado a partir dos pontos de entrada JavaScript/TypeScript enviados e do registro de plugins do Soul-List. A extração é um inventário técnico preliminar: nomes ambíguos não são tratados como comportamento confirmado.

## Resumo

Foram encontrados **1479 rótulos únicos de `case`** nos pontos de entrada das referências. O Soul-List atual possui **84 nomes entre comandos principais e aliases** no seu registry. A deduplicação abaixo é por grafia normalizada; nomes iguais com comportamentos diferentes permanecem marcados para comparação semântica.

| Grupo | Quantidade | Tratamento |
|---|---:|---|
| Já presentes no Soul-List | 37 | Preservar e integrar ao menu interativo. |
| Comportamento claro | 10 | Priorizar adaptação após comparar o handler da referência. |
| Requerem esclarecimento | 1416 | Perguntar ao usuário antes de implementar comportamento específico. |
| Excluir por indicação +18 | 16 | Não registrar no menu nem implementar nesta evolução. |

## Comandos já presentes no Soul-List

| Comando/alias | Bots de origem | Ocorrências | Decisão |
|---|---|---:|---|
| `admins` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `afk` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `anime` | Kokushibot | 1 | já existe no Soul-List |
| `ban` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | já existe no Soul-List |
| `book` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `clima` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `games` | Kokushibot | 1 | já existe no Soul-List |
| `help` | zagan | 1 | já existe no Soul-List |
| `infocmd` | Kokushibot | 1 | já existe no Soul-List |
| `linkgroup` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `logos` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `menu` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | já existe no Soul-List |
| `menulogos` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `menurpg` | Kokushibot | 1 | já existe no Soul-List |
| `menuvip` | AnnaV6-Ultra | 1 | já existe no Soul-List |
| `movie` | AnnaV6-Ultra | 1 | já existe no Soul-List |
| `mute` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `noticias` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `perfil` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `ping` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | já existe no Soul-List |
| `play` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | já existe no Soul-List |
| `playstore` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `premium` | Kokushibot | 1 | já existe no Soul-List |
| `printsite` | AnnaV6-Ultra, Kokushibot | 3 | já existe no Soul-List |
| `rankativo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `rankinativo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `resetlink` | succubus-bot | 1 | já existe no Soul-List |
| `screenshot` | AnnaV6-Ultra | 1 | já existe no Soul-List |
| `serie` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `status` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `tagme` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `tomp3` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `totext` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `traduzir` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `videorapido` | AnnaV6-Ultra, Kokushibot, zagan | 3 | já existe no Soul-List |
| `wiki` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |
| `wikipedia` | AnnaV6-Ultra, Kokushibot | 2 | já existe no Soul-List |

## Comandos de comportamento claro para priorização

| Comando/alias | Bots de origem | Ocorrências | Decisão |
|---|---|---:|---|
| `add` | AnnaV6-Ultra, Kokushibot | 2 | comportamento claro; implementar/adaptar |
| `antilink` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | comportamento claro; implementar/adaptar |
| `banir` | AnnaV6-Ultra, Kokushibot, zagan | 3 | comportamento claro; implementar/adaptar |
| `hidetag` | AnnaV6-Ultra, Kokushibot, zagan | 3 | comportamento claro; implementar/adaptar |
| `kick` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | comportamento claro; implementar/adaptar |
| `toimg` | AnnaV6-Ultra, Kokushibot, zagan | 3 | comportamento claro; implementar/adaptar |
| `welcome` | AnnaV6-Ultra, Kokushibot, zagan | 3 | comportamento claro; implementar/adaptar |
| `ytdoc` | AnnaV6-Ultra, zagan | 2 | comportamento claro; implementar/adaptar |
| `ytmp3` | AnnaV6-Ultra, Kokushibot, zagan | 3 | comportamento claro; implementar/adaptar |
| `ytmp4` | AnnaV6-Ultra, Kokushibot, zagan | 3 | comportamento claro; implementar/adaptar |

## Candidatos explicitamente +18 excluídos

| Comando/alias | Bots de origem | Ocorrências | Decisão |
|---|---|---:|---|
| `ahegao` | AnnaV6-Ultra | 1 | excluir +18 |
| `anal` | succubus-bot | 1 | excluir +18 |
| `analvizu` | succubus-bot | 1 | excluir +18 |
| `canal` | succubus-bot | 1 | excluir +18 |
| `comporn` | zagan | 1 | excluir +18 |
| `hanal` | succubus-bot | 1 | excluir +18 |
| `hanalvizu` | succubus-bot | 1 | excluir +18 |
| `hentai` | AnnaV6-Ultra, Kokushibot, succubus-bot | 4 | excluir +18 |
| `hentai2` | AnnaV6-Ultra | 1 | excluir +18 |
| `hentaivizu` | succubus-bot | 1 | excluir +18 |
| `modonsfw` | Kokushibot, zagan | 3 | excluir +18 |
| `nsfw` | Kokushibot, zagan | 3 | excluir +18 |
| `pornhub` | AnnaV6-Ultra, Kokushibot | 2 | excluir +18 |
| `pussy` | AnnaV6-Ultra, succubus-bot | 2 | excluir +18 |
| `pussyvizu` | succubus-bot | 1 | excluir +18 |
| `setsex` | Kokushibot | 1 | excluir +18 |

## Comandos que requerem esclarecimento

Os nomes abaixo foram detectados, mas o nome isolado não é suficiente para saber com segurança qual comportamento o usuário deseja. Eles serão tratados em lotes, comparando os handlers das referências e perguntando apenas pelos conflitos ou casos realmente ambíguos.

| Comando/alias | Bots de origem | Ocorrências | Decisão |
|---|---|---:|---|
| `1xbets` | Kokushibot | 1 | requer esclarecimento |
| `3dgold` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `3dstone` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `4k` | succubus-bot | 1 | requer esclarecimento |
| `4kvizu` | succubus-bot | 1 | requer esclarecimento |
| `acess` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `add_ddd` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `add_infocmd` | Kokushibot | 1 | requer esclarecimento |
| `add_prefixo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `addads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `addautoban` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `addautorm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `addcase` | Kokushibot | 1 | requer esclarecimento |
| `addcmdprem` | Kokushibot | 1 | requer esclarecimento |
| `addcmdpremium` | zagan | 1 | requer esclarecimento |
| `addcmdvip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `addgold` | zagan | 1 | requer esclarecimento |
| `addlevel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `addpalavra` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `addpalavras_f` | Kokushibot, zagan | 2 | requer esclarecimento |
| `addpalavras_forca` | Kokushibot, zagan | 2 | requer esclarecimento |
| `addpix` | Kokushibot | 1 | requer esclarecimento |
| `addpremium` | Kokushibot, zagan | 2 | requer esclarecimento |
| `addrent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `addvip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `addxp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `adm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `adolesc` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `adverter` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `advertir` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `affect` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `ai` | Kokushibot | 1 | requer esclarecimento |
| `aiimg` | Kokushibot | 1 | requer esclarecimento |
| `ailogic` | Kokushibot | 1 | requer esclarecimento |
| `akinator` | Kokushibot | 1 | requer esclarecimento |
| `alteradores` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `alugar` | AnnaV6-Ultra, Kokushibot | 3 | requer esclarecimento |
| `alugarbot` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `alugargp` | Kokushibot | 1 | requer esclarecimento |
| `alugueis` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `aluguel` | AnnaV6-Ultra, Kokushibot, zagan | 5 | requer esclarecimento |
| `aluguel_global` | zagan | 1 | requer esclarecimento |
| `amazon` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `amazonsearch` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `america` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `anagrama` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `angelglx` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `angelwing` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `anime1` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `anime2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `animeia` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `animeimage` | Kokushibot | 1 | requer esclarecimento |
| `animeimg` | Kokushibot | 1 | requer esclarecimento |
| `animesimg` | Kokushibot | 1 | requer esclarecimento |
| `animetv` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `anotacao` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `anotacoes` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `anotar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `anti-ddd` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `anti_ddd` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `antiaudio` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `anticatalg` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `anticatalogo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `anticontato` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antictt` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antiddd` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `antiddd-list` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `antidoc` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antidocumento` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antifake` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antiimg` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antiligacao` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antiligar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antiligação` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antilinkeasy` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `antilinkgp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antilinkhard` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antiloc` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antinotas` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antipalavra` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antipalavrao` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antipalavrão` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antipv` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antipv2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antipv3` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antisticker` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `antivideo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ap` | Kokushibot | 1 | requer esclarecimento |
| `apagar` | succubus-bot | 1 | requer esclarecimento |
| `apr` | zagan | 1 | requer esclarecimento |
| `apresentar` | Kokushibot, zagan | 2 | requer esclarecimento |
| `aptoide` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `areia` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `arquivargp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `artist` | DRAKE-BOT.V10, FENRYS-V4 | 2 | requer esclarecimento |
| `asfalto` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `ass` | AnnaV6-Ultra, Kokushibot, succubus-bot | 3 | requer esclarecimento |
| `assaltar` | Kokushibot | 1 | requer esclarecimento |
| `assvizu` | succubus-bot | 1 | requer esclarecimento |
| `atadura` | Kokushibot | 1 | requer esclarecimento |
| `ativacoes` | zagan | 1 | requer esclarecimento |
| `ativacoes_dono` | zagan | 1 | requer esclarecimento |
| `ativarcmds` | zagan | 1 | requer esclarecimento |
| `ativarfuncoesdono` | zagan | 1 | requer esclarecimento |
| `atividade` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `atividades` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ativo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `atraente` | succubus-bot | 1 | requer esclarecimento |
| `attp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `attp2` | Kokushibot, zagan | 2 | requer esclarecimento |
| `audio-menu` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `audiocontrario` | zagan | 1 | requer esclarecimento |
| `audiolento` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `audiomeme` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `audiomeme2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `audiorapido` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `audioreverse` | zagan | 1 | requer esclarecimento |
| `ausente` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `autobang` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `autodown` | zagan | 2 | requer esclarecimento |
| `autofigu` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `autorepo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `autoriza` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `autorizar` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `autosticker` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `avadakedavra` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `avaliarestabulo` | Kokushibot | 1 | requer esclarecimento |
| `avalie` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `baiana` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `baiano` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `band` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `banfake` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `banfakes` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `banghost` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bangp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bann` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bard` | Kokushibot | 2 | requer esclarecimento |
| `bardai` | Kokushibot | 1 | requer esclarecimento |
| `bardaudio` | Kokushibot | 1 | requer esclarecimento |
| `bardimg` | Kokushibot | 1 | requer esclarecimento |
| `bardvideo` | Kokushibot | 1 | requer esclarecimento |
| `bass` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bass2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bass3` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bater` | Kokushibot | 1 | requer esclarecimento |
| `bbb` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bbb24` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bbb24news` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bbbnews` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bc` | Kokushibot, zagan | 2 | requer esclarecimento |
| `bcgc` | Kokushibot, zagan | 2 | requer esclarecimento |
| `bcgp` | Kokushibot, zagan | 2 | requer esclarecimento |
| `bcgroup` | Kokushibot, zagan | 2 | requer esclarecimento |
| `bdsm` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `beautiful` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bebado` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `beijar` | Kokushibot | 1 | requer esclarecimento |
| `beijo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bemvindo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bemvindo2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `beneficios` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `berry` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `beta` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `bigbrother` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bin` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `bingchat` | Kokushibot | 1 | requer esclarecimento |
| `bingimg` | Kokushibot | 1 | requer esclarecimento |
| `biografia` | zagan | 1 | requer esclarecimento |
| `bitly` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `blackpink` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `block` | Kokushibot, zagan | 2 | requer esclarecimento |
| `blockcmd` | zagan | 1 | requer esclarecimento |
| `blockcmdg` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `blockcmdgp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `blocklevel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `blocklevel-list` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `blocklevellist` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `blocklist` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `blockuser` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `blood` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `blowjob` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `blur` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bnw` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bolsonaro` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `boobs` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `boobsvizu` | succubus-bot | 1 | requer esclarecimento |
| `borrar` | Kokushibot, zagan | 2 | requer esclarecimento |
| `bot` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `botoff` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `boton` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `br` | Kokushibot | 1 | requer esclarecimento |
| `brasileirao` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `break` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `brincadeira` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `brincadeiras` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `brlist` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `bt` | succubus-bot | 1 | requer esclarecimento |
| `bug` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `bug-audio` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `buscarsabcity` | Kokushibot | 1 | requer esclarecimento |
| `buscarsc` | Kokushibot | 1 | requer esclarecimento |
| `button` | succubus-bot | 1 | requer esclarecimento |
| `bvbot` | Kokushibot | 1 | requer esclarecimento |
| `calc` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `calculadora` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `calcular` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `calendario` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cancel_voting` | Kokushibot | 1 | requer esclarecimento |
| `cancelarpedido` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cantada` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cantadas` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `capcut` | Kokushibot | 1 | requer esclarecimento |
| `caracoroa` | Kokushibot | 1 | requer esclarecimento |
| `carbon` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `carioca` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `carteira` | Kokushibot | 1 | requer esclarecimento |
| `casal` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `cases` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cassino` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `cattxt` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cavalo` | Kokushibot | 1 | requer esclarecimento |
| `cavalos` | Kokushibot | 1 | requer esclarecimento |
| `cdcv3` | Kokushibot | 1 | requer esclarecimento |
| `cekidff` | Kokushibot | 1 | requer esclarecimento |
| `celular` | Kokushibot, zagan | 2 | requer esclarecimento |
| `cemiterio` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cep` | AnnaV6-Ultra, Kokushibot, zagan | 4 | requer esclarecimento |
| `chance` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `changegroup` | Kokushibot | 1 | requer esclarecimento |
| `chassi` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `chatgpt` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 5 | requer esclarecimento |
| `chatgpt-3.5` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `chatgpt2` | succubus-bot | 1 | requer esclarecimento |
| `chatgptlogic` | Kokushibot | 1 | requer esclarecimento |
| `checkativo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `chocar` | Kokushibot | 1 | requer esclarecimento |
| `chocarovo` | Kokushibot | 1 | requer esclarecimento |
| `chufuyu` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `chutar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `chute` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `circle` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `circulo` | zagan | 1 | requer esclarecimento |
| `cita` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `clonar` | zagan | 1 | requer esclarecimento |
| `cmdpremium` | zagan | 1 | requer esclarecimento |
| `cmdsemprefixo` | Kokushibot | 1 | requer esclarecimento |
| `cmdviplist` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `cnpj` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `cns` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `codelist` | Kokushibot | 1 | requer esclarecimento |
| `codelistrent` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `coffecup` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `coffecup2` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `coins` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `colaq` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `comandos` | zagan | 1 | requer esclarecimento |
| `comandos-termux` | zagan | 1 | requer esclarecimento |
| `como_votar` | zagan | 1 | requer esclarecimento |
| `comprar` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `comprar_bot` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `comprarcavalo` | Kokushibot | 1 | requer esclarecimento |
| `comprarestabulo` | Kokushibot | 1 | requer esclarecimento |
| `comprargalinha` | Kokushibot | 1 | requer esclarecimento |
| `comprargalinheiro` | Kokushibot | 1 | requer esclarecimento |
| `comprargalo` | Kokushibot | 1 | requer esclarecimento |
| `comprarseguranca` | Kokushibot | 1 | requer esclarecimento |
| `comprarsela` | Kokushibot | 1 | requer esclarecimento |
| `comprarvara` | Kokushibot | 1 | requer esclarecimento |
| `compras` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `comunismo` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `config-group` | Kokushibot | 1 | requer esclarecimento |
| `config_gp` | Kokushibot | 1 | requer esclarecimento |
| `configurar` | Kokushibot | 1 | requer esclarecimento |
| `configurar-bot` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `conselho` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `conselhob` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `conselhobiblico` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `conselhos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `conselhosb` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `conselhosbiblico` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `console` | zagan | 1 | requer esclarecimento |
| `consultar_vip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `consultargold` | zagan | 1 | requer esclarecimento |
| `consultas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `contardias` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `convite` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `corno` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `correio` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `corretor` | Kokushibot | 1 | requer esclarecimento |
| `cortesia24` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cotacao` | Kokushibot | 1 | requer esclarecimento |
| `countdays` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cpf` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `cpf2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `cpf3` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `crash` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `createimg` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `cria` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `criador` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `criador2` | Kokushibot | 1 | requer esclarecimento |
| `criartab` | zagan | 1 | requer esclarecimento |
| `criartabela` | zagan | 1 | requer esclarecimento |
| `criartbl` | zagan | 1 | requer esclarecimento |
| `crimg` | zagan | 1 | requer esclarecimento |
| `cronometro` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `cruzargg` | Kokushibot | 1 | requer esclarecimento |
| `cuckold` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cum` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `cup` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `curiosidades` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `cuttly` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `d_` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dadoapostado` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `dados` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `dados_koku` | Kokushibot | 1 | requer esclarecimento |
| `dalle` | succubus-bot | 1 | requer esclarecimento |
| `dallev2` | succubus-bot | 1 | requer esclarecimento |
| `ddd` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dddlist` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `ddilist` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `de` | Kokushibot | 1 | requer esclarecimento |
| `death` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `deepseek` | succubus-bot | 1 | requer esclarecimento |
| `deepseek-code` | succubus-bot | 1 | requer esclarecimento |
| `dehaze` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `del` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 6 | requer esclarecimento |
| `del_ddd` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `del_infocmd` | Kokushibot | 1 | requer esclarecimento |
| `delautoban` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `delautorm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `delcmdprem` | Kokushibot | 1 | requer esclarecimento |
| `delcmdvip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `delcodegp` | Kokushibot | 1 | requer esclarecimento |
| `delcoderent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `delet` | succubus-bot | 1 | requer esclarecimento |
| `deletar` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `delete` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `delete_ddd` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `deletechat` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `deletem` | Kokushibot, zagan | 2 | requer esclarecimento |
| `delgf` | Kokushibot | 1 | requer esclarecimento |
| `delpalavra` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `delpix` | Kokushibot | 1 | requer esclarecimento |
| `delpremium` | Kokushibot, zagan | 2 | requer esclarecimento |
| `delptmbcity` | Kokushibot | 1 | requer esclarecimento |
| `delremover` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `delrent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `delsc` | Kokushibot | 1 | requer esclarecimento |
| `delvip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `demonfire` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `demongreen` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `descgp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `descriçãogp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `desmutar` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `desmute` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `destrava` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `destrava2` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `diff` | Kokushibot | 1 | requer esclarecimento |
| `digt` | zagan | 1 | requer esclarecimento |
| `dinextenso` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `dither` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `dl` | Kokushibot | 1 | requer esclarecimento |
| `doc` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `docfake` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `dogolpe` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono1` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono10` | Kokushibot | 1 | requer esclarecimento |
| `dono2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono3` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono4` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono5` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono6` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dono7` | Kokushibot | 1 | requer esclarecimento |
| `dono8` | Kokushibot | 1 | requer esclarecimento |
| `dono9` | Kokushibot | 1 | requer esclarecimento |
| `donomenu` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `donos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `download` | Kokushibot | 1 | requer esclarecimento |
| `download-link` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `dragonred` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `duelo` | Kokushibot | 1 | requer esclarecimento |
| `dupla` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `editanime` | Kokushibot | 1 | requer esclarecimento |
| `efeitoimg` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `efeitoneon` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `efeitos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `efeitosimg` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `efeitosmarcar` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `emoji` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `emoji-bot` | Kokushibot | 1 | requer esclarecimento |
| `emoji-mix` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `emojimix` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `encurtalink` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `encurtarlink2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `encurtarlink3` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `endads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `enhance` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `enigma` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `enquete` | succubus-bot | 1 | requer esclarecimento |
| `entardecer` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `entrar` | AnnaV6-Ultra, Kokushibot, zagan | 5 | requer esclarecimento |
| `enviar` | succubus-bot | 1 | requer esclarecimento |
| `envmsg` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `envpv` | AnnaV6-Ultra | 2 | requer esclarecimento |
| `ephemeral` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `equipemascote` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ero` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `espnoticia` | zagan | 1 | requer esclarecimento |
| `espnoticias` | zagan | 1 | requer esclarecimento |
| `esporte-noticia` | zagan | 1 | requer esclarecimento |
| `esporte-noticias` | zagan | 1 | requer esclarecimento |
| `esporte_news` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `esporte_noticia` | zagan | 1 | requer esclarecimento |
| `esporte_noticias` | zagan | 1 | requer esclarecimento |
| `esportenews` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `esportenoticia` | zagan | 1 | requer esclarecimento |
| `esportenoticias` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `esquilo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `estabulo` | Kokushibot | 1 | requer esclarecimento |
| `estatisticas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `estilizar` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `estourar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `eununca` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `excluir` | Kokushibot | 1 | requer esclarecimento |
| `exec` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `execut` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `face_audio` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `face_video` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `facebook` | Kokushibot | 1 | requer esclarecimento |
| `facepalm` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `fakechat` | Kokushibot | 1 | requer esclarecimento |
| `fakemsg` | Kokushibot | 1 | requer esclarecimento |
| `fast` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `fastvid` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `fatos` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `fazernick` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `fazerpix` | Kokushibot | 1 | requer esclarecimento |
| `fazertm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `fb` | Kokushibot | 1 | requer esclarecimento |
| `fbvid` | Kokushibot | 1 | requer esclarecimento |
| `fbvideo` | Kokushibot | 1 | requer esclarecimento |
| `feio` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `femdom` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ff-log` | succubus-bot | 1 | requer esclarecimento |
| `ff-perfil` | succubus-bot | 1 | requer esclarecimento |
| `ff1` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ff2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ffavatar` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ffgren` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ffrose` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ffstalk` | Kokushibot | 1 | requer esclarecimento |
| `fiction` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `fiel` | succubus-bot | 1 | requer esclarecimento |
| `figaleatoria` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figfundo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `figu` | Kokushibot | 1 | requer esclarecimento |
| `figu-animais` | zagan | 1 | requer esclarecimento |
| `figu-anime` | zagan | 1 | requer esclarecimento |
| `figu-bebe` | zagan | 1 | requer esclarecimento |
| `figu-coreana` | zagan | 1 | requer esclarecimento |
| `figu-desenho` | zagan | 1 | requer esclarecimento |
| `figu-flork` | zagan | 1 | requer esclarecimento |
| `figu-meme` | zagan | 1 | requer esclarecimento |
| `figu-raiva` | zagan | 1 | requer esclarecimento |
| `figu-random` | zagan | 1 | requer esclarecimento |
| `figu-roblox` | zagan | 1 | requer esclarecimento |
| `figuanimais` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figuanime` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figuanime2` | Kokushibot | 1 | requer esclarecimento |
| `figubebe` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figubts` | Kokushibot | 1 | requer esclarecimento |
| `figucoreana` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figucoreanas2` | Kokushibot | 1 | requer esclarecimento |
| `figudesenho` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figuemoji` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figuflork` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figufunny` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figugatos` | Kokushibot | 1 | requer esclarecimento |
| `figumemes` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figumemes2` | Kokushibot | 1 | requer esclarecimento |
| `figuraiva` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figurandom` | Kokushibot | 1 | requer esclarecimento |
| `figurinha` | Kokushibot | 1 | requer esclarecimento |
| `figurinhas` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `figuroblox` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figusemfundo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `figuweb` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `figvideo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `fire` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `florwooden` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `foot` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `foto18` | succubus-bot | 1 | requer esclarecimento |
| `fotobot` | zagan | 1 | requer esclarecimento |
| `fotogp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `fotomenu` | AnnaV6-Ultra, succubus-bot, zagan | 3 | requer esclarecimento |
| `fpsmascote` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `frases` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `fsticker` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `fstiker` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `fundobemvindo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `fundobv` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `fundolevel` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `fundomenu` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `fundosaiu` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `furtar` | Kokushibot | 1 | requer esclarecimento |
| `g1noticia` | Kokushibot | 1 | requer esclarecimento |
| `gada` | succubus-bot | 1 | requer esclarecimento |
| `gado` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `galinheiro` | Kokushibot | 1 | requer esclarecimento |
| `galo` | Kokushibot | 1 | requer esclarecimento |
| `galos` | Kokushibot | 1 | requer esclarecimento |
| `game` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `gamenews` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gamesnews` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ganbganb` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gangbang` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gartic` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `gay` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `gdrive` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `gelo` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `gemini` | AnnaV6-Ultra, Kokushibot, succubus-bot | 3 | requer esclarecimento |
| `geminiimg` | Kokushibot | 1 | requer esclarecimento |
| `geminip` | Kokushibot | 1 | requer esclarecimento |
| `gerarcodecort` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `gerarcodegp` | Kokushibot | 1 | requer esclarecimento |
| `gerarcoderent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gerarcpf` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `gerargf` | Kokushibot | 1 | requer esclarecimento |
| `gerarlink` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `gerarlink2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gerarnick` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `gerarqr` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `get` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `get-txt` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `getcase` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `gethtml` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `getinfo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `getnoticias` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `getquoted` | AnnaV6-Ultra, Kokushibot, zagan | 6 | requer esclarecimento |
| `gimage` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `girlmascote` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gitclone` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gizquadro` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `glasses` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `glitch2` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `glitch3` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `gnews` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gold` | zagan | 1 | requer esclarecimento |
| `golds` | zagan | 1 | requer esclarecimento |
| `google` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `googledrive` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `googlenews` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `googlesg` | zagan | 1 | requer esclarecimento |
| `googlesrc` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gostosa` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `gostoso` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `gpinfo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `gpt` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `gpt-3.5` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gpt-4` | Kokushibot | 1 | requer esclarecimento |
| `gpt2` | succubus-bot | 1 | requer esclarecimento |
| `gpt4` | Kokushibot | 1 | requer esclarecimento |
| `gptvoz` | Kokushibot | 1 | requer esclarecimento |
| `grafity` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `grave` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `grave2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `grupo` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `grupoinfo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `grupos` | zagan | 1 | requer esclarecimento |
| `gruposwhatsapp` | Kokushibot | 1 | requer esclarecimento |
| `gtaia` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `gtts` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `hackneon` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `halloween` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `happymod` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `harryp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `hass` | succubus-bot | 1 | requer esclarecimento |
| `hassvizu` | succubus-bot | 1 | requer esclarecimento |
| `hboobs` | succubus-bot | 1 | requer esclarecimento |
| `hboobsvizu` | succubus-bot | 1 | requer esclarecimento |
| `hd` | Kokushibot | 1 | requer esclarecimento |
| `hd2` | Kokushibot | 1 | requer esclarecimento |
| `hd3` | Kokushibot | 1 | requer esclarecimento |
| `hdr` | Kokushibot | 1 | requer esclarecimento |
| `hdr2` | Kokushibot | 1 | requer esclarecimento |
| `hdr3` | Kokushibot | 1 | requer esclarecimento |
| `helpsorteio` | zagan | 1 | requer esclarecimento |
| `hitler` | Kokushibot, zagan | 2 | requer esclarecimento |
| `hkitsune` | succubus-bot | 1 | requer esclarecimento |
| `hkitsunevizu` | succubus-bot | 1 | requer esclarecimento |
| `hneko` | succubus-bot | 1 | requer esclarecimento |
| `hnekovizu` | succubus-bot | 1 | requer esclarecimento |
| `holo` | succubus-bot | 1 | requer esclarecimento |
| `holovizu` | succubus-bot | 1 | requer esclarecimento |
| `horror` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `hthigh` | succubus-bot | 1 | requer esclarecimento |
| `hthighvizu` | succubus-bot | 1 | requer esclarecimento |
| `icms` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `id` | Kokushibot | 1 | requer esclarecimento |
| `iddogrupo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `idgp` | Kokushibot | 1 | requer esclarecimento |
| `idgrupo` | zagan | 1 | requer esclarecimento |
| `idioma` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `idiomas` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ifunnyvideo` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `ig` | Kokushibot | 1 | requer esclarecimento |
| `igaudio` | AnnaV6-Ultra | 2 | requer esclarecimento |
| `igdl` | Kokushibot | 1 | requer esclarecimento |
| `igreels` | Kokushibot | 1 | requer esclarecimento |
| `igsh` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `igstalk` | Kokushibot | 2 | requer esclarecimento |
| `igstalker` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `igstory` | AnnaV6-Ultra, Kokushibot | 3 | requer esclarecimento |
| `igvideo` | Kokushibot | 2 | requer esclarecimento |
| `imagine` | AnnaV6-Ultra, Kokushibot, succubus-bot | 3 | requer esclarecimento |
| `imagine-ia` | succubus-bot | 1 | requer esclarecimento |
| `imagine2` | succubus-bot | 1 | requer esclarecimento |
| `imdb` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `imdbinfo` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `imgcr` | zagan | 1 | requer esclarecimento |
| `imgpraanime` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `imgpragta` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `imgpralink` | zagan | 1 | requer esclarecimento |
| `imgpralink2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `imgprazombie` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `impostos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `inativo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `inativos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `index-bot` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `indian` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `info_aluguel` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `info_vip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `infoaluguel` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `infobancarac` | zagan | 1 | requer esclarecimento |
| `infobanghost` | zagan | 1 | requer esclarecimento |
| `infobemvindo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `infobv` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `infocmd_add` | Kokushibot | 1 | requer esclarecimento |
| `infocmd_del` | Kokushibot | 1 | requer esclarecimento |
| `infocmdvip` | AnnaV6-Ultra | 2 | requer esclarecimento |
| `infocontador` | zagan | 1 | requer esclarecimento |
| `infodono` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `infoduelo` | zagan | 1 | requer esclarecimento |
| `infoforca` | zagan | 1 | requer esclarecimento |
| `infogp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `infogrupo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `infolistanegra` | zagan | 1 | requer esclarecimento |
| `infomultiprefix` | zagan | 1 | requer esclarecimento |
| `infomultiprefixo` | zagan | 1 | requer esclarecimento |
| `infopalavrao` | zagan | 1 | requer esclarecimento |
| `infopalavrão` | zagan | 1 | requer esclarecimento |
| `infopremium` | zagan | 1 | requer esclarecimento |
| `inforent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `infosorteio` | zagan | 1 | requer esclarecimento |
| `infotinder` | Kokushibot | 1 | requer esclarecimento |
| `infotransmitir` | zagan | 1 | requer esclarecimento |
| `infovip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `infowelcome` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `iniciar_forca` | Kokushibot, zagan | 2 | requer esclarecimento |
| `iniciar_o_jogo` | zagan | 1 | requer esclarecimento |
| `insta_audio` | AnnaV6-Ultra | 3 | requer esclarecimento |
| `instaaudio` | AnnaV6-Ultra | 2 | requer esclarecimento |
| `instagram` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `instastalk` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `instastalker` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `instastory` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `instastorys` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `invert` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `ip` | AnnaV6-Ultra, Kokushibot | 3 | requer esclarecimento |
| `jahy` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `jail` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `jeans` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `jogo` | Kokushibot | 1 | requer esclarecimento |
| `jogodaforca` | Kokushibot | 1 | requer esclarecimento |
| `jogodavelha` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `jogos` | Kokushibot | 1 | requer esclarecimento |
| `join` | AnnaV6-Ultra, Kokushibot, zagan | 5 | requer esclarecimento |
| `jokerlogo` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `kanna` | succubus-bot | 1 | requer esclarecimento |
| `kannavizu` | succubus-bot | 1 | requer esclarecimento |
| `karaba` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `kasedaiki` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ke` | Kokushibot | 1 | requer esclarecimento |
| `kemonomimi` | succubus-bot | 1 | requer esclarecimento |
| `kemonomimivizu` | succubus-bot | 1 | requer esclarecimento |
| `kwai` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lapis` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lastrent` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lava` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `legenda` | zagan | 1 | requer esclarecimento |
| `legenda_documento` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legenda_estrangeiro` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legenda_estrangeiros` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legenda_imagem` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legenda_video` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legendabv` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legendabv2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legendasaiu` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `legendasaiu2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ler` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `lerfoto` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `lesbica` | succubus-bot | 1 | requer esclarecimento |
| `lesbico` | succubus-bot | 1 | requer esclarecimento |
| `letra` | Kokushibot | 1 | requer esclarecimento |
| `letra2` | Kokushibot | 1 | requer esclarecimento |
| `letram` | Kokushibot | 1 | requer esclarecimento |
| `letramusic` | Kokushibot | 1 | requer esclarecimento |
| `letramusic2` | Kokushibot | 1 | requer esclarecimento |
| `letramusica` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `level` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `leveling` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `lgbt` | AnnaV6-Ultra, Kokushibot, zagan | 4 | requer esclarecimento |
| `limitarcmd` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `limitarcomando` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `limitec` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `limitec_global` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `limitecaracteres` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `limitecmd` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `limiteflood` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `limpar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `limpar_mortos-cnt` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `limpardb` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `lindo` | succubus-bot | 1 | requer esclarecimento |
| `linkdogp_revelar` | zagan | 1 | requer esclarecimento |
| `linkgp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `links` | Kokushibot, zagan | 2 | requer esclarecimento |
| `lirik` | Kokushibot | 1 | requer esclarecimento |
| `liryc` | Kokushibot | 1 | requer esclarecimento |
| `lista` | succubus-bot | 1 | requer esclarecimento |
| `lista-aluguel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lista_aluguel` | zagan | 1 | requer esclarecimento |
| `listaadmins` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listaaluguel` | zagan | 1 | requer esclarecimento |
| `listabr` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listacmdprem` | Kokushibot | 1 | requer esclarecimento |
| `listacmdvip` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `listacodigo` | Kokushibot | 1 | requer esclarecimento |
| `listacodigos` | Kokushibot | 1 | requer esclarecimento |
| `listacomandos` | zagan | 1 | requer esclarecimento |
| `listaddd` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listaddi` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listadmins` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `listafake` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listafakes` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listagp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listagrupos` | Kokushibot | 1 | requer esclarecimento |
| `listamutados` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `listanegra` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listanegrag` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listapalavra` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listapalavrão` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listarevgp` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `listatm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listban` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listbcmdglobal` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listbcmdgp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listblockcmdgp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `listlinks` | zagan | 1 | requer esclarecimento |
| `listpalavra` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `listrent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `lixo` | Kokushibot, zagan | 2 | requer esclarecimento |
| `llama` | succubus-bot | 1 | requer esclarecimento |
| `llama2` | succubus-bot | 1 | requer esclarecimento |
| `lobometal` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `logogame` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `logos1` | zagan | 1 | requer esclarecimento |
| `loja` | AnnaV6-Ultra, Kokushibot | 3 | requer esclarecimento |
| `lojadecavalos` | Kokushibot | 1 | requer esclarecimento |
| `lojadegalos` | Kokushibot | 1 | requer esclarecimento |
| `lojas` | Kokushibot | 1 | requer esclarecimento |
| `lojas_sc` | Kokushibot | 1 | requer esclarecimento |
| `lojinha` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `loli` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `louca` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `louco` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `lovemsg` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lovemsg2` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lovemsg3` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `luxury` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lyrics` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `lyrics2` | Kokushibot | 1 | requer esclarecimento |
| `macaca` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `macaco` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `madeira` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `magik` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `marcar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `marcar2` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `marcarwa` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `marvel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `mascotegame` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `masturbation` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `mata` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `matar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `matrix` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `mediafire` | AnnaV6-Ultra, Kokushibot, zagan | 6 | requer esclarecimento |
| `megadl` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `mek` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `memedroid` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `memes` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `memesvid` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `mencionar` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `menu1` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `menu10` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `menu18` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `menu2` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `menu3` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `menu4` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `menu5` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `menu6` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `menu7` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `menu8` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `menu9` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `menuadm` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `menuadms` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `menuanime` | Kokushibot | 1 | requer esclarecimento |
| `menuc` | zagan | 1 | requer esclarecimento |
| `menucoins` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `menucompleto` | succubus-bot | 1 | requer esclarecimento |
| `menudono` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 4 | requer esclarecimento |
| `menudownload` | Kokushibot | 1 | requer esclarecimento |
| `menuefeitos` | Kokushibot | 1 | requer esclarecimento |
| `menufig` | Kokushibot | 1 | requer esclarecimento |
| `menufigu` | Kokushibot | 1 | requer esclarecimento |
| `menufigurinhas` | Kokushibot | 1 | requer esclarecimento |
| `menujogos` | succubus-bot | 1 | requer esclarecimento |
| `menulinks` | Kokushibot | 1 | requer esclarecimento |
| `menulogo` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `menup` | zagan | 1 | requer esclarecimento |
| `menupremium` | Kokushibot, zagan | 2 | requer esclarecimento |
| `menusabcity` | Kokushibot | 1 | requer esclarecimento |
| `menustalk` | Kokushibot | 1 | requer esclarecimento |
| `merda` | Kokushibot, zagan | 2 | requer esclarecimento |
| `metadinha` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `metalblue` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `metalfire` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `metalgold` | AnnaV6-Ultra, Kokushibot | 3 | requer esclarecimento |
| `meubanco` | Kokushibot | 1 | requer esclarecimento |
| `meupix` | Kokushibot | 1 | requer esclarecimento |
| `meutinder` | Kokushibot | 1 | requer esclarecimento |
| `midialink` | zagan | 1 | requer esclarecimento |
| `mina` | Kokushibot | 1 | requer esclarecimento |
| `minado` | Kokushibot | 1 | requer esclarecimento |
| `minareset` | Kokushibot | 1 | requer esclarecimento |
| `minatips` | Kokushibot | 1 | requer esclarecimento |
| `minerar` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `minerar_gold` | zagan | 1 | requer esclarecimento |
| `minerar_golds` | zagan | 1 | requer esclarecimento |
| `minerarcoins` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `mineshelp` | Kokushibot | 1 | requer esclarecimento |
| `minhacarteira` | Kokushibot | 1 | requer esclarecimento |
| `minhacity` | Kokushibot | 1 | requer esclarecimento |
| `minhadupla` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `mistral` | succubus-bot | 1 | requer esclarecimento |
| `mlstalk` | Kokushibot | 1 | requer esclarecimento |
| `modoadulto` | succubus-bot | 1 | requer esclarecimento |
| `modoaluguel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `modobrincadeira` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `modobrincadeiras` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `modobutton` | succubus-bot | 1 | requer esclarecimento |
| `modocoins` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `modojogos` | succubus-bot | 1 | requer esclarecimento |
| `modorent` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `modorgp` | Kokushibot | 1 | requer esclarecimento |
| `moeda` | zagan | 1 | requer esclarecimento |
| `moedas` | zagan | 1 | requer esclarecimento |
| `morechat` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `morte` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `morto` | Kokushibot, zagan | 2 | requer esclarecimento |
| `mostrar_forca` | Kokushibot, zagan | 2 | requer esclarecimento |
| `motor` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `msgantipv` | zagan | 1 | requer esclarecimento |
| `msgtemp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `multidl` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `multiprefix` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `multiprefixo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `mutar` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `mutelist` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `mycoderent` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `myname` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `namorar` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `narutologo` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `nasa` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `natal` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `nazista` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `neko` | succubus-bot | 1 | requer esclarecimento |
| `neko2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `nekos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `neon` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `neon1` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `neon2` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `neon3` | AnnaV6-Ultra, Kokushibot | 4 | requer esclarecimento |
| `neon3d` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `neondevil` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `neongreen` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `neve` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `newapikey_moon` | succubus-bot | 1 | requer esclarecimento |
| `newdononumero` | succubus-bot | 1 | requer esclarecimento |
| `newemoji` | succubus-bot | 1 | requer esclarecimento |
| `newnamebot` | succubus-bot | 1 | requer esclarecimento |
| `newprefixo` | succubus-bot | 1 | requer esclarecimento |
| `nick` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `nick-dono` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `nome` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `nome-bot` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `nome2` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `nome_mae` | succubus-bot | 1 | requer esclarecimento |
| `nomegp` | AnnaV6-Ultra, Kokushibot, succubus-bot, zagan | 7 | requer esclarecimento |
| `nota` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `notas` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `noticiaesp` | zagan | 1 | requer esclarecimento |
| `noticiaesporte` | zagan | 1 | requer esclarecimento |
| `noticiasesp` | zagan | 1 | requer esclarecimento |
| `noticiasesporte` | zagan | 1 | requer esclarecimento |
| `novoqr` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `nuke` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `numero-dono` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `nuvem` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `obesidade` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `obeso` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `ocr` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `odelete` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `odono` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `off` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `on` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `onlyimg` | succubus-bot | 1 | requer esclarecimento |
| `openai` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `openailogic` | Kokushibot | 1 | requer esclarecimento |
| `operadora` | Kokushibot | 1 | requer esclarecimento |
| `orgy` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ossos` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `ovo` | Kokushibot | 1 | requer esclarecimento |
| `p4` | Kokushibot | 1 | requer esclarecimento |
| `panties` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `papel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `papof` | zagan | 1 | requer esclarecimento |
| `parentes` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `patente` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `pediremnamoro` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `pensador` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `pergunta` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `pesquisa` | Kokushibot, zagan | 2 | requer esclarecimento |
| `pesquisa-ytb` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `pesquisar` | zagan | 1 | requer esclarecimento |
| `pgif` | succubus-bot | 1 | requer esclarecimento |
| `pgifvizu` | succubus-bot | 1 | requer esclarecimento |
| `photoleap` | Kokushibot | 1 | requer esclarecimento |
| `pin` | zagan | 1 | requer esclarecimento |
| `pindl` | Kokushibot | 1 | requer esclarecimento |
| `pink` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `pinterest` | AnnaV6-Ultra, succubus-bot, zagan | 3 | requer esclarecimento |
| `pinterestdl` | Kokushibot | 1 | requer esclarecimento |
| `pinterestmp4` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `pix` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `pixelate` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `placa` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq1` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq3` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq4` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq5` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq6` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq7` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq8` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaq9` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `plaquinha` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha10` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha11` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha12` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha13` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha14` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha15` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha16` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha2` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha3` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha4` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha5` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha6` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha7` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha8` | succubus-bot | 1 | requer esclarecimento |
| `plaquinha9` | succubus-bot | 1 | requer esclarecimento |
| `play-menu` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `play2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `play2wt` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `play3` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `play4` | Kokushibot | 1 | requer esclarecimento |
| `play_video` | zagan | 1 | requer esclarecimento |
| `playadd` | succubus-bot | 1 | requer esclarecimento |
| `playaudio` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `playdoc` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `playlist` | DRAKE-BOT.V10, FENRYS-V4, Kokushibot | 3 | requer esclarecimento |
| `playmeme` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `playmeme2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `playmix` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `playvid` | zagan | 1 | requer esclarecimento |
| `playvideo` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `pmix` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `pocbi` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `podre` | succubus-bot | 1 | requer esclarecimento |
| `ppt` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `prefixo-bot` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `prefixos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `premiumlist` | Kokushibot, zagan | 2 | requer esclarecimento |
| `preso` | Kokushibot, zagan | 2 | requer esclarecimento |
| `printscreen` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `privaddgroup` | Kokushibot | 1 | requer esclarecimento |
| `privphotobot` | Kokushibot | 1 | requer esclarecimento |
| `procurado` | Kokushibot, zagan | 2 | requer esclarecimento |
| `programador` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `promocell` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `promover` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ptvmsg` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `puta` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `puxarcase` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `pv` | AnnaV6-Ultra | 2 | requer esclarecimento |
| `qc` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `qrcode` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `quando` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `quizanimais` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `quizfut` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `quizfutebol` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `r-f` | Kokushibot, zagan | 2 | requer esclarecimento |
| `r-forca` | Kokushibot, zagan | 2 | requer esclarecimento |
| `rainbow` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rank` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rankativos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankbaiana` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankbaianas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankbaiano` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankbaianos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankbeta` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankbetas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankcarioca` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankcariocas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankcity` | Kokushibot | 1 | requer esclarecimento |
| `rankcorno` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankcornos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankgado` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankgados` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankgay` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankgays` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankgold` | zagan | 1 | requer esclarecimento |
| `rankgostosa` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `rankgostosas` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `rankgostoso` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankgostosos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankinativos` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ranklevel` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ranklouca` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankloucas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranklouco` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankloucos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankmacaca` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankmacacas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankmacaco` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankmacacos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranknazista` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ranknazistas` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankotaku` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankotakus` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankpatente` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankpau` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rankputa` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rankputas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranksafada` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranksafadas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranksafado` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranksafados` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranksc` | Kokushibot | 1 | requer esclarecimento |
| `ranksigma` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ranksigmas` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rastrear` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rbale` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `rch` | succubus-bot | 1 | requer esclarecimento |
| `reagir` | zagan | 1 | requer esclarecimento |
| `rebaixar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `receita` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `recolherlink` | zagan | 1 | requer esclarecimento |
| `recolor` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `recolorir` | Kokushibot | 1 | requer esclarecimento |
| `recrutar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `recusar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `redacao` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `registrar` | Kokushibot | 1 | requer esclarecimento |
| `regras` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `regraspp` | zagan | 1 | requer esclarecimento |
| `reiniciar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `reivindicar` | Kokushibot | 1 | requer esclarecimento |
| `remini` | Kokushibot | 1 | requer esclarecimento |
| `remini2` | Kokushibot | 1 | requer esclarecimento |
| `remini3` | Kokushibot | 1 | requer esclarecimento |
| `removeraluguel` | Kokushibot | 1 | requer esclarecimento |
| `rename` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `renovar_aluguel` | zagan | 1 | requer esclarecimento |
| `requestgp` | Kokushibot | 1 | requer esclarecimento |
| `resetadsgp` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `resetaki` | Kokushibot | 1 | requer esclarecimento |
| `resetarv` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `resetarvelha` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `resetav` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `resetavelha` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `resetforca` | Kokushibot | 1 | requer esclarecimento |
| `resetscbet` | Kokushibot | 1 | requer esclarecimento |
| `resetvelha` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `resgatar` | Kokushibot | 1 | requer esclarecimento |
| `resgatargf` | Kokushibot | 1 | requer esclarecimento |
| `responda` | succubus-bot | 1 | requer esclarecimento |
| `retirar` | Kokushibot | 1 | requer esclarecimento |
| `revelarenigma` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `revelargartic` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `revelarvisu` | Kokushibot | 1 | requer esclarecimento |
| `revenue` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `reversevid` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `reviver` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `reviverqr` | AnnaV6-Ultra, Kokushibot, zagan | 4 | requer esclarecimento |
| `revlinkgp` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `revlinkgroup` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `revogar` | Kokushibot | 1 | requer esclarecimento |
| `rf` | Kokushibot | 1 | requer esclarecimento |
| `rg` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rg_aluguel` | zagan | 1 | requer esclarecimento |
| `rg_aviso` | Kokushibot, zagan | 2 | requer esclarecimento |
| `rgaluguel` | zagan | 1 | requer esclarecimento |
| `rgcity` | Kokushibot | 1 | requer esclarecimento |
| `rgrent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rgtake` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rgtinder` | Kokushibot | 1 | requer esclarecimento |
| `rgtm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rip` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rm_aluguel` | zagan | 1 | requer esclarecimento |
| `rm_aviso` | Kokushibot, zagan | 2 | requer esclarecimento |
| `rm_avisos` | Kokushibot, zagan | 2 | requer esclarecimento |
| `rm_ddd` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rmads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rmadv` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rmaluguel` | zagan | 1 | requer esclarecimento |
| `rmfotogroup` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rmlevel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rmnota` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rmpalavra_f` | Kokushibot, zagan | 2 | requer esclarecimento |
| `rmpalavra_forca` | Kokushibot, zagan | 2 | requer esclarecimento |
| `rmphotogp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rmrent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rmtimeads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rmtinder` | Kokushibot | 1 | requer esclarecimento |
| `rmtmads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `rntake` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rolar` | Kokushibot | 1 | requer esclarecimento |
| `roletarussa` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `roll` | zagan | 1 | requer esclarecimento |
| `romantic` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `rotate` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `roubar` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rpglistgp` | Kokushibot | 1 | requer esclarecimento |
| `rv` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `rv-forca` | Kokushibot, zagan | 2 | requer esclarecimento |
| `rvisu` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `safada` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `safado` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `sairdogp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sairgp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sairpmcity` | Kokushibot | 1 | requer esclarecimento |
| `sairptmcity` | Kokushibot | 1 | requer esclarecimento |
| `sairsc` | Kokushibot | 1 | requer esclarecimento |
| `sairtinder` | Kokushibot | 1 | requer esclarecimento |
| `saldo` | Kokushibot | 1 | requer esclarecimento |
| `samong` | Kokushibot | 1 | requer esclarecimento |
| `sanime` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `sat` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `savegp` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `scdl` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `scep` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `score` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `screenshots` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `screenshotweb` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `semoji` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `semprefixo` | Kokushibot | 1 | requer esclarecimento |
| `sender` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sepia` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `seradm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sermembro` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `serprem` | zagan | 1 | requer esclarecimento |
| `serpremium` | zagan | 1 | requer esclarecimento |
| `setads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `setadsgp` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `setadstime` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `setcavalo` | Kokushibot | 1 | requer esclarecimento |
| `setfiltro` | Kokushibot | 1 | requer esclarecimento |
| `setfotogp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `setgene` | Kokushibot | 1 | requer esclarecimento |
| `setmeca` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `setpix` | Kokushibot | 1 | requer esclarecimento |
| `setprefix` | AnnaV6-Ultra, Kokushibot, zagan | 5 | requer esclarecimento |
| `setprefixs` | zagan | 1 | requer esclarecimento |
| `sfundo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `shadow` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `shazam` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `shipo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sigma` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `signo` | AnnaV6-Ultra, Kokushibot, zagan | 4 | requer esclarecimento |
| `simi` | AnnaV6-Ultra, zagan | 2 | requer esclarecimento |
| `simih` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `simih2` | Kokushibot, zagan | 2 | requer esclarecimento |
| `sip` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `sistemgold` | zagan | 1 | requer esclarecimento |
| `site` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `slot` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `slow` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `slowvid` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `smoke` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `so_adm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `soco` | Kokushibot | 1 | requer esclarecimento |
| `soltar` | Kokushibot | 1 | requer esclarecimento |
| `sopk` | Kokushibot | 1 | requer esclarecimento |
| `sortcoins` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `sorteio` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sorteiocoins` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `sorteionumero` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sorteionumeros` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `soundcloud` | AnnaV6-Ultra, Kokushibot | 4 | requer esclarecimento |
| `space` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `spamngl` | Kokushibot | 1 | requer esclarecimento |
| `spoiler` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `spotify` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `sprefixo` | Kokushibot | 1 | requer esclarecimento |
| `springtrap` | Kokushibot | 1 | requer esclarecimento |
| `sqlcode` | succubus-bot | 1 | requer esclarecimento |
| `ssweb` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `st` | AnnaV6-Ultra, succubus-bot, zagan | 3 | requer esclarecimento |
| `stalkff` | Kokushibot | 1 | requer esclarecimento |
| `stalkig` | Kokushibot | 1 | requer esclarecimento |
| `stalkml` | Kokushibot | 1 | requer esclarecimento |
| `stalktt` | Kokushibot | 1 | requer esclarecimento |
| `stalkyt` | Kokushibot | 1 | requer esclarecimento |
| `startads` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `steel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `stickerinfo` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `stk` | AnnaV6-Ultra, succubus-bot, zagan | 3 | requer esclarecimento |
| `stmetadata` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `stone` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `style` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `substituir` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sugestao` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `sugestão` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `summerize` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `superimg` | zagan | 1 | requer esclarecimento |
| `suporte-dono` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `suporte-dono2` | Kokushibot | 1 | requer esclarecimento |
| `suruba` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `surubao` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `tabela` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tabeladogp` | zagan | 1 | requer esclarecimento |
| `tabelagp` | zagan | 1 | requer esclarecimento |
| `tabelinha` | zagan | 1 | requer esclarecimento |
| `take` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tapa` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `telefone` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tempocmd` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `tentacle` | succubus-bot | 1 | requer esclarecimento |
| `tentacles` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tentaclevizu` | succubus-bot | 1 | requer esclarecimento |
| `terabox` | Kokushibot | 1 | requer esclarecimento |
| `terminar_namoro` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `terminar_votacao` | zagan | 1 | requer esclarecimento |
| `teste` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `texttoimage` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `thdl` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `thigh` | succubus-bot | 1 | requer esclarecimento |
| `thighs` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `thighvizu` | succubus-bot | 1 | requer esclarecimento |
| `threads` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `thunder` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `thunderv2` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `tiktok` | AnnaV6-Ultra, Kokushibot, zagan | 4 | requer esclarecimento |
| `tiktok2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tiktok_audio` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tiktok_video` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tiktokaudio` | zagan | 1 | requer esclarecimento |
| `tiktokimage` | Kokushibot | 1 | requer esclarecimento |
| `tiktokimg` | Kokushibot | 2 | requer esclarecimento |
| `tiktoksearch` | Kokushibot | 1 | requer esclarecimento |
| `tiktokslide` | Kokushibot | 1 | requer esclarecimento |
| `tiktokstalker` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tinder` | Kokushibot | 1 | requer esclarecimento |
| `tinderbio` | Kokushibot | 1 | requer esclarecimento |
| `tinderfoto` | Kokushibot | 1 | requer esclarecimento |
| `tinderidade` | Kokushibot | 1 | requer esclarecimento |
| `tindernome` | Kokushibot | 1 | requer esclarecimento |
| `tinyurl` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tirar_docnt` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tirar_nota` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tirar_prefixo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tirarcmdpremium` | zagan | 1 | requer esclarecimento |
| `tirardalista` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tirardalistag` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tirardatm` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `tirargold` | zagan | 1 | requer esclarecimento |
| `tirarlevel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `tirarrent` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tirarxp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `titulo_eleitor` | succubus-bot | 1 | requer esclarecimento |
| `tksh` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `toanime` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `tocar_playlist` | succubus-bot | 1 | requer esclarecimento |
| `togif` | AnnaV6-Ultra, Kokushibot, zagan | 4 | requer esclarecimento |
| `togta` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `token_gpt` | zagan | 1 | requer esclarecimento |
| `tomp3url` | Kokushibot | 1 | requer esclarecimento |
| `tomp4url` | Kokushibot | 1 | requer esclarecimento |
| `totag` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `totalcmd` | Kokushibot, zagan | 2 | requer esclarecimento |
| `totalcomando` | zagan | 1 | requer esclarecimento |
| `tourl` | Kokushibot | 1 | requer esclarecimento |
| `toxic` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `tozombie` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `trabalhar` | Kokushibot | 1 | requer esclarecimento |
| `track` | DRAKE-BOT.V10, FENRYS-V4 | 2 | requer esclarecimento |
| `tradutor` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `transferir` | Kokushibot | 1 | requer esclarecimento |
| `transformer` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `transmissão` | Kokushibot, zagan | 2 | requer esclarecimento |
| `transmitir` | Kokushibot, zagan | 2 | requer esclarecimento |
| `trap` | AnnaV6-Ultra, succubus-bot | 2 | requer esclarecimento |
| `trash` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `treinar` | Kokushibot | 1 | requer esclarecimento |
| `treino` | Kokushibot | 1 | requer esclarecimento |
| `triggered` | zagan | 1 | requer esclarecimento |
| `trocarbanco` | Kokushibot | 1 | requer esclarecimento |
| `trocarnome` | Kokushibot | 1 | requer esclarecimento |
| `tt` | Kokushibot | 1 | requer esclarecimento |
| `ttkaudio` | zagan | 1 | requer esclarecimento |
| `ttp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `tts-gemini` | succubus-bot | 1 | requer esclarecimento |
| `ttsearch` | Kokushibot | 1 | requer esclarecimento |
| `ttstalk` | Kokushibot | 1 | requer esclarecimento |
| `twitter` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `twitter_audio` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `twitter_video` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `twtdl` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `txt2img` | Kokushibot | 1 | requer esclarecimento |
| `txtborboleta` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `txtquadrinhos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `unbangp` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `unblock` | Kokushibot, zagan | 2 | requer esclarecimento |
| `unblockcmd` | zagan | 1 | requer esclarecimento |
| `unblockcmdg` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `unblockcmdgp` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `unblocklevel` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `unblockuser` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `unkick` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `upcavalo` | Kokushibot | 1 | requer esclarecimento |
| `upgalo` | Kokushibot | 1 | requer esclarecimento |
| `upload` | zagan | 1 | requer esclarecimento |
| `uprest` | Kokushibot | 1 | requer esclarecimento |
| `user` | DRAKE-BOT.V10, FENRYS-V4 | 2 | requer esclarecimento |
| `users` | Kokushibot | 1 | requer esclarecimento |
| `vab` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `vacina` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `validarcnpj` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `validarcpf` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `vcprefere` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `vendercavalo` | Kokushibot | 1 | requer esclarecimento |
| `venderestabulo` | Kokushibot | 1 | requer esclarecimento |
| `vendergalinha` | Kokushibot | 1 | requer esclarecimento |
| `vendergalo` | Kokushibot | 1 | requer esclarecimento |
| `ver_forca` | Kokushibot, zagan | 2 | requer esclarecimento |
| `ver_playlist` | succubus-bot | 1 | requer esclarecimento |
| `verificado-global` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `vesgo` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `video18` | succubus-bot | 1 | requer esclarecimento |
| `videocontrario` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `videolento` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `vidro` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `viplist` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `visualizarmsg` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `vizinhos` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `voceprefere` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `voltei` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `votacao` | Kokushibot | 1 | requer esclarecimento |
| `votar` | zagan | 1 | requer esclarecimento |
| `votar_combate` | zagan | 1 | requer esclarecimento |
| `votar_duelo` | zagan | 1 | requer esclarecimento |
| `voting` | Kokushibot | 1 | requer esclarecimento |
| `voz` | succubus-bot | 1 | requer esclarecimento |
| `vozmenino` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `wanted` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `wasted` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `whatmusic` | AnnaV6-Ultra, Kokushibot | 2 | requer esclarecimento |
| `wifu` | succubus-bot | 1 | requer esclarecimento |
| `wingeffect` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `wolf` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `wprivacygp` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `wprivacyph` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `x9` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `x9visuunica` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `yaoi` | succubus-bot | 1 | requer esclarecimento |
| `yaoivizu` | succubus-bot | 1 | requer esclarecimento |
| `ytmp3-1` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ytmp3-2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ytmp3-3` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ytmp4-1` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ytmp4-2` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ytmp4-3` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `ytplay` | Kokushibot | 1 | requer esclarecimento |
| `ytplaylist` | Kokushibot | 1 | requer esclarecimento |
| `ytsearch` | AnnaV6-Ultra, Kokushibot, zagan | 3 | requer esclarecimento |
| `ytstalk` | Kokushibot | 1 | requer esclarecimento |
| `yuri` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `zerar_combate` | zagan | 1 | requer esclarecimento |
| `zerar_duelo` | zagan | 1 | requer esclarecimento |
| `zerar_votacao` | Kokushibot | 1 | requer esclarecimento |
| `zerarsc` | Kokushibot | 1 | requer esclarecimento |
| `zettai` | AnnaV6-Ultra | 1 | requer esclarecimento |
| `zombieai` | AnnaV6-Ultra | 1 | requer esclarecimento |

## Perguntas de implementação

1. Quando o mesmo nome aparecer com comportamentos diferentes, qual bot deve ser considerado a referência principal: Zagan, Fenrys ou outro?
2. Para os comandos de mídia, quais limites máximos de duração e tamanho devem ser adotados quando a referência não definir limites?
3. O usuário deseja fornecer uma imagem/GIF próprio para o menu ou devemos deixar `MENU_MEDIA_URL` configurável e usar somente texto enquanto esse valor estiver vazio?
4. Quais comandos ambíguos devem ser esclarecidos primeiro? Recomenda-se começar pelos de administração, mídia e brincadeiras.

## Critérios de exclusão

Foram excluídos automaticamente apenas nomes que indicam explicitamente conteúdo sexual/pornográfico ou uma categoria +18. Comandos de brincadeira, anime ou duplo sentido que não contenham indicação explícita permaneceram no inventário para revisão, conforme solicitado pelo usuário.
