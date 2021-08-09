import { Request, Response } from "express"
import UserDataBase from "../data/UserDataBase";
import { User } from "../Classes/User"

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const ud = new UserDataBase()
        const usersList = await ud.getAllUsers()
        const result = usersList.map((input: any) => new User(input.id, input.name, input.email, input.age))

        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}