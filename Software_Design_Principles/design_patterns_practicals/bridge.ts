/*
BRIDGE DESIGN PATTERN
----------------------
Bridge is a structural design pattern that lets you split a large class or a set of closely related classes 
into two separate hierarchies; such as abstraction and implementation, which can be developed independently of each other.

The main concept applied in this pattern is Composition over Inheritance, and loose coupling of code

Example : instance of various shapes & color classes

Steps: 

*/

// Step 1 -  Identify what aspects of your object fall under the abstraction & implementation. Define an interface for the Implementation Define an abstract class for the Abstraction

// Step 3 - Declare the operations that the abstraction needs in the general implementation interface
interface Color {
    shade(): String;
}

// Step 2 - See what operations the client needs and define them in the base abstraction class.
abstract class Shape {
    color: Color;
    constructor(color: Color) {
        this.color = color
    }
    drawShape() {
        console.log(`Drawing a ${this.color} shape.`);
    }
}

// Step 4 - Create concrete implementation classes that follow the implementation interface.
class Red implements Color {
    shade() {
        return 'Red';
    }
}
class Blue implements Color {
    shade() {
        return 'Blue';
    }
}
class Yellow implements Color {
    shade() {
        return 'Yellow';
    }
}

// Step 5 - Create refined abstractions for each variant by extending the base abstraction class.
class Circle extends Shape {
    constructor(color: Color) {
        super(color)
    }
    drawShape() {
        console.log(`Drawing a ${this.color.shade()} circle.`);
    }
}

class Square extends Shape {
    constructor(color: Color) {
        super(color)
    }
    drawShape() {
        console.log(`Drawing a ${this.color.shade()} square.`);
    }
}

class OrganicShape extends Shape {
    constructor(color: Color) {
        super(color)
    }
    drawShape() {
        console.log(`Drawing a ${this.color.shade()} organic shape.`);
    }
}

// Step 6 - Instantiate refined abstraction classes with concrete implementation
let circle = new Circle(new Red());
circle.drawShape();

let square = new Square(new Blue());
square.drawShape();

let leaf = new OrganicShape(new Yellow);
leaf.drawShape();

