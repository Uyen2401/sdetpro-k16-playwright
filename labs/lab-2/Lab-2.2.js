const readline = require('readline-sync');

let number = readline.question('Please input a number: ');

if (number >= 0) {
    if (number % 2 === 0) {
        console.log(`${number} is an even number`,);
    } else {
        console.log(`${number} is an odd number`);
    }
} else {
    console.log('You have input a negative number');
}