// Type: Function Declaration
function add(a, b) {
  return a + b;
}

// Type: Function Expression
const add_ = function (a, b) {
  return a + b;
};

// Type: Arrow Function
const arrowAddNumbers = (a) => console.log(a);

// lexical this binding

// Object literal
// Lexical this binding
const person = {
  name: 'Join',
  age: 30,
  sayHello: function () {
    satTimeout(() => {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }, 2 * 1000);
  },
};

person.sayHello();

const array = [1, 2, 3, 4, 5];
const oddNums = array.filter((num) => num % 2 !== 0);
