console.log("promises");

// [sources for promises mdn] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

// promise -
// const var = new Promise(resolve, reject){} // wrong 
// const var = new Promise(function(resolve, reject){})

// then -
// var.then(function(){})

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task -
    // DB calls, cryptography, network call
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve() // now resolve is connected to then 
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

// or 

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})


// we can also send some object through resolve -
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // sending object to then -
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

// then receive object of resolve -
promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// console.log(username); // error 

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))


// Synchronous JavaScript - As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one 

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// this function will break when promiseFive return an error -
async function consumePromiseFive() {
        const response = await promiseFive
        console.log(response);
}
// use try and catch to solve the issue -
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive() // call function


// using async wait for fetch -
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data = response.json() // error 
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

// or

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.