class MethodOverloading {
  //   static add(a, b) {
  //     return a + b;
  //   }
  //   static add(a, b, c) {
  //     return a + b + c;
  //   }

  //rest parameters
  //   static add(...nums) {
  //     let sum = 0;
  //     for (let num of nums) {
  //       sum += num;
  //     }
  //     return sum;
  //   }

  static add(factor, anotherThing, ...nums) {
    return nums.map((num) => num * factor);
  }
}

const result2 = MethodOverloading.add(1, 2);
const result3 = MethodOverloading.add(1, 2, 3);
console.log(result2);
console.log(result3);

// static method

class ArrayHelper {
  static filterNumber(array, isEven) {
    if (isEven) {
      return array.filter((num) => num % 2 === 0);
    } else {
      return array.filter((num) => num % 2 !== 0);
    }
  }
}

let targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isEven = true;
const evenNumbers = ArrayHelper.filterNumber(targetArray, isEven);
const oddNumbers = ArrayHelper.filterNumber(targetArray);

console.log(evenNumbers);
console.log(oddNumbers);
