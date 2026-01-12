
//difference var and let and const
var a = 10;
var b = 20;
var c = a + b;
console.log("sum of a and b " ,c);


//Redeclaration and reassignment of var allow in javascript
var a = 30;
var a = 40; //redeclaration
a = 50; //reassignment
console.log("new value of a is ", a);

//let and const does not allow redeclaration
let d = 40;
d = 50; //reassignment is allowed in let
//let d = 60; //redeclaration is not allowed in let
console.log("new value of d is ", d);



const e = 70;   
//e = 80; //reassignment is not allowed in const
console.log("value of e is ", e);
//const e = 90; //redeclaration is not allowed in const
//const f; //const variable must be initialized at the time of declaration

//static typing is not available in javascript
//int a = 10; //not allowed in javascript
//float b = 20.5; //not allowed in javascript
//string c = "hello"; //not allowed in javascript

//dynamic typing is available in javascript
var g = 10; //number
console.log("value of g is ", g);
g = "hello"; //string
console.log("value of g is ", g);
g = true; //boolean
console.log("value of g is ", g);
g = 20.5; //float
console.log("value of g is ", g);
g = null; //null
console.log("value of g is ", g);
g = undefined; //undefined
console.log("value of g is ", g);



