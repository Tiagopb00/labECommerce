"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const Product_1 = require("./Product");
class Purchase extends Product_1.Product {
    constructor(id, name, description, price) {
        super(name, description, price);
        this.quantity = 1;
    }
    getTotal(price, quantity) {
        const total = price * quantity;
        return total;
    }
}
exports.Purchase = Purchase;
