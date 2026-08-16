import type { CommandModule } from "../../../core/types/command";

export const addNoteCommand: CommandModule = {
  definition: {
    name: "anotar",
    aliases: [],
    description: "Registra uma anotação no grupo.",
    usage: "!anotar título|conteúdo",
    category: "admin",
    cooldownSeconds: 4,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const separator = context.argString.indexOf("|");
    if (separator < 1) {
      await context.reply("Use o formato: !anotar título|conteúdo");
      return;
    }
    const title = context.argString.slice(0, separator).trim();
    const content = context.argString.slice(separator + 1).trim();
    if (!title || !content) {
      await context.reply("O título e o conteúdo da anotação são obrigatórios.");
      return;
    }
    if (title.length > 80 || content.length > 2000) {
      await context.reply("O título deve ter até 80 caracteres e o conteúdo até 2.000.");
      return;
    }
    await context.repositories.notes.put(context.from, title, content);
    await context.reply(`Anotação *${title}* registrada com sucesso.`);
  }
};

export const removeNoteCommand: CommandModule = {
  definition: {
    name: "tirar_nota",
    aliases: ["rmnota", "delnota"],
    description: "Remove uma anotação pelo título.",
    usage: "!tirar_nota <título>",
    category: "admin",
    cooldownSeconds: 4,
    groupOnly: true,
    adminOnly: true
  },
  async execute(context) {
    const title = context.argString.trim();
    if (!title) {
      await context.reply("Informe o título da anotação que deseja remover.");
      return;
    }
    const removed = await context.repositories.notes.remove(context.from, title);
    await context.reply(removed ? `Anotação *${title}* removida.` : "Não encontrei uma anotação com esse título.");
  }
};

export const getNoteCommand: CommandModule = {
  definition: {
    name: "nota",
    aliases: ["anotacao"],
    description: "Consulta uma anotação pelo título.",
    usage: "!nota <título>",
    category: "members",
    cooldownSeconds: 3,
    groupOnly: true
  },
  async execute(context) {
    const title = context.argString.trim();
    if (!title) {
      await context.reply("Informe o título da anotação que deseja consultar.");
      return;
    }
    const note = await context.repositories.notes.find(context.from, title);
    await context.reply(note ? `〈 ${note.content} 〉` : "Não encontrei uma anotação com esse título.");
  }
};

export const listNotesCommand: CommandModule = {
  definition: {
    name: "notas",
    aliases: ["anotacoes", "anotações"],
    description: "Lista as anotações do grupo.",
    usage: "!notas",
    category: "members",
    cooldownSeconds: 4,
    groupOnly: true
  },
  async execute(context) {
    const notes = await context.repositories.notes.list(context.from);
    if (notes.length === 0) {
      await context.reply("Este grupo ainda não tem anotações.");
      return;
    }
    const body = notes.map((note, index) => `${index + 1}. *${note.title}* — ${note.content}`).join("\n");
    await context.reply(`Anotações do grupo:\n\n${body}`);
  }
};

export const noteCommands: CommandModule[] = [addNoteCommand, removeNoteCommand, getNoteCommand, listNotesCommand];
