let computer = { cpu: 12 };
let lenovo = { Screen: "HD" };

let genericCar = { tyre: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(genericCar);
