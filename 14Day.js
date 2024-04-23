/*---------------------Functions------------------------*/

console.log("N");
console.log("I");
console.log("R");
console.log("O");
console.log("J");

// nobody wants to do same thing again and again so the solution of reuseability is Function. For example:-
function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("R");
    console.log("O");
    console.log("J");
}

sayMyName() // this is how you can use a function sayMyName is referance after using paranthesis it become execute

function addTwoNumbers(num1,num2) // here num1 and num2 are parameters
 {
    
    console.log(num1+num2);
}

addTwoNumbers(3,4) // putting two arguments 

// but there is a better way to do the same
function addTwoNumbersSec(num1,num2) // here num1 and num2 are parameters
 {
    result = num1+num2
    return result
    console.log("hello");// after result returning there is nothing to execute so this will not printable

    /* or simply we can write
        return num1+num2
    instade of
        result = num1+num2
        return result
    */
}
resultOfFunction = addTwoNumbersSec(22,4)
console.log(`result is ${resultOfFunction}`)// no printing of hello

function userLogInMessage(username){
        if(username === undefined ){
            return "please enter a username"
        }
    return `${username} just loggedin`
}

console.log(userLogInMessage("Niroj"));//Niroj just loggedin
console.log(userLogInMessage(""));// just loggedin
console.log(userLogInMessage());// please enter a username // since the argument is nothing



