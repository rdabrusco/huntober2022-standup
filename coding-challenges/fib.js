// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//given n -> a num, calculate F(n)

// n -> never negative num, always whole number, always number type, possibly large num, 

// return value of F(n)  as a num

//Bottom-Up approach
// function fib(n){

//     //create fib sequence to n length
//     let sequence = [0,1]
//     //loop n times
//     for(let i = 2; i <= n; i++){
//     // sum last 2 nums of sequence, and push to sequence arr
//       const nextNum = sequence[sequence.length-1] + sequence[sequence.length-2]
//       sequence.push(nextNum)
      
//     }
    
//     // return last num of arr
//     return sequence[sequence.length-1]
//   }

//Bottom-Up approach

//   function fib(n){
  
//     //create fib sequence to n length
//     let arr = [0,1]
//     //loop n times
//     for(let i = 2; i <= n; i++){
//     // sum last 2 nums of sequence, and push to sequence arr
//       arr[i] = arr[i-1] + arr[i-2]
      
//     }
    
//     // return last num of arr
//     return arr[n]
//   }


  // function fib(n){
  
  //   let arr = [0,1]
  //   for(let i = 2; i <= n; i++){
  //     arr[i] = arr[i-1] + arr[i-2]
      
  //   }
    
  //   return arr[n]
  // }


  // DONT USE THIS ONE BUT ITS SIMPLE RECURSIVE
  // function fib(n){
  //   if(n<2){return n}
  //   return fib(n-1) + fib(n-2)
  // }


  // MEMOIZATION
  let memo = {}

  function fib(n){

    if(n === 0 || n === 1){
        return n
    }else if(memo[n]){
        return memo[n]
    }else{
        let result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
    }
  }


  console.log(fib(2), `--> 1`)
  console.log(fib(5), `--> 5`)
  console.log(fib(3), `--> 2`)
  console.log(fib(4), `--> 3`)
  console.log(fib(50))

  
  