let teo = {
    name: "Teo",
    age: 18,
    "my gender": 'M'
}

// READ
console.log(teo.name);
console.log(teo["my gender"]);

// UPDATE
teo.name = "Ti";
console.log(teo);

// Destructure
const { name, age, ["my gender"]: gender } = teo;
sayHello(teo);

// function with destructured params
function sayHello({ name }) {
    console.log(`Hello there, my name is ${name}`);
}

// Delete
delete teo.name;
console.log(teo);