// Dates 

let myDate = new Date()
// console.log(myDate.toString()); //Thu Mar 07 2024 11:53:38 GMT+0530 IST
// console.log(myDate.toDateString()); //Thu Mar 07 2024
// console.log(myDate.toLocaleString()); //7/3/2024, 11:53:38 am
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //1709792911215 from 1-jan-1970 to now in milli sec
console.log(myCreatedDate.getTime()); //1673634600000 from 1jan1970 to myCreatedDate

// convert value in sec
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // start from 0
console.log(newDate.getDay()); // 1 for monday

// customize by own  
newDate.toLocaleString('default', {
    weekday: "long",
})

