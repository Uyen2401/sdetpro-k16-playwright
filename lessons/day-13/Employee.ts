export class Employee {
  private _name: string;
  private _salary: number;

  constructor(name: string, salary: number) {
    this._name = name;
    this._salary = salary;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    this._salary = salary;
  }
}
