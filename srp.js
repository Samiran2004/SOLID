"use strict";
// Single responsibility principal...
Object.defineProperty(exports, "__esModule", { value: true });
var Order_1 = require("./Order");
var product1 = new Order_1.Product(1, 'Product 1', 100);
var product2 = new Order_1.Product(2, 'Product 2', 200);
var product3 = new Order_1.Product(3, 'Product 3', 500);
var order = new Order_1.Order();
order.addProducts(product1);
order.addProducts(product2);
order.generateInvoice();
order.processPayment();
