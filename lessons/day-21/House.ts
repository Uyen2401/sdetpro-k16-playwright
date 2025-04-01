// Require: Immuatable Object
export default class House {
    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoorNumber: number;

    constructor(topRoofColor: string, windowNumber: number, color: string, mainDoorNumber: number) {
        this.topRoofColor = topRoofColor;
        this.windowNumber = windowNumber;
        this.color = color;
        this.mainDoorNumber = mainDoorNumber;
    }

    // GETTERS
    getTopRoofColor(): string {
        return this.topRoofColor;
    }

    getWindowNumber(): number {
        return this.windowNumber;
    }

    getColor(): string {
        return this.color;
    }

    getMainDoorNumber(): number {
        return this.mainDoorNumber;
    }
}

let teoHouse = new House("red", 10, "blue", 2);
let tiHouse = new House("green", 10, "black", 3);