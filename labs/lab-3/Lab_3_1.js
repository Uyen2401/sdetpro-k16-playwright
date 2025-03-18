const {
    createArray,
    countOddNumber,
    countEvenNumber
} = require(`../../lessons/util/ArrayHandler.js`);

let array = createArray();
console.log(`Input:`);
console.log(array);
let oddCount = countOddNumber(array);
let evenCount = countEvenNumber(array);

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);