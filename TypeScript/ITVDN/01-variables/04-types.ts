// Boolean
let isDone: boolean = true;
console.log(isDone);

// NUMBER
const _int: number = 10;
const _float: number = 10.1;
const _hex: number = 0x000a;
const _binary: number = 0b1010;
const _octal: number = 0o12;

console.log(`Type is ${typeof(_int)} = ${_int}`);
console.log(`Type is ${typeof(_float)} = ${_float}`);
console.log(`Type is ${typeof(_hex)} = ${_hex}`);
console.log(`Type is ${typeof(_binary)} = ${_binary}`);
console.log(`Type is ${typeof(_octal)} = ${_octal}`);

// STRING
const firstName: string = "Ihor";
const age: number = 30;
const messageTemplate: string = `Hello, my name is ${firstName}. I'm ${age} years old`;

console.log(messageTemplate);

// SYMBOL
const mySymbol1: symbol = Symbol("Typescript");
const mySymbol2: symbol = Symbol("Typescript");

console.log(mySymbol1);
console.log(mySymbol2);
console.log(mySymbol1 == mySymbol2);
