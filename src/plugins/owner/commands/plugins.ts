import type { CommandModule } from "../../../core/types/command";

export const pluginsCommand: CommandModule = {
  definition: {
    name: "plugins",
    aliases: [],
    description: "Lista os plugins atualmente carregados.",
    usage: "!plugins",
    category: "owner",
    cooldownSeconds: 3,
    ownerOnly: true
  },
  async execute(context) {
    const loaded = context.registry
      .all()
      .reduce<Map<string, number>>((accumulator, command) => {
        accumulator.set(command.pluginId, (accumulator.get(command.pluginId) ?? 0) + 1);
        return accumulator;
      }, new Map<string, number>());

    await context.reply(
      ["Plugins carregados:", ...[...loaded.entries()].map(([plugin, total]) => `- ${plugin}: ${total} comando(s)`)].join("\n")
    );
  }
};
