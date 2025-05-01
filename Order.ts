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

    calculatePricing(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    generateInvoice(): void {
        let totalAmount = 0;

        console.log(`
            Invoice Date: ${new Date().toDateString()}
            ----------------------
            Product Name\tPrice
            ----------------------`);

        this.products.forEach((product) => {
            console.log(`${product.name}\t${product.price}`);
            totalAmount += product.price;
        });

        console.log(`
            ----------------------
            Total Amount: ${totalAmount}
        `);
    }

    processPayment() {
        console.log('Process payment...');

        console.log('Payment process successfully!');

        console.log('Added to accounting system!');

        console.log('Email sent to customer!');
    }
}