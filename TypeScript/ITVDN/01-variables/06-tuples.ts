// DECLARING TUPLES
let person: [string, number];
person = ['Alice', 30];
console.log(person);

// ACCESSING TUPLE ELEMENTS
console.log(person[0]);
console.log(person[1]);

// TUPLE TYPE INFERENCE
let coordinates1 = [2,3];  // TypeScript infers it as [number, number]

// Tuple vs Array
// 1. Tuples have a fixed length, while arrays can grow or shrink dynamically.
// 2. The types of elements in a tuple are fixed and specific to each position, whereas arrays can hold elements of the same type.
// 3. Tuples are often used when you want to represent structured data, while arrays are used for collections of similar items.


// UPDATING TUPLES
person[0] = 'Bob';
person[1] = 45;
console.log(person);

// TUPLE DESTRUCTURING
const [name1, age1] = person;
console.log(name1);
console.log(age1);

// TUPLE FUNCTIONS
function add4(a:number, b:number): [number, string]{
    return [a + b, `The sum of ${a} and ${b} is ${a + b}`];
}

const result = add4(4,5);
console.log(result);

// READONLY TUPLES
const readOnlyTuple: readonly[string, number] = ['Alice', 30];
// The following line will result in a TypeScript error:
// readonlyTuple[0] = "Bob";

// SPREAD OPERATOR WITH TUPLES
const tuple1: [number, number] = [1, 2];
const tuple2: [string, string] = ['a', 'b'];
const combineTuple = [...tuple1, ...tuple2];

console.log(combineTuple); // Output: [1, 2, "a", "b"]