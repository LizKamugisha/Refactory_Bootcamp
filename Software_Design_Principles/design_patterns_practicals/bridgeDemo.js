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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    // Step 2
    Shape.prototype.draw = function () {
        console.log();
    };
    return Shape;
}());
// Step 4
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.shade = function () {
        return 'red';
    };
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.shade = function () {
        return 'blue';
    };
    return Blue;
}());
// Step 5
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a " + this.color.shade() + " circle");
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color) {
        return _super.call(this, color) || this;
    }
    Square.prototype.draw = function () {
        console.log("Drawing a " + this.color.shade() + " square");
    };
    return Square;
}(Shape));
// Instanciate
var circle = new Circle(new Red());
circle.draw();
var square = new Square(new Blue());
square.draw();
