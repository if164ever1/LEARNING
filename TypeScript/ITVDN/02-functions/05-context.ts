// Examples of this Context:
class Person{
    name: string;

    constructor(name:string){
        this.name = name;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const alice = new Person("Alice");
const bob = new Person("Bob");
alice.greet(); // Output: "Hello, my name is Alice"
bob.greet();   // Output: "Hello, my name is Bob"

const button = document.getElementById("context");

button.addEventListener("click", function () {
  console.log(this); // 'this' refers to 'button'
});

//  Real-World Scenario (Good Practice):
class Modal{
    private element: HTMLElement;

    constructor(elementId:string){
        this.element = document.getElementById(elementId);
    }

    show(){
        this.element.style.display = "block";
    }
    hide(){
        this.element.style.display = "none";
    }

    attachEventListeners(){
        const closeButton = this.element.querySelector(".clode-button");

        closeButton?.addEventListener("click", ()=> {
            this.hide(); // 'this' correctly refers to the Modal instance
        });
    }
}

const myModal = new Modal("myModal");
myModal.attachEventListeners();

// Later in the code...
myModal.show(); // Show the modal