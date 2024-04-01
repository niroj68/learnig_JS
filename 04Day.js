// ********** Operations ****************//

let value = 3
let negValue = -value 
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello,bhai"
let str2 = " kesa hai"

let str3 = str1 + str2
console.log(str3)


console.log("1"+2)//they all identify as a string
console.log(1+"2")//they all identify as a string


console.log(1+2+"2")//unexpected thing; first operation arithmatic then as a string concatenation
console.log("1"+2+2)//all of them identified as string
console.log(1+"2"+2)//all of them identified as string

console.log(true)
console.log(+true) // please dont make it complecated does not make any sense 
// console.log(true+)// an error 

console.log(+"") // :| why are you doing all of this 

let num1 , num2 , num3
num1 = num2 = num3 = 2+2// readability is important for coworker conviniant try to make it simple as it possible in producion field

let gameCounter = 100
gameCounter++
console.log(gameCounter)

++gameCounter
console.log(gameCounter)
//what is the diff btwn pre-increament and post-increament search in MDN site

//study conversion in ECMA site
