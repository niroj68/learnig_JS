// Immediately Invoked Function Expression (IIFE)

(function chai () {
    // Named IIFE
    console.log("DB is connected");
})() ;

// global scope pollution , to remove the polution we user IIFE
// function is wraped under bracket 
// dont forget to use ; after () in IIFE to avoid error
// IIFE work as function

((name) => {
    // without Named IIFE
    console.log(`Hello my name is ${name}, I am logged in`)
})("Niroj");