// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(input) {
  input = Number(input);
  if (isNaN(input)) {
    return `conversion Failed`;
  } else return input;
}
// console.log(stringToNumber("Hello"));
// console.log(stringToNumber("77abc"));
// console.log(stringToNumber("787"));

// This flipBoolean function will flip true to false, but also 0 to true, null to true, etc., which might be counterintuitive for beginners.

function flipBoolean(value) {
  if (value == true || 0 || null) return !value;
  else return !value;
}

// console.log(flipBoolean(1));
// console.log(flipBoolean(0));
// console.log(flipBoolean(false));

// 3. whatAmI  typeof will return 'object' for arrays, null, and other complex types, which might need additional checks. typeof will return 'object' for arrays, null, and other complex types, which might need additional checks.

function whatAmI(type) {
  if (type == undefined) return `it is Undefined`;
  else if ((type = null)) return `It is null`;
  else if (typeof type === Function) return `it is a Function`;
  else if (typeof type === Array) return `it is a Array`;
  else {
    return `nothing`;
  }
}

function hello() {
  return hello;
}

console.log(whatAmI(null));
console.log(whatAmI(undefined));
console.log(whatAmI("hello"));
console.log(whatAmI(hello));
console.log(whatAmI([1, 2, 3, 4]));
