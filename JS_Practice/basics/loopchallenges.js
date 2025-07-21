let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}

console.log(sum);

i = 5;
let countdown = [];
while (i > 0) {
  countdown.push(i);
  i--;
}

console.log(countdown);

let teaCollection = [];
let tea;

// do {
//   tea = prompt(`Enter your Favourite Tea (type "stop" to finish)`);
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

// console.log(teaCollection);

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);

console.log(total);

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  let takeNumber = numbers[l] * 2;
  multipliedNumbers.push(takeNumber);
}

console.log(multipliedNumbers);

let cities = ["Paris", "Tokyo", "New York", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
  cityList.unshift(cities[i]);
}

console.log(cityList);
