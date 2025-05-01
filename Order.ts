export class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Order {
    products: Product[] = [];

    addProducts(product: Product): void {
        this.products.push(product);
    }

    getProduct(): Product[] {
        return this.products;
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.id !== productId);
    }

    processPayment() {
        console.log('Process payment...');

        console.log('Payment process successfully!');

        console.log('Added to accounting system!');

        console.log('Email sent to customer!');
    }
}

export { };