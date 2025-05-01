import { Order, Product } from "./Order";
import { PricingCalc } from "./PricingCalc";
import { GenerateInvoice } from "./GenerateInvoice";

// Create products
const product1 = new Product(1, 'Product 1', 100);
const product2 = new Product(2, 'Product 2', 200);
const product3 = new Product(3, 'Product 3', 500);

// Create order and add products
const order = new Order();
order.addProducts(product1);
order.addProducts(product2);
order.addProducts(product3);

// Calculate total
const pricingCalc = new PricingCalc();
const totalPricing: number = pricingCalc.calculatePricing(order.getProduct());

// Generate invoice
const generateInvoice = new GenerateInvoice();
generateInvoice.generateInvoice(order.getProduct(), totalPricing);

// Process payment
order.processPayment();

export { };