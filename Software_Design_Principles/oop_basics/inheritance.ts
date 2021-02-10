/* 
INHERITANCE
* Keyword Super references the constuctor of the parent class.
* Constructor of paranet calss is in built hence does not always need to be stated however it is recommended to set constructors.
We use a constructer when we want to paramiterise or specify the class variables during initalisation / running the code
If we choose not to use constructors, we can simply set fixed variables or use a setter in the parent class
*/

// Example 1: The use of super() Method during inheritance.
class Person {
    // Variables
    name: string
    gender: string
    // Methods
    constructor(nameArg, genferArg) {
        this.name = nameArg;
        this.gender = genferArg;
    }
    talk() {
        console.log(`I am a Person called ${this.name}`);
    }
};

class Parent extends Person {
    // Variables
    numberOfChildren = 2
    // Methods
    constructor(nameArg, genferArg, numberOfChildrenArg) {
        super(nameArg, genferArg)
        this.numberOfChildren = numberOfChildrenArg;
    }

    talk() {
        console.log(`I am a Parent called ${this.name} and have ${this.numberOfChildren} children`);
    }
}

// Testing
let person1 = new Person("Liz", "Female")
person1.talk();

let person2 = new Parent("Mary", "Female", 2)
person2.talk();

// Example 2:  Multilevel inheritance

// Example 3:  Multiple Inheritance

// 5 examples of when to use inheritance
