// Example of Liskov Substitution Principle (LSP)

// Create base class
class Bird {
    swim(){ 
        console.log("swimming bird");
    }
    feed(){ 
        console.log("feeding bird");
    }
    fly(){ 
        console.log("flying bird");
    }
    quack(){ 
        console.log("quacking bird");
    }
};

// Create subclasses
class Duck extends Bird {
    swim(){ 
        console.log("swimming duck");
    }
    feed(){ 
        console.log("feeding duck");
    }
    fly(){ 
        console.log("flying duck");
    }
    quack(){ 
        console.log("quacking duck");
    }
};

class Hen extends Bird {
    swim(){ 
        throw "Sorry I can't swim"
    }
    feed(){ 
        console.log("feeding hen");
    }
    fly(){ 
        throw "Sorry I can't fly"
    }
    quack(){ 
        console.log("quacking hen");
    }
};

class Penguin extends Bird {
    swim(){
        console.log ("swimming penguin")
    }
    feed(){ 
        console.log("feeding penguin");
    }
    fly(){ 
        throw "Sorry I can't fly"
    }
    quack(){ 
        console.log("quacking penguin");
    }
};

// Liskov Compliance Test
function LSPtest(bird:Bird){
    bird.swim();
    bird.feed();
    bird.fly();
    bird.quack();
    }

let bird = new Bird();
let hen = new Hen();
let duck = new Duck();
let penguin = new Penguin();

LSPtest(bird)
LSPtest(duck)
LSPtest(hen)
LSPtest(penguin)