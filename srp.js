"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order_1 = require("./Order");
var PricingCalc_1 = require("./PricingCalc");
var GenerateInvoice_1 = require("./GenerateInvoice");
var PaymentProcessor_1 = require("./PaymentProcessor");
// Create products
var product1 = new Order_1.Product(1, 'Product 1', 100);
var product2 = new Order_1.Product(2, 'Product 2', 200);
var product3 = new Order_1.Product(3, 'Product 3', 500);
// Create order and add products
var order = new Order_1.Order();
order.addProducts(product1);
order.addProducts(product2);
order.addProducts(product3);
// Calculate total
var pricingCalc = new PricingCalc_1.PricingCalc();
var totalPricing = pricingCalc.calculatePricing(order.getProduct());
// Generate invoice
var generateInvoice = new GenerateInvoice_1.GenerateInvoice();
generateInvoice.generateInvoice(order.getProduct(), totalPricing);
// Process payment
var payment = new PaymentProcessor_1.PaymentProcessor();
payment.processPayment();
