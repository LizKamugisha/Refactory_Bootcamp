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
abstract class Car {
    // Variables
    color: string;
    horsePower: number;
    brand: string;
    // Methods
    constructor(cl, hp, bd) {
        this.color = cl;
        this.horsePower = hp;
        this.brand = bd;
    }
    abstract carMecahnics();
};
class Subaru extends Car {
    carMecahnics() {
        console.log("starting car mechanisim in Subaru Car")
    }
};

let car1 = new Subaru("black", 500, "Subaru");
car1.carMecahnics();

