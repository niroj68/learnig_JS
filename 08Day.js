const score = 600
const balance = new Number(3000)

console.log(balance);// print with type casting
console.log(score);

console.log(balance.toString())
console.log(balance.toFixed(2))
console.log(balance.toString().length)
console.log(balance.toPrecision(3))

const updatedBalance = 1000000 // bhai amir ho gaayo
console.log(updatedBalance.toLocaleString());// as default US 
console.log(updatedBalance.toLocaleString('en-IN'));// for indian standared

//+++++++++++++Mathematics++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));// similar to modulus of real life mathematics
console.log(Math.round(4.3))
console.log((Math.random()*100)+1)

const min = 10
const max = 20

console.log(Math.random() * (max-min+1) +min)