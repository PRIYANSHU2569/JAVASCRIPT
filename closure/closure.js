function couter() {
    var count = 0; // private variable
    return function() { // closure
        count++;
        return count;
    };
}  
var increment = couter();
console.log(increment());

console.log(increment());
console.log(increment());
console.log(increment());   
//lexical environment
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
// In this example, the inner function returned by couter() retains access to the count variable, allowing it to increment and return its value each time it's called.  
// Closures are commonly used for data encapsulation, creating private variables, and implementing function factories.
// Closures can also be used to create function factories, where a function generates other functions with specific behaviors based on the parameters passed to the factory function.
