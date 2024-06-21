// 1 - topics --> let , const and var 
// 2 - to check if the node js is installed properly or not , open terminal and write version --v 
// 3 - https://www.youtube.com/watch?v=yY0bKZNYmJs&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=4
// 4 - keywords have predefined meaning for the compiler
// 5 - console.log(<variable>);
// 6 - console.table([<variable 1>, <variable 2>,<variable 3)..........]); - can print all the variables in table format
// 7 - Difference between let and var
// 8 - we normally do not use var for declaring a variable as var did not understand what is the scope of a variable
// 9 - we use let as it understands the scope - modern way
// 10 - we have two types of comments in js (a) // single line (b)/*............*/ multiline comment
// 11 - can use the variable without declaring its type but should avoid this

const accountId=45432
let accountEmail="enigma.bluewater@gmail.com"
var accountPassword="12345"
console.log(accountId)
console.log(accountEmail)
accountCity="Jamshedpur" // this is possible but should avoid this way of using the variable without declaring it

// accountId=2

console.log(accountId);// printing one single variable
console.table([accountId,accountEmail,accountPassword,accountCity]);// printing multiple variables in table format

