// for in laop -

// Gyan -
// Swift is a high-level general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community.

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(typeof key); // string
    // console.log(key); // key of object will print 
    
    // console.log(myObject.key); // undefined
    
    // console.log(myObject['key']); // undefined
    
    console.log(myObject[key]); // value of objects will print

    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// array -
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(typeof key); // string
    // console.log(key); // index of value
    console.log(programming[key]); // value of an array 
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// for in laop is not iterable for map , it will nothing print