"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const getAllUsers_1 = require("./endpoints/getAllUsers");
const createUser_1 = require("./endpoints/createUser");
app_1.app.get("/users", getAllUsers_1.getAllUsers);
app_1.app.post("/user", createUser_1.createUser);
