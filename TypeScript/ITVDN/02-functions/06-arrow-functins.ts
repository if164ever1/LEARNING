//  Basic Syntax:
const add3 = (a: number, b:number): number => a + b;

const multiply = (x:number, y:number):number => {
    return x * y;
} 

const square = (x:number):number => x * x;

// this Binding:

class MyClass{
    value: number = 42;

    logValue = () => {
        console.log(this.value);
    }
}

const obj = new MyClass();
const logFn = obj.logValue;

obj.logValue();
logFn();

// Use Cases (Good Practice):
// const button1 = document.getElementById("myButton");
// button.addEventListener("click", () => {
//   console.log("Button clicked");
// });

const numbers3 = [1, 2, 3, 4, 5];
const squared = numbers3.map((x) => x * x);
console.log(squared);

setTimeout(() => {
    console.log("Timeout completed");
  }, 1000);
  
