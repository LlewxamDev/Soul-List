# Lista Consolidada de Decisões e Comandos Ambíguos (Atualizado)

> Data da Auditoria: 10 de Outubro de 2026  
> Status: Incorporados os ajustes fundamentais fornecidos pelo usuário.

---

## 1. Decisões Confirmadas pelo Usuário

| Decisão | Resolução Confirmada | Impacto Arquitetural |
|---|---|---|
| **Diferenciação NSFW vs Brincadeiras** | **Comandos sexuais explícitos (hentai, porn) ficam fora do core.** Brincadeiras, memes e comandos de duplo sentido com mídias seguras/humorísticas (ex: picolé) são **preservados e aceitos**. | Classificação individual realizada em `REFERENCE_BOTS.md`. Categoria `fun` / `brincadeiras` criada de forma limpa. |
| **Escopo da Economia e RPG** | **Economia por grupo, com compartilhamento entre grupos da mesma comunidade WhatsApp.** | Utilização de `linkedParent` do Baileys para grupos federados em comunidade; grupos isolados usam `chatId` próprio; identidade global do jogador preservada. |
| **Comando Play e Botões** | **Adotar a referência prioritária do Zagan.** | Implementação de botões interativos (`interactiveMessage` / Native Flow) com suporte nativo do Baileys v6 e fallback textual na legenda. |
| **Alvos de Teste Aprovados** | **Contato: `Llewxam` (chat pessoal do número)** / **Grupo: `aleatory`**. | Permite testes visuais e de transporte sem risco de contato com pessoas não autorizadas. |

---

## 2. Incertezas Remanescentes (Mínimas)

| Comando / Área | Evidência | Dúvida | Recomendação |
|---|---|---|---|
| **Comando `buscar`** | DuckDuckGo Instant Answer vazio para português. | Qual alternativa você prefere: Google Search leve ou resposta com IA? | Recomendamos busca com scraping leve do Google ou IA como fallback. |
| **Comando `casar` / `familia`** | Schema tem `familyTable` para relacionamentos. | O casamento deve custar taxa de moedas no RPG ou ser puramente social? | Sugerimos que seja gratuito inicialmente ou custe uma pequena taxa de moedas comemorativa. |
