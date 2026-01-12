// Hoisting in JavaScript

/* Hoisting is a JavaScript mechanism where variables and function 
declarations are moved to the top of their containing scope during the 
compile phase before code execution.
*/

// Example of Hoisting with functions and variables
// Here, the function greet is hoisted, so it can be called before its declaration.
// However, the variable b is hoisted but not initialized, so it will be undefined if accessed before its declaration.


var a = 10;
console.log(a);
greet();
function greet(){
    console.log("good morning");
}
// greet();
console.log(b);
var b = 20;
console.log(b);
