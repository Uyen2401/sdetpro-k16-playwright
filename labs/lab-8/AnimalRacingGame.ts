import Horse from "./Horse"
import Tiger from "./Tiger"
import Dog from "./Dog"
import AnimalRacingController from "./AnimalRacingController";


const horse = new Horse("Horse");
const tiger = new Tiger("Tiger");
const dog = new Dog("Dog");

const winner = AnimalRacingController.getWinner([horse, tiger, dog]);
console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()}`);