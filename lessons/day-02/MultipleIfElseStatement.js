/**
 * <18: Khong ban!
 * 18 -> 55: Unlimited!
 * 56 ->: 2 chai.
 */

const readline = require('readline-sync');
let clientAge = readline.question('Your age:  ');

/**
 *  redundant logic: clientAge >= 18 && clientAge <= 55
 */

if (clientAge < 18) {
  console.log('Không bán!');
  if (clientAge < 14) {
    console.log('Calling 911');
  }
} else if (clientAge <= 55) {
  console.log('Unlimited!');
} else {
  console.log('2 chai.');
}

/**
 * &&:
 * ||
 */

//BitWiseOperatorNumber
console.log('4&5: ', 4 & 5);
console.log('4|5: ', 4 | 5);

//BitWiseOperator

if (getFirstNumber() != 0 || getSecondNumber() != 0) {
  console.log('All nums are not zero!');
}

function getFirstNumber() {
  console.log('Calling 1st function....');
  return 0;
}

function getSecondNumber() {
  console.log('Calling 2nd function....');
  return 2;
}
