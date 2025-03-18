let teo = {
    name: "Teo",
    age: 18,
    // Nested object
    bankAccount: {
        checking: {
            accountNumber: '123',
        },
        saving: {
            accountNumber: '321',
        }
    }
}

// let ti = teo;
// ti.name = "Ti";
// ti.bankAccount.accountNumber = "124";

// console.log(teo);
// console.log(ti);

// Shallow copy
// let tun = {...teo};
// tun.name = "Ti";
// tun.bankAccount.accountNumber = '124';

// console.log(teo);
// console.log(tun);


// Shallow copy - handle for nested obj as well
let ti = JSON.parse(JSON.stringify(teo));
ti.bankAccount.saving.accountNumber = '9999';


// console.log(teo);
// console.log(ti);

// console.log(Object.keys(teo));
// console.log(Object.values(teo));
console.log(Object.entries(teo));