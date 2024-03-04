let baseString = "example string";

let charToReplace = "e";

let newString = "";

for (let i = 0; i < baseString.length; i++) {
  let currentChar = baseString[i];

  if (currentChar === charToReplace) {
    newString += "*";
  } else {
    newString += currentChar;
  }
}

console.log(newString);
