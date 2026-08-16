export class CalculatorService {
  public evaluate(expression: string): number {
    const tokens = expression.replace(/\s+/g, "").match(/(?:\d+(?:\.\d+)?|[()+\-*/%])/g);
    if (!tokens || tokens.join("") !== expression.replace(/\s+/g, "")) {
      throw new Error("Expressão contém caracteres não suportados.");
    }

    let index = 0;
    const peek = (): string | undefined => tokens[index];
    const consume = (): string => {
      const token = tokens[index];
      if (!token) throw new Error("Expressão incompleta.");
      index += 1;
      return token;
    };

    const parseFactor = (): number => {
      const token = peek();
      if (token === "+" || token === "-") {
        consume();
        const value = parseFactor();
        return token === "-" ? -value : value;
      }
      if (token === "(") {
        consume();
        const value = parseExpression();
        if (consume() !== ")") throw new Error("Parêntese não fechado.");
        return value;
      }
      const number = Number(consume());
      if (!Number.isFinite(number)) throw new Error("Número inválido.");
      return number;
    };

    const parseTerm = (): number => {
      let value = parseFactor();
      while (["*", "/", "%"].includes(peek() ?? "")) {
        const operator = consume();
        const right = parseFactor();
        if ((operator === "/" || operator === "%") && right === 0) throw new Error("Não é possível dividir por zero.");
        value = operator === "*" ? value * right : operator === "/" ? value / right : value % right;
      }
      return value;
    };

    const parseExpression = (): number => {
      let value = parseTerm();
      while (["+", "-"].includes(peek() ?? "")) {
        const operator = consume();
        const right = parseTerm();
        value = operator === "+" ? value + right : value - right;
      }
      return value;
    };

    const value = parseExpression();
    if (index !== tokens.length) throw new Error("Expressão inválida.");
    return value;
  }
}
