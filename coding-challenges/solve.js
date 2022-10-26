// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


// Return the number of unique arrays formed from one element of each sub array
// arr -> arr contains other arrays, no empty arrs, contain duplicates, may be more than 3 arrays, will always be whole nums, may be negative, will always be an array that contains arrays of nums, will always contain nums of num type. 
//return the number of unique arrays that can be made by picking one element from each sub array, num > 0

// function solve(arr) {
//   //make an array to contain new arrays
//   //make sure all arrays have no duplicates
//   let sets = arr.map(a => new Set(a))
//   let uniqueArrs = sets.reduce((a, c) =>  a * c.size, 1)
//   return uniqueArrs
// }

// function solve(arr){
//   return arr.map(a => new Set(a)).reduce((a, c) => a * c.size, 1)
// }

const solve = arr => arr.map(a => new Set(a).size).reduce((a, c)=> a * c, 1)

// const solve = arr => arr.reduce((a, c)=> a * new Set(c).size, 1)



console.log(solve([[1, 2], [4], [5, 6]]), 4)
console.log(solve([[1, 2], [4, 4], [5, 6, 6]]), 4)
console.log(solve([[1,2],[3,4],[5,6]]),8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
console.log(solve([[2, 3], [6,4,2], [5, 6]]), 12)



