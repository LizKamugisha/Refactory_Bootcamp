/*
Example of Single Responsibility Principle (SRP)
-------------------------------------------------
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
// Applying SRP
var Input = /** @class */ (function () {
    function Input() {
        this.tempMemory = [];
    }
    Input.prototype.input = function (data) {
        console.log("computer is inputing data...");
        this.tempMemory.push(data);
    };
    ;
    return Input;
}());
var DataInputStream = /** @class */ (function (_super) {
    __extends(DataInputStream, _super);
    function DataInputStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DataInputStream;
}(Input));
var ComputerStorage = /** @class */ (function () {
    function ComputerStorage() {
        this.memory = [];
    }
    ComputerStorage.prototype.store = function (data) {
        console.log("computer is storing data...");
        this.memory.push(data);
    };
    ;
    return ComputerStorage;
}());
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.process = function (data) {
        console.log("computer is processing data...");
        var information = data;
        return information;
    };
    ;
    return CPU;
}());
var Output = /** @class */ (function () {
    function Output() {
    }
    Output.prototype.output = function (data) {
        console.log("computer is outputting data...");
        console.log(data);
    };
    ;
    return Output;
}());
var Computer = /** @class */ (function () {
    function Computer() {
        this.storage = new ComputerStorage();
        this.processor = new CPU();
        this.outputStream = new Output();
    }
    // Methods
    Computer.prototype.setInput = function (inputStreamArg) {
        this.inputStream = inputStreamArg;
    };
    return Computer;
}());
;
// Instanciate
var dell = new Computer();
dell.setInput(new DataInputStream());
console.log(dell.inputStream.tempMemory);
dell.inputStream.input({ name: "Liz", age: 29 });
console.log(dell.inputStream.tempMemory);
console.log(dell.storage.memory);
dell.storage.store(dell.inputStream.tempMemory[0]);
console.log(dell.storage.memory);
dell.outputStream.output(dell.processor.process(dell.storage.memory)[0].name);
