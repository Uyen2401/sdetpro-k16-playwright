import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {
    public minimumBalance: number = 50;
    constructor(accountNumber: number, accountHolderName: string, balance: number) {
        super(accountNumber, accountHolderName, balance);
    }

    public withdraw(amount: number): void {
        if (this.balance - amount >= this.minimumBalance){
            this.balance -= amount;
        } else {
            console.log("Your checking account balance is not enough to withdraw");
        }
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }

}