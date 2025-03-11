/**
 * ****************************
 * Array Learning Method
 * ****************************
 */

// Filter get all even number from array
// Higher order fucntion
// c1
/* let evenNumbers = myArray.filter(function (value, index, originalArray) {
    return value % 2 === 0;

})
console.log(evenNumbers);
console.log(myArray); */

// c2
/* let evenNumbers = myArray.filter(isEvenNumber);
let myArray = [1, 2, 3, 4, 5];
function isEvenNumber(value, index, originalArray) {
    return value % 2 === 0;
} 
    console.log(evenNumbers);
console.log(myArray);
*/

/**
 * ****************************
 * optimize code
 * ****************************
 */

const {teo} = require('./UtilMethods.js');
let myArray = [1, 2, 3, 4, 5];
let evenNumbers = myArray.filter(teo);
console.log(evenNumbers);
console.log(myArray);