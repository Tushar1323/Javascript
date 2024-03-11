/*
In JavaScript, data types can be divided into two main categories: primitive data types and reference data types.

    Primitive Data Types:
        Number: Represents numeric values, including integers and floating-point numbers.
        String: Represents sequences of characters, enclosed within single ('') or double ("") quotes.
        Boolean: Represents a logical entity and can have two values: true or false.
        Null: Represents the intentional absence of any object value.
        Undefined: Denotes a variable that has been declared but not assigned a value.
        Symbol: Introduced in ECMAScript 6, represents a unique identifier.
        BigInt: Introduced in ECMAScript 2020, represents integers with arbitrary precision.

    Reference Data Types:
        Object: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects.
        Array: A special kind of object that represents a list-like collection of elements.
        Function: A special type of object that can be invoked.
        Date: Represents dates and times.
        RegExp: Represents regular expressions for pattern matching.
        Others: Other built-in reference types include Map, Set, WeakMap, WeakSet, etc.

JavaScript is a dynamically typed language, which means you don't need to specify the data type of a variable explicitly. The interpreter determines the data type of a variable based on the value assigned to it.
*/


// JS datatype is 2 on the basis of data storage and access

// 1 Primitive type -
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 //Number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof anotherId); // Symbol
console.log(id === anotherId); //false


// to make a number BigInt use n at last
const bigNumber = 3456543576654356754n ;
console.log(bigNumber);
console.log(typeof bigNumber); //bigint


//2 Reference type (Non primitive)
// Type are Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); //object 

let myObj = {
    name: "Tushar",
    age: 22
}
console.log(typeof myObj); //object

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); //function

// link to study -
// https://262.ecma-international.org/5.1/#sec-11.4.3