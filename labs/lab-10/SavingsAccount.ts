import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {
    constructor(accountNumber: number, accountHolderName: string, balance: number) {
        super(accountNumber, accountHolderName, balance);
    }

    public withdraw(amount: number): void {
        if (this.balance - amount >= 0){
            this.balance -= amount;
        } else {
            console.log("Your saving account balance is not enough to withdraw");
        }
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }

}