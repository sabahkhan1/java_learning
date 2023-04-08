// undefined
// null
// BigInt


let firstName;
console.log(typeof firstName);
firstName = "faizan";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "fazi";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// it is javascript error


let myNumber = BigInt(124454); // first way

let sameMyNumber = 123n; // second way

console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER); // to check how many integers u can add in js
console.log(myNumber+ sameMyNumber);