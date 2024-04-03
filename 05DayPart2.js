/* 
there are two type of Data type :
-> primitive 
-> non-primitive 

Primitives are:
    ->String
    ->Number
    ->Boolean
    ->null
    ->undefined
    ->Symbol
    ->Bigint

Reference type or non-primitives
    ->Array
    ->Objects
    ->Functions

JS is a Dynamic type language 
*/


//primitive data type examples 
const id = Symbol('1243')
console.log(typeof id)

const anotherId = Symbol('1243')

console.log(id === anotherId );

const bigNumbers = 68378998026791325674n


// non-primitive datatype examples]
const fruits = ["mango","banana","berries"]

let myObj = {
    author: "Niroj Kumar Naik",
    age: 22,
    exp: 2,
    level: 4,
}

const myFunction = function(){
    console.log("Hello world");

}
console.log(myFunction())
console.log( typeof bigNumbers)
