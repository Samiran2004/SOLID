"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
var Order = /** @class */ (function () {
    function Order() {
        this.products = [];
    }
    Order.prototype.addProducts = function (product) {
        this.products.push(product);
    };
    Order.prototype.getProduct = function () {
        return this.products;
    };
    Order.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (product) { return product.id !== productId; });
    };
    Order.prototype.processPayment = function () {
        console.log('Process payment...');
        console.log('Payment process successfully!');
        console.log('Added to accounting system!');
        console.log('Email sent to customer!');
    };
    return Order;
}());
exports.Order = Order;
