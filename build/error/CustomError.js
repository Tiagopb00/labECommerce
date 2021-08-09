"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmail = exports.BadRequest = exports.NotFoundError = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
class NotFoundError extends CustomError {
    constructor() {
        super("Não encontrado", 404);
    }
}
exports.NotFoundError = NotFoundError;
class BadRequest extends CustomError {
    constructor() {
        super("Preencha corretamente os campos ", 400);
    }
}
exports.BadRequest = BadRequest;
class InvalidEmail extends CustomError {
    constructor() {
        super("Email inválido", 400);
    }
}
exports.InvalidEmail = InvalidEmail;
