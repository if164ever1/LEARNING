// Declaring Classes:
class Human{
    // Property
    name:string;
    age:number;

    // Constructor
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello my name ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating Instances
const alex = new Human("Alex", 30);
const boby = new Human("Boby", 25);

// Accessing Properties and Methods:
console.log(alex.name);
alex.greet();
