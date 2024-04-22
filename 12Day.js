// Practice over Object

const instaUser = new Object()

instaUser.id = "1gh454g"
instaUser.name = "Niroj"
instaUser.isLoggedIn = true

console.log(instaUser);

const regularUser = {
    email: "nirojnaik@gmail.com",
    fullName: {
        firstName: "Niroj",
        middleName: "Kumar",
        LastName: "Naik"
    }


}

console.log(regularUser.fullName?.firstName);// ? used for conformation

const Obj1 = {
    2:"b",
    5:"e",
    7:"g"
}

const Obj2 = {
    1:"a",
    3:"c",
    4:"d",
}

const Obj3 = Object.assign({},Obj1,Obj2)// Obj1,Obj2 combinely put into the empty Obj {} which alocated to Obj3
console.log(Obj3);
// OutPut : { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '7': 'g' }

const Obj4 = {...Obj1, ...Obj2}// most usefull way
console.log(Obj4);
// OutPut : { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '7': 'g' }

console.log(Object.keys(instaUser));// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser))// [ '1gh454g', 'Niroj', true ]
console.log(Object.entries(instaUser));// [ [ 'id', '1gh454g' ], [ 'name', 'Niroj' ], [ 'isLoggedIn', true ] ]

