
// const tinderUser = new Object() // sigleton object
const tinderUser = {} // non sigleton object
// console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// object inside a object -
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // this is obejct inside a object cond.

// Object.assign(obj1, obj2) //  obj1 = obj1 + obj2

// const obj3 = Object.assign(obj1, obj2) //   obj1 == obj3 store obj1 + obj2

// const obj3 = Object.assign({},obj1, obj2) // obj3 store obj1 + obj2

// const obj3 = Object.assign({}, obj1, obj2, obj4)

// spread operator for adding two objects
// const obj3 = {...obj1, ...obj2}
console.log(obj1); // obj3=obj1+obj2

const users = [
    {
        id: 1,
        email: "h@gmail1.com"
    },
    {
        id: 2,
        email: "h@gmail2.com"
    },
    {
        id: 3,
        email: "h@gmail3.com"
    }
]

console.log(users[1].email);

// store all keys in an arrays -
console.log(Object.keys(tinderUser));

// Store all values in an arrays -
// console.log(Object.values(tinderUser));

// store all key and values pairs in an arrays -
// console.log(Object.entries(tinderUser));

// tinderUser has contain any key that name is isLoggedIn -
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


// Object de-structure -
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Tushar"
}
// const {courseInstructor} = course
// console.log(courseInstructor); // Tushar

const {courseInstructor : ci} = course
console.log(ci); // Tushar

/*
In JSON (JavaScript Object Notation), keys must be in double quotes. It is a requirement of the JSON specification that keys (property names) in JSON objects are enclosed in double quotation marks.
*/

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// or 

// [
//     {},
//     {},
//     {}
// ]


