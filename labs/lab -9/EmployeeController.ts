import Employee from "./Employee";

export default class EmployeeController{
    static getTotalSalary(employees: Employee[]): number{
        let totalSalary = 0;
        for(let employee of employees){
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }
    static getMinSalary(employees: Employee[]): Employee{
        let minSalaryEmp = employees[0];
        for(let employee of employees){
            if(employee.getSalary() < minSalaryEmp.getSalary()){
                minSalaryEmp = employee;
            }
        }
        return minSalaryEmp;
    }
    static getMaxSalary(employees: Employee[]): Employee{
        let maxSalaryEmp = employees[0];
        for(let employee of employees){
            if(employee.getSalary() > maxSalaryEmp.getSalary()){
                maxSalaryEmp = employee;
            }
        }
        return maxSalaryEmp;
    }
}