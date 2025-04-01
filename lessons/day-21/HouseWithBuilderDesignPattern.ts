import House from "./House";

// Outer class
export default class HouseWithBuilderDesignPattern {
    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoorNumber: number;

    private constructor() {

    }

    // Getters

    // Sale Department - Inner class
    public static Builder = class {
        private house: HouseWithBuilderDesignPattern;

        public setTopRoofColor(topRoofColor: string): this {
            this.house.topRoofColor = topRoofColor;
            // Method chaining
            return this;
        }

        public setWindowNumber(windowNumber: number): this {
            this.house.windowNumber = windowNumber;
            return this;
        }

        public setColor(color: string): this {
            this.house.color = color;
            return this;
        }

        public setMainDoorNumber(mainDoorNumber: number): this {
            this.house.mainDoorNumber = mainDoorNumber;
            return this
        }

        // Sign the contract
        public build(): HouseWithBuilderDesignPattern {
            return this.house;
        }

    }
}