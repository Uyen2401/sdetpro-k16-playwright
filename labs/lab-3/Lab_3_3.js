const {
    createArray,
    sortMinToMax
} = require(`../../lessons/util/ArrayHandler.js`);

//let array = [-12, 34, 1, 16, 0, -100];
let array = createArray();
console.log(`Input:`);
console.log(array);
let resultArray = sortMinToMax(array);
console.log(`Expected output:`); 
console.log(resultArray); 
 