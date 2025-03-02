/**
 * Lab-2.1
Get input from user about height(m) and weight(kg) then calculate BMI

Underweight: <18.5
Normal weight: 18.5 – 24.9
Overweight: 25–29.9
Obesity: BMI of 30 or greater
BMI = weight / (height x height)

Lab-2.3
Suggest user to increase/decrease weight
 */

const readline = require("readline-sync");

const MIN_WEIGHT = 18.5;
const MAX_NORMAL_WEIGHT = 24.9;
const MAX_OVER_WEIGHT = 29.9;
let height;
let weight;

do {
  height = Number(readline.question("Please input your height(m): "));
  weight = Number(readline.question("Please input your weight(kg): "));
  if (height <= 0)
    console.log("Invalid height! Please enter a positive number!");
  if (weight <= 0)
    console.log("Invalid weight! Please enter a positive number!");
} while (height <= 0 || weight <= 0);


let deviation =0;
let BMI = weight / (height * height);
console.log(`Your BMI is ${BMI.toFixed(1)}`);

if (BMI < MIN_WEIGHT) {
  console.log("Category: Underweight");
  deviation = MIN_WEIGHT * height ** 2 - weight;
  console.log(`You should increase ${deviation.toFixed(1)} kg`);
} else if (BMI <= MAX_NORMAL_WEIGHT) {
  console.log("Category: Normal weight");
  console.log("Great job! Maintain your current weight for a healthy BMI.");
} else if (BMI <= MAX_OVER_WEIGHT) {
  console.log("Category: Overweight");
  deviation = Math.abs(MAX_OVER_WEIGHT * height ** 2 - weight);
console.log(`You should decrease ${deviation.toFixed(1)} kg`);
} else {
  console.log("Category: Obesity");
}
