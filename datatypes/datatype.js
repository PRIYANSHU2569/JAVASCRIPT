//prmitive data types
var num = 10; //number
var str = "hello"; //string
var bool = true; //boolean
var n = null;
var u ;

console.log("datatype of num is ", typeof num);
console.log("datatype of str is ", typeof str);
console.log("datatype of bool is ", typeof bool);
console.log("datatype of n is ", typeof n);
console.log("datatype of u is ", typeof u);

console.log("value of num is ", num);
console.log("value of str is ", str);
console.log("value of bool is ", bool);
console.log("value of n is ", n);
console.log("value of u is ", u);
//differnce between null and undefined
//null is an assignment value. It can be assigned to a variable as a representation of no value
//undefined means a variable has been declared but has not yet been assigned a value

var a = 43452486247634675875862462423452345234523452345234523452345234n; //bigint
console.log("datatype of a is ", typeof a);
console.log("value of a is ", a);

//non-primitive data types
var arr = [1, 2, 3, 4, 5]; //array
var obj = {name: "john", age: 30}; //object
function greet() { //function
    console.log("hello");
}
console.log("datatype of arr is ", typeof arr);
console.log("value of arr is ", arr);
console.log("datatype of obj is ", typeof obj);
console.log("value of obj is ", obj);
console.log("datatype of greet is ", typeof greet);
greet();
console.log("value of greet is ", greet);




