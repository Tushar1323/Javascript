let a = 300 // block scope
// var c= 3000 // global scope
if (true) {
    let a = 10
    const b = 20
    c = 30 // or var c = 30
    console.log("INNER:", a); // 10
    
}
console.log(a); // 300
// console.log(b); // error

// --------------------------------------------
console.log(c); // 30 , var behave as a global variable
// --------------------------------------------


// function inside a function -
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// Hoisting is JavaScript's default behavior of moving declarations to the top.
// correct -
console.log(addone(5))
function addone(num){
    return num + 1
}

// not correct - give an error -  Cannot access 'addTwo' before initialization
// addTwo(5)
const addTwo = function(num){
    return num + 2
}
