import type { CommandModule } from "../../../core/types/command";

export const weatherCommand: CommandModule = {
  definition: {
    name: "clima",
    aliases: ["tempo"],
    description: "Consulta o clima atual de uma localidade.",
    usage: "!clima <cidade>",
    category: "search",
    cooldownSeconds: 5
  },
  async execute(context) {
    if (!context.argString) {
      await context.reply("Informe uma cidade ou região.");
      return;
    }
    const result = await context.services.weather.current(context.argString);
    await context.reply(
      [
        `Clima em ${result.location}`,
        `Temperatura: ${result.temperatureC}°C`,
        `Sensação: ${result.feelsLikeC}°C`,
        `Descrição: ${result.description}`,
        `Umidade: ${result.humidity}%`
      ].join("\n")
    );
  }
};
