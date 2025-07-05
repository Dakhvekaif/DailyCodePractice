let arr = ["Green tea", "Black tea", "Masala tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "chai") break;
  selectedTeas.push(arr[i]);
}

console.log(selectedTeas);

let arr2 = ["London", "Paris", "New York", "Berlin"];
let visitedCities = [];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "Paris") continue;
  visitedCities.push(arr2[i]);
}

console.log(visitedCities);

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (let num of numbers) {
  if (num === 4) break;
  smallNumbers.push(num);
}

console.log(smallNumbers);

let teas = ["chai", "Green tea", "herbal tea", "black tea", "Masala tea"];
let preferredTeas = [];

for (const tea of teas) {
  if (tea === "herbal tea") continue;
  preferredTeas.push(tea);
}

console.log(preferredTeas);

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 350000,
};

let cityNewPopulations = {};

for (const city in citiesPopulation) {
  if (city == "Berlin") break;

  console.log(citiesPopulation[city]);
  cityNewPopulations[city] = citiesPopulation[city];
}

// console.log(cityNewPopulations);

let worldCities = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 350000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) continue;
  largeCities[city] = worldCities[city];
}

console.log(largeCities);

let teaCollection = [
  "earl grey",
  "green tea",
  "chai",
  "masala tea",
  "herbal tea",
];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

// console.log(availableTeas);

let myWorldCities = ["Berlin", "Tokyo", "Paris", "Sydney"];
let traveledcities = [];

myWorldCities.forEach((city) => {
  if (city == "Paris") {
    return;
  }
  traveledcities.push(city);
});

// console.log(traveledcities);

let arr3 = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 7) continue;
  doubledNumbers.push(arr3[i] * 2);
}
console.log(doubledNumbers);

let newTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const teas of newTeas) {
  if (teas.length > 10) break;
  shortTeas.push(teas);
}
console.log(shortTeas);
