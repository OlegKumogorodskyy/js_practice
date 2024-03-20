let person = {
  name: "John",
  age: 30,
  occupation: "Software Developer",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  describeJob: function () {
    console.log("I work as a " + this.occupation);
  },
};

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  startEngine: function () {
    console.log("The engine is running");
  },
  stopEngine: function () {
    console.log("The engine is off");
  },
};

let city = {
  name: "San Francisco",
  population: 881549,
  country: "USA",
  describe: function () {
    console.log(
      this.name +
        " is in " +
        this.country +
        " and has a population of " +
        this.population
    );
  },
  celebrate: function () {
    console.log(this.name + " is celebrating a local festival");
  },
};

person.greet();
car.startEngine();
city.describe();
