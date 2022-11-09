// sub one list from other list, return result list

//remove all items in list a that are in list b, including repeating values

// arr, filterArr -> arr can be empty. may contain same or diffrent types, second arr can be longer than arr
//filterArr, values may or mau not be in first arr, can bne empty

// function arrayDiff(arr, filterArr){
//     //make new arr
//     let newArr = []
//     //loop through first arr
//     for(let val of arr){
//     //if filteredArr includes current val, dont add to new arr. otherwise add to new arr
      
//       if(!filterArr.includes(val)){
//         newArr.push(val)
//       }
//     }
//     //return filtered arr
//     return newArr
//   }

// function arrayDiff(arr, filterArr){
//     return arr.filter(v => !filterArr.includes(v))
// }

const arrayDiff = (arr, filterArr) => {
    return arr.filter(v => !filterArr.includes(v))
} 
  
  console.log(arrayDiff([1,2,2,2,2,3], [2]), `---> [1,3]`)
  console.log(arrayDiff([], [3,4]), `---> []`)
  console.log(arrayDiff([3,4], [3]), `---> [4]`)
  console.log(arrayDiff([1,9,2], [0]), `---> [1,9,2]`)
  
  
  