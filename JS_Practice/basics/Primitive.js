let balance = 150;
let anotherBalance = new Number(150);

console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance); // Thats why its said everything in an object in js because the primitive data types can be converted into Objects(Non-Primitve)
console.log(typeof anotherBalance.valueOf());

let isActive = false;
let isReallyActive = new Boolean(true);

console.log(isActive);
console.log(isReallyActive.valueOf());

console.log(typeof isActive);
console.log(typeof isReallyActive);

// null and undefined

let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);
console.log(typeof firstname); // null is also an object
console.log(typeof lastname);

//String

let myString = "hello";
let username = "kaifff";

let new_way = `Hello ${username} !`;
console.log(new_way);

// Symbol

let sm1 = Symbol();
let sm2 = Symbol();
