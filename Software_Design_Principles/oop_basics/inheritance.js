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
// Example 1: The use of super() Method during inheritance.
var Person = /** @class */ (function () {
    // Methods
    function Person(nameArg, genferArg) {
        this.name = nameArg;
        this.gender = genferArg;
    }
    Person.prototype.talk = function () {
        console.log("I am a Person called " + this.name);
    };
    return Person;
}());
;
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    // Methods
    function Parent(nameArg, genferArg, numberOfChildrenArg) {
        var _this = _super.call(this, nameArg, genferArg) || this;
        // Variables
        _this.numberOfChildren = 2;
        _this.numberOfChildren = numberOfChildrenArg;
        return _this;
    }
    Parent.prototype.talk = function () {
        console.log("I am a Parent called " + this.name + " and have " + this.numberOfChildren + " children");
    };
    return Parent;
}(Person));
// Testing
var person1 = new Person("Liz", "Female");
person1.talk();
var person2 = new Parent("Mary", "Female", 2);
person2.talk();
// Example 2:  Multilevel inheritance
// Example 3:  Multiple Inheritance
// 5 examples of when to use inheritance
