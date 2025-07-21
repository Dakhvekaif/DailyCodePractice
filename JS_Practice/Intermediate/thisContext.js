const Person = {
  name: "Kaif",
  greet() {
    console.log(`Hi, My name is ${this.name}`);
  },
};

Person.greet();
const greetFunc = Person.greet;
greetFunc();
const boundGreet = Person.greet.bind({ name: "Yami Sukehiro" });
boundGreet();
