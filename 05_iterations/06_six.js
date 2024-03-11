// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item // forEach loap never return any things 
// } )

// console.log(values); // undefined


// Filter in array -
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( callback function)

// const newNums = myNums.filter((nums) => nums>5);
// console.log(newNums); // [6,7,8,9,10]

// const newNums = myNums.filter((nums) => (nums>5));
// console.log(newNums); // [6,7,8,9,10]

// const newNums = myNums.filter((nums) => {
  // return nums>5;
// });
// console.log(newNums); // [6,7,8,9,10]

const newNums = myNums.filter((nums) =>{
  nums>5;
});
console.log(newNums); // []


// apply filter using forEach loap -
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


// array of object -
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  // userBooks store the object that genre = History

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);