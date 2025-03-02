/**
 * ****************************
 * CRUD Operations on Arrays
 * ****************************
 */
 

let myArray = [1, 2, 3, 4, 5];
console.log(`\nOriginal Array length: ${myArray.length}`);
// read
for(let index=0; index < myArray.length; index++) {
    console.log(`my Array ${myArray[index]}`);
}
//  Undefine hole
myArray.push(6);
myArray.push([7,8]);
console.log(myArray);

let removevalue = myArray.pop();
console.log(`Remove value: ${removevalue}`);
console.log(`current array ${myArray}`);