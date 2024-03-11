// singleton is formed when we craete object through constructor method-
// Object.create -> constructor method 

// object literals 

// const mySym1= new Symbol("key1") // Error 
// const mySym1= new String("key1") // Correct 

const lrn = {
    "name":"Tushar",
    // or
    name:"Tushar",
    branch:"CSE"
}

const mySym= Symbol("key1") // correct
console.log(mySym);

const JsUser = {
    name: "Tushar",
    "full name": "Tushar keshari",
    // mySym: "mykey1", // mySym is string not a Symbol
    [mySym]: "mykey1", // defining key is Symbol
    age: 18,
    location: "Jaipur",
    email: "Tushar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
// console.log(JsUser[email]) // Error
console.log(JsUser["email"]) // mostly used
// console.log(JsUser."full name") // wrong
console.log(JsUser["full name"]) // correct
console.log(JsUser[mySym]) // accessing symbol like this


// altering the value of object -
JsUser.email = "Tushar@chatgpt.com"


// Object.freeze(JsUser) // used to freeze the object value


JsUser.email = "Tushar@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting());  // Hello JS user undefined
console.log(JsUser.greetingTwo());  //Hello JS user, Tushar undefined