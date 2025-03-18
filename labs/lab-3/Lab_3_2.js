const {
    createArray,
    findMin,
    findMax
} = require(`../../lessons/util/ArrayHandler.js`);

//array = [-1, -2, 0, 0, -19, 7]
let array = createArray();
console.log(`Input:`);
console.log(array);
let min = findMin(array);
let max = findMax(array);

if (min === max) {
    console.log("There is no min/max value. All elements in the array has the same value");
} else {
    console.log(`Minimum: ${min}`);
    console.log(`Maximum: ${max}`);
}