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
exports.toRecipe = exports.getAllRecipes = void 0;
const RecipeDatabase_1 = require("../data/RecipeDatabase");
function getAllRecipes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const title = (req.query.title || "%");
            const sort = req.query.sort === "title" ? "title" : "created_at";
            const order = req.query.order === "DESC" ? "DESC" : "ASC";
            const page = Number(req.query.page) || 1;
            const size = Number(req.query.size) || 10;
            //pag1 -> offset 10 * 0
            //pag2 -> offset 10 * 1
            //pag3 -> offset 10 * 2
            //pag4 -> offset 10 * 3
            const offset = size * (page - 1);
            //tornar esse trecho do código (entre as linhas 27 e 33)
            //uma parte da classe de receitas
            // const result = await connection("aula49_recipes")
            //    .where("title", "LIKE", `%${title}%`)
            //    .orderBy(sort, order)
            //    .limit(size)
            //    .offset(offset)
            const rd = new RecipeDatabase_1.RecipeDatabase();
            //const recipes = await new RecipeDatabase().getRecipes(..parametros)
            const recipes = yield rd.getRecipes(title, sort, order, size, offset);
            res.status(200).send(recipes);
        }
        catch (error) {
            res.status(500).send("Internal server error");
        }
    });
}
exports.getAllRecipes = getAllRecipes;
exports.toRecipe = (input) => {
    return {
        id: input.id,
        title: input.title,
        description: input.description,
        userId: input.user_id,
        createdAt: input.created_at
    };
};
