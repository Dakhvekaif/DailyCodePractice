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
console.log(account.deposit(5000));
account.deposit(1000);
console.log(account.getBalance());

// Abstraction

class coffeeMachine {
  start() {
    //call DB
    //filter value
    return `Starting the Machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} & ${msg2}`;
  }
}

let myMachine = new coffeeMachine();
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
  fly() {
    return `Hey, I am flying`;
  }
}

class Penguin extends Bird {
  fly() {
    return `hey, Penguins cant fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

console.log(Calculator.add(20, 33)); // The static keyword defines methods or properties to the class itself rather than the instance, so it can directly be accessed

//Getter and Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative ");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.Error("Invalid request");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", 50000);
console.log(emp.salary);
emp.salary = 60000;
console.log(emp._salary);
