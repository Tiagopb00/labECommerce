"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, description, price) {
        console.log("Chamando o construtor da classe Product");
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
}
exports.Product = Product;
