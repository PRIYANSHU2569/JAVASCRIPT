// function sayMyName(){
//     console.log("H");
//     console.log("H");
//     console.log("H");
//     console.log("H");
//     console.log("H");
//     console.log("H");
//     console.log("H");

// } 
// // sayMyName();
// // console.log(sayMyName());
// // function addTwoNum(num1, num2){
// //     console.log( num1 + num2);
// // }
// // console.log(addTwoNum(4, 5));
// function addTwoNum(num1, num2){
//     return num1 + num2;
// }

// const result = addTwoNum(4, 5);
// console.log("Reault :" ,result);
// // console.log(addTwoNum(14, "5"));

// function loginUserMessage(username="sample"){
//     if(!username){
//         return "Please enter a valid username";
//     }
//     return `Hi ${username} , you are logged in`;
// }
// // console.log(loginUserMessage("hitesh"));
// // console.log(loginUserMessage("hitesh" + "kumar"));
// // console.log(loginUserMessage("hitesh" + 3));
// // console.log(loginUserMessage("hitesh" + "kumar" + 3));  
// // console.log(loginUserMessage()); // Hi undefined , you are logged in
// console.log(loginUserMessage("")); // Hi  , you are logged in


// function calculateCartPrice(val1, val2 ,...num){
   
//     return num;
//     // return num;
// }
// console.log(calculateCartPrice(20, 30, 40, 50, 60));

// 
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));