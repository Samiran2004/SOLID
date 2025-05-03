import { Product } from "./Order";

export class GenerateInvoice {
    generateInvoice(products: Product[], totalAmount: number): void {

        console.log(`
            Invoice Date: ${new Date().toDateString()}
            ----------------------
            Product Name\tPrice
            ----------------------`);

        products.forEach((product) => {
            console.log(`${product.name}\t${product.price}`);
        });

        console.log(`
            ----------------------
            Total Amount: ${totalAmount}
        `);
    }
}

export {};