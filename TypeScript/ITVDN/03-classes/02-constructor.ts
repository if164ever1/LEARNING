// Default Constructor:
class Car{
    make:string;
    model:string;
    // No explicit constructor
}
const myCar = new Car();
console.log(myCar.make); // Output: undefined

// Real-World Scenario:
class CartItem {
    productName:string;
    quality:number;
    price:number;

    constructor(productName:string,
                quality:number,
                price:number){
        this.productName = productName;
        this.quality = quality;
        this.price = price;
    }

    getTotalPrice():number{
        return this.quality * this.price;
    }
}
const item1 = new CartItem("Laptop", 2, 800);
console.log(item1.getTotalPrice()); // Output: 1600