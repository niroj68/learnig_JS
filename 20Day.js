/* 
Global execution context created after/along the code is written in JS // doesnot matter if it contain any values
function execution context created along with function block
    -=//browser nodejs bun dnode each has different kind of rule on execution context so this value will not be same in these 4  \\=-
    browser show window object is the value of this
    work in threads
[another execution context is Eval mongosDocumentaion
property of global object]

the JS code created with :
(i)memory creation phase (creation phase) = alocation of memory
(ii)execution phase () = execution or operation over alocated memory or value

*/

// for example:
// variable diclared in global execution
let val1 =  10 // it is memory creation phase first store undefined by default in val1 same in val2
let val2 = 5   
function addNum(num1, num2){ // this entire funcion is addNum defination
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2) // same global exection declaring variable as undefind by default and so result2 this all happed in memory phase 
// in execution phase after alocation or declaration of memory the value will be asinged as writted in line number 24)
// the addNum creat another exectuon context and new variable environment and here the memory phase and execution phase occured again
//memory phase create val1 and val2 and total as undefined by default
//then execution phase starts num1 assigned as 10 and num2 as 5 and total as 15
// the total will return in parant execution context or global execution context
// after these entire process the sandbox created for addnum in line 24 as new variable environment and execution thread will be deleted by default

let result2 = addNum(10, 2)
// here again in line 32 the same thing happed as by default set undefind as declard the varianle result 2 in global execution context as execution phase
// now the addNum again creat a sandbox as new variable encironment and execution thread
// now again memory phase and execution phase happend as line 24

console.log(result1);
console.log(result2);

// call stack follow Lifo last in first out 