/* 
INHERITANCE

Inheritance is the ability to have an object delegate some or all of its implementation 
to another, by way of a hierarchical link.

In JavaScript, inheritance is supported by using prototype object.
Which can also be refferd to as "Prototypal Inheritance" or "Behaviour Delegation"
This helps to avoid repeation when creating other classes and object instances 

* Keyword Super references the constuctor of the parent class.
* Constructor of paranet calss is in built hence does not always need to be stated however it is recommended to set constructors.
We use a constructer when we want to paramiterise or specify the class variables during initalisation / running the code
If we choose not to use constructors, we can simply set fixed variables or use a setter in the parent class
*/

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
class Grandparent {
    bloodtype: string = "O"
    getBloodType() {
        console.log("I am bloodtype O")
    }
};
class Parent extends Grandparent {
    eyeColor: string = "blue eyes"
    constructor() {
        super()
    }
    getEyeColor() {
        console.log("I have blue eyes")
    }
};
class Child extends Parent {
    height: number = 6
    constructor() {
        super()
    }
    getHeight() {
        console.log(`I am ${this.height}ft tall`)
    }
};

let son = new Child
son.getBloodType();
son.getEyeColor();
son.getHeight();

// Example 3:  Multiple Inheritance
function Person(firstName, lastName) {
    this.FirstName = firstName;
    this.LastName = lastName;
};

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
};

function Student(firstName, lastName, schoolName) {
    Person.call(this, firstName, lastName);
    this.SchoolName = schoolName;
}

Student.prototype.constructor = Student;

let studentA = new Student("John", "Doe", "Refactory");
console.log(studentA);
