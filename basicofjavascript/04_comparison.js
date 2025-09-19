// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// this type of conversion crete a problem in any situation we avoid this type conversion
console.log(null > 0); //comparison convert the null to 0 thats why here the answer is false
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  it not check only value it also check datatype it isalso called strict check


console.log('2' === 2);