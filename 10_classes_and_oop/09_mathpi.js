// Math object -

// console.log(Math.PI); //3.14
// Math.PI = 5 // manipulate
// console.log(Math.PI); //3.14


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


const myObj = {
    name:"Tushar",
    branch:"CSE",
    roll:177,

    fun:function(){
        console.log("I am inside the myObj method");
    }
}

// Error -> myObj is not iterable
// for (const [key,value] of myObj) {
//     console.log(`${key} , ${value}`);
// }

// No error -> muObj is iterable
for (const [key,value] of Object.entries(myObj)) {
    if(typeof value != 'function') //avoiding method to print
    console.log(`${key} , ${value}`);
}

// crating new object -
// const myObj = Object.create(null)


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// manipulating object properties behavior -
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}


console.log("------------------------------------------------");

console.log(Math.PI);
/*
Error - >
The Math.PI property is special in that it's not directly modifiable due to its intrinsic nature in JavaScript. It's a constant representing the mathematical value of pi and is typically not meant to be changed.

Object.defineProperty(Math, 'PI', {
    writable: true,
    enumerable: true,
    configurable: true  // Add this line to make the property configurable
});

*/
Math.PI = 5; // Now you can manipulate the value
console.log(Math.PI); // Output will be 5
