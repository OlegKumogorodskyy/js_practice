const Animal = require("./Animal");

class Dog extends Animal {
  constructor(color, name, type, breed, size, age) {
    super(color, name, type);
    this.breed = breed;
    this.size = size;
    this.age = age;
  }

  wagTail() {
    console.log(`${this.name} is wagging its tail!`);
  }

  fetch() {
    console.log(`${this.name} is fetching the ball!`);
  }
}

module.exports = Dog;
