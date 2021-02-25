// Object Literal
// Objects created directly &/or manually, without any blueprint
// let jack = {
//     name: "jack",
//     age: 30
// }

// var jane = {
//     name: "jane",
//     age: 28
// }

// const jill = {
//     name: "jill",
//     age: 25
// }

// Object Factory / Factory Function
/*
function that creates and returns objects
object is literaly created from within the factoru function, and returned
Factory function allows you to reuse code when created objects
CamelCase naming convention
*/

// Syntax Option 1
/*
function person(nameArg, ageArg){
    let personObject = {};

    personObject.name = nameArg;
    personObject.age = ageArg;

    personObject.talk = function(){
        console.log(this.name);
    }
    // Aspect of factory
    return personObject;
};
*/

// Syntax Option 2
/*
function person(nameArg, ageArg){
    return {
        name: nameArg,
        age: ageArg,
        talk: function(){
            console.log(this.name);
        }
    }
}

let person1 = person("Mary", 21)
person1.talk()

let person2 = person("Phillip", 35)
person2.talk()

let person3 = person("Connie", 26)
person3.talk()
*/

// Constructor Function
/*
function Person (nameArg, ageArg){
    this.name = nameArg;
    this.age = ageArg;
    this.talk = function(){
        console.log(this.name);
    }
}

let person1 = new Person("Susan", 40)
person1.talk()

let person2 = new Person("Joe", 33)
person2.talk()

let person3 = new Person("Tyrone", 50)
person3.talk()
*/

// Class Constructor 
/*
Constructor is encapsulated in the class
*/
class Person {
    // Variables
    name;
    age;
    // Methods
    constructor (nameArg, ageArg) {
        this.name = nameArg;
        this.age = ageArg;
    }
    talk(){
        console.log(this.name);
    }
}

let person1 = new Person("Tracy", 32)
person1.talk()

let person2 = new Person("Morgan", 27)
person2.talk()

let person3 = new Person("Jennifer", 49)
person3.talk()