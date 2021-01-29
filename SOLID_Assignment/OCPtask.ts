// Example of Open Closed Principle (OCP)

// Creating a base class with closed attributes
class Student {
    // Properties
    fees = [{schoolFees: 500000}];
    subjects = ["MTC", "SCI", "ENG"];
    uniforms = [{shirt:"white", trouser:"maroon", sweater:"maroon"}];
}

// Extending base class to open up modification of its atrributes within its subclasses
class S1toS2student extends Student {
    // Modified Properties
    uniforms = [{shirt:"white", trouser:"maroon", sweater:"maroon stripes"}];
}

class S3toS4student extends Student {
    // Modified Properties
    fees = [{schoolFees: 600000}];
    subjects = [];
    uniforms = [{shirt:"cream", trouser:"black", sweater:"maroon"}];
    // Methods
    addSubject(subject:string){
        this.subjects.push(subject)
    }
}

class S5to6Student extends Student {
    // Modified Properties
    fees = [{schoolFees:800000}];
    subjects = [];
    uniforms = [{shirt:"white",trouser:"navy blue",sweater:"blue and maroon stripes"}];
    // Methods
    addSubject(subject:string){
        this.subjects.push(subject)
    }
}

// Instanciate
let beth = new S3toS4student();
beth.addSubject("Computer Science")
console.log(beth);