function sayMyName(){
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");

} 
// sayMyName();
// console.log(sayMyName());
// function addTwoNum(num1, num2){
//     console.log( num1 + num2);
// }
// console.log(addTwoNum(4, 5));
function addTwoNum(num1, num2){
    return num1 + num2;
}

const result = addTwoNum(4, 5);
console.log("Reault :" ,result);
// console.log(addTwoNum(14, "5"));

function loginUserMessage(username="sample"){
    if(!username){
        return "Please enter a valid username";
    }
    return `Hi ${username} , you are logged in`;
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh" + "kumar"));
// console.log(loginUserMessage("hitesh" + 3));
// console.log(loginUserMessage("hitesh" + "kumar" + 3));  
// console.log(loginUserMessage()); // Hi undefined , you are logged in
console.log(loginUserMessage("")); // Hi  , you are logged in
