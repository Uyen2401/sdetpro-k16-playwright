import Animal from "./Animal";
export default class Tiger extends Animal{
    private static maxSpeed = 100;
    
    constructor(name: string) {
        super(name, Tiger.maxSpeed);
    }
}