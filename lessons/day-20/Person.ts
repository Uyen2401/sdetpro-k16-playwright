export default class Person {
  protected name: string | undefined;
  protected age: number | undefined;

//   constructor(name: string, age: number) {
//     this.validateAge;
//     this.name = name;
//     this.age = age;
//   }

  //Service method
  protected setAge(age: number) {
    this.validateAge(age);
    this.age = age;
  }

  //Support method
  private validateAge(age: number) {
    if (age < 0) {
      throw new Error('Age must be greater than 0');
    }
  }
}
