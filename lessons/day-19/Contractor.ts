import Employee from './Employee';

export default class Constractor extends Employee {
  constructor() {
    super(10 * 1000);
  }

  setBonus(): void {
    // TODO: provide details implementation
    this.bonus = 0;
}
}
