import { Product } from "./Order";

export class PricingCalc {
    calculatePricing(products: Product[]): number {
        return products.reduce((total, product) => total + product.price, 0);
    }
}

export {};