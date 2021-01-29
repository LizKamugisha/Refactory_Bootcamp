/*
Example of Open Closed Principle (OCP)
---------------------------------------
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
// Creating a base class with closed attributes
var Student = /** @class */ (function () {
    function Student() {
        // Properties
        this.fees = [{ schoolFees: 500000 }];
        this.subjects = ["MTC", "SCI", "ENG"];
        this.uniforms = [{ shirt: "white", trouser: "maroon", sweater: "maroon" }];
    }
    return Student;
}());
// Extending base class to open up modification of its atrributes within its subclasses
var S1toS2student = /** @class */ (function (_super) {
    __extends(S1toS2student, _super);
    function S1toS2student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Modified Properties
        _this.uniforms = [{ shirt: "white", trouser: "maroon", sweater: "maroon stripes" }];
        return _this;
    }
    return S1toS2student;
}(Student));
var S3toS4student = /** @class */ (function (_super) {
    __extends(S3toS4student, _super);
    function S3toS4student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Modified Properties
        _this.fees = [{ schoolFees: 600000 }];
        _this.subjects = [];
        _this.uniforms = [{ shirt: "cream", trouser: "black", sweater: "maroon" }];
        return _this;
    }
    // Methods
    S3toS4student.prototype.addSubject = function (subject) {
        this.subjects.push(subject);
    };
    return S3toS4student;
}(Student));
var S5to6Student = /** @class */ (function (_super) {
    __extends(S5to6Student, _super);
    function S5to6Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Modified Properties
        _this.fees = [{ schoolFees: 800000 }];
        _this.subjects = [];
        _this.uniforms = [{ shirt: "white", trouser: "navy blue", sweater: "blue and maroon stripes" }];
        return _this;
    }
    // Methods
    S5to6Student.prototype.addSubject = function (subject) {
        this.subjects.push(subject);
    };
    return S5to6Student;
}(Student));
// Instanciate
var beth = new S3toS4student();
beth.addSubject("Computer Science");
console.log(beth);
