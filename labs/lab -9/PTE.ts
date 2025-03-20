import Employee from "./Employee";
export default class FTE extends Employee {
    constructor(name: string) {
        super(name, 50 * 1000);

    }

    setBonus(): void {
        this.bonus = 1000;
    }
}