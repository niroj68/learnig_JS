//+++++++++++++++String++++++++++++++++

const name = "niroj"
const score = 77

console.log(name+score);
// old methode to use string ,not for modern use


console.log(`Hello my name is ${name.toUpperCase()} and my score is ${score}`);
// String interpoletion ,modern way to use Strings . 
// we can also use differnt methode() on variable like name.toUpperCase()


const myName = new String("Niroj Kumar Naik")
console.log(myName);
// in console of browser we can see a series of character with position location starting with 0
/*
String {'Niroj Kumar Naik'}
0: "N"
1: "i"
2: "r"
3: "o"
4: "j"
5: " "
6: "K"
7: "u"
8: "m"
9: "a"
10: "r"
11: " "
12: "N"
13: "a"
14: "i"
15: "k"
length: 16
[[Prototype]]: String    ***here we can see the functions or methode under prototype***
[[PrimitiveValue]]: "Niroj Kumar Naik"
*/

console.log(myName[5]);
console.log(myName.__proto__);// {} object

console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.charAt(8));
console.log(myName.indexOf('o'));

const myNewName = myName.substring(0,3)
console.log(myNewName);
const myAnotherName = myName.slice(-7,7)
console.log(myAnotherName)