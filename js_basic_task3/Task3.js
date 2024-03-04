let number1 = 5;
let number2 = 15;

let min = Math.min(number1, number2);
let max = Math.max(number1, number2);

let evenNumbers = [];

for (let number = min + 1; number < max; number++) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

console.log(`Even numbers between ${number1} and ${number2}:`, evenNumbers);
