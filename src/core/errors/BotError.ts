export class BotError extends Error {
  public readonly code: string;

  public constructor(message: string, code = "BOT_ERROR") {
    super(message);
    this.code = code;
    this.name = "BotError";
  }
}

export class CommandNotFoundError extends BotError {
  public constructor(commandName: string) {
    super(`Comando não encontrado: ${commandName}`, "COMMAND_NOT_FOUND");
  }
}
