// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

// arr of strs, same letter type. return new arr len of each el === avg len of all elements in given arr

// arr => will never be empty, will always contain at least 2 elements in arr. will always contain only strs, could already be same length; all strs lenght of 0.  round avg if not an int

// return arr of strs, same char but the len of each str is avg len of original strs

// function avgLength(arr){
//   //get avg length -> repeat
//   const avgLen = Math.round(arr.join('').length / arr.length)
//   const newArr = arr.map( str => str[0].repeat(avgLen))

//   return newArr
// }

// function avgLength(arr){
//   return arr.map( str => str[0].repeat(Math.round(arr.join('').length/arr.length)))
// }

const avgLength = arr => arr.map( str => str[0].repeat(Math.round(arr.join('').length/arr.length)))

console.log(avgLength(['u', 'y']), `['u', 'y']`)
console.log(avgLength(['aa', 'bbb', 'cccc']), `['aaa', 'bbb', 'ccc']`)
console.log(avgLength(['aa', 'bb', 'ddd', 'eee']), `['aaa', 'bbb', 'ddd', 'eee']`)
