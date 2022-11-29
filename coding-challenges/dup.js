// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])


// given an arr of strs, remove all consecutive dup letters from each string in arr return arr of fixed strs

// arr -> will always be arr, always contain only strs, alwyas have length of at least 1, may or may not have cons dup lets, 
// return arr of fixed strs, all cons dup letts removed. 
// .filter((el, i, arr) => el !== arr[i-1]).join('')
function dup(arr){
    // map -> split each str into arr, filter -> filter out cons dup letts, join back together, return
    return  arr.map(s => s.split('').filter((el, i, arr) => el !== arr[i-1]).join(''))
  }
  
  console.log(dup(['ccoooodddddewwwaaaarrrsssss',"piccaninny","hubbubbubboo"]),` ----> ['codewars','picaniny','hubububo']` )
  console.log(dup(["abracadabra","allottee","assessee"]), ` ----> ['abracadabra','alote','asese']`)
  console.log(dup(["kelless","keenness"]),` ----> ['keles','kenes']` )
  