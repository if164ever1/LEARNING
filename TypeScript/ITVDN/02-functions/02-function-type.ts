let myAdd: (x:number, y:number) => number;

let myProc: () => void;

function myAddDeclaration(x:number, y:number) : number {
    return x + y;
}

function myFunction(){
    console.log("Void function");
}

myProc = myFunction;
console.log(myProc());

myAdd = myAddDeclaration;
console.log(myAdd(6,7));