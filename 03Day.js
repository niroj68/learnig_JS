let score = "33"
let score2 = 33


//using typeof as a methode
console.log(typeof(score))
console.log(typeof(score2))
//using typeof not as a methode
console.log(typeof score)
console.log(typeof score2)

let valueInNumber = Number(score)//storing and converting the value of variable score as number data type in variable as valueInNumber
let valueInString = String(score2)

/*
the cap letter of "Number" and "String" represent as "Class"
*/

console.log(typeof valueInNumber)//its a Number
console.log(typeof valueInString)//its a String

console.log(valueInNumber)//I was expecting the output must be NaN but node.js( v20.12.0) update resolve the issue, now it shows correct value as 33 
console.log(valueInString)

let anEmptyValue = null
let valueInNumber2 = Number(anEmptyValue)

console.log(typeof anEmptyValue)//Object 

console.log(anEmptyValue)//null
console.log(valueInNumber2)// null has changed as 0

//If the value is undefined

let anEmptyValue2 = undefined
let valueInNumber3 = Number(anEmptyValue2)
console.log(valueInNumber3)//NaN not a number

//If the value is an bool

let anEmptyValue3 = true
let anEmptyValue3_1 = false
let valueInNumber4 = Number(anEmptyValue3)
let valueInNumber4_1 = Number(anEmptyValue3_1)
console.table([anEmptyValue3,anEmptyValue3_1,valueInNumber4,valueInNumber4_1])// True = 1 ; False = 0

//What if the value is NaN

console.log(typeof NaN)//intresting result 