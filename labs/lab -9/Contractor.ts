import Employee from "./Employee";
export default class Contractor extends Employee {
    constructor(name: string) {
        super(name, 40 * 1000);
    }

    setBonus(): void {
        this.bonus = 0;
    }
}