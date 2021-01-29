// Example of Interface Segregation Principle (ISP)
;
;
;
;
// Create classes instances that implement interfaces
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.feed = function () {
        console.log("feeding duck");
    };
    Duck.prototype.swim = function () {
        console.log("swimming duck");
    };
    Duck.prototype.fly = function () {
        console.log("flying duck");
    };
    Duck.prototype.quack = function () {
        console.log("quacking duck");
    };
    return Duck;
}());
;
var Hen = /** @class */ (function () {
    function Hen() {
    }
    Hen.prototype.feed = function () {
        console.log("feeding hen");
    };
    Hen.prototype.fly = function () {
        console.log("flying hen");
    };
    return Hen;
}());
;
var Penguin = /** @class */ (function () {
    function Penguin() {
    }
    Penguin.prototype.feed = function () {
        console.log("feeding penguin");
    };
    Penguin.prototype.swim = function () {
        console.log("swimming penguin");
    };
    return Penguin;
}());
;
// Instanciate
var duck = new Duck();
duck.fly();
var hen = new Hen();
hen.feed();
var penguin = new Penguin();
penguin.swim();
