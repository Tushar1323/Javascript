let myName = "hitesh     "
let mychannel = "chai     "
// console.log(myName.trueLength);

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        // console.log(`Spidy power is ${spiderman}`); // error
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// adding method in Object -
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
heroPower.hitesh() // no error


let myHeros = ["thor", "spiderman"]
// adding method in Array -
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// myHeros.hitesh() // no error
// myHeros.heyHitesh() // no error

// heroPower.heyHitesh() //error -> object will not able to access  array prototype 


console.log("-----------------------------------------------------");
// inheritance -
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: "Yes I will make"
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // __proto__: TeachingSupport // TASupport will access TeachingSupport
}

// Teacher.__proto__ = User // Teacher will access User

// modern syntax for __proto__ -
// Object.setPrototypeOf(kisme add krna , kiska add krna)
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeVideo);


// creating own method for all string -
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // string value
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()