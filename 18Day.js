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