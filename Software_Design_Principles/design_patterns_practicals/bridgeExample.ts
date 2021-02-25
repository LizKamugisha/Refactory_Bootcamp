// Implementation Interface
interface Color {
    shade(): String;
}

// Abstraction Class that refrences the Implementation Interface
abstract class Shape {
    color: Color;
    constructor(color: Color) {
        this.color = color
    }
    drawShape() {
        console.log(`Drawing a ${this.color} shape.`);
    }
}

// Concrete Implementations
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

// Refined Abstractions
class Circle extends Shape {
    constructor(color: Color) {
        super(color)
    }
    drawShape() {
        console.log(`Drawing a ${this.color.shade()} circle.`);
    }
}

class Triangle extends Shape {
    constructor(color: Color) {
        super(color)
    }
    drawShape() {
        console.log(`Drawing a ${this.color.shade()} triangle.`);
    }
}

// Instantiate & Initialize
let circle = new Circle(new Red());
circle.drawShape();

let triagngle = new Triangle(new Blue());
triagngle.drawShape();
