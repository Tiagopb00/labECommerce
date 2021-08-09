import { app } from "./app";
import  {getAllUsers} from "./endpoints/getAllUsers";
import {createUser}  from "./endpoints/createUser";
import  {getAllProducts} from "./endpoints/getAllProducts";
import createProduct from "./endpoints/createProduct";


app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/user/create", createUser)
app.post("/product/create", createProduct)