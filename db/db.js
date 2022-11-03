import { Sequelize } from "sequelize";
import * as path from 'path' 
import * as url from 'url'

// https://stackoverflow.com/a/66651120
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const db = new Sequelize({
    storage: path.join(__dirname, 'cheese.sqlite'),
    dialect: "sqlite",
    logging: false
})

