function Person(Name, Age) {
  this.Name = Name;
  this.Age = Age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
let myNewCar = new Car("Tata", "Safari");

console.log(myCar);
console.log(myNewCar);

function Tea(type) {
  this.type = type;

  this.describe = function () {
    return `This is a Cup of ${this.type}`;
  };
}
let lemonTea = new Tea("Lemon tea");
console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

function Drinks(name) {
  if (!new.target) {
    throw new Error("Drink Must be called with New keyword");
  }
  this.name = name;
}

let tea = new Drinks("Coffee");
let Coffee = Drinks("Coffee");
