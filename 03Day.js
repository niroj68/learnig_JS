let score = "33"
let score2 = 33


//using typeof as a methode
console.log(typeof(score))//the output is String
console.log(typeof(score2))//the output is number
//using typeof not as a methode
console.log(typeof score)//the output is same String
console.log(typeof score2)//the output is same number

let valueInNumber = Number(score)//storing and converting the value of variable score as number data type in variable as valueInNumber
let valueInString = String(score2)

/*
the cap letter of "Number" and "String" represent as "Class"
*/

// lets play here 
valueInNumber = valueInNumber + "adb"
valueInNumber = Number(valueInNumber)
console.log(typeof valueInNumber)//its a Number
console.log(typeof valueInString)//its a String

console.log(valueInNumber)//the output is NaN
console.log(valueInString)//the output is a String value

// what if we change the position of such as 33adb to adb33
let someStringNumber = "adb33"
someStringNumber = Number(someStringNumber)
console.log(typeof someStringNumber);
console.log(someStringNumber)

let anEmptyValue = null
let valueInNumber2 = Number(anEmptyValue)

console.log(typeof anEmptyValue)//Object 

console.log(anEmptyValue)//null
console.log(valueInNumber2)// null has changed into 0

//If the value is undefined

let anEmptyValue2 = undefined
let valueInNumber3 = Number(anEmptyValue2)
console.log(valueInNumber3)//NaN Stands for (not a number)

//If the value is an bool

let anEmptyValue3 = true
let anEmptyValue3_1 = false
let valueInNumber4 = Number(anEmptyValue3)
let valueInNumber4_1 = Number(anEmptyValue3_1)
console.table([anEmptyValue3,anEmptyValue3_1,valueInNumber4,valueInNumber4_1])// True = 1 ; False = 0

//What if the value is NaN

console.log(typeof NaN)//intresting result 

let isLoggedIn = 1
let isLoggedIn1 = "niroj"
let isLoggedIn2 = ""


let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)

console.log(booleanIsLoggedIn)//the output is True
console.log(booleanIsLoggedIn1)//the output is True
console.log(booleanIsLoggedIn2)//the output is False

// from the above investigation we conclude that : [ False == 0 == "" ]
// similarly : [ True == 1 == "anything as a String" ]

let someString = "33hello"
let stringNumber = Number(someString)
console.log(stringNumber)//result is NaN