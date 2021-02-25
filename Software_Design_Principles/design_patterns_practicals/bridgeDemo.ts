/*
BRIDGE DESIGN PATTERN
----------------------
Bridge is a structural design pattern that decouples an abstraction from its implementation 
so that the two can vary independently.

Remember; Composition over Inheritance !

Example : creating various shapes of multiple colors

STEPS:
1) Identify what aspects of your object fall under the abstraction & implementation.
Define an interface for the Implementation Define an abstract class for the Abstraction
2) See what operations the client needs and define them in the base abstraction class.
3) Declare the operations that the abstraction needs in the general implementation interface
4) Create concrete implementation classes that follow the implementation interface.
5) Create refined abstractions for each variant by extending the base abstraction class.
6) Instantiate refined abstraction classes with concrete implementation
*/

// Step 1
// Shape = Abstraction 
// Color = Implementation 

interface Color {
    // Step 3
    shade(): string;
}

abstract class Shape {
    color: Color;
    constructor(color: Color) {
        this.color = color;
    }
    // Step 2
    draw() {
        console.log(`Drawing a ${this.color.shade()} shape`)
    }
}

// Step 4
class Red implements Color {
    shade() {
        return 'red';
    }
}
class Blue implements Color {
    shade() {
        return 'blue';
    }
}

// Step 5
class Circle extends Shape {
    constructor(color: Color) {
        super(color);
    }
    draw() {
        console.log(`Drawing a ${this.color.shade()} circle`);
    }
}
class Square extends Shape {
    constructor(color: Color) {
        super(color);
    }
    draw() {
        console.log(`Drawing a ${this.color.shade()} square`);
    }
}

// Instanciate
let circle = new Circle(new Red());
circle.draw();
let square = new Square(new Blue());
square.draw();


