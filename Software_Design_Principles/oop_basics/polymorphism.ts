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

// Example 1: Method Overriding
class Person {
    // Methods
    talk() {
        console.log("I am a person");
    }
};
class Staff extends Person {
    // Methods
    talk() {
        console.log("I am a staff member");
    }
};
class Student extends Person {
    // Methods
    talk() {
        console.log("I am a student");
    }
}
/*
Note: the scope of the variables below are limited to the subtype they are assigned to

let person = new Person();
person.talk();

let staff = new Staff();
staff.talk();

let student = new Student();
student.talk();
*/

// Example 2: SubType Polymorphism 

let person: Person = new Person();
person.talk();

person = new Staff()
person.talk();

person = new Student()
person.talk();

class Animal {
    communicate() {
        console.log("sound");
    }
}

class Cow extends Animal {
    communicate() {
        console.log("Moo!");
    }
}

// Instead of creating an instance like this
// let animal = new Animal();
// animal.communicate();

// let cow = new Cow();
// cow.communicate();

// We use subtype to create instance from the super class
let animal: Animal
animal = new Cow;
animal.communicate();
