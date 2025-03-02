//Class: is a template/blueprint to build an object

class Person {
  //Determine Properties
  //Constructor: is a special method to initialize an object

  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
  //1. getter: method return current value of 1 of property of object

  //Method 1
  //   getName() {
  //     return this._name; // getter: sinh ra de tra ve gtri noi tai
  //   }

  // Method 2
  get name() {
    return this._name;
  }
  //   2.Setter: làm thay đổi giá trị hiện tại /  Change value
  //   setName(name) {
  //     this._name = name;
  //   }

  set name(name) {
    this._name = name;
  }
}

let teo = new Person('teo', 18); // invoke the constructor to initialize /create an object from the class
// teo.setName('TeoNguyen');
teo.name = 'Teo Le'
// let name = teo.getName();
let name = teo.name;
console.log(name);
