// Declaring optional parameters
function great(name:string, age?:number){
    console.log(`Hello, ${name}`);
    if(age !== undefined){
        console.log(`You are ${age} years old`);
    }
}

console.log(great("Jack"));
console.log(great("Jack", 20));

// Default Values (Good Practice)
function greatDefault(name:string, age:number = 25){
    console.log(`Hello, ${name}`);
    console.log(`You are ${age} years old`);
}
greatDefault("Poul");

function logUserInteraction(
                action:string,
                additionalData? : string,
                timestamp?: Date){
    const logEntry = {
        action,
        additionalData,
        timestamp: timestamp || new Date()
    };
    console.log(logEntry);
}

logUserInteraction("Clicked button");
logUserInteraction("Logged in", "User ID: 123");
logUserInteraction("Performed action", "Custom data", new Date());