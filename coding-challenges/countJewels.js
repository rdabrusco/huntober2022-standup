// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// take in 2 strs, jewels and stones. return how many of the stones oyu have are jewels

// jewels -> 1 <= jewels.len, always be str, every single char is own jewels, case sensitive, always only eng letters, all chars unique

// stones -> may be empty, maxx len <= 50. only eng letters, always str, may contain chars not included in jewels

// returns -> num of stones in our possesion that are jewels

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// function countJewels(jewels, stones){

//   //initialize counter

//   let counter = 0
//   //split jewels into arr
//   // loop through stones
//   for(let i = 0; i < stones.length; i++){
//     if(jewels.includes(stones[i])) counter++ 
//   }
//   //for each char of stones, if current stone is included in jewels, add 1 to counter

//   //return counter
//   return counter
// }
// function countJewels(jewels, stones){

//   //initialize counter

//   let counter = 0
//   //split jewels into arr
//   // loop through stones
//   for(const stone of stones){
//     jewels.includes(stone) ? counter++ : 0
//   }
//   //for each char of stones, if current stone is included in jewels, add 1 to counter

//   //return counter
//   return counter
// }



// const countJewels = (jewels, stones) => stones.split('').filter(char => jewels.includes(char)).length

console.log(countJewels('aA', 'aAAbbbb'), `-> 3 `)
console.log(countJewels('vac', 'vaaAAAdc'), `-> 4 `)
console.log(countJewels('zz', 'ZZ'), `-> 0 `)

function findJewels(jewels,stones){
    const map = {}
    let count = 0
  
    for(const jewel of jewels){
      map[jewel] = true
    }
  
    for(const stone of stones){
      if( map[stone] ){
        count++
      }
    }
    return count
  }


