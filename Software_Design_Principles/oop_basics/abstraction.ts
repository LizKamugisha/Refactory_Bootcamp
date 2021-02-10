/*
ABSTRACTION 
------------
* Hiding complexity / unnecessary information and showing simplicity / essential attributes
* You can make a class abstract, however you will not be able to instantiate it wthout first 
extending the class.
* Abstract methods must be within an abstact class
*/

abstract class Car {
    // Variables
    color:string;
    horsePower:number;
    mileage:number;
    brand:string;
    model:string;
    private privateCode:string;

    // Methods
    constructor(cl, hp, ml, bd, md, pc){
        this.color = cl;
        this.horsePower = hp;
        this.mileage = ml;
        this.brand = bd;
        this.model = md;
        this.privateCode = pc;
    }
    // Example of Abstraction Hiding Complexity
    private carMechanics(){
        // complex methods of ignition process can be placed here
        console.log("Car started !");
    }

    // 2nd Example of Abstact methods example
    abstract carMechanics2();

    //  Example of Abstraction Showing Simplicity
    start(key){
        if (key){
            console.log("Car is starting...");
            this.carMechanics()
            this.carMechanics2()
        }
    }
    break(){
        console.log("Car is breaking...");

    }
    stop(){
        console.log("Car stopped !");
    }
    getCarDetails(){
        return{
            color:this.color,
            horsePower:this.horsePower,
            mileage:this.mileage,
            brand:this.brand,
            model:this.model,
        }
    }
}

// Testing 
class Benz extends Car{
    // Variables 
    // Methods
    carMechanics2(){
        console.log("complex starting mechanisim in Benz Car")
    }
}
class Isuzu extends Car{
    // Variables 
    // Methods
    carMechanics2(){
        console.log("complex starting mechanisim in Isuzu Car")
    }
}

let car1 = new Benz("white", 700, 1200, "Benz", "C-63", "pc6543");
let car2 = new Isuzu("black", 500, 2500, "Isuzu", "C-30", "pc8832");

console.log(car1.getCarDetails());
car1.start("right key");
car1.break();
car1.stop();

console.log(car2.getCarDetails());
car2.start("right key");
car2.break();
car2.stop();