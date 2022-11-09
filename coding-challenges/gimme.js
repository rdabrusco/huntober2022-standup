// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


// arr -> will always contain 3 distinct numbers, will always contain numbers, will always be 3 distinct ones. may be positive or negative, no repeated nums. never strings or bools. never empty.

// returns the index of the num in the given array that numerically is between the other two elements.

// function gimme(arr) {
//   //sort array, grab index of 2nd number
  
//   let idx = [...arr].sort((a, b) => a - b)[1]
//   console.log(idx)
//   //return index of 2nd number in arr
//   return arr.indexOf(idx)
// }

// function gimme(arr){
//   return arr.indexOf([...arr].sort((a,b)=> a-b)[1])
// }

const gimme = arr => arr.indexOf([...arr].sort((a,b)=> a-b)[1])

console.log(gimme([2, 3, 1]), `=> 0`)
console.log(gimme([5, 10, 14]), `=> 1`)
