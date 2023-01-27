// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


// takes in 2 pos ints, returns gcd. 

// x y => always >= 1, always a whole num, never any other data type, can be same nums, can be large nums, 

// returns => a number, gcd of both given nums. gcd >= 1. 

function mygcd(x, y){
    //loop from lowest number to 0
    for(let i = Math.min(x, y); i > 0; i--){
      // if x % i ==0  and y % i === 0
      if(x % i === 0 && y % i === 0){
        //return current num
        return i
      }
    }
  }
  
  function mygcd(a, b){
    // if b === 0 return a
    if(b === 0){
      return a
    }
    // else return b, a%b
    return mygcd(b, a % b)
  }
  console.log(mygcd(30,12),6)
  console.log(mygcd(8,9),1)
  console.log(mygcd(1,1),1)
  
  
  // Test.assertEquals(mygcd(30,12),6)
  // Test.assertEquals(mygcd(8,9),1)
  // Test.assertEquals(mygcd(1,1),1)