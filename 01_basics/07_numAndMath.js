const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);

const num = 177.1323
console.log(num.toFixed(2)); //177.13

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //124
console.log(otherNumber.toPrecision(4)); //123.9
console.log(otherNumber.toPrecision(5)); //123.90

const hundreds = 10010000
console.log(hundreds.toLocaleString());
console.log(typeof hundreds); //number
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); //(0,1)
console.log((Math.random()*10) ); //(0,10)
console.log(Math.ceil(Math.random()*10) ); //[1,2,3,4,,5,6,,7,8,9,10]
console.log(Math.floor(Math.random()*10) + 1); //[1,2,3,4,5,6,7,8,9,10]

const min = 10
const max = 20
// length == number of values from 10 to 20 ==> max-min+1
// max-min+1 = 11
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // [10,20]