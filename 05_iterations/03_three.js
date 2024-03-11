// for of -
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps -> The Map object holds key-value pairs and remembers the original insertion order of the keys

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2


// -------------------------------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // unique entry only store 

// console.log(map); 

// for (const value of map) {
//     console.log(value); //  collection of [key,value] in an object 
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// Object -
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// Give an Error bcz object is not iterable by forof loap

// . It's important to note that regular objects (i.e., objects created using {}) are not iterable by default unless they have a custom iterator method defined.