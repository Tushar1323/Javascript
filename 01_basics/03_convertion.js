let score = "123"

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //123


let score1 = "tsk"

let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN


let score2 = null

let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //0


let score3 = undefined

let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "Tushar"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); //33
// console.log(typeof stringNumber); // string


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Tushar"

let str3 = str1 + str2
console.log(str3);

let str4 = str1 - str2
// console.log(str4); //NaN


// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(+""); //0


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2 // not readable

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101

const und=undefined
const new_und = Boolean(und) // false
console.log(`undefined value in Boolean is ${new_und}`)


// link to study ->
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion