"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("../data/BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super();
        this.getUser = (id, email, name, age) => __awaiter(this, void 0, void 0, function* () {
            //com atributos estaticos, morre o this. Usamos
            //o nome da classe toda
            const result = yield BaseDatabase_1.BaseDatabase.connection("labECommerce_user")
                .insert(id, email, name);
            const user = result;
            return result;
        });
    }
}
exports.default = UserDatabase;