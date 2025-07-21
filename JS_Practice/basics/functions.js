function makeTea(typeOfTea) {
  console.log(`Making ${typeOfTea}`);
}

makeTea("Herbal Tea");

function orderTea(teaType) {
  function confirmedOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmedOrder();
}

console.log(orderTea("lemon tea"));

let calculateTotal = (price, quantity) => {
  let total_cost = price * quantity;
  return total_cost;
};

console.log(calculateTotal(10, 20));

function makeTea(teaName) {
  return `Inside Make tea : ${teaName}`;
}

function passTeaOrder(teaFunction) {
  return teaFunction("Earl Grey");
}

let order = passTeaOrder(makeTea);
console.log(order);

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
