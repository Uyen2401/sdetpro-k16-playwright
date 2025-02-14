//Naming covention
// Reserved keywords
// camleCase, snake_case, PascalCase
let myNum1 = 3;
let myNum2 = 4;
const PI_NUMBER = 3.14;

// Right operand and left operand
let result = myNum1 + myNum2; // Resolved -> 3

console.log('Total result: ' + result + 1); //Total result: 31
console.log('Total: ' + (result + 1)); //Total result: 4

//String/template/literal (`:)
// [`]: backtick
console.log(`Total result: ${result + 1} `); //Total result: 4

// Forward slash
result = 5 % 2;
console.log(`5%2: ${result}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`);

//Rounding
let roundingNearest = Math.round(9 / 2);
console.log(`roundingNearest: ${roundingNearest}`); //Return: 5

let roundingFloor = Math.floor(9 / 2);
console.log(`roundingFloor: ${roundingFloor}`); //Return: 4

let roundingCeil = Math.ceil(9 / 2);
console.log(`roundingCeil: ${roundingCeil}`); //Return: 5

result = 10 / 3;
let toFixedNumber = result.toFixed(3);
console.log(`toFixedNumber: ${toFixedNumber}`); //Return: 3.333

let multi = 3 ** 2; //^
console.log(`multi: ${multi}`);
