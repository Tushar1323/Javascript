// MDN - Mozilla Developer Network

// setInterval(function(){},1000)
// addEventListener(event,function callback(){})

"use strict"; // treat all JS code as newer version

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
// or
console.log(typeof(null)); // object



// function arrow(name,branch){
//     this.name= name;
//     this.branch= branch;
//     console.log(this);
// }
// const newobj = arrow("Tushar","CSE")

// // const obj = new arrow("Tushar","CSE");
// // console.log(obj);


// creating function and using it by the new keyword -
function User(username, loginCount, isLoggedIn) {
    console.log("I am inside the User function");
    console.log(typeof this); //object
    console.log(this);
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    // this is an object -
    // no need to return it , by default it will return this
    return this // lekin mai return kr deta hu
}

// const userOne = User("Anurag", 18, true)
const userTwo = User("Tushar", 177, false)
// console.log(userOne) == console.log(userTwo);

// So this why we uses new keyword to make new isntances of object in js -
// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
console.log(userTwo);
console.log(userTwo instanceof User); // true
console.log(userTwo instanceof Object); // true
// console.log(userOne.constructor);