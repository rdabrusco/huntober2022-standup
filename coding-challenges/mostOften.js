 
// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


//str, returns char that appears most often

// str -> never empty, will always be str, may have nums, both cases, mauy have punctuation. 

// returns -> the char that appears most often 

// function mostOften(str){
//   let map = {}
//   //loop through chars of str
//   for(let char of str){
//     map[char] ? map[char]++ : map[char] = 1
//   }
//   //make a map for how many times each char appears
//   // return char that appears most often
 
  
// }

function mostOften(str){
    let map = {},
      count = 0,
      maxChar = null
  
    for(const char of str){
      map[char] = map[char] + 1 || 1
    }
  
    for(const char in map){
      if(map[char] > count){
        count = map[char]
        maxChar = char
      }
    }
  
    return maxChar
  }
  
  console.log(mostOften('Hello World!'), `=> l`)
  console.log(mostOften('Boston'), `=> o`)
  
  