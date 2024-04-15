// ++++++++++++++++++++ARRAY++++++++++++++++++

const myArr = [0,44,3, , 22," ",true ]
console.log(myArr[3]); // index value is input to get the value begining with 0th index
// the result is undefined

const myArr2 = new Array(3,45,23,5)
console.log(myArr2[0]);// 3

myArr.push(54)
console.log(myArr);//[ 0, 44, 3, <1 empty item>, 22, ' ', true, 54 ]
myArr.push(54)
console.log(myArr);//[ 0, 44, 3, <1 empty item>, 22, ' ', true, 54, 54 ]

myArr.pop()
console.log(myArr);//[ 0, 44, 3, <1 empty item>, 22, ' ', true, 54 ]

myArr.unshift(8)
console.log(myArr);//[ 8, 0, 44, 3, <1 empty item>, 22, ' ', true, 54 ]

myArr.shift()
console.log(myArr);//[ 0, 44, 3, <1 empty item>, 22, ' ', true, 54 ]

console.log(myArr.includes(7));// false

console.log(myArr.indexOf(5));// -1
console.log(myArr.indexOf(44));// 1

const newArr = myArr.join()
console.log(myArr)// [ 0, 44, 3, <1 empty item>, 22, ' ', true, 54 ]
console.log(typeof newArr);// String
console.log(typeof myArr);// object

/* slice and splice */
// the most important methode asked in interview i.e. the difference between slice and splice

console.log('a', myArr);// a [ 0, 44, 3, <1 empty item>, 22, ' ', true, 54 ] before execution of slice

const myNewArr = myArr.slice(1,3)
console.log(myNewArr);// [ 44, 3 ]

console.log('b', myArr);// b [ 0, 44, 3, <1 empty item>, 22, ' ', true, 54 ] after execution of slice no change

const myNewArr2 = myArr.splice(1,3)
console.log(myNewArr2);// [ 44, 3, <1 empty item> ]

console.log('c',myArr);// c [ 0, 22, ' ', true, 54 ] after execution of splice myArr changed