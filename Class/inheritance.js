//super keyword is used to call parent class methods here
class Car{
    constructor(model, name){
        this.model = model;
        this.name = name;
    }
    start(){
        console.log("benz car")
    }
}

class ElectricCar extends Car{
    start(){
       super.start()
    }
}

carName = new ElectricCar()
carName.start(588, 'sportedition')
