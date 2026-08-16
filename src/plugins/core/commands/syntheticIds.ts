import { randomInt } from "node:crypto";
import type { CommandModule } from "../../../core/types/command";

function digits(length: number): number[] {
  return Array.from({ length }, () => randomInt(0, 10));
}

function repeated(value: number[]): boolean {
  return value.every((item) => item === value[0]);
}

function cpfCheckDigit(values: number[]): number {
  const factorStart = values.length + 1;
  const sum = values.reduce((total, value, index) => total + value * (factorStart - index), 0);
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

function generateCpf(): string {
  let base = digits(9);
  while (repeated(base)) {
    base = digits(9);
  }
  base.push(cpfCheckDigit(base));
  base.push(cpfCheckDigit(base));
  const value = base.join("");
  return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
}

function cnpjCheckDigit(values: number[]): number {
  const factors = values.length === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const sum = values.reduce((total, value, index) => total + value * (factors[index] ?? 0), 0);
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

function generateCnpj(): string {
  const base = [...digits(8), 0, 0, 0, 1];
  base.push(cnpjCheckDigit(base));
  base.push(cnpjCheckDigit(base));
  const value = base.join("");
  return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12)}`;
}

function generateRg(): string {
  const value = digits(9).join("");
  return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}-${value.slice(8)}`;
}

function syntheticCommand(name: string, aliases: string[], label: string, generate: () => string): CommandModule {
  return {
    definition: {
      name,
      aliases,
      description: `Gera um ${label} sintético para testes e brincadeiras.`,
      usage: `!${name}`,
      category: "fun",
      cooldownSeconds: 4
    },
    async execute(context) {
      await context.reply(`⚠️ ${label.toUpperCase()} fictício para teste/brincadeira: *${generate()}*\nNão corresponde a uma identidade ou registro real e não deve ser utilizado como documento.`);
    }
  };
}

export const syntheticIdCommands: CommandModule[] = [
  syntheticCommand("cpf", ["gerarcpf"], "CPF", generateCpf),
  syntheticCommand("cnpj", ["gerarcnpj"], "CNPJ", generateCnpj),
  syntheticCommand("rg", ["gerarg", "gerargf"], "RG", generateRg)
];
