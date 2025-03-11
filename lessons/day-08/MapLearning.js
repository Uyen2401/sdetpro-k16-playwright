const emergencyList = new Map([
  ["113", "Police Dept"],
  ["114", "Fire Dept"],
  ["115", "Hospital"],
  ["116", "Others"],
  ["116", "..."],
]);

// READ
console.log(emergencyList.get("113"));

// check if key is existing
const is117Existing = emergencyList.has("117");
console.log(`is117Existing: ${is117Existing}`);

// Loop over all keys then get the values out
for (const key of emergencyList.keys()) {
  console.log(`${key}: ${emergencyList.get(key)}`);
}

// Loop over values without using keys
for (const value of emergencyList.values()) {
  console.log(`Value: ${value}`);
}

// UPDATE/ADD
emergencyList.set("117", "Something else");
console.log(emergencyList);

// DELETE
console.log(`Size before: ${emergencyList.size}`);
emergencyList.delete("118");
console.log(emergencyList);
console.log(`Size after: ${emergencyList.size}`);
