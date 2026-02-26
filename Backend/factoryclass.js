class Vehicle{
    constructor(id, name, type, price, tag ){
        this.id = id || "";
        this.name = name || "";
        this.type = type || "";
        this.price = price || 0;
        this.tag = tag || [];
    }

    startEngine(){
        console.log("Start Engine");
    }

    stopEngine(){
        console.log("Stop engine");
    }
}
class Showroom{
    constructor(rooms){
       this.rooms = rooms || [];
    }
    showVehicles(){
        if(this.rooms.length === 0){
            console.log("No vehicles in the showroom.");
        } else {
            console.log("Vehicles in the showroom:");
            this.rooms.forEach(vehicle => {
                const {id, name, type, price} = vehicle;
                console.log(`${id}-${name} (${type})`);
                console.log(`Price: ${price}`);
            });
        }
    }
    addVehicle(name, type, price){
        let id;
        if(this.rooms.length === 0){
            id = 1;
        } else {
            id = this.rooms[this.rooms.length - 1].id + 1;
        }
        let tags = [];
        const vehicle = new Vehicle(id, name, type, price, tags);
        this.rooms.push(vehicle);
        console.log(`Vehicle ${name} has been added to the showroom with id ${id}.`);
    }
    removeVehicle(id){
        this.rooms = this.rooms.filter(vehicle => vehicle.id !== id);
        console.log(`Vehicle with id ${id} has been removed.`);
    }
    editVehicle(id, name, type, price) {
        this.rooms = this.rooms.map(vehicle => {
            if(vehicle.id === id){
                vehicle.name = name || vehicle.name;
                vehicle.type = type || vehicle.type;
                vehicle.price = price || vehicle.price; 
            }
            return vehicle;
        });
        console.log(`Vehicle with id ${id} has been updated.`);
    }
}

//instantiate showroom
const showroom = new Showroom();

showroom.addVehicle("Civic 2026", "Sedan", 35000);
showroom.addVehicle("Mustang 2026", "Coupe", 45000);
showroom.addVehicle("Model S 2026", "Electric", 80000);
showroom.removeVehicle(2);
showroom.editVehicle(3, "Model S Plaid 2026", "Electric", 120000);
showroom.showVehicles();
