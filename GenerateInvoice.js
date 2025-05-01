"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateInvoice = void 0;
var GenerateInvoice = /** @class */ (function () {
    function GenerateInvoice() {
    }
    GenerateInvoice.prototype.generateInvoice = function (products, totalAmount) {
        console.log("\n            Invoice Date: ".concat(new Date().toDateString(), "\n            ----------------------\n            Product Name\tPrice\n            ----------------------"));
        products.forEach(function (product) {
            console.log("".concat(product.name, "\t").concat(product.price));
        });
        console.log("\n            ----------------------\n            Total Amount: ".concat(totalAmount, "\n        "));
    };
    return GenerateInvoice;
}());
exports.GenerateInvoice = GenerateInvoice;
