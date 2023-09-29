//  Extending Interfaces:
// Interfaces can extend other interfaces to inherit their properties and methods. 
// This allows you to create a hierarchy of interfaces, promoting code reusability:
interface Person1{
    name: string;
    age:number;
}

interface Employee extends Person1{
    employeeId: number;
}

const employee: Employee = {
    name: "Alice",
    age:20,
    employeeId: 12
}

// Optional Properties and Readonly Properties:
// Interfaces can have optional and readonly properties:
interface Config{
    apiUrl: string;
    loggingEnabled?:boolean; //Optional property
    readonly apiKey: string; //Readonly property
}

const config: Config = {
    apiUrl: "https://api.example.com",
    apiKey: "my-api-key"
};

// Function Signatures in Interfaces
// Interfaces can describe the shape of functions:
interface Calculator{
    (x:number, y:number):number;
}

const add5:Calculator = (x,y) => x + y;
console.log(add5(3, 5)); // Output: 8

// Index Signatures:
// Interfaces can describe objects with dynamic keys, known as index signatures:
interface Dictionary{
    [key:string]:string;
}

const colors1:Dictionary = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
}

//  Implementing Multiple Interfaces:
// A class or object can implement multiple interfaces:
interface Shape2{
    calculateArea1():number;
}

interface Color1{
    color:string;
}

class Circle1 implements Shape2, Color1{
    color:string;
    private radius:number
    constructor(radius:number, color:string){
        this.color = color;
        this.radius = radius;
    }

    calculateArea1(): number {
        return Math.PI * this.radius ** 2;
    }
}

const redCircle: Circle1 = new Circle1(5, "red");
console.log(redCircle.calculateArea1()); // Output: 78.54
console.log(redCircle.color); // Output: red

//  Function Interfaces with Properties:
// Interfaces can describe functions with additional properties:
interface ResultFunction{
    (x:number, y:number): number;
    description:string;
}

const val: ResultFunction = (x,y) => x + y;
val.description = "Adds two numbers";

console.log(val(3, 5)); // Output: 8
console.log(val.description); // Output: Adds two numbers

// Function Interfaces with Methods:
// Interfaces can describe functions with methods:
interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger{
    log(message: string): void{
        console.log(message);
    }
}

const logger: Logger = new ConsoleLogger();
logger.log("Hello, TypeScript!"); // Output: Hello, TypeScript!