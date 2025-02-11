// Variable
// =  assignment operand
//Declaration
let a = 1;

//X re-declaration is NOT allowed
// Re-assign is acceptable
a = 2;

// Constant
const PI_NUMBER = 3.14;
// PI_NUMBER = 3.15; ->TypeError: Not allowed to reassign

console.log(Number.MAX_VALUE); //return: 1.7976931348623157e+308 (e+308 = *10^38)
console.log(Number.MIN_VALUE); //return: 5e-324

//check the type
console.log(typeof (1.7976931348623157e308 + 1)); // number
console.log(Infinity > 1.7976931348623157e308); // true
console.log(0.1 + 0.2); //0.30000000000000004

// Boolean (True or False)
let amIright = false;
console.log(typeof amIright); //boolean
