let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in year : ${this.year}`;
  },
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let Asta = new Person("Asta", 15);
console.log(Asta);

// Prototypial Chain

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.kaif = function () {
  return `Custom method : ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.kaif());

// Classes n Inheritance

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is under Inheritance`;
  }
}

let myCar = new Car("Porsche", "Gt 911");

console.log(myCar.start());
console.log(myCar.drive());

// Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

// Abstraction

