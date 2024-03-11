// object literals -
// const user = {
//     // properties of object -
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     // method of object -
//     getUserDetails: function () {
//         //console.log("Got user details from database");
//         // console.log(`Username: ${username}`); // error 
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // {}

// creating object using new keyword -
// const pro = new Promise()
// const date= new Date()

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