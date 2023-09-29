// Declaring Abstract Classes:
abstract class Shape{
    abstract calculateArea():number // Abstract method without implementation
    printArea(){
        console.log(`Area: ${this.calculateArea()}`);
    }
}

// Creating Subclasses:
class Circle extends Shape{
    radius: number;

    constructor(radius:number){
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape{
    sideLength: number;

    constructor(sideLength:number){
        super();
        this.sideLength = sideLength;
    }

    calculateArea(): number {
        return this.sideLength ** 2;
    }
}

const circle:Shape = new Circle(5);
circle.printArea();

const square1 = new Square(4);
square1.printArea();