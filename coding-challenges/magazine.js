// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

//takes in str, if from given str you can create this other str, if everything inside second string is included in given str

//magazine -> always given str

/// potential str -> may be empty, no punc, no special chars, maybe repeated chars

// return true or false if given str is possible to create from magazine



// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

const mag = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

function magazine(str, mag){
  const strWords = str.split(' ')
  const magWords = mag.split(' ')
  let magMap = {},
    strMap = {}

  let possible = true

  for(const word of magWords){
      magMap[word] = magMap[word] + 1 || 1
    }
  
  for(const word of strWords){
     if(magMap[word]){
       magMap[word]--
       if(magMap[word] < 0) possible = false
     }else{
       possible = false
     }
    }
  return possible
  
  

    

  
  //compare each count of given str with mag, if given str char > mag char, return false, otherwesie true
}

//every char solution

  // if(str.split(' ').every(char => mag.includes(char))){
  //   let magMap = {},
  //   strMap = {}
  // //get count of all chars present in mag and given str
  //   for(const char of mag){
  //     magMap[char] = magMap[char] + 1 || 1
  //   }for(const char of str){
  //     strMap[char] = strMap[char] + 1 || 1
  //   }  
  // }else{
  //   return false
  // }
    
console.log(magazine("sit ad est sint in in in in", mag))
console.log(magazine("sit ad est sint in in", mag))
console.log(magazine("sit ad est sint", mag))
