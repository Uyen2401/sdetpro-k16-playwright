import { Employee } from './Employee';

export class SalaryController {
  //default constructor
  // FP
  getTotalSalary(employList:Employee []): number {
    let totalSalary = 0;
    for (const employee of employList) {
      totalSalary += employee.salary;
    }
    return totalSalary;
  }
}
