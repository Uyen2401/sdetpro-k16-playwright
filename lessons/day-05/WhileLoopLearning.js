const readline = require("readline-sync");
let index = 0;
while (index < 5) {
    console.log(index);
    index++;
}


/**
 * --- LUCKY NUMBER GAME---
 * 1. Guess a number
 * 0. Exit
 */

let isStillPlaying = true;
 while (isStillPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if (userOption === 0){
        // Confitional change trigger
        isStillPlaying = false;
    } else if (userOption === 1){
        let randomNumber = Math.floor(Math.random() * 10 ) + 1;
        console.log(`Lucky number: ${randomNumber}`);
    } else {
        console.log('Nhap lui roi ban oi!');
    }
}

console.log("See you again!");

function printGameMenu(){
    console.log(`
        * ---- LUCKY NUMBER GAME----
        * 1. Guess a number
        * 0. Exit
        `);
}

function getUserOption(){
    return Number(readline.question("Please input your option:"));
}