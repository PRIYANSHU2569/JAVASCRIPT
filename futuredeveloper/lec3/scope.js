var a = 10;
console.log(a);
{
    var a = 20; // var is function-scoped, so this affects the outer 'a'
    console.log(a); // 20
}
function test(){
    var a = 30; // 'a' is scoped to this function
    console.log(a); // 30
}       
test();
console.log(a); // 20, because the outer 'a' was changed by the block above
//global scope -> function scope -> block scope
// In JavaScript, 'var' is function-scoped, while 'let' and 'const' are block-scoped.

let b = 100;
console.log(b); // 100
{
    let b = 200; // 'b' is scoped to this block
    console.log(b); // 200
}   
console.log(b); // 100, the outer 'b' remains unchanged

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 10;
//temporal dead zone (TDZ) - The time between the block scope is created and the variable is declared. Accessing the variable in this zone will result in a ReferenceError.
