import type { CommandModule } from "../../../core/types/command";

export const divorcioCommand: CommandModule = {
  definition: {
    name: "divorcio",
    aliases: ["divorciar", "separar"],
    description: "Divorcie-se do seu cônjuge atual.",
    usage: "!divorcio",
    category: "rpg",
    cooldownSeconds: 5
  },
  async execute(context) {
    const exSpouseId = await context.repositories.family.divorce(context.sender);

    if (!exSpouseId) {
      await context.reply("💔 Você não está casado(a) com ninguém no momento!");
      return;
    }

    const exSpouseNumber = exSpouseId.split("@")[0] || exSpouseId;
    const senderNumber = context.sender.split("@")[0] || context.sender;

    await context.replyWithMentions(
      `⚖️ *CERTIDÃO DE DIVÓRCIO* ⚖️\n\n` +
      `💔 O casamento entre *@${senderNumber}* e *@${exSpouseNumber}* chegou ao fim.\n` +
      `Ambos agora estão solteiros e livres para novos rumos!`,
      [context.sender, exSpouseId]
    );
  }
};
