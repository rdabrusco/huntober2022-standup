// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

//arr of nums, will always be nums, always number type, 2 numbers appear once, rest appear twice, no other data type in array,

//returns the sum of the two numbers that occur once in the array

// function repeats(arr){
//   // filter all numbers out that happen twice
//   const filteredArray = arr.filter((el, i) => !arr.includes(el, arr.indexOf(el)+1))
//   // add nums together
//   const sum = filteredArray.reduce((a, c) => a += c, 0)
//   // return the sum
//   return sum
  
// }

// function repeats(arr){
//   return arr.filter((el, i) => !arr.includes(el, arr.indexOf(el)+1)).reduce((a, c) => a += c, 0)
// }

const repeats = arr => arr.filter((el, i) => !arr.includes(el, arr.indexOf(el)+1)).reduce((a, c) => a += c, 0)



console.log(repeats([4,5,7,5,4,8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)

