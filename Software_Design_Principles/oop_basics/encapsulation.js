/*
    ENCAPSULATION
    -------------
    Enclosing content in a certain structure such as;
    Object literal = {} Create an object directly
    Templates:
        Object Factory =  a function that return an object through literal
        Object Constructor = creates a template which the object will mimick
        Class = A template we use to  create objects
                A modification / advancement of a construtor
                cosist of  variables & Operations / Methods
    Access Control Modifiers = keywords e.g private, public, protected & package
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
// Example 1 : Data Encapsulation
/*
class User {
    // Variables
    username = "EK"
    private password = "12345"
    fullName = "Elizabeth Kamugisha"
    // Methods
    login(uname, pwd) {
        if (uname === this.username, pwd === this.password) {
            console.log("Login Succesful !");
        }
        else {
            console.log("Login Not Succesful !");
        }
    }
    changePwd(newPwd) {
        this.password = newPwd;
        console.log("Password Changed !");
    }
};

// Testing
let liz = new User();
liz.login("EK", "12345");
liz.changePwd("abc");
liz.login("EK", "12345");
liz.login("EK", "abc");
*/
/*
Example 2 :
Control access to a property or method of an object in that.
a) a property or method can only be accessed from a class within which it is defined.
b) a property or method can only be accessed from a class within which it is defined and
from all the classes that inherit from the class where that property / method is defined.
*/
// Example 2 : Control access to a property or method of an object
var Car = /** @class */ (function () {
    // Methods
    function Car(cl, hp, bd) {
        this.color = cl;
        this.horsePower = hp;
        this.brand = bd;
    }
    return Car;
}());
;
var Subaru = /** @class */ (function (_super) {
    __extends(Subaru, _super);
    function Subaru() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subaru.prototype.carMecahnics = function () {
        console.log("starting car mechanisim in Subaru Car");
    };
    return Subaru;
}(Car));
;
var car1 = new Subaru("black", 500, "Subaru");
car1.carMecahnics();
