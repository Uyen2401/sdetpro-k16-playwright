// continue, break

let array = [1, 2, 3, 4, 3, 5];
let targetIndex = -1;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 7){
        targetIndex = index;
        break;
    }
}

if (targetIndex < 0){
    console.log('No number found!');
} else {
    console.log(`The number first found at index ${targetIndex}`);
}

// Continue
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 3){
        continue;
    } else{
        console.log(element);
    }
}

// An array of POSITIVE integer number, numbers 3 among them. 
// Increased up to 4 for the rest of numbers.
increaseValue(array);
console.log(array);
function increaseValue(array){
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        // if (value === 3){
        //     continue;
        // } else {
        //     array[index] = array[index] + 3;
        // }

        if (value !== 3){
            array[index] = array[index] + 3;
        }
    }
}