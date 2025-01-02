// console.log("hello")

const accountId = 133244 // const for constant the container dont allow you to change in future
let accountEmail = "nirojnaik68@gmail.com"
var accountPassword = "2356" // dont use var
accountCity = "Baripada" // dont do this even if JS allow to diclar in such manner but not a good manner  
let accountState ; // bydefault java script recognized as undefind, as it is not assinged any value
// accountId can not be change

// accountId = 2

console.log(accountId);
// the output will be error for changing constant value of accountId

accountEmail = "nirojnaik12@gmail.com"
accountCity = "Bhubaneswer"
accountPassword = "3245"
// every thing will be changed accordingly

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
// concole.table() create a table for output

/*
prefer not to use ver due to issue in block and functional scope
scope is {}
var is universal variable which dont recognize scope and block
let recognize the boundary of scope and block
SO USE let TO PREVENT FROM FUTURE ERROR
*/

