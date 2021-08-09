"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
class Ticket extends Product_1.Product {
    constructor(name, description, price) {
        super(name, description, price);
        this.leaving = "";
        this.going = "";
    }
    setLeaving() {
        return this.leaving;
    }
    setGoing() {
        return this.going;
    }
}
