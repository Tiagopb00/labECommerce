import { BaseDatabase } from "./BaseDatabase";
import { Product } from '../Classes/Product'

export class ProductDataBase extends BaseDatabase {

    public addProduct = async (product: Product) => {
        await BaseDatabase.connection("labECommerce_product")
            .insert(product)
    }

    public getAllProducts = async (): Promise<Product[]> => {
        const result = await BaseDatabase.connection("labECommerce_product")
            .select("*")
        return result
    }

    
    public getUserById = async (id:number): Promise<Product[]> =>{
        const result = await BaseDatabase.connection("labECommerce_product")
        .select("*")
        .where ("id", "=", `${id}`)
        return result
    }
}