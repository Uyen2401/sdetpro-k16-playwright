import Animal from "./Animal";
export default class AnimalRacingController {
    
  static getWinner(animalList: Animal[]): Animal {
    if (animalList.length === 0) {
      throw new Error("No animalList");
    } else {
      let winner = animalList[0];
      for (const animal of animalList) {
        if (animal.getSpeed() > winner.getSpeed()) {
          winner = animal;
        }
      }
      return winner;
    }
  }
}
