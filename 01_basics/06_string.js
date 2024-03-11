const name = "hitesh"
const repoCount = 50

// old way to use
// console.log(name + repoCount + " Value");

// string interpolation using backtick
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaring var using new ketwword
const gameName = new String('Tushar-hc-com')
console.log(gameName); //[String: 'hitesh-hc-com']
console.log(typeof gameName); //object
console.log(gameName[0]); //T
console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //s
console.log(gameName.indexOf('a')); //4

const newString = gameName.substring(0, 4) //(start,end)
console.log(newString);

// only in slice -ve value is applied
const anotherString = gameName.slice(-8, 4) 
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // false

console.log(gameName.split('-')); // convert into array