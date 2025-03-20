import FTE from "./PTE"
import EmployeeController from "./EmployeeController";
import Contractor from "./Contractor";

let FTE1 = new FTE('Full Time Employee 1')
let FTE2 = new FTE('Full Time Employee 2')
let FTE3 = new FTE('Full Time Employee 3')
let Contractor1 = new Contractor('Contractor 1')
let Contractor2 = new Contractor('Contractor 2')

let totalSalary = EmployeeController.getTotalSalary([FTE1, FTE2, FTE3, Contractor1, Contractor2])
console.log(`Total salary: ${totalSalary}`)
let minSalary = EmployeeController.getMinSalary([FTE1, FTE2, FTE3, Contractor1, Contractor2])
console.log(`Employee name ${minSalary.getName()} with min salary: ${minSalary.getSalary()}`)
let maxSalary = EmployeeController.getMaxSalary([FTE1, FTE2, FTE3, Contractor1, Contractor2])
console.log(`Employee name ${maxSalary.getName()} with max salary: ${maxSalary.getSalary()}`)