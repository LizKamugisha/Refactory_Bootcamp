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
    talk() {
        console.log("I am a person");
    }
};
class Woman extends Person {
    talk() {
        console.log("I am a Woman");
    }
};
class Man extends Person {
    talk() {
        console.log("I am a Man");
    }
};
/*
Note: the scope of the variables below 
are limited to the subtype they are assigned to
*/
let person = new Person();
person.talk();
let woman = new Woman();
woman.talk();
let man = new Man();
man.talk();


// Example 2: SubType Polymorphism 
class Animal {
    communicate() {
        console.log("animal sound");
    }
};
class Cow extends Animal {
    communicate() {
        console.log("Moo!");
    }
};
// Using subtype to create instance from the super class
let animal: Animal
animal = new Cow;
animal.communicate();
