import Animal from "./Animal";
export default class Horse extends Animal{
    private static maxSpeed = 75;
    
    constructor(name: string) {
        super(name, Horse.maxSpeed);
    }
}