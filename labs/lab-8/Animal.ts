export default class Animal{
    protected name: string;
    protected speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = this.randomNumber(maxSpeed)
    }

    public getName(): string{
        return this.name;
    }

    public getSpeed(): number{
        return this.speed;
    }

    setName(name:string){
        this.name = name;
    }

    setSpeed(speed: number){
        this.speed = speed;
    }

    randomNumber(maxValue: number): number {
        return Math.floor(Math.random() * maxValue) + 1;
    }

    toString(): string {
        return `${this.name} - ${this.speed}`;
    }

}