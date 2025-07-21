function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment()); // closure are bundled or a bunch of functions together and the lexical environment in which the function was declared.
