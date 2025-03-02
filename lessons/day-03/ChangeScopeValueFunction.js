let toBeChanged = 1;

changeToBeChanged();
console.log(toBeChanged);

// let returnedValue = changeToBeChanged();
// console.log(returnedValue); --> undefined


function changeToBeChanged() {
    toBeChanged++;
}