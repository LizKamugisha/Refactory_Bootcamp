// Example of Interface Segregation Principle (ISP)

// Create interfaces with specific methods
interface Bird{
    feed();
};
interface SwimmingBird{
    swim();
};
interface FlyingBird {
    fly();
};
interface QuackingBird{
    quack();
};

// Create classes instances that implement interfaces
class Duck implements Bird, SwimmingBird, FlyingBird, QuackingBird {
    feed(){ 
        console.log("feeding duck");
    }
    swim(){ 
        console.log("swimming duck");
    }
    fly(){ 
        console.log("flying duck");
    }
    quack(){ 
        console.log("quacking duck");
    }
};

class Hen implements Bird, FlyingBird {
    feed(){ 
        console.log("feeding hen");
    }
    fly(){ 
        console.log("flying hen");
    }
};

class Penguin implements Bird, SwimmingBird {
    feed(){ 
        console.log("feeding penguin");
    }
    swim(){
        console.log ("swimming penguin")
    }
};

// Instanciate
let duck = new Duck();
duck.fly();

let hen = new Hen();
hen.feed();

let penguin = new Penguin();
penguin.swim();