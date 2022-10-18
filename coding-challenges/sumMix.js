//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

//arr -> arr of integers, may be strings or numbers. Will always be a number though.
//arr may be empty. always whole numbers, no floats or rounding. 

// returns the sum of all numbers in the array, regardless of if they are a string or number.

//assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
//assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

function sumMix(arr) {
    //convert all values in array to number type, reduce the array to sum them all together
  
    return arr.reduce((a, c) => a += +c, 0)
  }
  
  console.log(sumMix([9, 3, '7', '3']), 22)