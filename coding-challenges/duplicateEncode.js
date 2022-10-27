// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// takes in str, if char only appears once, '(', else ')' 
// str -> always a str, yes nums and special chars, yes spaces, cap doesnt matter, may be empty str, never undefined, 
// return new str, same length as given str, if char only appears once => '(' else ')' return final str

// function duplicateEncode(str){
      // make str all one case
    // str = str.toLowerCase()
//   //init new str
  
//   let encoded = ''
//   //loop through original str
//   for(let char of str){
//   //if char appears once => add "(" to new str
//     if(str.indexOf(char) === str.lastIndexOf(char)){
//       encoded += '('
//   //else add ')' to new str
//     }else{
//       encoded += ')'
//     }
//   } 
//   //return new str
//   return encoded
// }

// function duplicateEncode(str){
//   let lower = str.toLowerCase()
//   let arr = lower.split('')
//   let encoded = arr.map(c => arr.indexOf(c) === arr.lastIndexOf(c) ? '(' : ')')
//   const finalStr = encoded.join("")
//   return finalStr
// }

// function duplicateEncode(str){
//   return str.toLowerCase().split('').map(c => str.indexOf(c) === str.lastIndexOf(c) ? '(' : ')' ).join('')
// }

const duplicateEncode = str => str.toLowerCase().split('').map((c,i,a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')' ).join('')

console.log(duplicateEncode('app'), '())')
console.log(duplicateEncode('stun'), '((((')
console.log(duplicateEncode('(( #)'), '))(((')
console.log(duplicateEncode('Success'), ')())())')


