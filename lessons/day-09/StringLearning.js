//1.Sub String
let strToBeCut = "https://sdetpro.com";

//Inclusive
let startIndex = 0;
// Exclusive
let endIndex = 5;

let subString = strToBeCut.substring(startIndex, endIndex);
console.log(subString);

//2.split
console.log(strToBeCut.split('://'))
