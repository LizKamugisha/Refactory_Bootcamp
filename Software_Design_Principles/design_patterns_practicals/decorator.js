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
// Step 2 
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.getDescription = function () {
        return this.description;
    };
    return Coffee;
}());
;
// Step 1 & 3
var CafeAmericano = /** @class */ (function (_super) {
    __extends(CafeAmericano, _super);
    function CafeAmericano() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "This coffee contains expresso and water";
        return _this;
    }
    CafeAmericano.prototype.cost = function () {
        return 3000;
    };
    return CafeAmericano;
}(Coffee));
;
var CafeLatte = /** @class */ (function (_super) {
    __extends(CafeLatte, _super);
    function CafeLatte() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "This coffee contains expresso, steamed milk and milk foam";
        return _this;
    }
    CafeLatte.prototype.cost = function () {
        return 5000;
    };
    return CafeLatte;
}(Coffee));
;
// Step 4 & 5
var CoffeeOptions = /** @class */ (function (_super) {
    __extends(CoffeeOptions, _super);
    function CoffeeOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoffeeOptions;
}(Coffee));
// Step 6
var CoffeeWithSugar = /** @class */ (function (_super) {
    __extends(CoffeeWithSugar, _super);
    function CoffeeWithSugar(coffee) {
        var _this = _super.call(this) || this;
        _this.decoratedCoffee = coffee;
        return _this;
    }
    CoffeeWithSugar.prototype.getDescription = function () {
        return this.decoratedCoffee.getDescription() + ", with sugar";
    };
    CoffeeWithSugar.prototype.cost = function () {
        return this.decoratedCoffee.cost() + 1000;
    };
    return CoffeeWithSugar;
}(CoffeeOptions));
;
var CoffeeWithChocolate = /** @class */ (function (_super) {
    __extends(CoffeeWithChocolate, _super);
    function CoffeeWithChocolate(coffee) {
        var _this = _super.call(this) || this;
        _this.decoratedCoffee = coffee;
        return _this;
    }
    CoffeeWithChocolate.prototype.getDescription = function () {
        return this.decoratedCoffee.getDescription() + ", with chocolate syrup";
    };
    CoffeeWithChocolate.prototype.cost = function () {
        return this.decoratedCoffee.cost() + 2000;
    };
    return CoffeeWithChocolate;
}(CoffeeOptions));
;
// Step 7
var johnsCoffee = new CafeAmericano();
johnsCoffee = new CoffeeWithSugar(johnsCoffee);
console.log(johnsCoffee.getDescription());
console.log(johnsCoffee.cost());
var janesCoffee = new CafeLatte();
janesCoffee = new CoffeeWithChocolate(janesCoffee);
console.log(janesCoffee.getDescription());
console.log(janesCoffee.cost());
