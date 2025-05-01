"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingCalc = void 0;
var PricingCalc = /** @class */ (function () {
    function PricingCalc() {
    }
    PricingCalc.prototype.calculatePricing = function (products) {
        return products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    return PricingCalc;
}());
exports.PricingCalc = PricingCalc;
