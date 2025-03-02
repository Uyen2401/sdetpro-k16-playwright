/**
 * ****************************
 * Support functions: 
 * Service functions: Utltility function
 * export functions: use common JS module
 * ****************************
 */
let isEvenNumb_ = isEvenNumb(3);
console.log(`is 3 even number: ${isEvenNumb_}`);

function isEvenNumb(number) {
    console.log(number);
    if (number == 0) {
        return false;
    } else {
        return number % 2 === 0;
    }
}


function isOddNumb(number) {
    console.log(number);
    if (number == 0) {
        return false;
    } else {
        return number % 2 !== 0;
    }
}

// module.exports = { isEvenNumb, isOddNumb };
module.exports = {
    teo:isEvenNumb, 
    ti:isOddNumb
};