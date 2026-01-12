//function declaration
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15

//function expression
const multiply = function (a, b) {
  return a * b;
};
//arrow function
const subtract = (a, b) => a - b;   
const adder = (a, b) => a+b;
console.log(adder(5, 10)); // 15
console.log(multiply(5, 10)); // 50
console.log(subtract(10, 5)); // 5
console.log("\n");

//callback function
function hello(){
    console.log("Hello World");
}
function greet(a,b){
    console.log(a);
    b();

}
greet(3,function(){
    console.log("callback function");
})//higher order function
greet("Hi", hello); // Hi Hello World

//anonymous function a function without a name
//setTimeout is a built-in function that executes a function after a specified delay (in milliseconds)

const greeting = function(name) {
    console.log("Hello " + name);
}

setTimeout(function(){
    console.log("This is an anonymous function");
},2000);
setTimeout(() => {
    console.log("This is an arrow function");
}, 3000);

//IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("This is an IIFE");
})();