import { Request, Response } from "express";
import { User } from "../Classes/User";
import UserDataBase from "../data/UserDataBase";
import { BadRequest } from "../error/CustomError";



export const createUser = async (req: Request, res: Response) => {

    try {
        const { name, email, age } = req.body

        if (!name || !email || !age) {
            throw new BadRequest()
        }

        const id: string = String(Math.floor((Math.random() * 100) + 1))

        const user: User = new User(id, name, email, age)


        await new UserDataBase().addUser(user)

        res.status(200).send({ message: "usuário criado com sucesso" })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}