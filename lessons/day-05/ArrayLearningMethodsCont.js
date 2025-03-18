let myArray = [1, 7, 3, 4];

// DELETE | splice
let startIndex = 2;
let deleteIndex = 1;
let insertIndex = 10;

// let returnedValue = myArray.splice(startIndex, deleteIndex, insertIndex);
// console.log(returnedValue);
// console.log(myArray);
for (let index = 0; index < myArray.length; index++) {
    if (isOddNumber(myArray[index])){
        removeElementFromArray(myArray, index);
        index--;
    } 

    // if (myArray[index] % 2 !== 0){
    //     myArray.splice(index, 1);
    // } else{
    //     index++;
    // }
}
 console.log(myArray);

 function isOddNumber(number){
    return number %2 !== 0;
 }

 function removeElementFromArray(array, startIndex){
    const defaultDeleteCount = 1;
    array.splice(startIndex, defaultDeleteCount);
    return array;
 }