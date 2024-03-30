const Dog = require("./Dog");
const Cat = require("./Cat");

const myDog = new Dog("black", "Rex", "dog", "Labrador", "large", 5);
const myCat = new Cat("grey", "Whiskers", "cat", "green", true, "mouse toy");

myDog.sayHello();
myDog.run();
myDog.wagTail();
myDog.fetch();

myCat.sayHello();
myCat.run();
myCat.purr();
myCat.scratch();
