/*
INHERITANCE
* Keyword Super references the constuctor of the parent class.
* Constructor of paranet calss is in built hence does not always need to be stated however it is recommended to set constructors.
We use a constructer when we want to paramiterise or specify the class variables during initalisation / running the code
If we choose not to use constructors, we can simply set fixed variables or use a setter in the parent class
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
// Example 1: The Super() Method
/*
class Parent {
    surname: string;
    skinColour: string;
    constructor(surname, skinColour) {
        this.surname = surname;
        this.skinColour = skinColour;
    }
};
class Child extends Parent {
    gender: string;
    constructor(surname, skinColour, gender) {
        super(surname, skinColour)
        this.gender = gender;
    }
};
let daughter = new Child("Mugisha", "brown", "Female")
console.log(daughter);
*/
// Example 2:  Multilevel inheritance
var Grandparent = /** @class */ (function () {
    function Grandparent() {
        this.bloodtype = "O";
    }
    Grandparent.prototype.getBloodType = function () {
        console.log("I am bloodtype O");
    };
    return Grandparent;
}());
;
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent() {
        var _this = _super.call(this) || this;
        _this.eyeColor = "blue eyes";
        return _this;
    }
    Parent.prototype.getEyeColor = function () {
        console.log("I have blue eyes");
    };
    return Parent;
}(Grandparent));
;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super.call(this) || this;
        _this.height = 6;
        return _this;
    }
    Child.prototype.getHeight = function () {
        console.log("I am " + this.height + "ft tall");
    };
    return Child;
}(Parent));
;
var son = new Child;
son.getBloodType();
son.getEyeColor();
son.getHeight();
// Example 3:  Multiple Inheritance
