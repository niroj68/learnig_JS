function one (){
    const userName = "niroj"

    function two (){
        const website = "GitHub"
        console.log(userName);

    }
    // console.log(website); // it will show an error

    // two() // it will show us the userName for which we need to execute the main function 'one()' 
    
}

one()// since the two function is commented there is no output
// otherwise the out put is userName niroj

// the child function can access the parent variable where as parant can not
// the same concept applied to loop like if else

if (true) {
    const userName = "niroj"
    if (userName === "niroj") {
        const website = "freecodecamp.com"
        console.log(userName+website);
    }
    // console.log(website); // scope error 
}

//console.log(userName);// userName is the part of block scope not global scope so we get an error

// ====================== interesting ======================= //


// console.log(addTwo(1)) //the diclaration is asigned as a variable/constant container which will not be execute before diclaration
console.log(addOne(1))

function addOne(num){
    return num + 1
}

console.log(addOne(3))

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(3))