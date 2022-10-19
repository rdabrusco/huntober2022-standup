// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)


//take in an array, returning the average of given array, rounded down.

// array will never be empty, Wll always be an array, will always contain numbers, always number type, will always be whole numbers, no negative numbers, 

// a whole number/integer, average of all inputs in the array. rounding to nearest whole number

//

const getAverage = arr => Math.floor(arr.reduce((a,c) => a += c, 0)/arr.length)



console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1)



// function getAverage(arr){
//     //add all numbers together

//     let sum = arr.reduce((a,c)=> a+= c, 0)
//     //divide sum of all nums by the length of the array
//     let result = sum/arr.length
//     //return the quotient.

//     return Math.round(result)


// }
