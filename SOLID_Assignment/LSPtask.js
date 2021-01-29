/*
Example of Liskov Substitution Principle (LSP)
-----------------------------------------------
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
// Create base class
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.swim = function () { console.log("swimming bird"); };
    Bird.prototype.feed = function () { console.log("feeding bird"); };
    Bird.prototype.fly = function () { console.log("flying bird"); };
    Bird.prototype.quack = function () { console.log("quacking bird"); };
    return Bird;
}());
// Create subclasses
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Duck.prototype.swim = function () { console.log("swimming duck"); };
    Duck.prototype.feed = function () { console.log("feeding duck"); };
    Duck.prototype.fly = function () { console.log("flying duck"); };
    Duck.prototype.quack = function () { console.log("quacking duck"); };
    return Duck;
}(Bird));
var Hen = /** @class */ (function (_super) {
    __extends(Hen, _super);
    function Hen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hen.prototype.swim = function () { throw "Sorry I can't swim"; };
    Hen.prototype.feed = function () { console.log("feeding duck"); };
    Hen.prototype.fly = function () { throw "Sorry I can't fly"; };
    Hen.prototype.quack = function () { console.log("quacking duck"); };
    return Hen;
}(Bird));
var Penguin = /** @class */ (function (_super) {
    __extends(Penguin, _super);
    function Penguin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Penguin.prototype.swim = function () { throw "Sorry I can't swim"; };
    Penguin.prototype.feed = function () { console.log("feeding duck"); };
    Penguin.prototype.fly = function () { throw "Sorry I can't fly"; };
    Penguin.prototype.quack = function () { console.log("quacking duck"); };
    return Penguin;
}(Bird));
// Liskov Compliance Test
function LSPtest(bird) {
    bird.swim();
    bird.feed();
    bird.fly();
    bird.quack();
}
var bird = new Bird();
var hen = new Hen();
var duck = new Duck();
var penguin = new Penguin();
LSPtest(bird);
LSPtest(duck);
LSPtest(hen);
LSPtest(penguin);
