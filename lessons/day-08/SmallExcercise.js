// Given a value, please find the key
let foundKey = undefined;
let targetValue = "3";

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(function (value, key, map) {
  if (value === targetValue) {
    foundKey = key;
    return;
  }
});

if (!foundKey) {
  console.log(`Key not found for value: ${targetValue}`);
} else {
  console.log(`${targetValue}: ${foundKey}`);
}
