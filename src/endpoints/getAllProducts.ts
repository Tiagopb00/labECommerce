import { Request, Response } from "express"
import {ProductDataBase} from "../data/ProductDatabase";
import { Product } from "../Classes/Product"

export const getAllProducts = async (req: Request, res: Response) => {

    try {
        const ud = new ProductDataBase()
        const ProductList = await ud.getAllProducts()
        const result = ProductList.map((input: any) => new Product(input.id, input.name, input.description, input.price))

        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}