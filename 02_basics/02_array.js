const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// push dc_heros array directly into marvel_heros - -
// marvel_heros.push(dc_heros) 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// adding two arrays +
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator in js - for adding two or more array
const myName = ["Tushar","Dew"];
const all_new_heros = [...marvel_heros, ...dc_heros, ...myName]
console.log(all_new_heros);

// converting string to array using spread operator +
const nm="Tushar";
const array=[...nm];
console.log(array);
console.log(array[2]);
console.log(typeof array);

// flat the deep array in 1D array -
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(depth value)
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


const str="Tushar"
console.log(Array.isArray(str)) //false
// convert into an array -
const newstr = Array.from("Hitesh");
console.log(newstr)

// if obj , then we have to specifies , on what value we have to make array -
console.log(Array.from({name: "hitesh"})) //  [] if not specify the way

// convert values to array -
let score1 = 100
let score2 = 200
let score3 = 300
const arrfromvalue =Array.of(score1, score2, score3)
console.log(arrfromvalue); // [100, 200, 300]