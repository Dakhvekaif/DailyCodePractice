let teaFlavours = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavours[0];
console.log(firstTea);

// let teaFl = new Array("green tea", "black tea", "oolong tea");
// console.log(teaFl);

let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];
console.log(favoriteCity);

let teaTypes = ["Herbal Tea", "White Tea", "Masala chai"];

teaTypes.splice(1, 1, "Jasmine Tea");
console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney", "Hong Kong"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

teaOrders = ["chai", "iced tea", "Matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);

let PopularTeas = ["green tea", "oolong tea", "chai"];

softCopyTeas = PopularTeas;
console.log(softCopyTeas);
console.log(PopularTeas);

let topCities = ["Berlin", "Singapore", "Moscow"];

hardCopyCities = [...topCities];
console.log(topCities);
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Bangkok", "Tokyo"];

let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;
console.log(menuLength);

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
