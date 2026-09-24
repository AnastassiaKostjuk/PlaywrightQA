class Product {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    isInStock(): boolean {
        return this.quantity > 0;
    }
}

const product1 = new Product("Coldrex", 12.45, 45);
const product2 = new Product("Strepsils", 8.15, 22);

console.log(product1.isInStock());
console.log(product2.isInStock());
