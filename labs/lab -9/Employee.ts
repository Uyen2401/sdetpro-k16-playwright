export default abstract class Employee{
    protected name: string;
    protected salary: number;
    protected bonus: number | undefined;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    getName(){
        return this.name;
    }

    getSalary(){
        return this.salary;
    }

    protected abstract setBonus(): void;

    getBonus(){
        return this.bonus;
    }

    toString(){
        return `Name: ${this.name}, Salary: ${this.salary}, Bonus: ${this.bonus}`;
    }
}