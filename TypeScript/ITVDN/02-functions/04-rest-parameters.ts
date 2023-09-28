
//  Declaring Rest Parameters:
function sum2(...numbers:number[]): number {
    return numbers.reduce((acc,num)=>acc + num, 0);
}

const result1 = sum2(1, 2, 3, 4, 5); // Result: 15
const result2 = sum2(10, 20, 30); // Result: 60
console.log(result1);
console.log(result2);

//Rest Parameters with Other Parameters (Good Practice):
function printInfo(name:string, age:number, ...hobbies:string[]){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}
printInfo("Alice", 30, "Reading", "Hiking", "Painting");

// Real-World Scenario (Good Practice):
function logMessage(message:string, ...tags:string[]){
    const timestamp = new Date().toISOString();
    let logEntry = `${timestamp}: ${message}`;
    if(tags.length > 0) {
        logEntry += `[Tags: ${tags.join(", ")}]`;
    }

    console.log(logEntry);
}

logMessage("User logged in");
logMessage("Error occurred", "error", "server");