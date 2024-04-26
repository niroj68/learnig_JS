// Function part 2 

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2))

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200,3090,432))// output is 200


// function calculateCartPrice(...num1)// ... is the rest operator
// {
//     return num1
// }

// console.log(calculateCartPrice(200,3090,432))// output is [ 200, 3090, 432 ]

function calculateCartPrice( val1, val2, ...num1)
{
    return num1
}

console.log(calculateCartPrice(200,3090,432))// [ 432 ]

// const user = {
//     user: "niroj",
//     price: 299
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.user} and price is ${anyobject.price}`)
// }

// handleObject(user) //username is niroj and price is 299

const user = {
    user: "niroj",
    prices: 299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.user} and price is ${anyobject.price}`)
}

handleObject(user) // username is niroj and price is undefined

handleObject({
    username: "chiku",
    price:449
})
// the output: "username is undefined and price is 449"

const aNewArray = [200,500,100,800]
function retturnSecondValue(getArray){
    return getArray[1]
}

console.log(retturnSecondValue(aNewArray))
console.log(retturnSecondValue([600,257,267,785,265]));

