const user01 = {
    accountNumber: "2025001",
    routingNumber: "User_001",
    accountName: "Nguyen Thuy Uyen",
    balance: 100000
}

// Creating another Bank Account Object which clone from the previous one and update the accountNumber only
const user02 = JSON.parse(JSON.stringify(user01));
user02.accountNumber = "2025002";
user02.accountName = "Uyen Nguyen"

// Put them into ann array call: bankAccounts
const bankAccounts = [user01, user02];

const readline = require('readline-sync');
bankApp();

// Support function
function bankApp() {

    // Write a consolse interface app
    printConsoleInterfaceMenu();
    let userNumber = getUserNumber();
    switch (userNumber) {
        case 1:
            findAnAccount(bankAccounts);
            break;
        case 2:
            //updateBalance(bankAccounts);
            updateBalanceEnhancement(bankAccounts);
            break;
        case 0:
            break;
        default:
            console.log('Your task number is not on the list');
    }

    console.log('See you next time!');
}

function printConsoleInterfaceMenu() {
    console.log(
        `=== Banking application ===
    1. Find an account
    2. Update balance
    0. Exit the program
    `);
}
function getUserNumber() {
    return Number(readline.question('Please enter your option: '))
}

function findAnAccount(bankAccounts) {
    let accountNumber = readline.question('Please enter the account number you want to find: ');
    let foundBankAccount = findAccountByAccountNumber(bankAccounts, accountNumber);

    if (JSON.stringify(foundBankAccount) === '{}') {
        console.log(`The bank account with account Number = '${accountNumber}' is not found`);
    } else {
        console.log(`The bank account information is found:\n- Account Name: ${foundBankAccount.accountName}\n- Account Balance: ${foundBankAccount.balance}`);
    }
}

function findAccountByAccountNumber(bankAccounts, accountNumber) {
    // if account found, reassign foundAccount for the found one
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === accountNumber) {
            return bankAccount;
        }
    }
    return {};
}

function updateBalance(bankAccounts) {
    let accountNumber = readline.question('Please enter the account number you want to withdraw: ');
    let foundBankAccount = {};
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === accountNumber) {
            foundBankAccount = bankAccount;
            let money = Number(readline.question('Please enter the money you want to withdraw: '));
            if (bankAccount.balance < money) {
                console.log(`You cannot withdraw ${money} because it is more than your current balance ${JSON.stringify(bankAccount.balance)}`);
                bankAccount.balance = 0;
            } else {
                bankAccount.balance -= money;
                console.log(`The bank account after updating: ${JSON.stringify(bankAccount)}`);
            }
        }
    }
    if (JSON.stringify(foundBankAccount) === '{}') {
        console.log(`The bank account with account Number = '${accountNumber}' is not found`);
    }
}

function updateBalanceEnhancement(bankAccounts) {
    const MAX_ALLOWED_ATTEMP = 3;
    let attempts = 0;
    do {
        const foundAccount = findAccountByAccountNumber(bankAccounts);
        const isNotfound = foundAccount.accountNumber === undefined;
        if (isNotfound) {
            console.log(`Apptemp time: ${attempts + 1}`);
            attempts++;
        } else {
            // Logic to update balance & exit the function
            const { balance } = foundAccount;
            console.log(`Your balance is: ${balance}`);
            const expectedWithdrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithdrawMoney > balance) {
                console.log('Insufficient balance!');

            } else {
                console.log('Succeed!');
                foundAccount.balance = balance - expectedWithdrawMoney;
                attempts = MAX_ALLOWED_ATTEMP;
            }

        }
    } while (attempts < MAX_ALLOWED_ATTEMP);
}