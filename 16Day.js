// ================SCOPE====================
// {} it is a scope for Functions and loop but not for Object
// since in Object diclaration is different from loop and function 

if (true) {
    console.log("hello,world!");

    // inside the 'if {} ' is block scope
}

// outside of 'if {} ' is global scope

// try to avoid the use of ver since it create some bugs in case of scope uses

var r = 33
let e = 22

if (true){
    let u = 2
    var r = 32
    let e = 21
    console.log(r,e);//output: 32 21
}
console.log(r,e,);//output: 32 22 

// here the variable r does not obey the scope since we used 'var' keyword 
// if you diclar a variable wihout any keyword ,result will be same as 'var'

console.log(u); // the value is diclared inside of block scope not a global variable

// the idea of scope and keywords like 'let' & 'const' help us to prevent from a lot of bugs 

// the scope of console in a browser is different from the nodeJs scope
