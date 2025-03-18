const {
    createArray,
    isSortedMinToMax,
    merge2SortedIntegerArray
} = require(`../../lessons/util/ArrayHandler.js`);

// let array1 = [1];
// let array2 = [-3, 0, 2, 100];
let array1 = createArray();
let array2 = createArray();
console.log(`Array 1:`);
console.log(array1);
console.log(`Array 2:`);
console.log(array2);
let isSortedMinToMaxArray1 = isSortedMinToMax(array1);
let isSortedMinToMaxArray2 = isSortedMinToMax(array2);

if (!isSortedMinToMaxArray1 || !isSortedMinToMaxArray2) {
    console.log("The given array is not sorted min to max so cannot merge 2 given arrays");
} else {
    let resultArray = merge2SortedIntegerArray(array1, array2);
    console.log(`Expected output:`);
    console.log(resultArray);
}