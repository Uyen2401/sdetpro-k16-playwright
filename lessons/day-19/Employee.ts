export default abstract class Employee {

  protected salary: number;
  protected bonus!: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  //Strong force IS-A relationship
  protected abstract setBonus(): void;

  public getBonus(): number {
    return this.bonus;
  }
}
