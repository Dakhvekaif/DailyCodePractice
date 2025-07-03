//Checking if a number is greater than another Number:

let num1 = 8;
let num2 = 10;

if (num1 > num2) {
  console.log("Num1 is greater than Num2");
} else {
  console.log("Nope, Num1 is not greater");
}

let username = "ironman";
let newUser = "ironman";

if (username == newUser) {
  console.log("Pick another Username");
} else {
  console.log("You can pick this username");
}

let score = 400;

if (typeof score === "number") {
  console.log("Yep, This is a Number");
}

let isTeaReady = false;

if (isTeaReady) {
  console.log("Yes Tea is ready");
} else if (!isTeaReady) {
  console.log("Sorry, The Tea isn't ready yet");
}

let items = [];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
  items = ["Hello"];
} else {
  console.log("The Array is not empty");
}
console.log(items);
