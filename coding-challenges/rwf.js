function count(arr){
    let countObj = {}
    for(let num of arr){
        countObj[num] ? countObj[num]++ : countObj[num] = 1
    }

    return countObj
}

console.log(count([1,2,1,2,3,4,5,6,4]))