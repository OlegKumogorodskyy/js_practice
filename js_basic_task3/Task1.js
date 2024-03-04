
let userInput = "test string";

let newString = "";

for (let i = 0; i < userInput.length; i++) {
  let currentChar = userInput[i];

  if (
    currentChar === "a" ||
    currentChar === "e" ||
    currentChar === "i" ||
    currentChar === "o" ||
    currentChar === "u"
  ) {
    newString += "*";
  } else {
    newString += currentChar;
  }
}

console.log(newString); 

