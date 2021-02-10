// Object Literal (Javascript Object Literal Notation)
var myObject = {
a: 'some string value',
b: 5,
c: true,
};

// Object Factory
function car() {
    return {
      wheels: 4,
      drive: function() {},
    };
  };
  
var toyota = car();
var subaru = car();

// Object Constructor
function Person(first, last, age, height) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.height = height;
  }

var myFather = new Person("John", "Doe", 50, "tall");
var myMother = new Person("Jane", "Doe", 48, "short");

// Class (Constructor syntactic sugar)
class Animal {
    constructor(name, colour) {
        this.name = name;
        this.colour = colour;
    }
};

class Dog extends Animal {
    constructor(name, colour, legs) {
    super(name, colour)
    this.legs = legs
  }
};

let germanShepard = new Dog ("Max","Brown",4)
console.log(germanShepard);