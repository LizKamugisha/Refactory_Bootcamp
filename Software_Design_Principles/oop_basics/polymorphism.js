/*
POLYMORPHISM
-------------

Poly - multi, many
morph - form
ism - process

The ability of an object (or properties of an object) to exisit in more than one form
Saves use of memory space

1) Overloading (object methods) - not supported in Javascript, it defaults to overriding
2) Overriding (object methods) - methods in the child class / subtype takes precident over method with same name in the parent class / Super type
3) Subtypying (object) - subtype is a datatype that is related to the the supertype

In Subtype polymorphism, we declare one variable whose type & value can be changed.
When we create variables in the super-type rather than in subtype, its type and value is not limited and can be changed
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
// Example 1: Method Overriding
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.talk = function () {
        console.log("I am a person");
    };
    return Person;
}());
;
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Woman.prototype.talk = function () {
        console.log("I am a Woman");
    };
    return Woman;
}(Person));
;
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Man.prototype.talk = function () {
        console.log("I am a Man");
    };
    return Man;
}(Person));
;
/*
Note: the scope of the variables below
are limited to the subtype they are assigned to
*/
var person = new Person();
person.talk();
var woman = new Woman();
woman.talk();
var man = new Man();
man.talk();
// Example 2: SubType Polymorphism 
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.communicate = function () {
        console.log("animal sound");
    };
    return Animal;
}());
;
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cow.prototype.communicate = function () {
        console.log("Moo!");
    };
    return Cow;
}(Animal));
;
// Using subtype to create instance from the super class
var animal;
animal = new Cow;
animal.communicate();
