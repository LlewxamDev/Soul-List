# Plugins externos

Coloque aqui plugins locais que o Soul-List deve descobrir automaticamente.

Estrutura minima:

```text
plugins/meu-plugin/
  plugin.json
  index.ts
  commands/
```

O loader le o `plugin.json`, resolve o `entry` e registra os comandos do plugin sem alterar o core.
