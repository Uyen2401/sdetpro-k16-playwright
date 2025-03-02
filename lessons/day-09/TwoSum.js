/**
 * Two sum
 * [3,7,22,1], target number:8
 * ->[1,3]
 */

// Brute force
/**
 * outer loop index 0 -->
 *   firstNum
 *   inner loop index + 1 -> l-1
 *     if(firstNum + current === target)
 *       return[firstIndex, secondIndex]
 * return []
 */
// Time Complexity: 0n^2

const givenArray = [3, 7, 22, 1];
const targetNum = 8;
let indices = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices);

function findIndicesUsingBruteForce(array, targetNum) {
  for (let firstIndex = 0; firstIndex < array.length - 1; firstIndex++) {
    const firstNum = array[firstIndex];
    for (let secondIndex = 0; secondIndex < array.length; secondIndex++) {
      const secondNum = array[secondIndex];
      if (secondNum === targetNum - firstNum) {
        return [firstIndex, secondIndex];
      }
    }
  }
  return [];
}
