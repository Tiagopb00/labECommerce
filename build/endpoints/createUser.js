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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("../Classes/User");
const UserDataBase_1 = __importDefault(require("../data/UserDataBase"));
const CustomError_1 = require("../error/CustomError");
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            throw new CustomError_1.BadRequest();
        }
        const id = String(Math.floor((Math.random() * 100) + 1));
        const user = new User_1.User(id, name, email, age);
        new UserDataBase_1.default().addUser(user);
        res.status(200).send({ message: "usuário criado com sucesso" });
    }
    catch (error) {
        res.status(404).send(error.message || error.sqlMessage);
    }
});
