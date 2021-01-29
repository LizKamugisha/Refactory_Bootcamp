// Example of Single Responsibility Principle (SRP)

// Creating seperate classes for each computer task
class Input{
    // Properties
    tempMemory: any =[]
    // Methods
    input(data:any){
        console.log("computer is inputing data...")
        this.tempMemory.push(data);
    };
}

class DataInputStream extends Input {
}

class ComputerStorage {
    // Properties
    memory = [];
    // Methods
    store(data:any){
        console.log("computer is storing data...")
        this.memory.push(data);
    };
}

class CPU {
    // Methods
    process(data:any){
        console.log("computer is processing data...");
        let information = data
        return information;
    };
}

class Output{
    // Methods
    output(data:any){
        console.log("computer is outputting data...")
        console.log(data)
    };
}

class Computer{
    // Properties
    public inputStream : Input;
    public storage : ComputerStorage = new ComputerStorage();
    public processor : CPU = new CPU();
    public outputStream : Output = new Output();
    // Methods
    setInput(inputStreamArg:Input){
        this.inputStream = inputStreamArg;
    }
};

// Instanciate Computer Processes
let dell: Computer = new Computer();
dell.setInput(new DataInputStream())

console.log(dell.inputStream.tempMemory);
dell.inputStream.input({name:"Liz", age:29})
console.log(dell.inputStream.tempMemory);

console.log(dell.storage.memory);
dell.storage.store(dell.inputStream.tempMemory[0])
console.log(dell.storage.memory);

dell.outputStream.output(dell.processor.process(dell.storage.memory)[0].name)