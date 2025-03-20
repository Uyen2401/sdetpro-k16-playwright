import Employee from './Employee';

export default class EmployeeController {
  static getTotalSalary(employeeList: Employee[]): number {
    let totalSalary = 0;
    for (const emp of employeeList) {
      totalSalary += emp.getSalary() + emp.getBonus();
    }
    return totalSalary;
  }
}
