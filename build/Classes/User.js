"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, name, age) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.age = age;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
}
exports.User = User;
