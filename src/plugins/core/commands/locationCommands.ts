import type { CommandModule } from "../../../core/types/command";

export const cepCommand: CommandModule = {
  definition: {
    name: "cep",
    aliases: ["scep"],
    description: "Consulta um endereço pelo CEP.",
    usage: "!cep <CEP>",
    category: "search",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.argString.trim()) {
      await context.reply("Informe um CEP, por exemplo: !cep 01001000");
      return;
    }
    try {
      const address = await context.services.location.lookupCep(context.argString);
      const lines = [
        `CEP: ${address.cep}`,
        `Logradouro: ${address.logradouro || "não informado"}`,
        `Bairro: ${address.bairro || "não informado"}`,
        `Cidade/UF: ${address.localidade || "não informado"}/${address.uf || "-"}`,
        address.ddd ? `DDD: ${address.ddd}` : ""
      ].filter(Boolean);
      await context.reply(lines.join("\n"));
    } catch {
      await context.reply("Não encontrei esse CEP. Confira os oito dígitos e tente novamente.");
    }
  }
};
