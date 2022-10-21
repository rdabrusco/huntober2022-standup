// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// arr of nums -> nums, new arr length -> len, nums contains any numbers, whole number, either be even or odd. no 0s. Will always be number type. Will never be empty, and will always contain at least numer even numbers. The final array must hav len length and contain the last len even numbers from the original array. 


// function onlyEvens(nums, len){
//   //get only even numbers in array
//   let filteredArray = nums.filter(n => n % 2 === 0)
//   //array is only len length and contains last even numbers in array
//   let finalArray = filteredArray.slice(-len)
//   //return final array
//   return finalArray
// }

// function onlyEvens(nums, len){
//   return nums.filter(n => n % 2 === 0).slice(-len)
// }

const onlyEvens = (nums, len) => nums.filter(n => n % 2 === 0).slice(-len)
 
console.log(onlyEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
console.log(onlyEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(onlyEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1),[6])


