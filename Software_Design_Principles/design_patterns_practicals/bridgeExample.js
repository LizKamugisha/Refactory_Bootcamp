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
// Abstraction Class that refrences the Implementation Interface
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.drawShape = function () {
        console.log("Drawing a " + this.color + " shape.");
    };
    return Shape;
}());
// Concrete Implementations
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.shade = function () {
        return 'Red';
    };
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.shade = function () {
        return 'Blue';
    };
    return Blue;
}());
// Refined Abstractions
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.drawShape = function () {
        console.log("Drawing a " + this.color.shade() + " circle.");
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color) {
        return _super.call(this, color) || this;
    }
    Triangle.prototype.drawShape = function () {
        console.log("Drawing a " + this.color.shade() + " triangle.");
    };
    return Triangle;
}(Shape));
// Instantiate & Initialize
var circle = new Circle(new Red());
circle.drawShape();
var triagngle = new Triangle(new Blue());
triagngle.drawShape();
