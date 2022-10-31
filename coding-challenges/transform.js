// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


// str -> never empty, always a string, may have multiple spaces, leading-trailing spaces
// maybe special chars,

// return a string reverse order,  if letter is uppercase, make lower, and vice versa. no trailing spaces, handle multiple spaces.

// function transform(str){
  // split string into array by each word
//   const arrOfWords = str.split(' ')
//   // filter out any empty array items
//   let filteredWords = arrOfWords.filter(word => word !== '')
//   //reverse array
//   filteredWords.reverse()
//   // map char lowercase -> uppercase and uppercase -> lowercase
//   const flippedCase = filteredWords.map(word => {
//     let newWord = ''
//     for(let char of word){
//       char === char.toLowerCase() ? newWord += char.toUpperCase() : newWord += char.toLowerCase()
//     }
//     return newWord
//   })
  
//   // join array into str
//   let finalStr = flippedCase.join(" ")
//   //return joined str
//   return finalStr
  
// }

// function transform(str){
//   const flippedWords = str.split(' ').filter(word => word !== '').reverse()
//   const flippedCase = filteredWords.map()
// }


function transform(str){
    // str -> split " " -> reverse -> join " "
    const reversedString = str.split(" ").reverse().join(" ")
  
    // str split "" -> map l === l.lowercase() ? l.toUpperCase : l.toLowerCase()
    const transformedStr = reversedString.split("").map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join("")
    return transformedStr
  }
  
  console.log(transform('Hello World'), '-->wORLD hELLO')
  console.log(transform('Eat tHe beEf '), '-->BEeF ThE eAT')
  console.log(transform('Sup  dude '), '-->DUDE sUP')