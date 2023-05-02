class Car {
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }
    start() {
        console.log("benz car")
    }
    stop() {
        console.log("AFTER 400 KILOMETERS")
    }
}

carName = new Car()
carName.start(588, 'sportedition')
carName.stop(450, 'sportedition')