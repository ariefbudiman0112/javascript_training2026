class Vehicle{
    constructor(name, type, price){
        this.name = name;
        this.type = type;
        this.price = price;
    }

    startEngine(){
        console.log("Start Engine");
    }

    stopEngine(){
        console.log("Stop engine");
    }
}

const civic = new Vehicle("Civic 2026","Sedan", 35000);

console.log(civic);