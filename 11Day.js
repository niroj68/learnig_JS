// +++++++++++OBJECT++++++++++++

// object create key value pair to store data and key is consider as a String and the value can be any data type
// singleton is created by constructor

Object.create // singleton created or constructor methode

const mySym = Symbol("key1")


// object literals no singleton
const JsUser = {
    name : "niroj",
    98 : 67 ,
    true: "true",
    myArr: [55,65,24],
    [mySym]: "Mykey1",
    1:1
}
console.log(JsUser)
// the out put is :
/*{
    '1':1,
  '98': 67,
  name: 'niroj',        
  true: 'true',
  myArr: [ 55, 65, 24 ],
  [Symbol(key1)]: 'key1'
}*/
// from the above example the keys are string except last one since it is previously diclared as a symbol
console.log(JsUser[98]);// 67
console.log(JsUser.name);// "niroj"
// console.log(JsUser.98);
// the above example show an error we cannot define a numeric into string always use []

console.log(typeof JsUser[mySym])
JsUser[98] = "77"
console.log(JsUser[98]);// 77


// Object.freeze(JsUser)
// freeze will not allow the user to change anything of object
JsUser[98] = "78"
console.log(JsUser[98]);// 77 no change

JsUser.greeting = function(){
    console.log("hello jsUser")
}
console.log(JsUser.greeting)// [Function (anonymous)]
console.log(JsUser.greeting());// hello jsUser,undefined

JsUser.greeting2 = function(){
    console.log(`hello jsUser ${this.name}`)
}

console.log(JsUser.greeting2());// hello jsUser niroj,undefined
