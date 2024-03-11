// array

const myArr = [0, 1, 2, 3, 4, 5, "Tushar"]
const myHeors = ["shaktiman", "naagraj"]

// creating array using new keyword -
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods -
// myArr.push(6) // push value in last of array
// myArr.push(7)
// myArr.pop() // pop value from last

// myArr.unshift(9) // push value from start 
// myArr.shift() // pop value from start

// console.log(myArr.includes(9)); // myArr contain 9 or not
// console.log(myArr.indexOf(3)); // index of 3 in myArr

const newArr = myArr.join() // convert array to string 
console.log(typeof newArr); //string 
console.log(newArr.length); //18
console.log(myArr);
console.log( newArr);


// slice, splice -
console.log("A ", myArr);

// slice take value from [start,end) and not change original one
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

// splice take value from [start,end] and remove that value from original one
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);
