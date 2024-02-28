let income = 75000;
let taxRate;
let amountAfterTax;

if (income < 10000) {
  taxRate = 5;
} else if (income <= 50000) {
  taxRate = 10;
} else if (income <= 100000) {
  taxRate = 15;
} else if (income <= 200000) {
  taxRate = 20;
} else if (income > 20000) {
  taxRate = 25;
}

amountAfterTax = income * (taxRate / 100);
let incomeAfterTax = income - amountAfterTax;

console.log(`Базовий дохід: ${income}, Відсоток податку: ${taxRate}%, Дохід після вирахування податків: ${incomeAfterTax}`);

