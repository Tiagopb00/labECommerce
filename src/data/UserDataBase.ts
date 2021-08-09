import { BaseDatabase } from "./BaseDatabase";
import { User } from '../Classes/User'

export default class UserDatabase extends BaseDatabase {

    constructor() {
        super()
    }

    public addUser = async (User: User
    ) => {
        await BaseDatabase.connection("Labecommerce_User")
            .insert(User)
    }


    public getUserById = async (id: number): Promise<User[]> => {
        const result = await BaseDatabase.connection("Labecommerce_User")
            .select("*")
            .where("id", "=", `${id}`)
        return result
    }


    public getAllUsers = async (order?: string): Promise<User[]> => {
        const result = await BaseDatabase.connection("Labecommerce_User")
            .select("*")
            .orderBy("age", '${order}')

        return result;
    }

}


