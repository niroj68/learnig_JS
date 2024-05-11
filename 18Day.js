// ======================arrow functions========================
// this key word shows current context

myObj = {
    userName: "niroj",
    id: "12hivoj8okd",
    idLoggedIn: true,
    adhar: function() {
        console.log(`some acknoledgement for ${this.userName} as a indianCityzen`)
    }
}
console.log( "its 1",myObj.adhar()) 

//some acknoledgement for niroj as a indianCityzen
// its 1 undefined
// WTF with undefined

console.log(myObj.adhar)  // [Function: adhar]
myObj.adhar()  // some acknoledgement for niroj as a indianCityzen
myObj.userName = "sekher"
myObj.adhar()  // some acknoledgement for sekher as a indianCityzen

// this is about the current context

console.log(this)  // empty context {} for node environment 
// browser will show different output 
// browser will give you window (window is a global Object)

function one (){
    let userName1 = "niroj"
    console.log(this.userName1)
}

one()  // undefined

const pokhalo = function() {
    console.log(this);
}
pokhalo()  // a huge information printed

// arrow function dont allow "this" keyword is a wrong concept

const chai = () => {
    let me = "NIroj"
    console.log("yo hentai ninge");  
    console.log(this);  // {}
    console.log(this.me);  // undefined
}

chai();
let you = 23;
// remember the arrow function only work if you use ; on previous line 
// constider I declared a variable if I donot end with ; it will show an error

// explicit return

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(33,25));

// implicit return

const addTwoNum = (num1,num2) => num1+num2 // dont use {} and return keyword in this form


console.log(addTwoNum(13,14));

// you cant use object inside of implicit return you have to wrap the object with ()

const nameOF = () => ({userName: "Niroj"})

console.log(nameOF());  // { userName: 'Niroj' }