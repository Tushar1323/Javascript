const user = {
    // current context - 
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        // console.log(`${username} , welcome to website`); // Error
        console.log(`${this.username} , welcome to website`); 
        console.log(`${user.username} , welcome to website`); 
        console.log(this);
        console.log(user); // generally same 
    }
}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); //empty object in vscode(node environment) but window object in browser

// this inside a function -
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined
//     console.log(this); // many things
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined 
//     console.log(this); // many things
// }
// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this.username); // undefined 
    console.log(this); // {}
}
chai()

// arrow function -

// basic arrow function :
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return function : not need to write return word
// const addTwo = (num1, num2) =>  num1 + num2
// or
// const addTwo = (num1, num2) => ( num1 + num2 )


// const addTwo = (num1, num2) => {username: "hitesh"} // undefine return 
const addTwo = (num1, num2) => ({username: "hitesh"}) // correct return


// console.log(addTwo(3, 4))