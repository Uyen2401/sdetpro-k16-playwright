/**
 * ****************************
 * Importing Required Modules
 * ****************************
 */
// ussually the param name same file util name
// c1
// const UtilMethods = require('./UtilMethods.js');
// c2
// const { isEvenNumb } = require('./UtilMethods.js');
// c3
const {
    isEvenNumb,
    isOddNumber
} = require('./UtilMethods.js');

// let isEvenNumb_=isEvenNumb(3);
// console.log("Is 3 even number: " + isEvenNumb_);

let userInput = getUserInput();
let isEvenNumber = isEvenNumb(userInput);

if (isEvenNumber) {
    console.log(`\t${userInput} is even number`);
} else {
    console.log(`\t${userInput} is odd number`);
}
function getUserInput() {
    return 3;
}