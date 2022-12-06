// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// take in str, count all occuring char in str, return obj key - char val -> num of occurances

// str -> may be empty, never null or undefined, always a str, may have nums, special chars, spaces and punct
// capital letters are different occurences, 

// return -> an obj keys are each char present in given str, values are num of occurences. if empty str given, reutrn empty obj

// function countChars(str){

//   //initialize obj
//   let countedChars = {}
//   //loop through every char of str
//   for(let i = 0; i < str.length; i++){
//   //check val exists ? val++ : val = 1
    
//     if(countedChars[str[i]]){
//       countedChars[str[i]]++
//     }else{
//       countedChars[str[i]] = 1
//     }
//   }
//   //return obj
//   return countedChars
// }

function countChars(str){
    let countedChars = {}
    for(let char of str){
      countedChars[char] ? countedChars[char]++ : countedChars[char] = 1
    }
    return countedChars
  }
  
  const countChars = str => 
  
  
  console.log(countChars('hello'), '-> {"h":1, "e":1,"l":2,"o":1}')
  console.log(countChars('aba'), ' -> {"a":2, "b":1}')
  console.log(countChars('hey you'), '-> {"h":1, "e":1,"y":2," ":1,"o":1,"u":1}')
  
  