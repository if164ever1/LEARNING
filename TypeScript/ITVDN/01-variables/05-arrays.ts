// Declaring Arrays:
const numbers: number[] = [1,2,3,4,5];
const fruits: Array<string> = ['apple', 'banan', 'cherry'];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Accessing Elements:
const colors: string[] = ['red', 'green', 'blue'];
console.log(colors[0]);
console.log(colors[1]);

// Modifying Arrays:
const animals: string[] = ['lion', 'toger', 'bear'];
console.log(animals);

// adding elements
animals.push('elephant');// Adds "elephant" to the end
console.log(animals);

animals.unshift('giraffe');// Adds "giraffe" to the beginning
console.log(animals);

// removing elements
animals.pop(); // Removes the last element ("elephant")
console.log(animals);

animals.shift(); // Removes the first element ("giraffe")
console.log(animals);

// ITERATING THROUGH ARRAYS
const numbers1: number[] = [1,2,3,4,5];

// using loop
for(let i = 0; i < numbers1.length; i++){
    console.log(numbers1[i]);
}

// using foreach
numbers1.forEach((num) => {
    console.log(num);
});

// using for ... of loop
for (const num of numbers1){
    console.log(num);
}

// ARRAY TYPE ANNOTATION
const ages: number[] = [25,30,35];
const names: string[] = ['Alice', 'Bob', 'Swen'];
const coordinates: [number, number][] = [[1,2], [3,4], [5,6]];

// ARRAY METHODS
const numbers2: number[] = [1,2,3,4,5];
console.log(numbers2);

const doubled = numbers2.map((number) => number*2);
console.log(doubled);

const evenNumbers = numbers2.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const sum = numbers2.reduce((acc, num) => acc + num, 0);
console.log(sum);