import Employee from "./Employee";
export default class FTE extends Employee {
    constructor() {
        super(20 * 1000);
    }

    setBonus(): void {
        this.bonus = 1 * 1000;
    }
}