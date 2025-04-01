export default abstract class BankingAccount {
    protected accountNumber: number;
    protected accountHolderName: string;
    protected balance: number;

    constructor(accountNumber: number, accountHolderName: string, balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.validateAmount(balance);
        this.balance = balance;
    }

    protected abstract withdraw(amount: number): void;
    protected abstract deposit(amount: number): void;
    protected abstract getBalance(): number;

    public getAccountNumber(): number {
        return this.accountNumber;
    }

    public getAccountHolderName(): string {
        return this.accountHolderName;
    }

    private validateAmount(amount: number): void {
        if (amount < 0) {
            throw new Error("Amount must be greater than 0");
        }
    }
}