import {User, Cheese, Board} from "../models/index.js"
import { db } from "./db.js"


const seed = async () => {
    await db.sync({ force: true })
    await User.create({
        name: 'Tyrese',
        email: 'tyrese@example.com'
    })
}

seed()