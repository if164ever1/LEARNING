class User{
    name:string;  // This property is implicitly 'public'

    constructor(name:string){
        this.name = name;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
const user = new User("user");
console.log(user.name); // Accessing 'name' property externally
user.greet(); // Accessing 'greet' method externally

// private Access Modifier:
class BankAccount{
    private balance:number;

    constructor(initialBalance:number){
        this.balance = initialBalance;
    }

    deposit(amount:number){
        this.balance += amount;
    }

    withdraw(amount:number){
        if(amount <= this.balance){
            this.balance -= amount;
        }else{
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // Accessing 'getBalance' method externally
account.deposit(500); // Accessing 'deposit' method externally
account.withdraw(300); // Accessing 'withdraw' method externally

// Real-World Scenario (Good Practice):
class UserProfile{
    private ssn: string;
    public name: string;

    constructor(ssn:string, name:string){
        this.name = name;
        this.ssn = ssn;
    }

    displayUserInfo(){
        console.log(`Name: ${this.name}`);
    }
}

const user1 = new UserProfile("123-45-6789", "Alice");
console.log(user1.name); // Accessing 'name' property externally
user1.displayUserInfo(); // Accessing 'displayUserInfo' method externally

// External code cannot access 'ssn' property directly:
// console.log(user.ssn); // Error: Property 'ssn' is private