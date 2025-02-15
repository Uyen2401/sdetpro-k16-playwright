// Var - Hoisting là declare dâng lên but giá trị được giữ lại
/**
 * var myVariable; // Declaration is hoisted
 * console.log(myVariable);
 * myVariable = 1; / BUT assignment is remained
 * 
 * 
 */

console.log(myVariable);
var myVariable = 1;

/**
 * let myVariable; // Declaration is hoisted
 * console.log(myVariable);
 * myVariable = 1; / BUT assignment is remained
 * 
 * 
 */

console.log(myVariable);
let myVariable = 1;