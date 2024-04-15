const myArr = [22 ,44 , 66, 88 ]

const myArr1 = [11 ,33 ,55 ,77 ,99 ]

myArr.push(myArr1) // it print in existing array
console.log(myArr);// [ 22, 44, 66, 88, [ 11, 33, 55, 77, 99 ] ] myArr1 is used as data or element 
// total 5 elements in myArr


const totalMyArr = myArr.concat(myArr1)// it print in new array
console.log(totalMyArr); // [ 22, 44, 66, 88, [ 11, 33, 55, 77, 99 ], 11, 33, 55, 77, 99 ]
// total 10 elements in totalMyArr

const allOverArr = [ ...myArr , ...myArr1]
console.log(allOverArr);// [ 22, 44, 66, 88, [ 11, 33, 55, 77, 99 ], 11, 33, 55, 77, 99 ] same result
// total 10 elements in allOverArr

console.log(typeof myArr);// object
console.log(typeof myArr1);// object

const another_array = [1,42, 12, 4, 5, 1,[55,3,6,6,9], "dom", ["sum","sub","mult",[12,23,45,6]]]

const new_mindBlowing_array = another_array.flat(Infinity)
console.log(new_mindBlowing_array);
/*the result is:
[1,42,12,4,5,1,55,3,6,6,9,'dom','sum','sub','mult',12,23,45,6]
*/
const new_mindBlowing_array2 = another_array.flat(1)
console.log(new_mindBlowing_array2);
/*the result is:
[
  1,42,12,4,5,1,55,3,6,6,9,'dom','sum','sub','mult',[ 12, 23, 45, 6 ]
]
*/

console.log(Array.isArray("niroj")) // false
console.log(Array.from("niroj")) // [ 'n', 'i', 'r', 'o', 'j' ]
console.log(Array.isArray({name: "niroj"})) // false

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,s))// [ 100, 200, 300 ]