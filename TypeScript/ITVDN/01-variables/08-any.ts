// Declaring variables
let value: any = "Hello, I can be any type";
value = 42;
value = ['any', 'array'];

// Usage of ANY - Bad Practice
function add(a: any, b: any){
    return a + b; //no type checking on the + operator
}

const res = add(5, "3"); // No type error, but result may not be as expected
console.log(res);


// Reald-World scenario (Bad practice)
let books: any[] = [
    {title: "Book 1", author: "Author 1"},
    {title: "Book 2", author: "Author 2"}
];

// Accessing properties without type checking
console.log(books[0].title); // No type checking on 'title'

// Using `any` with Caution (Good Practice)
interface Book{
    title: string,
    author: string
}

const books1: Book[] = [
    {title: "Book 1", author: "Author 1"},
    {title: "Book 2", author: "Author 2"}
]

console.log(books1[0].author); // Type safety and code predictability