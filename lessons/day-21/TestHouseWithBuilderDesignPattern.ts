import HouseWithBuilderDesignPattern from "./HouseWithBuilderDesignPattern";

let builder = new HouseWithBuilderDesignPattern.Builder();
let house: HouseWithBuilderDesignPattern = builder
    .setTopRoofColor("red")
    .setWindowNumber(10)
    .setColor("blue")
    .setMainDoorNumber(2)
    .build();