class SalaryController {
    //default constructor
    // FP
    getTotalSalary(employList){
        let totalSalary = 0;
        for (const employee of employList){
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}

model.exports = SalaryController;