/*
DECORATOR DESIGN PATTERN
-------------------------
Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

Steps:
1) Make sure your business domain can be represented as a primary component with multiple optional layers over it.
2) Figure out what methods are common to both the primary component and the optional layers. Create a component interface and declare those methods there.
3) Create a concrete component class and define the base behavior in it.
4) Create a base decorator class. It should have a field for storing a reference to a wrapped object. The field should be declared with the component interface type to allow linking to concrete components as well as decorators. The base decorator must delegate all work to the wrapped object.
5) Make sure all classes implement the component interface.
6) Create concrete decorators by extending them from the base decorator. A concrete decorator must execute its behavior before or after the call to the parent method (which always delegates to the wrapped object).
7) The client code must be responsible for creating decorators and composing them in the way the client needs.
*/


// Step 2 
abstract class Coffee {
    public description: string;
    public getDescription() {
        return this.description;
    }
    public abstract cost(): number;
};

// Step 1 & 3
class CafeAmericano extends Coffee {
    public description = "This coffee contains expresso and water";
    public cost(): number {
        return 3000;
    }
};

class CafeLatte extends Coffee {
    public description = "This coffee contains expresso, steamed milk and milk foam";
    public cost(): number {
        return 5000;
    }
};

// Step 4 & 5
abstract class CoffeeOptions extends Coffee {
    decoratedCoffee: Coffee;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

// Step 6
class CoffeeWithSugar extends CoffeeOptions {
    decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        super();
        this.decoratedCoffee = coffee;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ", with sugar";
    }
    public cost(): number {
        return this.decoratedCoffee.cost() + 1000;
    }
};

class CoffeeWithChocolate extends CoffeeOptions {
    decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        super();
        this.decoratedCoffee = coffee;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ", with chocolate syrup";
    }
    public cost(): number {
        return this.decoratedCoffee.cost() + 2000;
    }
};

// Step 7
let johnsCoffee = new CafeAmericano();
johnsCoffee = new CoffeeWithSugar(johnsCoffee);
console.log(johnsCoffee.getDescription());
console.log(johnsCoffee.cost());

let janesCoffee = new CafeLatte();
janesCoffee = new CoffeeWithChocolate(janesCoffee);
console.log(janesCoffee.getDescription());
console.log(janesCoffee.cost());
