//num => A num, always whole number, never negative, noever be a string that represents a number, never be null or undefined. 
//prints either the current number, or Fizz if num is div by 3 
// Buzz if num is div by 5, and FizzBuzz if num is div by 3 and 5
//  5 -> 1, 2, Fizz, 4, Buzz.
// 15 -> 1, 2, Fizz, 4, Buzz, Fizz, 7 8 Flzz Buzz 11 Fizz 13 14 Fizz Buzz
//


function fizzBuzz(num) {
    for(let i = 1; i <= num; i++){
        if(i % 15 === 0){
            console.log(`Fizz Buzz`)
        }else if(i % 3 === 0){
            console.log(`Fizz`)
        }else if(i % 5 === 0){
            console.log(`Buzz`)
        }else{
            console.log(i)
        }
    }

}


console.log(fizzBuzz(5), '5 -> 1, 2, Fizz, 4, Buzz.')
console.log(fizzBuzz(15), '15 -> 1, 2, Fizz, 4, Buzz, Fizz, 7 8 Flzz Buzz 11 Fizz 13 14 Fizz Buzz')
