import Employee from "./Employee";
export default class PartTimeEmployee extends Employee {
    
    constructor() {
        super(5 * 1000);
    }
    
    setBonus(): void {
        this.bonus = 0;
    }
}