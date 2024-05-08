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

console.log(myObj.adhar)
myObj.adhar()
myObj.userName = "sekher"
myObj.adhar()

// this is about the current context

console.log(this)  // empty context {}
// browser will show different output 
// browser will give you window (window is a global Object)

function one (){
    let userName1 = "niroj"
    console.log(this.userName1)
}

one()// undefined

const pokhalo = function() {
    console.log(this.userName);
}
pokhalo()
