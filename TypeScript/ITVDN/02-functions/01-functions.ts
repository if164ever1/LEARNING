function add1(x, y){
    return x + y;
}

console.log(add1(2,3));

function add2(x: number, y:number):number{
    return x + y;
}

let sum1 = add2(4,5);
console.log(sum1);