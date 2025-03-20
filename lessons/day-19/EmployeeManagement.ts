import Contractor from "./Contractor";
import FTE from "./FTE";
import EmployeeController from "./EmployeeController";
import PartTimeEmployee from "./PartTimeEmployee";

const teo = new FTE();
const ti = new Contractor();
const tun = new PartTimeEmployee();
teo.setBonus();
ti.setBonus();
tun.setBonus();
const totalSalary = EmployeeController.getTotalSalary([teo, ti, tun]);
console.log(`Total Salary: `, totalSalary);
console.log(`Teo bonus:`,  teo.getBonus());
console.log(`Ti bonus: ${ti.getBonus()}`);
console.log(`Tun bonus: ${tun.getBonus()}`);