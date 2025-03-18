const readline = require('readline-sync');
const randomNumber = generateRandomNumber();
console.log(`Random = ${randomNumber}`);
let guessingTime = 0;
do {
    let userNum = getUserNum();
    if (userNum === randomNumber) {
        console.log('Hooray!');
        break;
    }
    guessingTime++;

} while (guessingTime < 3);

if (guessingTime === 3) {
    console.log('Chuc ban may man lan sau!');
} else {
    console.log('See you again!');
}

function getUserNum(){
    return Number(readline.question('Please enter your number: '))
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 10 + 1);
}