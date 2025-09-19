var a = 10;
if (a > 5) {
    console.log("a is greater than 5");
}
else {
    console.log("a is not greater than 5");
}

a = 30;
if (a > 5) {
   if (a < 10) {
         console.log("a is between 5 and 10");
    } else {
            console.log("a is 10 or greater");
    }
}

//truthy and falsy values
//falsy values: false, 0, -0, 0n, "", null, undefined, NaN
//truthy values: All values that are not falsy are truthy.
if ("") {
    console.log("This is truthy");
}
else {
    console.log("This is falsy");
}   
if (null) {

    console.log("This is truthy");
}
else {
    console.log("This is falsy");
}

if (undefined) {
    console.log("This is truthy");
}
else {
    console.log("This is falsy");
}
if (NaN) {
    console.log("This is truthy");
}
else {

    console.log("This is falsy");
}
if (0) {
    console.log("This is truthy");
}
else {
    console.log("This is falsy");
}