//  Primitive datatype  in which you get the copy of  value  not get the refernce of datatype

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//javascript is dynamically typed because it isnot defined a datatype but it slower 
//typescript is  statically typed

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// symbol even you write same value you symbol but it treat as different value
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// false 

// const bigNumber = 3456543576654356754n  //(only add n at last it convert to bigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// interview question
/* 
Type of val               result
Undefined                   'undefined'
NULL                        "object"
Boolean                     "boolean"
Number                      "number"
String                      "string"

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), Heap (Non Primitive)

let youtube = "campuslife capture"
let anothername = youtube
anothername = 'chai aur code'
console.log(youtube);
console.log(anothername);


let userOne = {
    email :"priyanshugupta2569@gmail.com",
    uoi  :"priusdhsfjd"
}

let usertwo = userOne

usertwo.email= 'priyanshu23bce210228'
console.log(userOne.email);
console.log(usertwo.email);


