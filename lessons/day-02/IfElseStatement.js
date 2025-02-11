const readline = require('readline-sync');

let arrivalTime = readline.question('Arrival time: ');
let isHeOnTime = (Number(arrivalTime) === 7);

// >, <, >=, <=, ==, ===, !=, !==
// !: to revert a boolean value -> (ex: !true == false)

if (isHeOnTime) {
    console.log("Let's talk !");
}else {
    console.log("Write a letter....");
}

if (!isHeOnTime) {
    console.log("Write a letter....");
}else {
    console.log("Let's talk !");
}

/**
 * 1. In the root dir: npm init -y
 * 2. npm i readline-sync
 */


// Ternary Operator: Toán tử ba ngôi
let msg = isHeOnTime ? "Let's talk !" : "Write a letter....";
console.log(msg);

// ES6: Arrow function