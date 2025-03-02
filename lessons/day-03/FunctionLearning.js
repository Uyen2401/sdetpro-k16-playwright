// Hàm là 1 đoạn code xử lý có thể trả về giá trị hoặc không, có thể nhận vào đối số hoặc không

// DRY: Don't Repeat Yourself
// SOLID: Single Responsility - Tính đơn nhiệm

// Funtion name: camelCase 
// Declare a function

// Method 01: [ Function Declaration ] method | hoisting (Gọi tên hàm trước khi định nghĩa)
const readline = require('readline-sync');

let userInputNum = getUserInputNum();
let inputNumber = convertToNumber(userInputNum);
evaluateEvenOrOddNumber(inputNumber);

function getUserInputNum(){
    let inputNum = readline.question('Your num: ');
    return inputNum;
}
function convertToNumber(str){
    return Number(str);
}
function evaluateEvenOrOddNumber(number){
    if (number % 2 == 0) {
        console.log("Odd number");
    } else {
        console.log("Even number");
    }
}

let returnedValue = functionName();
function functionName() {
    return 1;
}


// Method 02: [ Function Expression ] method | NO hoisting
const addNumber = function (firstNum, secondNum) {
    return firstNum + secondNum;
}
let sum = addNumber(1, 2);