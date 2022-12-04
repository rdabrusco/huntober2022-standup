// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


// str of chars, returns reversed chars. No reverse()

// str -> 2 chars or more, will always be str, may contain special chars or nums, will contain capitals

// returns -> a str, reversed orig str, no reverse method used. 


// function reverse(str){
//   //init new str
//   let reversed = ''
//   //loop through given str backwards
//   for(let i = str.length-1; i >= 0; i--){
//   //add each char to new str
//     reversed += str[i]
//   }
//   //return reversed str
//   return reversed
// }


// function reverse(str){
//   //init new str
//   let reversed = ''
//   //loop through given str backwards
//   for(let i = 0; i < str.length; i++){
//   //add each char to new str
//     reversed = str[i] + reversed
//   }
//   //return reversed str
//   return reversed
// }
function reverse(str) {
    //init new str
    let reversed = ''
    //loop through given str backwards
    for (let char of str) {
      //add each char to new str
      reversed = char + reversed
    }
    //return reversed str
    return reversed
  }
  
  // function reverse(str){
  //   return str.split('').map((el,i,a)=> a[a.length-1-i]).join('')
  // }
  
  const reverse = str => str.split('').map((el, i, a) => a[a.length - 1 - i]).join('')
  
  
  
  console.log(reverse('hello there'), `---> ${'hello there'.split('').reverse().join('')}`)
  console.log(reverse('Bowling for Soup'), `---> ${'Bowling for Soup'.split('').reverse().join('')}`)
  console.log(reverse('12 Colodado Ave.'), `---> ${'12 Colodado Ave.'.split('').reverse().join('')}`)
  