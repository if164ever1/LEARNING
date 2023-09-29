const numbersArr: number[] = [1,2,3,4,5];

numbersArr.forEach((num) => {
    console.log(num);
})

/**
 * Using forEach with Index and Array:
 * The callback function in forEach can take additional 
 * parameters representing the current index and the array being traversed:
 */

numbersArr.forEach((num, index, array) => {
    console.log(`Element at index ${index}: ${num}`);
});

/**
 * Breaking out of forEach:
 * forEach doesn't provide a way to break out of the loop prematurely.
 * If you need to break out of a loop, consider using a regular for loop instead.
 */

/**
 *  Using this Context:
 * The callback function's this context behaves differently in arrow functions compared to regular functions.
 * In arrow functions, this retains the value of the enclosing scope.
 * In regular functions, this may vary based on how the function is called.
 */

/**Modifying the Array:
 * You can modify the array elements using forEach:
 */
numbersArr.forEach((num, index, array) => {
    array[index] = num * 2;
})
console.log(numbersArr);

/**Using forEach with Other Data Structures:
 * While forEach is primarily used with arrays,
 * you can also use it with other iterable data structures like Set and Map:
 */
const mySet = new Set([1,2,3]);
mySet.forEach((value) => {
    console.log(value);
})

const myMap = new Map([
    ['a',1],
    ['b',2],
    ['c',3]
]);
myMap.forEach((value, key)=>{
    console.log(`Key: ${key}, Value: ${value}`);
})

interface User1{
    firstName: string;
    lastName: string;
}

const user2: User1[] = [
    {firstName: "Alice", lastName: "Johnson"},
    {firstName: "Bob", lastName: "Smith"},
    {firstName: "Charlie", lastName: "Brown"}
];

user2.forEach((user) => {
    console.log(`Full name: ${user.firstName} ${user.lastName}`);
})