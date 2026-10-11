import type { CommandModule } from "../../../core/types/command";

export const casarCommand: CommandModule = {
  definition: {
    name: "casar",
    aliases: ["propor", "matrimonio"],
    description: "Proponha casamento a outro participante do grupo.",
    usage: "!casar @usuario",
    category: "rpg",
    cooldownSeconds: 5,
    groupOnly: true
  },
  async execute(context) {
    const target = context.mentions[0] || (context.quotedSender ?? "");
    if (!target) {
      await context.reply("💍 Mencione a pessoa com quem você deseja casar!\nExemplo: `!casar @usuario`");
      return;
    }

    if (target === context.sender) {
      await context.reply("💔 Você não pode se casar consigo mesmo!");
      return;
    }

    const currentSpouse = await context.repositories.family.getSpouse(context.sender);
    if (currentSpouse) {
      const spouseNumber = currentSpouse.targetUserId.split("@")[0] || currentSpouse.targetUserId;
      await context.replyWithMentions(
        `⛔ Você já está casado(a) com *@${spouseNumber}*!\nPara se casar com outra pessoa, use *!divorcio* primeiro.`,
        [currentSpouse.targetUserId]
      );
      return;
    }

    const targetSpouse = await context.repositories.family.getSpouse(target);
    if (targetSpouse) {
      const targetSpouseNumber = targetSpouse.targetUserId.split("@")[0] || targetSpouse.targetUserId;
      await context.replyWithMentions(
        `⛔ Essa pessoa já é casada com *@${targetSpouseNumber}*!`,
        [targetSpouse.targetUserId]
      );
      return;
    }

    // Formalizar união
    await context.repositories.family.marry(context.sender, target);

    const senderNumber = context.sender.split("@")[0] || context.sender;
    const targetNumber = target.split("@")[0] || target;

    await context.replyWithMentions(
      `💒✨ *VIVAM OS NOIVOS!* ✨💒\n\n` +
      `💍 *@${senderNumber}* e *@${targetNumber}* agora estão oficialmente casados!\n\n` +
      `🥂 Desejamos felicidades ao casal!\n` +
      `Consulte seu perfil com *!perfil* para ver o anel de compromisso.`,
      [context.sender, target]
    );
  }
};
