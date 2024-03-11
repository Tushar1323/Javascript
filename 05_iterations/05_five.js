// forEach -
// forEach() method: Arrays in JavaScript have a built-in forEach() method that allows you to iterate over each element in the array.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( callback function )
// callback function doesn't have the name 

// coding.forEach( function (item){
//     console.log(item); // print all value of an array 
// } )

// or 

// coding.forEach( (item) => console.log(item) )

// or

// coding.forEach( (item) => (console.log(item)) )

// or

// coding.forEach( (item) => {
//     console.log(item);
// } )

// or

// function declaration -
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)  // only pass function reference 

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// object of an array -
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js_complete"
    },
    {
        languageName: "java",
        languageFileName: "java_half_complete"
    },
    {
        languageName: "python",
        languageFileName: "py_complete"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )