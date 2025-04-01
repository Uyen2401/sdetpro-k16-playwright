import SavingsAccount from "./SavingsAccount";
import CheckingAccount from "./CheckingAccount";

let savingAcc1 = new SavingsAccount(601704060653848, "Alex", 1000);
savingAcc1.deposit(100);
savingAcc1.withdraw(1100);
savingAcc1.withdraw(200);
console.log("Checking acc1: " + savingAcc1.getBalance());

let checkingAcc1 = new CheckingAccount(1, "Sonus", 1000);
checkingAcc1.deposit(700);
checkingAcc1.withdraw(100);
checkingAcc1.withdraw(1551);
console.log("Checking acc1: " + checkingAcc1.getBalance());
checkingAcc1.withdraw(50);

