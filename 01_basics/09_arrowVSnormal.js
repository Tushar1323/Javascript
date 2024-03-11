// Normal function -
    
function fun(name, branch) {
    console.log("I am inside the fun function");
    console.log(typeof this); //object
    console.log(this);
    this.name = name;
    this.branch = branch
    // return this
}
// const obj = fun("Tushar", "CSE")
// // obj => object with many methods if we return this in fun
// // obj => undefined if we not write (return this) in fun
// console.log(this); //{}
// console.log(obj); 

const obj = new fun("Tushar", "CSE")
// no need to write return this if we are using "new" keyword for crreating the object
console.log(this); //{} ( window this is empty object )
console.log(obj); 


console.log("-------------------------------------------------------------");


// Arrow function -
const funArr = (name,branch)=>{
    console.log("I am inside the funArr function");
    console.log(typeof this); //object
    console.log(this);
    this.name = name;
    this.branch = branch
    return this
}

const objArr = funArr("Tushar", "CSE")
// const objArr = new funArr("Tushar", "CSE") // error 
// obj => object with many methods if we return this in fun
// obj => undefined if we not write (return this) in fun
console.log(this); // is same as funArr this
console.log(objArr);

