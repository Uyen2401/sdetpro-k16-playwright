import Robot from "./Robot";
class DogRobot extends Robot {

    static id = 100;
    

    getId(): number {
        return DogRobot.id;
    }
}

const dogRobot = new DogRobot();
console.log(dogRobot.getId());