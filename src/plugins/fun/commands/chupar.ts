import type { CommandModule } from "../../../core/types/command";

export const chuparCommand: CommandModule = {
  definition: {
    name: "chupar",
    aliases: ["sorvete", "picole"],
    description: "Brincadeira de duplo sentido com imagem de picolé.",
    usage: "!chupar [@usuario]",
    category: "fun",
    cooldownSeconds: 4
  },
  async execute(context) {
    const target = context.args[0] ? context.args[0].replace(/[@\s]/g, "") : null;
    const targetMention = target ? `@${target}` : "você";

    await context.react("🍦");

    const messageText = [
      `🍦 *HMMMM... QUE DELÍCIA!* 🍦`,
      "",
      `Olha só, ${context.pushName} ofereceu um belo picolé de morango bem geladinho para ${targetMention}!`,
      "Chupa devagar para não congelar o cérebro! 🥶",
      "",
      "_Relaxa, é só um picolé sabor baunilha com cobertura de morango! 🍧_"
    ].join("\n");

    // Imagem pública/segura de picolé cômico
    await context.sendImage(
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=600&auto=format&fit=crop&q=80",
      messageText
    );
  }
};
