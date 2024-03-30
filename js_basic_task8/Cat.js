const Animal = require("./Animal");

class Cat extends Animal {
  constructor(color, name, type, eyeColor, isIndoor, favoriteToy) {
    super(color, name, type);
    this.eyeColor = eyeColor;
    this.isIndoor = isIndoor;
    this.favoriteToy = favoriteToy;
  }

  purr() {
    console.log(`${this.name} is purring.`);
  }

  scratch() {
    console.log(`${this.name} is scratching.`);
  }
}

module.exports = Cat;
