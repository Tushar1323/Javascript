// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //true
// console.log("02" > 1); //true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/*
null == 0 is false because they are of different types and null doesn't coerce to 0.
null >= 0 is true because null gets coerced to 0 before the comparison, and 0 is greater than or equal to 0.
*/

console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === 
console.log("2" === 2); //false