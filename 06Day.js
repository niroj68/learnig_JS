// ++++++++++++++++++++++ MEMORY +++++++++++++++++++++
/*two type of memory in JS 
    ->Stack
    ->Heap

Stack used in Primitive data type(it provides copy)
heap used in Non premitive data type(original value referance)

*/

//Draw.io extension is userd for "06Days.drawio" dont forget to install to see the graphical idea of the concept

let myName = "Niroj"
let myNickName = myName
myNickName = "Chiku"

console.log(myName)
console.log(myNickName)

/* 
from this above example we get the idea of stack that it copy the value of myName variable in myNickName 
not like math 'LHS=RHS' (not assigning )
if we change something in myNickName it does not affect myName variable
*/


let userA = {
    name: "userA",
    email: "userB@gmail.ocm"

}
console.log(userA)

let userB = userA

userB.name = "userB";

console.log(userB);

console.log(userA.name)
console.log(userB.name)

/*
from the above example we get the change of userA variable affect the userB i.e. heap
because the both variable take the referance of Data 
like set A has two variable who are related to set B one value
if the value change the entire relation chane ( i took the concept from mathematics Relation Functions )
*/

// changing the git user from here
