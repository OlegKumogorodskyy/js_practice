const stringEmail = "daniel.abrams@gmail.com";
const words = stringEmail.split("@");
console.log("Initial array:", words);


words.splice(1, 1, "changed.com");
console.log("Array after domain replacement:", words);


const newEmail = words.join("@");
console.log("New email address:", newEmail);
