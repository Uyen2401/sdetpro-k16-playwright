import Animal from "./Animal";
export default class Dog extends Animal{
    private static maxSpeed = 60;
    
    constructor(name: string) {
        super(name, Dog.maxSpeed);
    }
}