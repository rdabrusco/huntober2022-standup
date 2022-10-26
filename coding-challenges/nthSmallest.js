// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest([3,1,2 ,2) ==> return (2) 
// nthSmallest([15,20,7,10,4,3] ,3) ==> return (7) 
// nthSmallest([15,20,7,10,4,3] ,3) ==> return (7) 
// nthSmallest([177,225,243,-169,-12,-5,2,92] ,5) ==> return (92) 


// 2 params, arr, n
// arr -> values always ints, always type num, size >= 3, whole nums, negatives, possibly repeat nums, arr will always be arr. 
// n => n >= 1, always a whole num, wil lalways be a num type, will never be larger than arr

// returns the number that is nth smallest in the array. 

// function nthSmallest(arr, num){
//   //sort arr from least to greatest
//   const sortedArr = arr.sort((a, b)=> a - b)
//   //get the number at the given num index - 1
//   const nthSmall = sortedArr[num - 1]
//   //return grabbed num
//   return nthSmall
// }

// function nthSmallest(arr, num){
//   return arr.sort((a, b)=> a - b)[num-1]
// }

const nthSmallest = (arr, num) => arr.sort((a, b)=> a-b)[num-1]

console.log(nthSmallest([3,1,2] ,2), 2)
console.log(nthSmallest([15,20,7,10,4,3] ,3), 7)
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92] ,5), 92)
console.log(nthSmallest([-3,1,-2] ,3), 1)


