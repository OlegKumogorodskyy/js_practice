function calculate(a, b, operator) {
  if (arguments.length > 3) {
    throw new Error("Function accepts only three arguments");
  }

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("First and second parameters must be numbers");
  }

  if (operator === "/" && b === 0) {
    throw new Error(
      "When operation is division, the second parameter cannot be 0"
    );
  }

  if (!["+", "-", "*", "/"].includes(operator)) {
    throw new Error("The third parameter must be +, -, /, or *");
  }

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      throw new Error("Unknown error");
  }
}

console.log(calculate(100, 5, "*"));
console.log(calculate(10, 0, "/"));
console.log(calculate(100, 5, "string"));
