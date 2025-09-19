// //Arithmetic Operators
// let a = 10;
// let b = 5;
// console.log("Addition: " + (a + b)); // 15
// console.log("Subtraction: " + (a - b)); // 5
// console.log("Multiplication: " + (a * b)); // 50
// console.log("Division: " + (a / b)); // 2
// console.log("Modulus: " + (a % b)); // 0        
// console.log("Exponentiation: " + (a ** b)); // 100000   
// console.log("Increment: " + (++a)); // 11
// console.log("Decrement: " + (--b)); // 4    
// console.log("\n");


// //Comparison Operators  

// let x = 10;
// let y = '10';

// console.log("Equal to (==): " + (x == y)); // true
// console.log("Not equal to (!=): " + (x != y)); // false
// console.log("Strict equal to (===): " + (x === y)); // false
// console.log("Strict not equal to (!==): " + (x !== y)); // true
// console.log("Greater than (>): " + (x > 5)); // true
// console.log("Less than (<): " + (x < 5));   // false
// console.log("Greater than or equal to (>=): " + (x >= 10)); // true
// console.log("Less than or equal to (<=): " + (x <= 5)); // false

// //difference between == and === // == checks for value equality with type coercion, while === checks for both value and type equality without type coercion.
// console.log("Using == : " + (x == y));
// console.log("Using === : " + (x === y));

// //coercion example
// //defination of coercion: Coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).
// //In JavaScript, coercion occurs in various scenarios, such as during comparisons or arithmetic operations involving different data types.

// console.log(40*"5");//coercion of string to number by javascript itself
// console.log(40*parseInt("5")); //conversion of string to number using parseInt by youself
// console.log("\n");      

//unary Operators
var a = 10;
console.log(a++); // 10 (returns the value before incrementing)//postfix
console.log(++a); // 12 (increments first, then returns the value)//prefix
console.log(a--); // 12 (returns the value before decrementing)//postfix
console.log(--a); // 10 (decrements first, then returns the value)//prefix
console.log("\n");

var b = "5";
var c = "20";
console.log(b + c); // "520" (string concatenation)
console.log(+b + +c); // 25 (unary plus converts strings to numbers)
console.log(-b);
console.log(+b); // 5 (unary plus converts string to number)
console.log(!true); // false (logical NOT)
console.log(!false); // true (logical NOT)  
console.log("\n");


// //Logical Operators
let p = true;

let q = false;

console.log("Logical AND (&&): " + (p && q)); // false
console.log("Logical OR (||): " + (p || q)); // true        
console.log("Logical NOT (!): " + (!p)); // false
var age = 20;
var hasID = true;
var isAdult = (age >= 18) && hasID; // true if age is 18 or older and has ID
console.log("Is Adult: " + isAdult); // true
console.log("\n");
//bitwise Operators\
let m = 5; // Binary: 0101
let n = 3; // Binary: 0011
console.log("Bitwise AND (&): " + (m & n)); // 1 (Binary: 0001)

console.log("Bitwise OR (|): " + (m | n)); // 7 (Binary: 0111)
console.log("Bitwise XOR (^): " + (m ^ n)); // 6 (Binary: 0110)

console.log("Bitwise NOT (~): " + (~m)); // -6 (Binary: 1010 in two's complement)
console.log("Left Shift (<<): " + (m << 1)); // 10 (Binary: 1010)
console.log("Right Shift (>>): " + (m >> 1)); // 2 (Binary: 0010)
console.log("Zero-fill Right Shift (>>>): " + (m >>> 2));// explain this operator 


console.log("\n");
// //Ternary Operator
let age1 = 18;
let canVote = (age1 >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can Vote: " + canVote); // Yes, can vote

// //Assignment Operators
let num = 10;
console.log("Initial Value: " + num); // 10 
num += 5; // num = num + 5
console.log("After += 5: " + num); // 15
num -= 3; // num = num - 3
console.log("After -= 3: " + num); // 12
num *= 2; // num = num * 2
console.log("After *= 2: " + num); // 24
num /= 4; // num = num / 4
console.log("After /= 4: " + num);// 6
num %= 4; // num = num % 4
console.log("After %= 4: " + num); // 2
num **= 3; // num = num ** 3
console.log("After **= 3: " + num); // 8
console.log("\n");
// //String Operators

 
