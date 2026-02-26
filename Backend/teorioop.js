//inheritance   

class Fruit{
    constructor(id, name, brand, price, type){
        this.id = id || "";
        this.name = name || "";
        this.brand = brand || "";
        this.price = price || 0;
        this.type = type || "";
    }
}

class Apple extends Fruit{
    constructor(id, name, brand, price,){
        super(id, name, brand, price);
        this.type = "Apple";
    }
}

class Mango extends Fruit{
    constructor(id, name, brand, price){
        super(id, name, brand, price);
        this.type = "Mango";
    }
}

class Melon extends Fruit{
    constructor(id, name, brand, price){
        super(id, name, brand, price);
        this.type = "Melon";
    }
}

//Factory class
class FruitFactory{
    constructor(boxes){
        this.boxes = boxes || [];
    }
    addFruit(...args){
        const [name, brand, price, type] = args;
        let id;
        this.boxes.length === 0
            ? id = 1 
            : id = this.boxes[this.boxes.length - 1].id + 1;
       
        switch(type){
            case "Apple":
                this.boxes.push(new Apple(id, name, brand, price));
                break;
            case "Mango":
                this.boxes.push(new Mango(id, name, brand, price));
                break;
            case "Melon":
                this.boxes.push(new Melon(id, name, brand, price));
                break;
            default:
                console.log("Invalid fruit type.");
        }
        console.log(`Fruit ${name} has been added.`);
    }
    sellFruit(id){
        let fruitInfo = {};
        let tempBoxes = [];
        this.boxes.forEach(fruit => {
            if(fruit.id === id){
                fruitInfo = fruit;
            } else {
                tempBoxes.push(fruit);
            }
    });
        this.boxes = tempBoxes;
        console.log(`Fruit ${fruitInfo.name} has been sold.`);
    }
    showFruits(){
        if(this.boxes.length === 0){
            console.log("No fruits in the factory.");
        } else {
            console.log("Fruits in the factory:");
            this.boxes.forEach(fruit => {
                const {id, name, brand, price, type} = fruit;
                console.log(`${id}-${name} (${type})`);
                console.log(`Brand: ${brand}`);
                console.log(`Price: $${price}`);
            });
        }
    }
    editFruit(id, name, brand, price){
        this.boxes = this.boxes.map(fruit => {
            if(fruit.id === id){
                fruit.name = name || fruit.name;
                fruit.brand = brand || fruit.brand;
                fruit.price = price || fruit.price;
            }
            return fruit;
    });
    console.log(`Fruit with ID ${id} has been edited.`);
    }   
}

const fruitFactory = new FruitFactory();
fruitFactory.addFruit("Red Apple", "Brand A", 1.5, "Apple");
fruitFactory.addFruit("Green Apple", "Brand B", 1.2, "Apple");
fruitFactory.addFruit("Mango", "Brand C", 2.0, "Mango");
fruitFactory.addFruit("Melon", "Brand D", 3.0, "Melon");
fruitFactory.sellFruit(2);
fruitFactory.editFruit(3, "Harumanis Mango", "Brand C", 2.5);
fruitFactory.showFruits();